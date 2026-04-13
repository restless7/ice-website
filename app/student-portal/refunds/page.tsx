"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw, ArrowLeft, Calendar, Clock, CheckCircle,
  AlertCircle, Loader2, Plus, X, ChevronDown, FileText
} from "lucide-react";
import {
  getStudentRefunds, getStudentProgress, submitRefundRequest,
  isAuthenticated, type RefundRequest, type StudentPayment
} from "@/app/lib/portal-api";

// ─── Reason Labels ───────────────────────────────────────────────────

const REASON_LABELS: Record<string, string> = {
  PROGRAM_WITHDRAWAL: "Retiro del programa",
  VISA_DENIAL: "Negación de visa",
  MEDICAL: "Motivos médicos",
  FINANCIAL_HARDSHIP: "Dificultad financiera",
  DISSATISFACTION: "Insatisfacción",
  DUPLICATE_PAYMENT: "Pago duplicado",
  OVERCHARGE: "Cobro excesivo",
  OTHER: "Otro motivo",
};

const STATUS_CONFIG: Record<string, { bg: string; text: string; label: string; icon: any }> = {
  PENDING:      { bg: "bg-brand-gold/10",    text: "text-brand-gold",    label: "Pendiente",    icon: Clock },
  UNDER_REVIEW: { bg: "bg-brand-orange/10",  text: "text-brand-orange",  label: "En Revisión",  icon: FileText },
  APPROVED:     { bg: "bg-blue-500/10",      text: "text-blue-400",      label: "Aprobada",     icon: CheckCircle },
  PROCESSING:   { bg: "bg-blue-500/10",      text: "text-blue-400",      label: "Procesando",   icon: Loader2 },
  PROCESSED:    { bg: "bg-emerald-500/10",   text: "text-emerald-400",   label: "Procesada",    icon: CheckCircle },
  REJECTED:     { bg: "bg-red-500/10",       text: "text-red-400",       label: "Rechazada",    icon: X },
  CANCELLED:    { bg: "bg-gray-500/20",      text: "text-gray-400",      label: "Cancelada",    icon: X },
};

// ─── Main Page ───────────────────────────────────────────────────────

export default function RefundsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [refunds, setRefunds] = useState<RefundRequest[]>([]);
  const [summary, setSummary] = useState<any>(null);
  const [paidPayments, setPaidPayments] = useState<StudentPayment[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Form state
  const [formAmount, setFormAmount] = useState("");
  const [formReason, setFormReason] = useState("");
  const [formDetail, setFormDetail] = useState("");
  const [formNotes, setFormNotes] = useState("");
  const [selectedPayments, setSelectedPayments] = useState<string[]>([]);

  useEffect(() => {
    if (!isAuthenticated()) { router.push("/student-portal"); return; }
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    try {
      const [refundsRes, progressRes] = await Promise.all([
        getStudentRefunds(),
        getStudentProgress(),
      ]);
      if (refundsRes.success) {
        setRefunds(refundsRes.refunds);
        setSummary(refundsRes.summary);
      }
      if (progressRes.success) {
        setPaidPayments(progressRes.payments.filter(p => p.status === "PAID"));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess("");
    setSubmitting(true);
    try {
      const res = await submitRefundRequest({
        requestedAmount: parseFloat(formAmount),
        reason: formReason,
        reasonDetail: formDetail || undefined,
        studentNotes: formNotes || undefined,
        paymentIds: selectedPayments,
      });
      if (res.success && res.refund) {
        setSubmitSuccess(`Solicitud ${res.refund.refundNumber} creada exitosamente.`);
        setShowForm(false);
        setFormAmount(""); setFormReason(""); setFormDetail(""); setFormNotes(""); setSelectedPayments([]);
        loadData();
      } else {
        setSubmitError(res.error || "Error al crear la solicitud.");
      }
    } catch (err: any) {
      setSubmitError(err.message || "Error inesperado.");
    } finally {
      setSubmitting(false);
    }
  }

  function togglePayment(id: string) {
    setSelectedPayments(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-purple-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/student-portal/dashboard" className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-black uppercase tracking-wider flex items-center gap-3">
                <RotateCcw className="w-6 h-6 text-purple-400" />
                Devoluciones
              </h1>
              <p className="text-white/30 text-xs uppercase tracking-widest mt-0.5">Gestión de solicitudes de reembolso</p>
            </div>
          </div>
          <button onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-5 py-3 bg-purple-500/10 hover:bg-purple-500 text-purple-400 hover:text-white font-black text-xs uppercase tracking-widest rounded-2xl border border-purple-500/20 hover:border-purple-500 transition-all duration-300">
            <Plus className="w-4 h-4" />
            Nueva Solicitud
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

        {/* Success/Error Banners */}
        {submitSuccess && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold flex items-center gap-3">
            <CheckCircle className="w-5 h-5 shrink-0" /> {submitSuccess}
          </motion.div>
        )}
        {submitError && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold flex items-center gap-3">
            <AlertCircle className="w-5 h-5 shrink-0" /> {submitError}
          </motion.div>
        )}

        {/* Summary Cards */}
        {summary && (
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {[
              { label: "Total", value: summary.total, color: "text-white" },
              { label: "Pendientes", value: summary.pending, color: "text-brand-gold" },
              { label: "Aprobadas", value: summary.approved, color: "text-blue-400" },
              { label: "Procesadas", value: summary.processed, color: "text-emerald-400" },
              { label: "Rechazadas", value: summary.rejected, color: "text-red-400" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
                <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* New Request Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden">
              <form onSubmit={handleSubmit} className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-purple-500/20 p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-black uppercase tracking-wider text-purple-400">Nueva Solicitud de Devolución</h2>
                  <button type="button" onClick={() => setShowForm(false)} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Payment Selection */}
                <div>
                  <label className="block text-[10px] text-white/40 uppercase font-bold tracking-widest mb-3">
                    Seleccione los pagos a devolver *
                  </label>
                  {paidPayments.length === 0 ? (
                    <p className="text-white/20 text-sm p-4 bg-white/5 rounded-xl">No hay pagos disponibles para devolución.</p>
                  ) : (
                    <div className="space-y-2 max-h-[200px] overflow-y-auto custom-scrollbar">
                      {paidPayments.map((p) => (
                        <label key={p.id} className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                          selectedPayments.includes(p.id) ? "bg-purple-500/10 border-purple-500/30" : "bg-white/5 border-white/5 hover:border-white/10"
                        }`}>
                          <input type="checkbox" checked={selectedPayments.includes(p.id)} onChange={() => togglePayment(p.id)}
                            className="w-4 h-4 rounded accent-purple-500" />
                          <div className="flex-1">
                            <p className="text-sm font-bold">{p.concept || "Pago"}</p>
                            <p className="text-[10px] text-white/30">{p.method}</p>
                          </div>
                          <p className="font-black">${p.amount.toLocaleString()} <span className="text-[10px] text-white/30">{p.currency}</span></p>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] text-white/40 uppercase font-bold tracking-widest mb-2">Monto solicitado (USD) *</label>
                    <input type="number" step="0.01" required value={formAmount} onChange={e => setFormAmount(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-purple-500/50 focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] text-white/40 uppercase font-bold tracking-widest mb-2">Motivo *</label>
                    <select required value={formReason} onChange={e => setFormReason(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-purple-500/50 focus:outline-none transition-colors appearance-none">
                      <option value="" className="bg-gray-900">Seleccionar...</option>
                      {Object.entries(REASON_LABELS).map(([k, v]) => (
                        <option key={k} value={k} className="bg-gray-900">{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-white/40 uppercase font-bold tracking-widest mb-2">Detalle del motivo</label>
                  <textarea rows={3} value={formDetail} onChange={e => setFormDetail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-purple-500/50 focus:outline-none transition-colors resize-none" />
                </div>

                <div>
                  <label className="block text-[10px] text-white/40 uppercase font-bold tracking-widest mb-2">Notas adicionales</label>
                  <textarea rows={2} value={formNotes} onChange={e => setFormNotes(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-purple-500/50 focus:outline-none transition-colors resize-none" />
                </div>

                <button type="submit" disabled={submitting || selectedPayments.length === 0}
                  className="w-full py-4 bg-purple-500 hover:bg-purple-400 disabled:bg-gray-700 disabled:text-gray-400 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all duration-300 flex items-center justify-center gap-2">
                  {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <RotateCcw className="w-4 h-4" />}
                  {submitting ? "Enviando..." : "Enviar Solicitud"}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Refunds List */}
        <div className="space-y-4">
          {refunds.length === 0 ? (
            <div className="text-center py-20">
              <RotateCcw className="w-16 h-16 text-white/5 mx-auto mb-4" />
              <p className="text-white/20 text-lg font-bold">No tienes solicitudes de devolución</p>
              <p className="text-white/10 text-sm mt-2">Usa el botón "Nueva Solicitud" para crear una.</p>
            </div>
          ) : (
            refunds.map((r, idx) => {
              const sc = STATUS_CONFIG[r.status] || STATUS_CONFIG.PENDING;
              const isExpanded = expandedId === r.id;
              const Icon = sc.icon;
              return (
                <motion.div key={r.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
                  <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-purple-400/20 transition-all">
                    {/* Header */}
                    <button onClick={() => setExpandedId(isExpanded ? null : r.id)}
                      className="w-full p-6 flex items-center justify-between text-left">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${sc.bg}`}>
                          <Icon className={`w-5 h-5 ${sc.text}`} />
                        </div>
                        <div>
                          <p className="text-base font-black text-white">{r.refundNumber}</p>
                          <p className="text-[10px] text-white/30 uppercase font-bold tracking-tight mt-0.5">
                            {REASON_LABELS[r.reason] || r.reason} • {new Date(r.createdAt).toLocaleDateString("es-CO", { day: 'numeric', month: 'long', year: 'numeric' })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-xl font-black text-white">
                            ${r.requestedAmount.toLocaleString()}
                            <span className="text-[10px] font-medium text-white/30 uppercase"> {r.currency}</span>
                          </p>
                          {r.approvedAmount && r.approvedAmount !== r.requestedAmount && (
                            <p className="text-[10px] text-emerald-400 font-bold">Aprobado: ${r.approvedAmount.toLocaleString()}</p>
                          )}
                        </div>
                        <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${sc.bg} ${sc.text} border border-current/10`}>
                          {sc.label}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-white/20 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </div>
                    </button>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden">
                          <div className="px-6 pb-6 space-y-6 border-t border-white/5 pt-6">
                            {/* Notes */}
                            {r.studentNotes && (
                              <div className="p-4 rounded-xl bg-white/5">
                                <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">Tu nota</p>
                                <p className="text-sm text-white/70">{r.studentNotes}</p>
                              </div>
                            )}
                            {r.adminNotes && (
                              <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                                <p className="text-[10px] text-purple-400/60 uppercase font-bold tracking-widest mb-1">Nota del administrador</p>
                                <p className="text-sm text-purple-300/70">{r.adminNotes}</p>
                              </div>
                            )}
                            {r.rejectionReason && (
                              <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                                <p className="text-[10px] text-red-400/60 uppercase font-bold tracking-widest mb-1">Motivo de rechazo</p>
                                <p className="text-sm text-red-300/70">{r.rejectionReason}</p>
                              </div>
                            )}

                            {/* Timeline */}
                            {r.timeline.length > 0 && (
                              <div>
                                <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-4">Historial de estados</p>
                                <div className="relative space-y-4 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                                  {r.timeline.map((t) => {
                                    const tsc = STATUS_CONFIG[t.to] || STATUS_CONFIG.PENDING;
                                    return (
                                      <div key={t.id} className="relative pl-8">
                                        <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-gray-900 z-10 ${tsc.bg.replace('/10', '')}`}
                                          style={{ backgroundColor: tsc.text.includes('emerald') ? '#10b981' : tsc.text.includes('blue') ? '#60a5fa' : tsc.text.includes('brand-gold') ? '#FFB703' : tsc.text.includes('red') ? '#f87171' : '#9ca3af' }} />
                                        <div className="p-3 bg-white/5 rounded-xl">
                                          <div className="flex items-center justify-between">
                                            <span className={`text-[10px] font-bold uppercase tracking-wider ${tsc.text}`}>{tsc.label}</span>
                                            <span className="text-[10px] text-white/20">{new Date(t.date).toLocaleDateString("es-CO", { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
                                          </div>
                                          {t.comment && <p className="text-xs text-white/40 mt-1">{t.comment}</p>}
                                          <p className="text-[10px] text-white/20 mt-1">Por: {t.changedBy}</p>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </main>

      {/* Scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(168,85,247,0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(168,85,247,0.4); }
      `}</style>
    </div>
  );
}

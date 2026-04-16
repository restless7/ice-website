"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText, FileCheck, FileClock, FileX, Clock, CheckCircle,
  AlertCircle, ArrowLeft, Upload, Search, Filter,
  GraduationCap, User, LogOut, RefreshCw, Loader2, Download, Calendar
} from "lucide-react";
import {
  getStudentDocuments, getStoredUser, isAuthenticated, logout,
  type StudentDocument
} from "@/app/lib/portal-api";

// ─── Status Badge ────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    APPROVED: { bg: "bg-emerald-500/10", text: "text-emerald-400", label: "Aprobado" },
    PENDING: { bg: "bg-brand-gold/10", text: "text-brand-gold", label: "Pendiente" },
    REVIEW: { bg: "bg-brand-orange/10", text: "text-brand-orange", label: "En revisión" },
    REJECTED: { bg: "bg-red-500/10", text: "text-red-400", label: "Rechazado" },
  };
  const c = config[status] || { bg: "bg-gray-500/20", text: "text-gray-400", label: status };
  return <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${c.bg} ${c.text} border border-current/10 shrink-0`}>{c.label}</span>;
}

function DocIcon({ status }: { status: string }) {
  switch (status) {
    case "APPROVED": return <FileCheck className="w-6 h-6 text-emerald-400" />;
    case "REVIEW": return <FileClock className="w-6 h-6 text-brand-orange" />;
    case "REJECTED": return <FileX className="w-6 h-6 text-red-400" />;
    default: return <Clock className="w-6 h-6 text-brand-gold" />;
  }
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// ─── Main Page ───────────────────────────────────────────────────────

export default function PortalDocumentsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [documents, setDocuments] = useState<StudentDocument[]>([]);
  const [summary, setSummary] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");

  const user = getStoredUser();

  useEffect(() => {
    if (!isAuthenticated()) { router.push("/student-portal"); return; }
    loadDocuments();
  }, []);

  async function loadDocuments() {
    setLoading(true);
    setError("");
    try {
      const res = await getStudentDocuments();
      if (res.success) {
        setDocuments(res.documents);
        setSummary(res.summary);
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error al cargar documentos");
    } finally {
      setLoading(false);
    }
  }

  const filtered = documents.filter(doc => {
    const matchesSearch = search === "" ||
      doc.documentType.toLowerCase().includes(search.toLowerCase()) ||
      doc.fileName.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "ALL" || doc.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-brand-gold animate-spin mx-auto mb-4" />
          <p className="text-white/40 text-sm font-medium uppercase tracking-[0.2em]">Cargando archivos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-brand-gold selection:text-black">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="bg-gray-950/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[100] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="/student-portal/dashboard" className="p-2.5 hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/10 group">
                <ArrowLeft className="w-5 h-5 text-white/50 group-hover:text-brand-gold" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-brand-orange rounded-xl flex items-center justify-center shadow-lg shadow-brand-gold/20">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-white font-black text-sm uppercase tracking-widest leading-none">Documentos</h1>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-tighter mt-1">Expediente Digital</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button onClick={loadDocuments} className="p-2.5 hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/10 group" title="Actualizar">
                <RefreshCw className="w-5 h-5 text-white/50 group-hover:text-brand-gold" />
              </button>
              <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/5">
                <User className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-xs font-bold leading-none">{user?.name}</span>
              </div>
              <button onClick={logout} className="p-2.5 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500/20 transition-all border border-red-500/20">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        {error && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 bg-red-500/10 border border-red-500/20 rounded-2xl px-6 py-4 mb-8">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
            <span className="text-red-200 text-sm font-medium">{error}</span>
            <button onClick={loadDocuments} className="ml-auto text-red-400 hover:text-red-300 font-bold text-xs uppercase tracking-widest transition-colors">Reintentar</button>
          </motion.div>
        )}

        {/* Summary Row */}
        {summary && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
            {[
              { label: "Total", value: summary.total, color: "text-white", bg: "bg-white/[0.03]" },
              { label: "Aprobados", value: summary.approved, color: "text-emerald-400", bg: "bg-emerald-400/5" },
              { label: "Pendientes", value: summary.pending, color: "text-brand-gold", bg: "bg-brand-gold/5" },
              { label: "En revisión", value: summary.review, color: "text-brand-orange", bg: "bg-brand-orange/5" },
              { label: "Rechazados", value: summary.rejected, color: "text-red-400", bg: "bg-red-400/5" },
            ].map((s, i) => (
              <div key={i} className={`${s.bg} backdrop-blur-xl rounded-2xl p-5 border border-white/5 text-center shadow-lg group hover:border-white/10 transition-all`}>
                <p className={`text-4xl font-black mb-1 ${s.color}`}>{s.value}</p>
                <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest">{s.label}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Control Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col lg:flex-row gap-6 mb-8 items-stretch lg:items-center">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-brand-gold transition-colors" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar documentos..."
              className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/5 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold/30 transition-all text-sm font-medium shadow-xl"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "ALL", label: "Todos" },
              { id: "PENDING", label: "Pendiente" },
              { id: "REVIEW", label: "Revisión" },
              { id: "APPROVED", label: "Aprobado" },
              { id: "REJECTED", label: "Rechazado" }
            ].map(status => (
              <button
                key={status.id}
                onClick={() => setFilterStatus(status.id)}
                className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                  filterStatus === status.id
                    ? "bg-brand-gold border-brand-gold text-black shadow-lg shadow-brand-gold/20"
                    : "bg-white/5 border-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                }`}
              >
                {status.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Document Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          {filtered.length === 0 ? (
            <div className="bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] p-24 border border-white/5 text-center shadow-2xl">
              <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <FileX className="w-10 h-10 text-white/20" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">No se encontraron archivos</h3>
              <p className="text-white/30 text-sm max-w-xs mx-auto">
                {documents.length === 0 
                  ? "Aún no has cargado documentos para tu proceso." 
                  : "Ajusta tus filtros de búsqueda para encontrar lo que necesitas."}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {filtered.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-brand-gold/20 hover:bg-white/[0.06] transition-all group shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all">
                        <DocIcon status={doc.status} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-white font-bold text-base truncate pr-2">{doc.documentType}</h3>
                        <p className="text-white/30 text-xs font-mono truncate mt-1">{doc.fileName}</p>
                        
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-[10px] font-bold uppercase tracking-tighter text-white/30">
                          <span className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded">
                            <Calendar className="w-3 h-3" />
                            {new Date(doc.uploadedAt || new Date()).toLocaleDateString("es-CO")}
                          </span>
                          <span className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded">
                            <RefreshCw className="w-3 h-3" />
                            Versión {doc.version}
                          </span>
                          <span className="px-2 py-1 bg-white/5 rounded">
                            {formatFileSize(doc.fileSize)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3 shrink-0">
                      <StatusBadge status={doc.status} />
                      {doc.approvedAt && (
                        <div className="flex items-center gap-1.5 text-[9px] font-black text-emerald-400/60 uppercase tracking-widest">
                          <CheckCircle className="w-3 h-3" />
                          Aprobado
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {doc.comments && (
                    <div className="mt-6 p-4 bg-black/20 rounded-xl border border-white/5 bg-[url('/grid-subtle.svg')] bg-repeat">
                      <p className="text-white/50 text-xs italic leading-relaxed font-medium">
                        <span className="text-brand-gold not-italic font-black text-[9px] uppercase tracking-tighter mr-2">Feedback:</span>
                        "{doc.comments}"
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                    <button className="flex items-center gap-2 text-[10px] font-black text-white/40 hover:text-brand-gold transition-colors uppercase tracking-[0.2em] group/btn">
                      <Download className="w-4 h-4 transition-transform group-hover/btn:translate-y-0.5" />
                      Descargar Copia
                    </button>
                    <button className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] hover:text-white transition-colors">
                      Ver Detalles
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="mt-12">
          <div className="bg-gradient-to-r from-brand-gold to-brand-orange rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-8 group">
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-6 bg-white/20 rounded-3xl backdrop-blur-xl group-hover:scale-110 group-hover:-rotate-3 transition-all shrink-0 shadow-2xl">
              <Upload className="w-10 h-10 text-white" />
            </div>
            <div className="relative text-center md:text-left">
              <h3 className="text-white font-black text-3xl mb-3 tracking-tighter">¿Necesitas actualizar un archivo?</h3>
              <p className="text-white/80 text-lg font-medium max-w-xl leading-snug">
                Si detectas un error o necesitas cargar documentación adicional, contacta a tu asesor ICE para habilitar la carga en tu expediente.
              </p>
            </div>
            <div className="relative shrink-0 w-full md:w-auto mt-4 md:mt-0">
              <Link href="/contacto" className="block text-center px-10 py-5 bg-black text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-white hover:text-black transition-all shadow-2xl transform active:scale-95">
                Contactar Asesor
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-white/5 mt-20 bg-black/40 backdrop-blur-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 opacity-40 grayscale group cursor-default">
              <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center font-black text-[10px]">ICE</div>
              <p className="text-xs font-bold uppercase tracking-widest">Gestión de Documentos</p>
            </div>
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Sincronización segura punto a punto</p>
            <p className="text-white/20 text-xs tracking-tighter font-medium">© 2026 ICE Colombia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap, FileText, Clock, CheckCircle, AlertCircle,
  Calendar, LogOut, User, TrendingUp, CreditCard,
  BookOpen, Target, Award, Loader2, RefreshCw, ArrowLeft,
  FileCheck, FileClock, FileX
} from "lucide-react";
import {
  getStudentProfile, getStudentDocuments, getStudentProgress,
  getStoredUser, isAuthenticated, logout,
  type StudentProfile, type StudentDocument, type StudentRequirement,
  type StudentMilestone, type StudentPayment
} from "@/app/lib/portal-api";

// ─── Progress Bar Component ──────────────────────────────────────────

// ─── Progress Bar Component ──────────────────────────────────────────

function ProgressRing({ percent, size = 120 }: { percent: number; size?: number }) {
  const radius = (size - 12) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;
  
  // Use brand colors for progress
  const color = percent >= 100 ? "#10b981" : "#FFB703"; // Success green if 100%, else Brand Gold

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth="8"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
          className="transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,183,3,0.3)]" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <span className="text-3xl font-bold text-white block leading-none">{percent}%</span>
          <span className="text-[10px] text-white/40 uppercase font-bold tracking-tighter">Progreso</span>
        </div>
      </div>
    </div>
  );
}

// ─── Status Badge Component ──────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    APPROVED: { bg: "bg-emerald-500/10", text: "text-emerald-400", label: "Aprobado" },
    COMPLETED: { bg: "bg-emerald-500/10", text: "text-emerald-400", label: "Completado" },
    VERIFIED: { bg: "bg-emerald-500/10", text: "text-emerald-400", label: "Verificado" },
    PAID: { bg: "bg-emerald-500/10", text: "text-emerald-400", label: "Pagado" },
    PENDING: { bg: "bg-brand-gold/10", text: "text-brand-gold", label: "Pendiente" },
    REVIEW: { bg: "bg-brand-orange/10", text: "text-brand-orange", label: "En revisión" },
    REJECTED: { bg: "bg-red-500/10", text: "text-red-400", label: "Rechazado" },
    SCHEDULED: { bg: "bg-blue-500/10", text: "text-blue-400", label: "Programado" },
    MISSED: { bg: "bg-red-500/10", text: "text-red-400", label: "No asistió" },
    ACTIVE: { bg: "bg-brand-gold/10", text: "text-brand-gold", label: "Activo" },
  };
  const c = config[status] || { bg: "bg-gray-500/20", text: "text-gray-400", label: status };
  return <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${c.bg} ${c.text} border border-current/10 shrink-0`}>{c.label}</span>;
}

// ─── Document Icon ───────────────────────────────────────────────────

function DocIcon({ status }: { status: string }) {
  switch (status) {
    case "APPROVED": return <FileCheck className="w-5 h-5 text-emerald-400" />;
    case "REVIEW": return <FileClock className="w-5 h-5 text-brand-orange" />;
    case "REJECTED": return <FileX className="w-5 h-5 text-red-400" />;
    default: return <Clock className="w-5 h-5 text-brand-gold" />;
  }
}

// ─── Main Dashboard ──────────────────────────────────────────────────

export default function PortalDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [stats, setStats] = useState<any>(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const [documents, setDocuments] = useState<StudentDocument[]>([]);
  const [docSummary, setDocSummary] = useState<any>(null);
  const [requirements, setRequirements] = useState<StudentRequirement[]>([]);
  const [milestones, setMilestones] = useState<StudentMilestone[]>([]);
  const [payments, setPayments] = useState<StudentPayment[]>([]);
  const [enrollments, setEnrollments] = useState<any[]>([]);

  const user = getStoredUser();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/student-portal");
      return;
    }
    loadDashboardData();
  }, []);

  async function loadDashboardData() {
    setLoading(true);
    setError("");
    try {
      const [profileRes, docsRes, progressRes] = await Promise.all([
        getStudentProfile(),
        getStudentDocuments(),
        getStudentProgress(),
      ]);

      if (profileRes.success) {
        setProfile(profileRes.profile);
        setStats(profileRes.stats);
        setProgressPercent(profileRes.progressPercent);
        setEnrollments(profileRes.enrollments);
      }
      if (docsRes.success) {
        setDocuments(docsRes.documents);
        setDocSummary(docsRes.summary);
      }
      if (progressRes.success) {
        setRequirements(progressRes.requirements);
        setMilestones(progressRes.milestones);
        setPayments(progressRes.payments);
      }
    } catch (err: any) {
      setError(err.message || "Error al cargar datos");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-brand-gold animate-spin mx-auto mb-4" />
          <p className="text-white/40 text-sm font-medium uppercase tracking-[0.2em]">Sincronizando portal...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-red-500/20 max-w-md text-center shadow-2xl">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-white text-xl font-bold mb-2">Error de Sincronización</h2>
          <p className="text-white/50 mb-6 text-sm leading-relaxed">{error}</p>
          <button onClick={loadDashboardData} className="w-full bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-all border border-white/10">
            Reintentar Conexión
          </button>
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
            <div className="flex items-center gap-6">
              <Link href="/student-portal" className="text-white hover:text-brand-gold transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-brand-orange rounded-xl flex items-center justify-center shadow-lg shadow-brand-gold/20">
                    <span className="text-white font-black text-xs">ICE</span>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-white font-black text-sm uppercase tracking-widest leading-none">Control</h1>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-tighter mt-1">Portal del Estudiante</p>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/5">
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-brand-gold" />
                </div>
                <div className="text-left">
                  <p className="text-white text-[10px] font-bold uppercase leading-none opacity-40">Identidad</p>
                  <p className="text-white text-xs font-bold leading-tight mt-1">{user?.name || profile?.fullName}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button onClick={loadDashboardData} className="p-2.5 hover:bg-white/10 rounded-xl transition-all border border-transparent hover:border-white/10" title="Actualizar">
                  <RefreshCw className="w-5 h-5 text-white/50" />
                </button>
                <button onClick={logout} className="p-2.5 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500/20 transition-all border border-red-500/20" title="Cerrar Sesión">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        {/* Welcome Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-3xl overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-gold/5 to-transparent pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                  <TrendingUp className="w-3 h-3" />
                  Estado del Programa
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight leading-none">
                  Hola, <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">{profile?.fullName?.split(" ")[0]}</span>
                </h2>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-white/40">
                  <p className="text-xl font-medium text-white/80">{profile?.program || "Programa activo"}</p>
                  <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  <div className="flex items-center gap-3">
                    <StatusBadge status={profile?.status || "ACTIVE"} />
                    {profile?.studentNumber && (
                      <span className="font-mono text-xs tracking-widest bg-white/5 px-2 py-1 rounded border border-white/5 uppercase">
                        ID: {profile.studentNumber}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-[40px] animate-pulse"></div>
                <ProgressRing percent={progressPercent} size={160} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: FileText, label: "Documentos", value: `${stats?.documentsApproved || 0}/${stats?.documentsTotal || 0}`, color: "text-brand-gold", bg: "bg-white/[0.03]" },
            { icon: Target, label: "Requisitos", value: `${stats?.requirementsMet || 0}/${stats?.requirementsTotal || 0}`, color: "text-brand-orange", bg: "bg-white/[0.03]" },
            { icon: Award, label: "Hitos", value: `${stats?.milestonesCompleted || 0}/${stats?.milestonesTotal || 0}`, color: "text-emerald-400", bg: "bg-white/[0.03]" },
            { icon: CreditCard, label: "Finanzas", value: `${payments.filter(p => p.status === "VERIFIED" || p.status === "PAID").length}/${payments.length}`, color: "text-blue-400", bg: "bg-white/[0.03]" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + (i * 0.1) }}
              className={`${stat.bg} backdrop-blur-xl rounded-3xl p-6 border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 group shadow-lg`}
            >
              <div className={`w-10 h-10 rounded-xl ${stat.color} bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-5 h-5 shadow-sm" />
              </div>
              <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
              <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column - Timeline & Progress */}
          <div className="lg:col-span-2 space-y-8">
            {/* Documents Grid Wrapper */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-gold/10 rounded-lg">
                      <FileText className="w-5 h-5 text-brand-gold" />
                    </div>
                    <h3 className="font-bold text-lg uppercase tracking-wider">Documentación Reciente</h3>
                  </div>
                  <Link href="/student-portal/documents" className="px-4 py-2 bg-white/5 hover:bg-brand-gold/10 text-white hover:text-brand-gold text-xs font-bold rounded-lg transition-all border border-white/5 uppercase tracking-tighter">
                    Ver Archivos
                  </Link>
                </div>
                <div className="p-6">
                  {documents.length === 0 ? (
                    <div className="text-center py-12">
                      <FileText className="w-12 h-12 text-white/10 mx-auto mb-4" />
                      <p className="text-white/30 font-medium">No se han cargado documentos aún.</p>
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {documents.slice(0, 4).map((doc) => (
                        <div key={doc.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-brand-gold/20 transition-all group">
                          <div className="flex items-center gap-4">
                            <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                              <DocIcon status={doc.status} />
                            </div>
                            <div className="overflow-hidden">
                              <p className="text-white text-sm font-bold truncate max-w-[120px]">{doc.documentType}</p>
                              <p className="text-white/30 text-[10px] uppercase font-bold tracking-tight">
                                {new Date(doc.uploadedAt).toLocaleDateString("es-CO", { day: 'numeric', month: 'short' })}
                              </p>
                            </div>
                          </div>
                          <StatusBadge status={doc.status} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Milestones / Roadmap */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="p-6 border-b border-white/5 flex items-center gap-3 bg-white/[0.02]">
                  <div className="p-2 bg-emerald-400/10 rounded-lg">
                    <Award className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="font-bold text-lg uppercase tracking-wider">Hoja de Ruta</h3>
                </div>
                <div className="p-8">
                  <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                    {milestones.length === 0 ? (
                      <p className="text-white/30 text-center py-4">No hay hitos programados todavía.</p>
                    ) : (
                      milestones.map((m, idx) => (
                        <div key={m.id} className="relative pl-10">
                          <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-gray-900 z-10 ${
                            m.status === 'COMPLETED' ? 'bg-emerald-400' : 'bg-gray-700 animate-pulse'
                          }`} />
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-400/20 transition-all">
                            <div>
                              <p className={`text-sm font-bold uppercase tracking-wide ${m.status === 'COMPLETED' ? 'text-emerald-400' : 'text-white'}`}>
                                {m.name}
                              </p>
                              <p className="text-white/30 text-[10px] font-bold uppercase flex items-center gap-2 mt-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(m.scheduledDate).toLocaleDateString("es-CO", { day: 'numeric', month: 'long', year: 'numeric' })}
                              </p>
                            </div>
                            <StatusBadge status={m.status} />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Requirements & Payments */}
          <div className="space-y-8">
            {/* Requirements Checkbox List */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="p-6 border-b border-white/5 flex items-center gap-3 bg-white/[0.02]">
                  <div className="p-2 bg-brand-orange/10 rounded-lg">
                    <Target className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="font-bold text-lg uppercase tracking-wider">Checklist de Requisitos</h3>
                </div>
                <div className="p-6 space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar">
                  {requirements.map((req) => (
                    <div key={req.id} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-colors">
                      <div className={`shrink-0 w-6 h-6 rounded-lg flex items-center justify-center border-2 ${
                        req.status === 'COMPLETED' ? 'bg-emerald-500 border-emerald-500' : 'border-white/20'
                      }`}>
                        {req.status === 'COMPLETED' && <CheckCircle className="w-4 h-4 text-white" />}
                      </div>
                      <div className="min-w-0">
                        <p className={`text-sm font-bold leading-tight truncate ${req.status === 'COMPLETED' ? 'text-white/40 line-through' : 'text-white'}`}>
                          {req.name}
                        </p>
                        <p className="text-[10px] text-white/30 uppercase font-black tracking-tighter mt-0.5">{req.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Billing Summary */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <CreditCard className="w-24 h-24" />
                </div>
                <div className="p-6">
                  <h3 className="font-black text-xl uppercase tracking-widest mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-brand-gold rounded-full"></span>
                    Finanzas
                  </h3>
                  <div className="space-y-4">
                    {payments.length === 0 ? (
                      <p className="text-white/20 text-center py-6 text-sm">Sin movimientos recientes.</p>
                    ) : (
                      payments.slice(0, 3).map((p) => (
                        <div key={p.id} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                          <div className="flex justify-between items-start mb-2">
                            <p className="text-sm font-bold text-white/90 leading-none">{p.concept || "Mensualidad"}</p>
                            <StatusBadge status={p.status} />
                          </div>
                          <div className="flex justify-between items-end">
                            <p className="text-xl font-black text-white">${p.amount.toLocaleString()} <span className="text-[10px] font-medium text-white/30 uppercase">{p.currency}</span></p>
                            <p className="text-[10px] text-white/30 font-bold uppercase">{p.method}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <button className="w-full mt-6 py-4 bg-brand-gold/10 hover:bg-brand-gold text-brand-gold hover:text-black font-black text-xs uppercase tracking-widest rounded-2xl transition-all duration-300 border border-brand-gold/20 hover:border-brand-gold">
                    Historial de Facturación
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-20 bg-black/40 backdrop-blur-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
              <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center font-black text-[10px]">ICE</div>
              <p className="text-xs font-bold uppercase tracking-widest">Instituto Cultural de Educación</p>
            </div>
            <div className="flex gap-8 text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
              <Link href="#" className="hover:text-brand-gold transition-colors">Privacidad</Link>
              <Link href="#" className="hover:text-brand-gold transition-colors">Términos</Link>
              <Link href="#" className="hover:text-brand-gold transition-colors">Soporte</Link>
            </div>
            <p className="text-white/20 text-xs tracking-tighter font-medium">© 2026 Powered by Antigravity Engine</p>
          </div>
        </div>
      </footer>

      {/* Styles for custom scrollbar */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 183, 3, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 183, 3, 0.4);
        }
      `}</style>
    </div>
  );
}

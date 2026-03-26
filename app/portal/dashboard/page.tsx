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

function ProgressRing({ percent, size = 120 }: { percent: number; size?: number }) {
  const radius = (size - 12) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;
  const color = percent >= 80 ? "#22c55e" : percent >= 50 ? "#3b82f6" : percent >= 25 ? "#eab308" : "#ef4444";

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth="8"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
          className="transition-all duration-1000 ease-out" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold text-white">{percent}%</span>
      </div>
    </div>
  );
}

// ─── Status Badge Component ──────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    APPROVED: { bg: "bg-green-500/20", text: "text-green-400", label: "Aprobado" },
    COMPLETED: { bg: "bg-green-500/20", text: "text-green-400", label: "Completado" },
    PENDING: { bg: "bg-yellow-500/20", text: "text-yellow-400", label: "Pendiente" },
    REVIEW: { bg: "bg-purple-500/20", text: "text-purple-400", label: "En revisión" },
    REJECTED: { bg: "bg-red-500/20", text: "text-red-400", label: "Rechazado" },
    SCHEDULED: { bg: "bg-blue-500/20", text: "text-blue-400", label: "Programado" },
    MISSED: { bg: "bg-red-500/20", text: "text-red-400", label: "No asistió" },
    PAID: { bg: "bg-green-500/20", text: "text-green-400", label: "Pagado" },
    VERIFIED: { bg: "bg-green-500/20", text: "text-green-400", label: "Verificado" },
    ACTIVE: { bg: "bg-lime-500/20", text: "text-lime-400", label: "Activo" },
  };
  const c = config[status] || { bg: "bg-gray-500/20", text: "text-gray-400", label: status };
  return <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text}`}>{c.label}</span>;
}

// ─── Document Icon ───────────────────────────────────────────────────

function DocIcon({ status }: { status: string }) {
  switch (status) {
    case "APPROVED": return <FileCheck className="w-5 h-5 text-green-400" />;
    case "REVIEW": return <FileClock className="w-5 h-5 text-purple-400" />;
    case "REJECTED": return <FileX className="w-5 h-5 text-red-400" />;
    default: return <Clock className="w-5 h-5 text-yellow-400" />;
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
      router.push("/portal");
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
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-black flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-lime-400 animate-spin mx-auto mb-4" />
          <p className="text-white/70 text-lg">Cargando tu portal...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-black flex items-center justify-center p-4">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-red-400/30 max-w-md text-center">
          <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h2 className="text-white text-xl font-bold mb-2">Error</h2>
          <p className="text-white/70 mb-6">{error}</p>
          <button onClick={loadDashboardData} className="bg-lime-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-lime-500 transition-colors">
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-black">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/portal" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-white/70" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h1 className="text-white font-bold text-lg">Portal Estudiantil</h1>
                  <p className="text-white/50 text-sm">ICE Colombia</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={loadDashboardData} className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Actualizar">
                <RefreshCw className="w-5 h-5 text-white/70" />
              </button>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                <User className="w-4 h-4 text-lime-400" />
                <span className="text-white text-sm">{user?.name || profile?.fullName}</span>
              </div>
              <button onClick={logout} className="flex items-center gap-2 px-3 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors text-sm">
                <LogOut className="w-4 h-4" />
                Salir
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome + Progress */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Bienvenido, <span className="text-lime-400">{profile?.fullName?.split(" ")[0]}</span>
                </h2>
                <p className="text-white/60 text-lg mb-1">{profile?.program || "Programa no asignado"}</p>
                <div className="flex items-center gap-3">
                  <StatusBadge status={profile?.status || "ACTIVE"} />
                  {profile?.studentNumber && <span className="text-white/40 text-sm">#{profile.studentNumber}</span>}
                </div>
              </div>
              <ProgressRing percent={progressPercent} />
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: FileText, label: "Documentos", value: `${stats?.documentsApproved || 0}/${stats?.documentsTotal || 0}`, color: "text-blue-400", bg: "bg-blue-400/10" },
            { icon: Target, label: "Requisitos", value: `${stats?.requirementsMet || 0}/${stats?.requirementsTotal || 0}`, color: "text-purple-400", bg: "bg-purple-400/10" },
            { icon: Award, label: "Hitos", value: `${stats?.milestonesCompleted || 0}/${stats?.milestonesTotal || 0}`, color: "text-lime-400", bg: "bg-lime-400/10" },
            { icon: CreditCard, label: "Pagos", value: `${payments.filter(p => p.status === "VERIFIED" || p.status === "PAID").length}/${payments.length}`, color: "text-green-400", bg: "bg-green-400/10" },
          ].map((stat, i) => (
            <div key={i} className={`${stat.bg} backdrop-blur-lg rounded-xl p-5 border border-white/5`}>
              <stat.icon className={`w-6 h-6 ${stat.color} mb-2`} />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Documents */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-lime-400" />
                  Documentos
                </h3>
                {docSummary && (
                  <span className="text-white/40 text-sm">{docSummary.approved} aprobados de {docSummary.total}</span>
                )}
              </div>
              <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                {documents.length === 0 ? (
                  <p className="text-white/40 text-center py-8">No hay documentos registrados</p>
                ) : (
                  documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <DocIcon status={doc.status} />
                        <div>
                          <p className="text-white text-sm font-medium">{doc.documentType}</p>
                          <p className="text-white/40 text-xs">{new Date(doc.uploadedAt).toLocaleDateString("es-CO")}</p>
                        </div>
                      </div>
                      <StatusBadge status={doc.status} />
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>

          {/* Requirements & Milestones */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-lime-400" />
                Requisitos
              </h3>
              <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                {requirements.length === 0 ? (
                  <p className="text-white/40 text-center py-8">No hay requisitos asignados</p>
                ) : (
                  requirements.map((req) => (
                    <div key={req.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3">
                        {req.status === "COMPLETED" ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <Clock className="w-5 h-5 text-yellow-400" />
                        )}
                        <div>
                          <p className="text-white text-sm font-medium">{req.name}</p>
                          <p className="text-white/40 text-xs">{req.category} {req.isRequired ? "" : "(Opcional)"}</p>
                        </div>
                      </div>
                      <StatusBadge status={req.status} />
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>

          {/* Milestones */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-lime-400" />
                Hitos del Programa
              </h3>
              <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                {milestones.length === 0 ? (
                  <p className="text-white/40 text-center py-8">No hay hitos programados</p>
                ) : (
                  milestones.map((m) => (
                    <div key={m.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                      <div>
                        <p className="text-white text-sm font-medium">{m.name}</p>
                        <p className="text-white/40 text-xs flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(m.scheduledDate).toLocaleDateString("es-CO")}
                        </p>
                      </div>
                      <StatusBadge status={m.status} />
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>

          {/* Payments */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
                <CreditCard className="w-5 h-5 text-lime-400" />
                Pagos Registrados
              </h3>
              <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                {payments.length === 0 ? (
                  <p className="text-white/40 text-center py-8">No hay pagos registrados</p>
                ) : (
                  payments.map((p) => (
                    <div key={p.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                      <div>
                        <p className="text-white text-sm font-medium">{p.concept || "Pago"}</p>
                        <p className="text-white/40 text-xs">
                          {p.paymentDate ? new Date(p.paymentDate).toLocaleDateString("es-CO") : "Sin fecha"}
                          {p.method && ` • ${p.method}`}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold text-sm">${p.amount.toLocaleString()} {p.currency}</p>
                        <StatusBadge status={p.status} />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enrollments */}
        {enrollments.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-lime-400" />
                Matrículas
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {enrollments.map((e: any) => (
                  <div key={e.id} className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-white font-medium mb-1">{e.program?.name || "Programa"}</p>
                    <p className="text-white/40 text-xs mb-2">{e.program?.code} • {e.program?.category}</p>
                    <StatusBadge status={e.status} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-white/30 text-sm">© 2026 ICE Colombia — Portal Estudiantil</p>
        </div>
      </footer>
    </div>
  );
}

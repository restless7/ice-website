"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users, GraduationCap, FileText, Target, Award, ArrowLeft,
  User, LogOut, RefreshCw, Loader2, AlertCircle, TrendingUp,
  CheckCircle, Clock, Mail, Phone
} from "lucide-react";
import {
  getSponsorStudents, getStoredUser, isAuthenticated, logout,
  type SponsorStudent
} from "@/app/lib/portal-api";

// ─── Progress Bar ────────────────────────────────────────────────────

function ProgressBar({ percent }: { percent: number }) {
  const color = percent >= 80 ? "bg-emerald-400" : percent >= 40 ? "bg-brand-gold" : "bg-brand-orange";
  return (
    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`${color} h-full rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]`} 
      />
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    ACTIVE: { bg: "bg-brand-gold/10", text: "text-brand-gold", label: "Activo" },
    COMPLETED: { bg: "bg-emerald-500/10", text: "text-emerald-400", label: "Completado" },
    INACTIVE: { bg: "bg-red-500/10", text: "text-red-400", label: "Inactivo" },
    ENROLLED: { bg: "bg-brand-orange/10", text: "text-brand-orange", label: "Matriculado" },
  };
  const c = config[status] || { bg: "bg-gray-500/20", text: "text-gray-400", label: status };
  return <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${c.bg} ${c.text} border border-current/10 shrink-0`}>{c.label}</span>;
}

// ─── Main Page ───────────────────────────────────────────────────────

export default function SponsorPortalPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sponsorName, setSponsorName] = useState("");
  const [students, setStudents] = useState<SponsorStudent[]>([]);
  const [summary, setSummary] = useState<any>(null);

  const user = getStoredUser();

  useEffect(() => {
    if (!isAuthenticated()) { router.push("/student-portal"); return; }
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    setError("");
    try {
      const res = await getSponsorStudents();
      if (res.success) {
        setSponsorName(res.sponsorName);
        setStudents(res.students);
        setSummary(res.summary);
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
          <p className="text-white/40 text-sm font-medium uppercase tracking-[0.2em]">Cargando panel...</p>
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
              <Link href="/student-portal" className="p-2.5 hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/10 group">
                <ArrowLeft className="w-5 h-5 text-white/50 group-hover:text-brand-gold" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-brand-orange rounded-xl flex items-center justify-center shadow-lg shadow-brand-gold/20">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-white font-black text-sm uppercase tracking-widest leading-none">Panel Sponsor</h1>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-tighter mt-1">Gestión de Talento</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button onClick={loadData} className="p-2.5 hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/10 group" title="Actualizar">
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
            <button onClick={loadData} className="ml-auto text-red-400 hover:text-red-300 font-bold text-xs uppercase tracking-widest transition-colors">Reintentar</button>
          </motion.div>
        )}

        {/* Welcome Banner */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="mb-10">
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
              <TrendingUp className="w-32 h-32 text-brand-gold" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-black text-white mb-3 tracking-tighter">
                Hola, <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">{sponsorName || user?.name}</span>
              </h2>
              <p className="text-white/40 text-lg font-medium max-w-xl leading-snug">
                Aquí puedes supervisar el progreso académico y administrativo de los estudiantes bajo tu patrocinio.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Global summary */}
        {summary && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/5 shadow-lg flex items-center justify-between group hover:border-brand-gold/30 transition-all">
              <div>
                <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Estudiantes Vinculados</p>
                <p className="text-5xl font-black text-white tracking-tighter">{summary.totalStudents}</p>
              </div>
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/5 shadow-lg flex items-center justify-between group hover:border-emerald-400/30 transition-all">
              <div>
                <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Progreso Promedio</p>
                <p className="text-5xl font-black text-emerald-400 tracking-tighter">{summary.avgProgress}%</p>
              </div>
              <div className="w-16 h-16 bg-emerald-400/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Student List */}
        <section className="relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-gold/50"></span>
              Lista de Estudiantes
            </h3>
          </div>

          {students.length === 0 ? (
            <div className="bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] p-24 border border-white/5 text-center shadow-2xl">
              <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white/20" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">No hay estudiantes vinculados</h3>
              <p className="text-white/30 text-sm max-w-xs mx-auto">
                Tu cuenta de sponsor aún no tiene estudiantes asignados para seguimiento.
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-6">
              {students.map((item, index) => (
                <motion.div
                  key={item.assignmentId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                  viewport={{ once: true }}
                  className="bg-white/[0.03] backdrop-blur-xl rounded-[1.5rem] p-6 border border-white/5 hover:border-brand-gold/20 hover:bg-white/[0.06] transition-all group shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-orange rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-brand-gold/20 group-hover:rotate-3 transition-transform">
                        {item.student.fullName.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-white font-black text-lg truncate leading-none mb-2">{item.student.fullName}</h4>
                        <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest truncate">{item.student.program || "Sin programa activo"}</p>
                      </div>
                    </div>
                    <StatusBadge status={item.student.status} />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex flex-col gap-2 p-3 bg-black/20 rounded-xl border border-white/5">
                      <div className="flex items-center gap-2 text-white/40">
                        <Mail className="w-3 h-3" />
                        <span className="text-[10px] font-bold uppercase tracking-tighter truncate">{item.student.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/40">
                        <Phone className="w-3 h-3" />
                        <span className="text-[10px] font-bold uppercase tracking-tighter truncate">{item.student.phone || "No registrado"}</span>
                      </div>
                    </div>
                    <div className="p-3 bg-black/20 rounded-xl border border-white/5 flex flex-col justify-center text-center">
                      <p className="text-white font-black text-lg leading-none mb-1">{item.progressPercent}%</p>
                      <p className="text-[9px] text-white/30 font-black uppercase tracking-[0.2em]">Progreso</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Avance General</span>
                        <span className={`text-xs font-black ${item.progressPercent >= 80 ? 'text-emerald-400' : 'text-brand-gold'}`}>{item.progressPercent}%</span>
                      </div>
                      <ProgressBar percent={item.progressPercent} />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/5 group-hover:border-white/10 transition-colors">
                        <FileText className="w-4 h-4 text-brand-gold mx-auto mb-2" />
                        <p className="text-white text-base font-black leading-none mb-1">{item.stats.documentsApproved}</p>
                        <p className="text-[9px] text-white/30 font-bold uppercase tracking-tighter">Docs OK</p>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/5 group-hover:border-white/10 transition-colors">
                        <Target className="w-4 h-4 text-brand-orange mx-auto mb-2" />
                        <p className="text-white text-base font-black leading-none mb-1">{item.stats.requirementsMet}</p>
                        <p className="text-[9px] text-white/30 font-bold uppercase tracking-tighter">Requisitos</p>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/5 group-hover:border-white/10 transition-colors">
                        <Award className="w-4 h-4 text-emerald-400 mx-auto mb-2" />
                        <p className="text-white text-base font-black leading-none mb-1">{item.stats.milestonesCompleted}</p>
                        <p className="text-[9px] text-white/30 font-bold uppercase tracking-tighter">Hitos</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-black text-white/30 uppercase tracking-widest border border-white/5">
                      Relación: {item.relationshipType || "Patrocinador"}
                    </span>
                    <Link href={`/student-portal/sponsor/student/${item.student.id}`} className="text-[10px] font-black text-brand-gold hover:text-white uppercase tracking-[0.2em] transition-colors flex items-center gap-1.5 group/link">
                      Ver Expediente
                      <ArrowLeft className="w-3 h-3 rotate-180 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="border-t border-white/5 mt-20 bg-black/40 backdrop-blur-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 opacity-40 grayscale group cursor-default">
              <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center font-black text-[10px]">ICE</div>
              <p className="text-xs font-bold uppercase tracking-widest">Panel de Sponsor</p>
            </div>
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Monitoreo de rendimiento académico</p>
            <p className="text-white/20 text-xs tracking-tighter font-medium">© 2026 ICE Colombia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

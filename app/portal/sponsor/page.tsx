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
  const color = percent >= 80 ? "bg-green-400" : percent >= 50 ? "bg-blue-400" : percent >= 25 ? "bg-yellow-400" : "bg-red-400";
  return (
    <div className="w-full bg-white/10 rounded-full h-2.5">
      <div className={`${color} h-2.5 rounded-full transition-all duration-700`} style={{ width: `${percent}%` }} />
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    ACTIVE: { bg: "bg-lime-500/20", text: "text-lime-400", label: "Activo" },
    COMPLETED: { bg: "bg-green-500/20", text: "text-green-400", label: "Completado" },
    INACTIVE: { bg: "bg-gray-500/20", text: "text-gray-400", label: "Inactivo" },
    ENROLLED: { bg: "bg-blue-500/20", text: "text-blue-400", label: "Matriculado" },
  };
  const c = config[status] || { bg: "bg-gray-500/20", text: "text-gray-400", label: status };
  return <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text}`}>{c.label}</span>;
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
    if (!isAuthenticated()) { router.push("/portal"); return; }
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
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-black flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-lime-400 animate-spin mx-auto mb-4" />
          <p className="text-white/70 text-lg">Cargando panel de sponsor...</p>
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
                  <Users className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h1 className="text-white font-bold text-lg">Panel de Sponsor</h1>
                  <p className="text-white/50 text-sm">ICE Colombia</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={loadData} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <RefreshCw className="w-5 h-5 text-white/70" />
              </button>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                <User className="w-4 h-4 text-lime-400" />
                <span className="text-white text-sm">{user?.name}</span>
              </div>
              <button onClick={logout} className="flex items-center gap-2 px-3 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors text-sm">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-lg px-4 py-3 mb-6">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <span className="text-red-300">{error}</span>
            <button onClick={loadData} className="ml-auto text-red-400 hover:text-red-300 underline text-sm">Reintentar</button>
          </div>
        )}

        {/* Welcome Banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-lime-400/20">
            <h2 className="text-3xl font-bold text-white mb-2">
              Bienvenido, <span className="text-lime-400">{sponsorName || user?.name}</span>
            </h2>
            <p className="text-white/60 text-lg">Panel de seguimiento de tus estudiantes vinculados</p>
          </div>
        </motion.div>

        {/* Summary Stats */}
        {summary && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-400/10 backdrop-blur-lg rounded-xl p-6 border border-white/5">
              <Users className="w-8 h-8 text-blue-400 mb-2" />
              <p className="text-4xl font-bold text-white">{summary.totalStudents}</p>
              <p className="text-white/50">Estudiantes vinculados</p>
            </div>
            <div className="bg-lime-400/10 backdrop-blur-lg rounded-xl p-6 border border-white/5">
              <TrendingUp className="w-8 h-8 text-lime-400 mb-2" />
              <p className="text-4xl font-bold text-white">{summary.avgProgress}%</p>
              <p className="text-white/50">Progreso promedio</p>
            </div>
          </motion.div>
        )}

        {/* Student Cards */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-lime-400" />
            Tus Estudiantes
          </h3>

          {students.length === 0 ? (
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 text-center">
              <Users className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <p className="text-white/50 text-lg">No tienes estudiantes vinculados actualmente</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {students.map((item, index) => (
                <motion.div
                  key={item.assignmentId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-lime-400/30 transition-all"
                >
                  {/* Student Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-full flex items-center justify-center text-black font-bold text-lg">
                        {item.student.fullName.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{item.student.fullName}</h4>
                        <p className="text-white/40 text-sm">{item.student.program || "Sin programa"}</p>
                      </div>
                    </div>
                    <StatusBadge status={item.student.status} />
                  </div>

                  {/* Contact Info */}
                  <div className="flex items-center gap-4 mb-4 text-white/40 text-sm">
                    {item.student.email && (
                      <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{item.student.email}</span>
                    )}
                    {item.student.phone && (
                      <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{item.student.phone}</span>
                    )}
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/60">Progreso general</span>
                      <span className="text-lime-400 font-semibold">{item.progressPercent}%</span>
                    </div>
                    <ProgressBar percent={item.progressPercent} />
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <FileText className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                      <p className="text-white text-sm font-semibold">{item.stats.documentsApproved}/{item.stats.documentsTotal}</p>
                      <p className="text-white/40 text-xs">Docs</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <Target className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                      <p className="text-white text-sm font-semibold">{item.stats.requirementsMet}/{item.stats.requirementsTotal}</p>
                      <p className="text-white/40 text-xs">Requisitos</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <Award className="w-4 h-4 text-lime-400 mx-auto mb-1" />
                      <p className="text-white text-sm font-semibold">{item.stats.milestonesCompleted}/{item.stats.milestonesTotal}</p>
                      <p className="text-white/40 text-xs">Hitos</p>
                    </div>
                  </div>

                  {/* Relationship & Enrollment */}
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/30">
                    <span>{item.relationshipType || "Sponsor"}</span>
                    {item.student.currentEnrollment && (
                      <span>{item.student.currentEnrollment.program.name}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </main>

      <footer className="border-t border-white/5 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-white/30 text-sm">© 2026 ICE Colombia — Panel de Sponsor</p>
        </div>
      </footer>
    </div>
  );
}

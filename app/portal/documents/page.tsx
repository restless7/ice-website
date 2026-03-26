"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText, FileCheck, FileClock, FileX, Clock, CheckCircle,
  AlertCircle, ArrowLeft, Upload, Search, Filter,
  GraduationCap, User, LogOut, RefreshCw, Loader2, Download
} from "lucide-react";
import {
  getStudentDocuments, getStoredUser, isAuthenticated, logout,
  type StudentDocument
} from "@/app/lib/portal-api";

// ─── Status Badge ────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    APPROVED: { bg: "bg-green-500/20", text: "text-green-400", label: "Aprobado" },
    PENDING: { bg: "bg-yellow-500/20", text: "text-yellow-400", label: "Pendiente" },
    REVIEW: { bg: "bg-purple-500/20", text: "text-purple-400", label: "En revisión" },
    REJECTED: { bg: "bg-red-500/20", text: "text-red-400", label: "Rechazado" },
  };
  const c = config[status] || { bg: "bg-gray-500/20", text: "text-gray-400", label: status };
  return <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text}`}>{c.label}</span>;
}

function DocIcon({ status }: { status: string }) {
  switch (status) {
    case "APPROVED": return <FileCheck className="w-6 h-6 text-green-400" />;
    case "REVIEW": return <FileClock className="w-6 h-6 text-purple-400" />;
    case "REJECTED": return <FileX className="w-6 h-6 text-red-400" />;
    default: return <Clock className="w-6 h-6 text-yellow-400" />;
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
    if (!isAuthenticated()) { router.push("/portal"); return; }
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
    } catch (err: any) {
      setError(err.message || "Error al cargar documentos");
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
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-black flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-lime-400 animate-spin" />
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
              <Link href="/portal/dashboard" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-white/70" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h1 className="text-white font-bold text-lg">Mis Documentos</h1>
                  <p className="text-white/50 text-sm">Portal Estudiantil ICE</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={loadDocuments} className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Actualizar">
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
            <button onClick={loadDocuments} className="ml-auto text-red-400 hover:text-red-300 underline text-sm">Reintentar</button>
          </div>
        )}

        {/* Summary Cards */}
        {summary && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              { label: "Total", value: summary.total, color: "text-white", bg: "bg-white/5" },
              { label: "Aprobados", value: summary.approved, color: "text-green-400", bg: "bg-green-400/10" },
              { label: "Pendientes", value: summary.pending, color: "text-yellow-400", bg: "bg-yellow-400/10" },
              { label: "En revisión", value: summary.review, color: "text-purple-400", bg: "bg-purple-400/10" },
              { label: "Rechazados", value: summary.rejected, color: "text-red-400", bg: "bg-red-400/10" },
            ].map((s, i) => (
              <div key={i} className={`${s.bg} backdrop-blur-lg rounded-xl p-4 border border-white/5 text-center`}>
                <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
                <p className="text-white/50 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por tipo o nombre..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            {["ALL", "PENDING", "REVIEW", "APPROVED", "REJECTED"].map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filterStatus === status
                    ? "bg-lime-400 text-black"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {status === "ALL" ? "Todos" : status === "PENDING" ? "Pendiente" : status === "REVIEW" ? "Revisión" : status === "APPROVED" ? "Aprobado" : "Rechazado"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Document List */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          {filtered.length === 0 ? (
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 text-center">
              <FileText className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <p className="text-white/50 text-lg">
                {documents.length === 0 ? "No tienes documentos registrados" : "No se encontraron documentos con esos filtros"}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <DocIcon status={doc.status} />
                      <div>
                        <h3 className="text-white font-medium">{doc.documentType}</h3>
                        <p className="text-white/40 text-sm">{doc.fileName}</p>
                        <div className="flex items-center gap-3 mt-1 text-white/30 text-xs">
                          <span>Subido: {new Date(doc.uploadedAt).toLocaleDateString("es-CO", { year: "numeric", month: "short", day: "numeric" })}</span>
                          <span>•</span>
                          <span>{formatFileSize(doc.fileSize)}</span>
                          {doc.version > 1 && <><span>•</span><span>v{doc.version}</span></>}
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-2">
                      <StatusBadge status={doc.status} />
                      {doc.approvedAt && (
                        <span className="text-green-400/60 text-xs flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          {new Date(doc.approvedAt).toLocaleDateString("es-CO")}
                        </span>
                      )}
                    </div>
                  </div>
                  {doc.comments && (
                    <div className="mt-3 pl-10 border-l-2 border-lime-400/20 ml-3">
                      <p className="text-white/50 text-sm italic">{doc.comments}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Info Banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8">
          <div className="bg-lime-400/10 border border-lime-400/20 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Upload className="w-6 h-6 text-lime-400 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-lime-400 font-semibold mb-1">¿Necesitas subir un documento?</h3>
                <p className="text-white/60 text-sm">
                  Contacta a tu asesor ICE para subir documentos nuevos o actualizar documentos existentes.
                  Los documentos son revisados y aprobados por el equipo de ICE.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-white/5 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-white/30 text-sm">© 2026 ICE Colombia — Portal Estudiantil</p>
        </div>
      </footer>
    </div>
  );
}

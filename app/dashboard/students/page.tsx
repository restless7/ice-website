"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  GraduationCap,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Upload,
  Download,
  Eye,
  Search,
  Filter,
  Plus,
  Star,
  Globe,
  CreditCard,
  Briefcase,
  Target,
  Award,
  BookOpen,
  TrendingUp,
  Building,
  Flag,
  X,
  Edit,
  Trash2,
  Send,
  User,
  FileCheck,
  FileX,
  FileClock,
  MoreVertical,
  Bell,
  Settings,
  MessageCircle,
  Video,
  ExternalLink,
  UserPlus,
  Shield,
  Activity,
  Zap,
  MessageSquare
} from "lucide-react";

// Enhanced mock data for student portal
const mockStudents = [
  {
    id: 1,
    name: "Ana María Torres",
    email: "ana.torres@email.com",
    phone: "+57 300 123 4567",
    program: "Intercambio Canadá - University of Toronto",
    destination: "Canadá",
    flag: "🇨🇦",
    startDate: "2024-09-15",
    status: "approved",
    stage: "completed",
    progress: 100,
    agent: "María González",
    avatar: "AT",
    lastLogin: "Hace 2 horas",
    documents: [
      { name: "Pasaporte", status: "approved", uploadDate: "2024-01-10" },
      { name: "Visa", status: "approved", uploadDate: "2024-01-15" },
      { name: "IELTS Certificate", status: "approved", uploadDate: "2024-01-12" },
      { name: "Carta de Aceptación", status: "approved", uploadDate: "2024-01-20" },
      { name: "Comprobante de Pago", status: "approved", uploadDate: "2024-01-18" }
    ],
    budget: "25,000-30,000 USD",
    createdAt: "2024-01-05T10:00:00Z"
  },
  {
    id: 2,
    name: "Carlos Méndez Silva",
    email: "carlos.mendez@email.com",
    phone: "+57 301 234 5678",
    program: "MBA - London Business School",
    destination: "Reino Unido",
    flag: "🇬🇧",
    startDate: "2024-10-01",
    status: "in_process",
    stage: "visa",
    progress: 90,
    agent: "Laura Gómez",
    avatar: "CM",
    lastLogin: "Hace 1 día",
    documents: [
      { name: "Pasaporte", status: "approved", uploadDate: "2024-01-08" },
      { name: "Visa Application", status: "pending", uploadDate: "2024-01-14" },
      { name: "English Test", status: "approved", uploadDate: "2024-01-10" },
      { name: "Medical Certificate", status: "review", uploadDate: "2024-01-16" },
      { name: "Bank Statement", status: "approved", uploadDate: "2024-01-12" }
    ],
    budget: "45,000-55,000 USD",
    createdAt: "2024-01-08T14:30:00Z"
  },
  {
    id: 3,
    name: "Laura Gómez Ruiz",
    email: "laura.gomez@email.com",
    phone: "+57 302 345 6789",
    program: "Curso de Inglés - Sydney University",
    destination: "Australia",
    flag: "🇦🇺",
    startDate: "2024-11-20",
    status: "pending",
    stage: "application",
    progress: 45,
    agent: "Pedro Silva",
    avatar: "LG",
    lastLogin: "Hace 3 días",
    documents: [
      { name: "Pasaporte", status: "approved", uploadDate: "2024-01-12" },
      { name: "Visa", status: "pending", uploadDate: null },
      { name: "Insurance", status: "review", uploadDate: "2024-01-15" },
      { name: "Flight Confirmation", status: "pending", uploadDate: null },
      { name: "Accommodation", status: "pending", uploadDate: null }
    ],
    budget: "18,000-22,000 USD",
    createdAt: "2024-01-12T09:45:00Z"
  },
  {
    id: 4,
    name: "Pedro Silva García",
    email: "pedro.silva@email.com",
    phone: "+57 303 456 7890",
    program: "Maestría en Ingeniería - MIT",
    destination: "Estados Unidos",
    flag: "🇺🇸",
    startDate: "2024-08-01",
    status: "approved",
    stage: "completed",
    progress: 100,
    agent: "Carlos Méndez",
    avatar: "PS",
    lastLogin: "Hace 1 semana",
    documents: [
      { name: "Pasaporte", status: "approved", uploadDate: "2024-01-06" },
      { name: "Academic Transcripts", status: "approved", uploadDate: "2024-01-10" },
      { name: "Personal Statement", status: "approved", uploadDate: "2024-01-12" },
      { name: "Recommendation Letters", status: "approved", uploadDate: "2024-01-14" },
      { name: "Financial Proof", status: "approved", uploadDate: "2024-01-08" }
    ],
    budget: "60,000-70,000 USD",
    createdAt: "2024-01-03T16:20:00Z"
  },
  {
    id: 5,
    name: "María Rodríguez López",
    email: "maria.rodriguez@email.com",
    phone: "+57 304 567 8901",
    program: "Doctorado en Medicina - Universidad de Barcelona",
    destination: "España",
    flag: "🇪🇸",
    startDate: "2025-01-15",
    status: "in_process",
    stage: "interview",
    progress: 65,
    agent: "María González",
    avatar: "MR",
    lastLogin: "Hace 4 horas",
    documents: [
      { name: "Pasaporte", status: "approved", uploadDate: "2024-01-15" },
      { name: "Academic Records", status: "approved", uploadDate: "2024-01-18" },
      { name: "Research Proposal", status: "review", uploadDate: "2024-01-20" },
      { name: "Language Certificate", status: "approved", uploadDate: "2024-01-16" },
      { name: "CV Académico", status: "pending", uploadDate: null }
    ],
    budget: "35,000-45,000 USD",
    createdAt: "2024-01-15T11:30:00Z"
  },
  {
    id: 6,
    name: "Andrés Morales Díaz",
    email: "andres.morales@email.com",
    phone: "+57 305 678 9012",
    program: "Licenciatura en Artes - Sorbonne University",
    destination: "Francia",
    flag: "🇫🇷",
    startDate: "2024-12-01",
    status: "in_process",
    stage: "documentation",
    progress: 55,
    agent: "Laura Gómez",
    avatar: "AM",
    lastLogin: "Hace 6 horas",
    documents: [
      { name: "Pasaporte", status: "approved", uploadDate: "2024-01-22" },
      { name: "Portfolio Artístico", status: "review", uploadDate: "2024-01-25" },
      { name: "Certificado de Francés", status: "pending", uploadDate: null },
      { name: "Carta Motivacional", status: "approved", uploadDate: "2024-01-24" },
      { name: "Transcript Académico", status: "pending", uploadDate: null }
    ],
    budget: "20,000-28,000 USD",
    createdAt: "2024-01-20T09:15:00Z"
  },
  {
    id: 7,
    name: "Isabella Martínez",
    email: "isabella.martinez@email.com",
    phone: "+57 306 789 0123",
    program: "Work & Study - Auckland Institute",
    destination: "Nueva Zelanda",
    flag: "🇳🇿",
    startDate: "2024-10-15",
    status: "rejected",
    stage: "application",
    progress: 25,
    agent: "Pedro Silva",
    avatar: "IM",
    lastLogin: "Hace 2 semanas",
    documents: [
      { name: "Pasaporte", status: "approved", uploadDate: "2024-01-18" },
      { name: "English Test", status: "rejected", uploadDate: "2024-01-20" },
      { name: "Bank Statement", status: "rejected", uploadDate: "2024-01-19" },
      { name: "Health Insurance", status: "pending", uploadDate: null },
      { name: "Criminal Background", status: "pending", uploadDate: null }
    ],
    budget: "15,000-20,000 USD",
    createdAt: "2024-01-18T14:45:00Z"
  },
  {
    id: 8,
    name: "Sofía Hernández",
    email: "sofia.hernandez@email.com",
    phone: "+57 307 890 1234",
    program: "Curso de Alemán - Goethe Institute Berlin",
    destination: "Alemania",
    flag: "🇩🇪",
    startDate: "2024-09-30",
    status: "pending",
    stage: "documentation",
    progress: 40,
    agent: "Carlos Méndez",
    avatar: "SH",
    lastLogin: "Hace 1 día",
    documents: [
      { name: "Pasaporte", status: "approved", uploadDate: "2024-01-16" },
      { name: "Certificado Médico", status: "review", uploadDate: "2024-01-21" },
      { name: "Seguro de Viaje", status: "pending", uploadDate: null },
      { name: "Carta de Motivación", status: "approved", uploadDate: "2024-01-19" },
      { name: "Comprobante Económico", status: "pending", uploadDate: null }
    ],
    budget: "12,000-16,000 USD",
    createdAt: "2024-01-16T10:20:00Z"
  }
];

// Enhanced stage definitions
const stages = {
  application: { label: "Aplicación", color: "bg-blue-500", textColor: "text-blue-700", bgColor: "bg-blue-50" },
  documentation: { label: "Documentación", color: "bg-yellow-500", textColor: "text-yellow-700", bgColor: "bg-yellow-50" },
  interview: { label: "Entrevista", color: "bg-purple-500", textColor: "text-purple-700", bgColor: "bg-purple-50" },
  visa: { label: "Proceso de Visa", color: "bg-orange-500", textColor: "text-orange-700", bgColor: "bg-orange-50" },
  completed: { label: "Completado", color: "bg-green-500", textColor: "text-green-700", bgColor: "bg-green-50" }
};

const statusColors = {
  approved: "bg-green-500",
  in_process: "bg-blue-500",
  pending: "bg-yellow-500", 
  rejected: "bg-red-500",
  inactive: "bg-gray-500"
};

const getStatusColor = (status: string) => {
  const colors = {
    approved: "bg-green-100 text-green-800",
    in_process: "bg-blue-100 text-blue-800",
    pending: "bg-yellow-100 text-yellow-800",
    rejected: "bg-red-100 text-red-800",
    review: "bg-purple-100 text-purple-800"
  };
  return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
};

const getStatusText = (status: string) => {
  const texts = {
    approved: "Aprobado",
    in_process: "En Proceso",
    pending: "Pendiente",
    rejected: "Rechazado",
    review: "En Revisión"
  };
  return texts[status as keyof typeof texts] || status;
};

const getDocumentStatusIcon = (status: string) => {
  switch (status) {
    case 'approved':
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    case 'rejected':
      return <FileX className="h-4 w-4 text-red-600" />;
    case 'review':
      return <FileClock className="h-4 w-4 text-purple-600" />;
    case 'pending':
      return <Clock className="h-4 w-4 text-yellow-600" />;
    default:
      return <FileText className="h-4 w-4 text-gray-600" />;
  }
};

const getProgressColor = (progress: number) => {
  if (progress >= 80) return "bg-green-600";
  if (progress >= 60) return "bg-blue-600";
  if (progress >= 40) return "bg-yellow-600";
  return "bg-red-600";
};

// Statistical card component
const StatCard = ({ title, value, subtitle, icon: Icon, color, trend = null }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        {trend && (
          <div className="flex items-center mt-2">
            <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
            <span className="text-sm font-medium text-green-600">{trend}</span>
          </div>
        )}
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
  </div>
);

// Enhanced student card component with ICE branding
const StudentCard = ({ student, onViewDetails, onContact }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-sm">
          <span className="text-white font-bold text-sm">{student.avatar}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">{student.name}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-xl">{student.flag}</span>
            <span className="text-sm font-medium text-gray-600">{student.destination}</span>
            <div className={`w-2 h-2 rounded-full ${statusColors[student.status as keyof typeof statusColors]} ring-2 ring-white shadow-sm`}></div>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${stages[student.stage as keyof typeof stages].bgColor} ${stages[student.stage as keyof typeof stages].textColor} border`}>
          {stages[student.stage as keyof typeof stages].label}
        </div>
        <div className="flex items-center mt-2 text-xs text-gray-500">
          <Clock className="h-3 w-3 mr-1" />
          {student.lastLogin}
        </div>
      </div>
    </div>

    <div className="mb-4">
      <p className="text-sm font-semibold text-gray-900 mb-3 line-clamp-2">{student.program}</p>
      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
        <span className="font-medium">Progreso del proceso</span>
        <span className="font-bold text-gray-900">{student.progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-500 ${getProgressColor(student.progress)} shadow-sm`}
          style={{ width: `${student.progress}%` }}
        ></div>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-3 mb-5 text-sm">
      <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-100">
        <p className="font-bold text-lg text-gray-900">{student.documents.length}</p>
        <p className="text-xs text-gray-600 font-medium">Documentos</p>
      </div>
      <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
        <p className="font-bold text-lg text-green-600">{student.documents.filter((d: any) => d.status === 'approved').length}</p>
        <p className="text-xs text-green-700 font-medium">Aprobados</p>
      </div>
      <div className="text-center p-3 bg-yellow-50 rounded-lg border border-yellow-100">
        <p className="font-bold text-lg text-yellow-600">{student.documents.filter((d: any) => d.status === 'pending').length}</p>
        <p className="text-xs text-yellow-700 font-medium">Pendientes</p>
      </div>
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <div className="text-sm text-gray-600">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1 text-gray-400" />
          <span className="font-medium">Inicio:</span>
          <span className="ml-1">{student.startDate}</span>
        </div>
      </div>
      <div className="flex space-x-2">
        <button 
          onClick={() => onViewDetails(student)}
          className="flex items-center px-4 py-2 text-sm font-medium bg-red-50 text-red-600 rounded-lg hover:bg-red-100 hover:text-red-700 transition-all border border-red-200 hover:border-red-300"
        >
          <Eye className="h-4 w-4 mr-1" />
          Ver detalles
        </button>
        <button 
          onClick={() => onContact(student)}
          className="flex items-center px-4 py-2 text-sm font-medium bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-800 transition-all border border-gray-200 hover:border-gray-300"
        >
          <MessageCircle className="h-4 w-4 mr-1" />
          Contactar
        </button>
      </div>
    </div>
  </div>
);

// Student Details Modal Component
const StudentDetailsModal = ({ student, isOpen, onClose }: any) => {
  if (!isOpen || !student) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{student.avatar}</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{student.name}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-2xl">{student.flag}</span>
                  <span className="text-red-100">{student.destination}</span>
                  <div className={`w-3 h-3 rounded-full ${statusColors[student.status as keyof typeof statusColors]} border-2 border-white`}></div>
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
              <p className="text-2xl font-bold text-red-600">{student.progress}%</p>
              <p className="text-sm text-red-700 font-medium">Progreso</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-2xl font-bold text-green-600">{student.documents.filter((d: any) => d.status === 'approved').length}</p>
              <p className="text-sm text-green-700 font-medium">Aprobados</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-100">
              <p className="text-2xl font-bold text-yellow-600">{student.documents.filter((d: any) => d.status === 'pending').length}</p>
              <p className="text-sm text-yellow-700 font-medium">Pendientes</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-2xl font-bold text-blue-600">{Math.floor((new Date().getTime() - new Date(student.createdAt).getTime()) / (1000 * 3600 * 24))}</p>
              <p className="text-sm text-blue-700 font-medium">Días</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Student Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Información del Estudiante</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Programa:</span>
                    <span className="text-sm text-gray-900 font-semibold">{student.program}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Email:</span>
                    <span className="text-sm text-gray-900">{student.email}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Teléfono:</span>
                    <span className="text-sm text-gray-900">{student.phone}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Agente asignado:</span>
                    <span className="text-sm text-gray-900 font-semibold">{student.agent}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Presupuesto:</span>
                    <span className="text-sm text-gray-900 font-semibold">{student.budget}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Fecha de inicio:</span>
                    <span className="text-sm text-gray-900">{student.startDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Último acceso:</span>
                    <span className="text-sm text-gray-900">{student.lastLogin}</span>
                  </div>
                </div>
              </div>

              {/* Status and Stage */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Estado del Proceso</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Estado actual:</span>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(student.status)}`}>
                      {getStatusText(student.status)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Etapa actual:</span>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${stages[student.stage as keyof typeof stages].bgColor} ${stages[student.stage as keyof typeof stages].textColor}`}>
                      {stages[student.stage as keyof typeof stages].label}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span className="font-medium">Progreso del proceso:</span>
                      <span className="font-bold text-gray-900">{student.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${getProgressColor(student.progress)}`}
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Documentos del Estudiante</h3>
              <div className="space-y-3">
                {student.documents.map((doc: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center space-x-3">
                      {getDocumentStatusIcon(doc.status)}
                      <div>
                        <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                        {doc.uploadDate && (
                          <p className="text-xs text-gray-500">Subido: {doc.uploadDate}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                        {getStatusText(doc.status)}
                      </div>
                      <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-4 pt-8 border-t border-gray-200">
            <button 
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cerrar
            </button>
            <button className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              Enviar Email
            </button>
            <button className="flex items-center px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              Contactar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Modal Component
const ContactModal = ({ student, isOpen, onClose }: any) => {
  if (!isOpen || !student) return null;

  const handleContact = (method: string) => {
    switch (method) {
      case 'email':
        window.open(`mailto:${student.email}?subject=Seguimiento de aplicación - ${student.name}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${student.phone}`, '_blank');
        break;
      case 'whatsapp':
        const whatsappNumber = student.phone.replace(/[^\d]/g, '');
        const message = `Hola ${student.name}, te contacto desde ICE International respecto a tu aplicación para ${student.program}.`;
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
        break;
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Contactar Estudiante</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{student.avatar}</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{student.name}</p>
                <p className="text-sm text-gray-500">{student.program}</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button 
              onClick={() => handleContact('email')}
              className="w-full flex items-center px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
            >
              <Mail className="h-5 w-5 mr-3" />
              <div className="text-left">
                <p className="font-medium">Enviar Email</p>
                <p className="text-sm text-blue-600">{student.email}</p>
              </div>
            </button>
            
            <button 
              onClick={() => handleContact('phone')}
              className="w-full flex items-center px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors border border-green-200"
            >
              <Phone className="h-5 w-5 mr-3" />
              <div className="text-left">
                <p className="font-medium">Llamar</p>
                <p className="text-sm text-green-600">{student.phone}</p>
              </div>
            </button>
            
            <button 
              onClick={() => handleContact('whatsapp')}
              className="w-full flex items-center px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors border border-green-200"
            >
              <MessageSquare className="h-5 w-5 mr-3" />
              <div className="text-left">
                <p className="font-medium">WhatsApp</p>
                <p className="text-sm text-green-600">Enviar mensaje</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [stageFilter, setStageFilter] = useState("all");
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const filteredStudents = mockStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || student.status === statusFilter;
    const matchesStage = stageFilter === "all" || student.stage === stageFilter;
    
    return matchesSearch && matchesStatus && matchesStage;
  });

  const stats = {
    total: mockStudents.length,
    approved: mockStudents.filter(s => s.status === "approved").length,
    in_process: mockStudents.filter(s => s.status === "in_process").length,
    pending: mockStudents.filter(s => s.status === "pending").length,
    rejected: mockStudents.filter(s => s.status === "rejected").length,
    avgProgress: Math.round(mockStudents.reduce((sum, s) => sum + s.progress, 0) / mockStudents.length)
  };

  const handleViewDetails = (student: any) => {
    setSelectedStudent(student);
    setShowDetailsModal(true);
  };

  const handleContact = (student: any) => {
    setSelectedStudent(student);
    setShowContactModal(true);
  };

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedStudent(null);
  };

  const handleCloseContactModal = () => {
    setShowContactModal(false);
    setSelectedStudent(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ICE Branded Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 shadow-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/ice-dashboard"
                className="p-2 hover:bg-red-500 hover:bg-opacity-20 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-white" />
              </Link>
              <div className="flex items-center space-x-4">
                {/* ICE Logo */}
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="text-white">
                    <div className="text-lg font-bold">ICE</div>
                    <div className="text-xs opacity-90">International</div>
                  </div>
                </div>
                <div className="h-8 w-px bg-white opacity-30"></div>
                <div>
                  <h1 className="text-xl font-bold text-white">Portal Estudiantil</h1>
                  <p className="text-sm text-red-100">Gestión de documentos y seguimiento de aplicaciones</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 text-red-600 bg-white rounded-lg hover:bg-red-50 transition-colors shadow-md">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Estudiante
              </button>
              <button className="flex items-center px-4 py-2 border border-white border-opacity-30 text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </button>
              <div className="flex items-center space-x-2 pl-4 border-l border-white border-opacity-30">
                <button className="p-2 text-white hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
                  <Bell className="h-5 w-5" />
                </button>
                <button className="p-2 text-white hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
                  <Settings className="h-5 w-5" />
                </button>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Estudiantes</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
            <div className="text-sm text-gray-600">Aprobados</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-blue-600">{stats.in_process}</div>
            <div className="text-sm text-gray-600">En Proceso</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            <div className="text-sm text-gray-600">Pendientes</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
            <div className="text-sm text-gray-600">Rechazados</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-purple-600">{stats.avgProgress}%</div>
            <div className="text-sm text-gray-600">Progreso Promedio</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar estudiantes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
<div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Todos los estados</option>
                  <option value="approved">Aprobados</option>
                  <option value="in_process">En Proceso</option>
                  <option value="pending">Pendientes</option>
                  <option value="rejected">Rechazados</option>
                </select>
              </div>

              <select 
                value={stageFilter}
                onChange={(e) => setStageFilter(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Todas las etapas</option>
                <option value="application">Aplicación</option>
                <option value="documentation">Documentación</option>
                <option value="interview">Entrevista</option>
                <option value="visa">Proceso de Visa</option>
                <option value="completed">Completado</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                Mostrando {filteredStudents.length} de {mockStudents.length} estudiantes
              </span>
            </div>
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {filteredStudents.map((student) => (
            <StudentCard 
              key={student.id} 
              student={student}
              onViewDetails={handleViewDetails}
              onContact={handleContact}
            />
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-100 text-center">
            <GraduationCap className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron estudiantes</h3>
            <p className="text-gray-500 mb-6">
              {searchTerm || statusFilter !== "all" || stageFilter !== "all" 
                ? "Intenta ajustar los filtros de búsqueda"
                : "No hay estudiantes registrados en el sistema"
              }
            </p>
            <button className="flex items-center mx-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="h-4 w-4 mr-2" />
              Agregar Estudiante
            </button>
          </div>
        )}

        {/* Quick Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Distribution by Stage */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribución por Etapa</h3>
            <div className="space-y-4">
              {Object.entries(stages).map(([key, stage]) => {
                const count = mockStudents.filter(s => s.stage === key).length;
                const percentage = (count / mockStudents.length) * 100;
                
                return (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                      <span className="text-sm font-medium text-gray-900">{stage.label}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{count} estudiantes</span>
                      <span className="text-xs text-gray-500">({percentage.toFixed(0)}%)</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top Countries */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Destinos Más Populares</h3>
            <div className="space-y-4">
              {Object.entries(
                mockStudents.reduce((acc, student) => {
                  acc[student.destination] = (acc[student.destination] || 0) + 1;
                  return acc;
                }, {} as Record<string, number>)
              )
                .sort(([,a], [,b]) => b - a)
                .map(([country, count]) => {
                  const student = mockStudents.find(s => s.destination === country);
                  const percentage = (count / mockStudents.length) * 100;
                  
                  return (
                    <div key={country} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{student?.flag}</span>
                        <span className="text-sm font-medium text-gray-900">{country}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{count} estudiantes</span>
                        <span className="text-xs text-gray-500">({percentage.toFixed(0)}%)</span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Mostrando 1 a {filteredStudents.length} de {mockStudents.length} resultados
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
              Anterior
            </button>
            <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
              1
            </button>
            <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
              Siguiente
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <StudentDetailsModal 
        student={selectedStudent}
        isOpen={showDetailsModal}
        onClose={handleCloseDetailsModal}
      />
      
      <ContactModal 
        student={selectedStudent}
        isOpen={showContactModal}
        onClose={handleCloseContactModal}
      />
    </div>
  );
}

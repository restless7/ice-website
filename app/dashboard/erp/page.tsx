"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Layers,
  DollarSign,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Globe,
  Calendar,
  Search,
  Filter,
  Download,
  Plus,
  MoreVertical,
  Eye,
  Edit,
  FileText,
  CreditCard,
  PieChart,
  Activity,
  MapPin,
  Clock,
  Star,
  AlertTriangle,
  CheckCircle,
  Building,
  Plane,
  GraduationCap
} from "lucide-react";

const mockPrograms = [
  {
    id: 1,
    name: "Intercambio Académico - Universidad de Toronto",
    destination: "Canadá",
    type: "Académico",
    duration: "1 Semestre",
    price: 25000,
    applications: 45,
    approved: 32,
    revenue: 800000,
    startDate: "2024-09-01",
    institution: "Universidad de Toronto",
    status: "active",
    capacity: 50,
    requirements: ["IELTS 7.0+", "Promedio 4.0+", "Carta Motivación"],
    commission: 15
  },
  {
    id: 2,
    name: "Work & Study - Melbourne Institute",
    destination: "Australia",
    type: "Trabajo y Estudio",
    duration: "1 Año",
    price: 18000,
    applications: 78,
    approved: 56,
    revenue: 1008000,
    startDate: "2024-07-15",
    institution: "Melbourne Institute",
    status: "active",
    capacity: 80,
    requirements: ["Inglés B2", "Experiencia laboral"],
    commission: 12
  },
  {
    id: 3,
    name: "Curso de Inglés - EC Language Malta",
    destination: "Malta",
    type: "Idiomas",
    duration: "3 Meses",
    price: 8000,
    applications: 34,
    approved: 28,
    revenue: 224000,
    startDate: "2024-05-20",
    institution: "EC Language Schools",
    status: "active",
    capacity: 40,
    requirements: ["Nivel básico inglés"],
    commission: 10
  },
  {
    id: 4,
    name: "Master's Degree - King's College London",
    destination: "Reino Unido",
    type: "Posgrado",
    duration: "2 Años",
    price: 45000,
    applications: 23,
    approved: 12,
    revenue: 540000,
    startDate: "2024-09-30",
    institution: "King's College London",
    status: "limited",
    capacity: 15,
    requirements: ["IELTS 7.5+", "Título universitario", "GPA 3.5+"],
    commission: 18
  },
  {
    id: 5,
    name: "Curso de Francés - Alliance Française",
    destination: "Francia",
    type: "Idiomas",
    duration: "6 Meses",
    price: 12000,
    applications: 19,
    approved: 15,
    revenue: 180000,
    startDate: "2024-08-01",
    institution: "Alliance Française",
    status: "active",
    capacity: 25,
    requirements: ["Nivel básico francés"],
    commission: 8
  },
  {
    id: 6,
    name: "Programa de Verano - UCLA",
    destination: "Estados Unidos",
    type: "Verano",
    duration: "2 Meses",
    price: 15000,
    applications: 12,
    approved: 8,
    revenue: 120000,
    startDate: "2024-06-15",
    institution: "UCLA Extension",
    status: "closed",
    capacity: 20,
    requirements: ["TOEFL 80+", "Transcripts"],
    commission: 14
  }
];

const mockFinances = {
  revenue: {
    total: 2872000,
    thisMonth: 387000,
    lastMonth: 342000,
    growth: 13.2
  },
  expenses: {
    total: 1580000,
    thisMonth: 198000,
    lastMonth: 185000,
    growth: 7.0
  },
  profit: {
    total: 1292000,
    thisMonth: 189000,
    lastMonth: 157000,
    margin: 45.0
  },
  commissions: {
    total: 425000,
    pending: 78000,
    paid: 347000
  },
  receivables: {
    pending: 234000,
    overdue: 45000,
    collected: 2638000
  }
};

const getStatusColor = (status: string) => {
  const colors = {
    active: "bg-green-100 text-green-800",
    limited: "bg-yellow-100 text-yellow-800",
    closed: "bg-red-100 text-red-800",
    pending: "bg-blue-100 text-blue-800"
  };
  return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
};

const getStatusText = (status: string) => {
  const texts = {
    active: "Activo",
    limited: "Cupos Limitados",
    closed: "Cerrado",
    pending: "Pendiente"
  };
  return texts[status as keyof typeof texts] || status;
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'Académico':
      return <GraduationCap className="h-4 w-4" />;
    case 'Trabajo y Estudio':
      return <Building className="h-4 w-4" />;
    case 'Idiomas':
      return <Globe className="h-4 w-4" />;
    case 'Posgrado':
      return <Star className="h-4 w-4" />;
    case 'Verano':
      return <Plane className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

export default function ERPPage() {
  const [activeTab, setActiveTab] = useState("programs");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPrograms = mockPrograms.filter(program => {
    const matchesFilter = selectedFilter === "all" || program.status === selectedFilter;
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const overallStats = {
    totalPrograms: mockPrograms.length,
    activePrograms: mockPrograms.filter(p => p.status === "active").length,
    totalApplications: mockPrograms.reduce((sum, p) => sum + p.applications, 0),
    totalRevenue: mockPrograms.reduce((sum, p) => sum + p.revenue, 0),
    avgApprovalRate: Math.round(
      (mockPrograms.reduce((sum, p) => sum + (p.approved / p.applications), 0) / mockPrograms.length) * 100
    )
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/ice-dashboard"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </Link>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Layers className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Sistema ERP</h1>
                  <p className="text-sm text-gray-500">Centralización de programas, finanzas y operaciones</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Programa
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Exportar Datos
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Tabs Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("programs")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "programs"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Programas</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("finances")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "finances"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4" />
                <span>Finanzas</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "analytics"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span>Análisis</span>
              </div>
            </button>
          </div>
        </div>

        {/* Programs Tab */}
        {activeTab === "programs" && (
          <>
            {/* Program Stats */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-gray-900">{overallStats.totalPrograms}</div>
                <div className="text-sm text-gray-600">Total Programas</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-green-600">{overallStats.activePrograms}</div>
                <div className="text-sm text-gray-600">Activos</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-blue-600">{overallStats.totalApplications}</div>
                <div className="text-sm text-gray-600">Aplicaciones</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-purple-600">{overallStats.avgApprovalRate}%</div>
                <div className="text-sm text-gray-600">Aprobación Promedio</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-orange-600">
                  ${(overallStats.totalRevenue / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm text-gray-600">Revenue Total</div>
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
                      placeholder="Buscar programas..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">Todos los estados</option>
                    <option value="active">Activos</option>
                    <option value="limited">Cupos Limitados</option>
                    <option value="closed">Cerrados</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    Mostrando {filteredPrograms.length} de {mockPrograms.length} programas
                  </span>
                </div>
              </div>
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredPrograms.map((program) => (
                <div key={program.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  {/* Program Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          {getTypeIcon(program.type)}
                          <span className="sr-only">{program.type}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                            {program.name}
                          </h3>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{program.destination}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{program.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(program.status)}`}>
                          {getStatusText(program.status)}
                        </span>
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Program Metrics */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          ${program.price.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">Precio USD</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          {program.applications}/{program.capacity}
                        </div>
                        <div className="text-xs text-gray-500">Aplicaciones</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">
                          {Math.round((program.approved / program.applications) * 100)}%
                        </div>
                        <div className="text-xs text-gray-500">Aprobación</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">
                          ${(program.revenue / 1000).toFixed(0)}K
                        </div>
                        <div className="text-xs text-gray-500">Revenue</div>
                      </div>
                    </div>
                    
                    {/* Capacity Bar */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>Capacidad</span>
                        <span>{program.applications}/{program.capacity}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            (program.applications / program.capacity) > 0.9 ? 'bg-red-600' :
                            (program.applications / program.capacity) > 0.7 ? 'bg-yellow-600' : 'bg-green-600'
                          }`}
                          style={{ width: `${Math.min((program.applications / program.capacity) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Program Details */}
                  <div className="p-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Detalles del Programa</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Institución:</span>
                        <span className="text-gray-900 font-medium">{program.institution}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Fecha de Inicio:</span>
                        <span className="text-gray-900">
                          {new Date(program.startDate).toLocaleDateString('es-ES')}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Comisión:</span>
                        <span className="text-gray-900 font-medium">{program.commission}%</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="text-xs font-semibold text-gray-700 mb-2">Requisitos:</h5>
                      <div className="flex flex-wrap gap-2">
                        {program.requirements.map((req, index) => (
                          <span 
                            key={index}
                            className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                          <FileText className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="text-xs text-gray-500">
                        ID: {program.id.toString().padStart(4, '0')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Finances Tab */}
        {activeTab === "finances" && (
          <>
            {/* Financial Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Revenue Total</p>
                    <p className="text-2xl font-bold text-green-600">
                      ${(mockFinances.revenue.total / 1000000).toFixed(2)}M
                    </p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                      <span className="text-sm text-green-600 font-medium">
                        +{mockFinances.revenue.growth}%
                      </span>
                      <span className="text-sm text-gray-500 ml-1">vs mes anterior</span>
                    </div>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Gastos</p>
                    <p className="text-2xl font-bold text-red-600">
                      ${(mockFinances.expenses.total / 1000000).toFixed(2)}M
                    </p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-red-600 mr-1" />
                      <span className="text-sm text-red-600 font-medium">
                        +{mockFinances.expenses.growth}%
                      </span>
                      <span className="text-sm text-gray-500 ml-1">vs mes anterior</span>
                    </div>
                  </div>
                  <div className="p-3 bg-red-100 rounded-lg">
                    <TrendingDown className="h-6 w-6 text-red-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Utilidad</p>
                    <p className="text-2xl font-bold text-blue-600">
                      ${(mockFinances.profit.total / 1000000).toFixed(2)}M
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-blue-600 font-medium">
                        {mockFinances.profit.margin}%
                      </span>
                      <span className="text-sm text-gray-500 ml-1">margen</span>
                    </div>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Comisiones</p>
                    <p className="text-2xl font-bold text-purple-600">
                      ${(mockFinances.commissions.total / 1000).toFixed(0)}K
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-yellow-600 font-medium">
                        ${(mockFinances.commissions.pending / 1000).toFixed(0)}K
                      </span>
                      <span className="text-sm text-gray-500 ml-1">pendientes</span>
                    </div>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Revenue Chart */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Revenue Mensual</h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded">6M</button>
                    <button className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded">1A</button>
                  </div>
                </div>
                
                <div className="h-64 bg-gradient-to-t from-green-50 to-transparent rounded-lg flex items-end justify-between px-4 pb-4">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div
                      key={i}
                      className="bg-green-600 rounded-t-md"
                      style={{ 
                        height: `${Math.random() * 80 + 20}%`,
                        width: '6%'
                      }}
                    />
                  ))}
                </div>
                
                <div className="flex justify-between mt-4 text-xs text-gray-600">
                  {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map(month => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>

              {/* Expense Breakdown */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribución de Gastos</h3>
                
                <div className="space-y-4">
                  {[
                    { category: 'Marketing', amount: 450000, percentage: 28, color: 'bg-blue-600' },
                    { category: 'Operaciones', amount: 380000, percentage: 24, color: 'bg-green-600' },
                    { category: 'Personal', amount: 320000, percentage: 20, color: 'bg-purple-600' },
                    { category: 'Tecnología', amount: 280000, percentage: 18, color: 'bg-yellow-600' },
                    { category: 'Otros', amount: 150000, percentage: 10, color: 'bg-gray-600' }
                  ].map((expense, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${expense.color}`}></div>
                        <span className="text-sm font-medium text-gray-900">{expense.category}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          ${(expense.amount / 1000).toFixed(0)}K
                        </div>
                        <div className="text-xs text-gray-500">{expense.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Status */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Estado de Pagos</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    ${(mockFinances.receivables.collected / 1000000).toFixed(2)}M
                  </div>
                  <div className="text-sm text-gray-600">Cobrado</div>
                  <div className="flex items-center justify-center mt-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-xs text-green-600">Completado</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    ${(mockFinances.receivables.pending / 1000).toFixed(0)}K
                  </div>
                  <div className="text-sm text-gray-600">Pendiente</div>
                  <div className="flex items-center justify-center mt-2">
                    <Clock className="h-4 w-4 text-yellow-600 mr-1" />
                    <span className="text-xs text-yellow-600">En Proceso</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">
                    ${(mockFinances.receivables.overdue / 1000).toFixed(0)}K
                  </div>
                  <div className="text-sm text-gray-600">Vencido</div>
                  <div className="flex items-center justify-center mt-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-1" />
                    <span className="text-xs text-red-600">Requiere Atención</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Programs Performance */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Rendimiento por Programa</h3>
              <div className="space-y-4">
                {mockPrograms.slice(0, 4).map((program) => (
                  <div key={program.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        {getTypeIcon(program.type)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 line-clamp-1">
                          {program.name.substring(0, 30)}...
                        </p>
                        <p className="text-xs text-gray-500">{program.destination}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-green-600">
                        ${(program.revenue / 1000).toFixed(0)}K
                      </p>
                      <p className="text-xs text-gray-500">{program.applications} apps</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Destinations Analysis */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Destinos Más Populares</h3>
              <div className="space-y-4">
                {Object.entries(
                  mockPrograms.reduce((acc, program) => {
                    acc[program.destination] = (acc[program.destination] || 0) + program.applications;
                    return acc;
                  }, {} as Record<string, number>)
                )
                .sort(([,a], [,b]) => b - a)
                .slice(0, 5)
                .map(([destination, applications]) => (
                  <div key={destination} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-900">{destination}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-blue-600">{applications}</span>
                      <span className="text-xs text-gray-500 ml-1">aplicaciones</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

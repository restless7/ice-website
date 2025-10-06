"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Cpu,
  MessageSquare,
  Bot,
  Users,
  Clock,
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  Download,
  Plus,
  MoreVertical,
  Eye,
  Edit,
  CheckCircle,
  AlertCircle,
  Star,
  Phone,
  Mail,
  Calendar,
  Activity,
  BarChart3,
  Settings,
  PlayCircle,
  PauseCircle,
  RefreshCw,
  Send,
  Smile,
  Frown,
  Meh,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";

const mockTickets = [
  {
    id: 1,
    subject: "Consulta sobre programa de intercambio",
    customer: "Ana María Torres",
    email: "ana.torres@gmail.com",
    channel: "WhatsApp",
    status: "resolved",
    priority: "medium",
    createdAt: "2024-01-15T10:30:00Z",
    resolvedAt: "2024-01-15T10:45:00Z",
    aiHandled: true,
    satisfaction: 5,
    messages: 3,
    category: "information",
    responseTime: "15 min",
    agent: null
  },
  {
    id: 2,
    subject: "Problema con documentación visa",
    customer: "Carlos Mendoza",
    email: "carlos.mendoza@outlook.com",
    channel: "Email",
    status: "in_progress",
    priority: "high",
    createdAt: "2024-01-15T09:20:00Z",
    resolvedAt: null,
    aiHandled: false,
    satisfaction: null,
    messages: 8,
    category: "technical",
    responseTime: "5 min",
    agent: "María González"
  },
  {
    id: 3,
    subject: "Información sobre precios Malta",
    customer: "Sofia Ramirez",
    email: "sofia.ramirez@hotmail.com",
    channel: "Website Chat",
    status: "resolved",
    priority: "low",
    createdAt: "2024-01-15T08:15:00Z",
    resolvedAt: "2024-01-15T08:20:00Z",
    aiHandled: true,
    satisfaction: 4,
    messages: 2,
    category: "pricing",
    responseTime: "5 min",
    agent: null
  },
  {
    id: 4,
    subject: "Cambio de fecha de programa",
    customer: "Diego Herrera",
    email: "diego.herrera@gmail.com",
    channel: "Phone",
    status: "escalated",
    priority: "high",
    createdAt: "2024-01-14T16:45:00Z",
    resolvedAt: null,
    aiHandled: false,
    satisfaction: null,
    messages: 12,
    category: "modification",
    responseTime: "2 min",
    agent: "Carlos Méndez"
  },
  {
    id: 5,
    subject: "Pregunta sobre requisitos Reino Unido",
    customer: "Isabella Martínez",
    email: "isabella.martinez@gmail.com",
    channel: "WhatsApp",
    status: "resolved",
    priority: "medium",
    createdAt: "2024-01-14T14:30:00Z",
    resolvedAt: "2024-01-14T14:38:00Z",
    aiHandled: true,
    satisfaction: 5,
    messages: 4,
    category: "requirements",
    responseTime: "8 min",
    agent: null
  }
];

const mockAIMetrics = {
  totalInteractions: 2847,
  aiResolved: 2156,
  escalated: 691,
  avgResolutionTime: "12 min",
  satisfactionRate: 4.2,
  accuracyRate: 89.3,
  uptime: 99.8,
  languages: ["Español", "Inglés", "Portugués"],
  topCategories: [
    { name: "Información General", count: 856, percentage: 30 },
    { name: "Precios y Programas", count: 712, percentage: 25 },
    { name: "Requisitos", count: 569, percentage: 20 },
    { name: "Documentación", count: 427, percentage: 15 },
    { name: "Técnico", count: 283, percentage: 10 }
  ]
};

const mockKnowledgeBase = [
  {
    id: 1,
    title: "Requisitos para programas de intercambio",
    category: "Requisitos",
    views: 1245,
    lastUpdated: "2024-01-10",
    accuracy: 95,
    status: "active"
  },
  {
    id: 2,
    title: "Precios y métodos de pago",
    category: "Precios",
    views: 987,
    lastUpdated: "2024-01-12",
    accuracy: 92,
    status: "active"
  },
  {
    id: 3,
    title: "Documentos necesarios por país",
    category: "Documentación",
    views: 756,
    lastUpdated: "2024-01-08",
    accuracy: 88,
    status: "needs_update"
  },
  {
    id: 4,
    title: "Proceso de aplicación paso a paso",
    category: "Procesos",
    views: 634,
    lastUpdated: "2024-01-05",
    accuracy: 94,
    status: "active"
  }
];

const getStatusColor = (status: string) => {
  const colors = {
    resolved: "bg-green-100 text-green-800",
    in_progress: "bg-blue-100 text-blue-800",
    escalated: "bg-red-100 text-red-800",
    pending: "bg-yellow-100 text-yellow-800",
    closed: "bg-gray-100 text-gray-800"
  };
  return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
};

const getStatusText = (status: string) => {
  const texts = {
    resolved: "Resuelto",
    in_progress: "En Progreso",
    escalated: "Escalado",
    pending: "Pendiente",
    closed: "Cerrado"
  };
  return texts[status as keyof typeof texts] || status;
};

const getPriorityColor = (priority: string) => {
  const colors = {
    high: "text-red-600",
    medium: "text-yellow-600",
    low: "text-green-600"
  };
  return colors[priority as keyof typeof colors] || "text-gray-600";
};

const getChannelIcon = (channel: string) => {
  switch (channel) {
    case 'WhatsApp':
      return <MessageSquare className="h-4 w-4 text-green-600" />;
    case 'Email':
      return <Mail className="h-4 w-4 text-blue-600" />;
    case 'Phone':
      return <Phone className="h-4 w-4 text-purple-600" />;
    case 'Website Chat':
      return <Bot className="h-4 w-4 text-orange-600" />;
    default:
      return <MessageSquare className="h-4 w-4 text-gray-600" />;
  }
};

const getSatisfactionIcon = (rating: number | null) => {
  if (rating === null) return <Meh className="h-4 w-4 text-gray-400" />;
  if (rating >= 4) return <Smile className="h-4 w-4 text-green-600" />;
  if (rating >= 3) return <Meh className="h-4 w-4 text-yellow-600" />;
  return <Frown className="h-4 w-4 text-red-600" />;
};

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [aiStatus, setAiStatus] = useState("active");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const filteredTickets = mockTickets.filter(ticket => {
    const matchesFilter = selectedFilter === "all" || ticket.status === selectedFilter;
    const matchesSearch = ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const overallStats = {
    totalTickets: mockTickets.length,
    resolvedTickets: mockTickets.filter(t => t.status === "resolved").length,
    aiResolvedPercentage: Math.round((mockTickets.filter(t => t.aiHandled).length / mockTickets.length) * 100),
    avgSatisfaction: mockTickets
      .filter(t => t.satisfaction !== null)
      .reduce((sum, t) => sum + (t.satisfaction || 0), 0) / mockTickets.filter(t => t.satisfaction !== null).length
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
                  <Cpu className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Soporte IA 24/7</h1>
                  <p className="text-sm text-gray-500">Asistente inteligente para atención al cliente</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">IA Activa</span>
              </div>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Settings className="h-4 w-4 mr-2" />
                Configurar IA
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
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "overview"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span>Resumen</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("tickets")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "tickets"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span>Tickets</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("knowledge")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "knowledge"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Bot className="h-4 w-4" />
                <span>Base de Conocimiento</span>
              </div>
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <>
            {/* AI Performance Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Interacciones Totales</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {mockAIMetrics.totalInteractions.toLocaleString()}
                    </p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                      <span className="text-sm text-green-600 font-medium">+15%</span>
                      <span className="text-sm text-gray-500 ml-1">vs mes anterior</span>
                    </div>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Resolución IA</p>
                    <p className="text-2xl font-bold text-green-600">
                      {Math.round((mockAIMetrics.aiResolved / mockAIMetrics.totalInteractions) * 100)}%
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-green-600 font-medium">
                        {mockAIMetrics.aiResolved.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">resueltos</span>
                    </div>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Bot className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Tiempo Respuesta</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {mockAIMetrics.avgResolutionTime}
                    </p>
                    <div className="flex items-center mt-2">
                      <TrendingDown className="h-4 w-4 text-green-600 mr-1" />
                      <span className="text-sm text-green-600 font-medium">-23%</span>
                      <span className="text-sm text-gray-500 ml-1">más rápido</span>
                    </div>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Satisfacción</p>
                    <p className="text-2xl font-bold text-yellow-600">
                      {mockAIMetrics.satisfactionRate.toFixed(1)}/5
                    </p>
                    <div className="flex items-center mt-2">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${
                              i < Math.floor(mockAIMetrics.satisfactionRate) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* AI Performance Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Resolution Trend */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Tendencia de Resoluciones</h3>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded">7D</button>
                    <button className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded">30D</button>
                  </div>
                </div>
                
                <div className="h-64 bg-gradient-to-t from-blue-50 to-transparent rounded-lg flex items-end justify-between px-4 pb-4">
                  {Array.from({ length: 7 }, (_, i) => (
                    <div key={i} className="flex flex-col items-center space-y-2">
                      <div
                        className="bg-green-600 rounded-t-md"
                        style={{ 
                          height: `${Math.random() * 60 + 40}%`,
                          width: '20px'
                        }}
                      />
                      <div
                        className="bg-blue-600 rounded-t-md"
                        style={{ 
                          height: `${Math.random() * 30 + 20}%`,
                          width: '20px'
                        }}
                      />
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between mt-4 text-xs text-gray-600">
                  {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(day => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-600 rounded"></div>
                    <span className="text-xs text-gray-600">IA Resuelto</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-600 rounded"></div>
                    <span className="text-xs text-gray-600">Escalado</span>
                  </div>
                </div>
              </div>

              {/* Category Distribution */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorías Más Consultadas</h3>
                
                <div className="space-y-4">
                  {mockAIMetrics.topCategories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full bg-blue-${(index + 1) * 100}`}></div>
                        <span className="text-sm font-medium text-gray-900">{category.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{category.count}</div>
                        <div className="text-xs text-gray-500">{category.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Status Dashboard */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Estado del Sistema IA</h3>
                <span className="text-sm text-gray-500">
                  Última actualización: {currentTime.toLocaleTimeString('es-ES')}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{mockAIMetrics.uptime}%</div>
                  <div className="text-sm text-gray-600 mb-2">Tiempo Activo</div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-xs text-green-600">Operativo</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{mockAIMetrics.accuracyRate}%</div>
                  <div className="text-sm text-gray-600 mb-2">Precisión</div>
                  <div className="flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-blue-600 mr-1" />
                    <span className="text-xs text-blue-600">Mejorando</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">{mockAIMetrics.languages.length}</div>
                  <div className="text-sm text-gray-600 mb-2">Idiomas</div>
                  <div className="text-xs text-gray-500">
                    {mockAIMetrics.languages.join(", ")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600 mb-2">Disponibilidad</div>
                  <div className="flex items-center justify-center">
                    <Activity className="h-4 w-4 text-orange-600 mr-1" />
                    <span className="text-xs text-orange-600">Siempre Activo</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Tickets Tab */}
        {activeTab === "tickets" && (
          <>
            {/* Ticket Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-gray-900">{overallStats.totalTickets}</div>
                <div className="text-sm text-gray-600">Total Tickets</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-green-600">{overallStats.resolvedTickets}</div>
                <div className="text-sm text-gray-600">Resueltos</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-blue-600">{overallStats.aiResolvedPercentage}%</div>
                <div className="text-sm text-gray-600">IA Resuelto</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-yellow-600">
                  {overallStats.avgSatisfaction.toFixed(1)}
                </div>
                <div className="text-sm text-gray-600">Satisfacción</div>
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
                      placeholder="Buscar tickets..."
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
                    <option value="resolved">Resueltos</option>
                    <option value="in_progress">En Progreso</option>
                    <option value="escalated">Escalados</option>
                    <option value="pending">Pendientes</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    Mostrando {filteredTickets.length} de {mockTickets.length} tickets
                  </span>
                </div>
              </div>
            </div>

            {/* Tickets List */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ticket
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cliente
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Canal
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estado
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Resuelto Por
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Satisfacción
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tiempo
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredTickets.map((ticket) => (
                      <tr key={ticket.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">#{ticket.id}</div>
                            <div className="text-sm text-gray-500 max-w-xs truncate">
                              {ticket.subject}
                            </div>
                            <div className={`text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                              {ticket.priority.toUpperCase()}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{ticket.customer}</div>
                          <div className="text-sm text-gray-500">{ticket.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            {getChannelIcon(ticket.channel)}
                            <span className="text-sm text-gray-900">{ticket.channel}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(ticket.status)}`}>
                            {getStatusText(ticket.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            {ticket.aiHandled ? (
                              <Bot className="h-4 w-4 text-blue-600" />
                            ) : (
                              <Users className="h-4 w-4 text-green-600" />
                            )}
                            <span className="text-sm text-gray-900">
                              {ticket.aiHandled ? "IA" : ticket.agent || "No asignado"}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            {getSatisfactionIcon(ticket.satisfaction)}
                            <span className="text-sm text-gray-900">
                              {ticket.satisfaction ? `${ticket.satisfaction}/5` : "N/A"}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{ticket.responseTime}</div>
                          <div className="text-xs text-gray-500">
                            {new Date(ticket.createdAt).toLocaleDateString('es-ES')}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Knowledge Base Tab */}
        {activeTab === "knowledge" && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Base de Conocimiento IA</h2>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4 mr-2" />
                Añadir Conocimiento
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {mockKnowledgeBase.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {item.title}
                    </h3>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status === 'active' ? 'Activo' : 'Requiere Actualización'}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Categoría:</span>
                      <span className="text-gray-900 font-medium">{item.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Consultas:</span>
                      <span className="text-gray-900">{item.views.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Precisión:</span>
                      <span className={`font-medium ${
                        item.accuracy >= 90 ? 'text-green-600' : 
                        item.accuracy >= 80 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {item.accuracy}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Actualizado:</span>
                      <span className="text-gray-900">
                        {new Date(item.lastUpdated).toLocaleDateString('es-ES')}
                      </span>
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
                    </div>
                    <div className="text-xs text-gray-500">
                      ID: {item.id.toString().padStart(3, '0')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

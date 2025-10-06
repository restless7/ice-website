"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart2,
  Users,
  Phone,
  Mail,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Star,
  Clock,
  Target,
  Award,
  Calendar,
  Search,
  Filter,
  Download,
  Plus,
  MoreVertical,
  Eye,
  Edit,
  UserPlus,
  Activity,
  CheckCircle,
  AlertCircle,
  RefreshCw
} from "lucide-react";

const mockAgents = [
  {
    id: 1,
    name: "María González",
    email: "maria.gonzalez@ice.com",
    phone: "+57 301 123 4567",
    avatar: "MG",
    position: "Senior Agent",
    status: "active",
    joinDate: "2023-01-15",
    metrics: {
      leadsAssigned: 145,
      leadsConverted: 104,
      conversionRate: 71.7,
      avgResponseTime: "6 min",
      callsMade: 234,
      emailsSent: 456,
      whatsappChats: 189,
      revenue: 125000,
      rating: 4.8,
      lastActivity: "2024-01-15T10:30:00Z"
    },
    targets: {
      monthlyLeads: 150,
      monthlyConversions: 100,
      responseTime: "10 min"
    },
    recentActivity: [
      { type: "call", message: "Llamada completada con Ana Torres", time: "Hace 15 min" },
      { type: "conversion", message: "Lead convertido: Carlos Mendoza", time: "Hace 2 horas" },
      { type: "email", message: "Email enviado a prospecto", time: "Hace 4 horas" }
    ]
  },
  {
    id: 2,
    name: "Carlos Méndez",
    email: "carlos.mendez@ice.com",
    phone: "+57 302 234 5678",
    avatar: "CM",
    position: "Agent",
    status: "active",
    joinDate: "2023-03-20",
    metrics: {
      leadsAssigned: 128,
      leadsConverted: 87,
      conversionRate: 67.9,
      avgResponseTime: "8 min",
      callsMade: 198,
      emailsSent: 334,
      whatsappChats: 156,
      revenue: 98000,
      rating: 4.6,
      lastActivity: "2024-01-15T09:45:00Z"
    },
    targets: {
      monthlyLeads: 130,
      monthlyConversions: 85,
      responseTime: "10 min"
    },
    recentActivity: [
      { type: "whatsapp", message: "Respuesta en WhatsApp a Sofia R.", time: "Hace 30 min" },
      { type: "call", message: "Llamada programada confirmada", time: "Hace 1 hora" },
      { type: "lead", message: "Nuevo lead asignado", time: "Hace 3 horas" }
    ]
  },
  {
    id: 3,
    name: "Laura Gómez",
    email: "laura.gomez@ice.com",
    phone: "+57 305 345 6789",
    avatar: "LG",
    position: "Junior Agent",
    status: "active",
    joinDate: "2023-08-10",
    metrics: {
      leadsAssigned: 95,
      leadsConverted: 62,
      conversionRate: 65.3,
      avgResponseTime: "12 min",
      callsMade: 145,
      emailsSent: 287,
      whatsappChats: 123,
      revenue: 72000,
      rating: 4.4,
      lastActivity: "2024-01-15T11:15:00Z"
    },
    targets: {
      monthlyLeads: 100,
      monthlyConversions: 65,
      responseTime: "15 min"
    },
    recentActivity: [
      { type: "email", message: "Seguimiento por email enviado", time: "Hace 1 hora" },
      { type: "call", message: "Llamada perdida - callback programado", time: "Hace 2 horas" },
      { type: "conversion", message: "Lead calificado exitosamente", time: "Hace 5 horas" }
    ]
  },
  {
    id: 4,
    name: "Pedro Silva",
    email: "pedro.silva@ice.com",
    phone: "+57 304 456 7890",
    avatar: "PS",
    position: "Agent",
    status: "busy",
    joinDate: "2023-06-05",
    metrics: {
      leadsAssigned: 112,
      leadsConverted: 65,
      conversionRate: 58.0,
      avgResponseTime: "15 min",
      callsMade: 167,
      emailsSent: 298,
      whatsappChats: 134,
      revenue: 78000,
      rating: 4.2,
      lastActivity: "2024-01-15T08:20:00Z"
    },
    targets: {
      monthlyLeads: 120,
      monthlyConversions: 70,
      responseTime: "12 min"
    },
    recentActivity: [
      { type: "call", message: "En llamada con prospecto", time: "Activo ahora" },
      { type: "lead", message: "Lead asignado para seguimiento", time: "Hace 45 min" },
      { type: "email", message: "Propuesta enviada por email", time: "Hace 2 horas" }
    ]
  },
  {
    id: 5,
    name: "Ana Rodríguez",
    email: "ana.rodriguez@ice.com",
    phone: "+57 306 567 8901",
    avatar: "AR",
    position: "Trainee",
    status: "offline",
    joinDate: "2024-01-02",
    metrics: {
      leadsAssigned: 23,
      leadsConverted: 8,
      conversionRate: 34.8,
      avgResponseTime: "25 min",
      callsMade: 34,
      emailsSent: 67,
      whatsappChats: 28,
      revenue: 12000,
      rating: 3.8,
      lastActivity: "2024-01-14T17:30:00Z"
    },
    targets: {
      monthlyLeads: 30,
      monthlyConversions: 15,
      responseTime: "20 min"
    },
    recentActivity: [
      { type: "training", message: "Completó módulo de capacitación", time: "Hace 1 día" },
      { type: "call", message: "Primera llamada supervisada", time: "Hace 1 día" },
      { type: "lead", message: "Lead asignado para práctica", time: "Hace 2 días" }
    ]
  }
];

const getStatusColor = (status: string) => {
  const colors = {
    active: "bg-green-100 text-green-800",
    busy: "bg-yellow-100 text-yellow-800",
    offline: "bg-red-100 text-red-800",
    break: "bg-blue-100 text-blue-800"
  };
  return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
};

const getStatusText = (status: string) => {
  const texts = {
    active: "Activo",
    busy: "Ocupado",
    offline: "Desconectado",
    break: "En Descanso"
  };
  return texts[status as keyof typeof texts] || status;
};

const getPerformanceColor = (rate: number, target: number) => {
  const percentage = (rate / target) * 100;
  if (percentage >= 100) return "text-green-600";
  if (percentage >= 80) return "text-yellow-600";
  return "text-red-600";
};

export default function AgentsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<any>(null);

  const filteredAgents = mockAgents.filter(agent => {
    const matchesFilter = selectedFilter === "all" || agent.status === selectedFilter;
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.position.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const overallStats = {
    totalAgents: mockAgents.length,
    activeAgents: mockAgents.filter(a => a.status === "active").length,
    avgConversionRate: Math.round(mockAgents.reduce((sum, a) => sum + a.metrics.conversionRate, 0) / mockAgents.length),
    avgResponseTime: "10 min",
    totalRevenue: mockAgents.reduce((sum, a) => sum + a.metrics.revenue, 0),
    totalLeadsConverted: mockAgents.reduce((sum, a) => sum + a.metrics.leadsConverted, 0)
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
                  <BarChart2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Panel de Agentes</h1>
                  <p className="text-sm text-gray-500">Métricas de rendimiento y análisis de agentes comerciales</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <UserPlus className="h-4 w-4 mr-2" />
                Nuevo Agente
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Exportar Reporte
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-gray-900">{overallStats.totalAgents}</div>
            <div className="text-sm text-gray-600">Total Agentes</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-green-600">{overallStats.activeAgents}</div>
            <div className="text-sm text-gray-600">Activos</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-blue-600">{overallStats.avgConversionRate}%</div>
            <div className="text-sm text-gray-600">Conversión Promedio</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-purple-600">{overallStats.avgResponseTime}</div>
            <div className="text-sm text-gray-600">Tiempo Respuesta</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-orange-600">{overallStats.totalLeadsConverted}</div>
            <div className="text-sm text-gray-600">Leads Convertidos</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-yellow-600">
              ${(overallStats.totalRevenue / 1000).toFixed(0)}K
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
                  placeholder="Buscar agentes..."
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
                <option value="busy">Ocupados</option>
                <option value="offline">Desconectados</option>
                <option value="break">En Descanso</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                Mostrando {filteredAgents.length} de {mockAgents.length} agentes
              </span>
            </div>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {filteredAgents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              {/* Agent Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">{agent.avatar}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
                      <p className="text-sm text-gray-500">{agent.position}</p>
                      <p className="text-xs text-gray-400">{agent.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(agent.status)}`}>
                      {getStatusText(agent.status)}
                    </span>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="p-6 border-b border-gray-100">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Métricas de Rendimiento</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {agent.metrics.conversionRate.toFixed(1)}%
                    </div>
                    <div className="text-xs text-gray-500">Conversión</div>
                    <div className="text-xs text-gray-400">
                      {agent.metrics.leadsConverted}/{agent.metrics.leadsAssigned}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {agent.metrics.avgResponseTime}
                    </div>
                    <div className="text-xs text-gray-500">Tiempo Respuesta</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {agent.metrics.rating}
                    </div>
                    <div className="text-xs text-gray-500">Rating</div>
                    <div className="flex justify-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${
                            i < Math.floor(agent.metrics.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      ${(agent.metrics.revenue / 1000).toFixed(0)}K
                    </div>
                    <div className="text-xs text-gray-500">Revenue</div>
                  </div>
                </div>
              </div>

              {/* Communication Stats */}
              <div className="p-6 border-b border-gray-100">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Canales de Comunicación</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Llamadas</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{agent.metrics.callsMade}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Emails</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{agent.metrics.emailsSent}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4 text-purple-600" />
                      <span className="text-sm text-gray-700">WhatsApp</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{agent.metrics.whatsappChats}</span>
                  </div>
                </div>
              </div>

              {/* Recent Activity & Actions */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-gray-900">Actividad Reciente</h4>
                  <span className="text-xs text-gray-500">
                    Última actividad: {new Date(agent.metrics.lastActivity).toLocaleString('es-ES')}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  {agent.recentActivity.slice(0, 3).map((activity, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'call' ? 'bg-blue-500' : 
                        activity.type === 'email' ? 'bg-green-500' :
                        activity.type === 'whatsapp' ? 'bg-purple-500' :
                        activity.type === 'conversion' ? 'bg-yellow-500' : 'bg-gray-500'
                      }`} />
                      <span className="text-gray-600 flex-1">{activity.message}</span>
                      <span className="text-gray-400">{activity.time}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Phone className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                      <Mail className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Performance Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Rendimiento del Equipo</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded">7D</button>
              <button className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded">30D</button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded">90D</button>
            </div>
          </div>
          
          {/* Mockup Chart Area */}
          <div className="h-64 bg-gradient-to-t from-blue-50 to-transparent rounded-lg flex items-end justify-between px-4 pb-4">
            {filteredAgents.map((agent, index) => (
              <div key={agent.id} className="flex flex-col items-center">
                <div
                  className="bg-blue-600 rounded-t-md mb-2"
                  style={{ 
                    height: `${(agent.metrics.conversionRate / 100) * 200}px`,
                    width: '40px'
                  }}
                />
                <div className="text-xs text-gray-600 text-center">
                  <div className="font-medium">{agent.name.split(' ')[0]}</div>
                  <div>{agent.metrics.conversionRate.toFixed(1)}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Mostrando 1 a {filteredAgents.length} de {mockAgents.length} resultados
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
    </div>
  );
}

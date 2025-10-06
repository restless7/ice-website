"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  Clock,
  User,
  MapPin,
  Filter,
  Search,
  Plus,
  MoreVertical,
  Star,
  CheckCircle,
  XCircle,
  AlertCircle,
  TrendingUp,
  Download,
  Eye,
  Edit,
  Archive,
  Flag
} from "lucide-react";

const mockLeads = [
  {
    id: 1,
    name: "Ana María Torres",
    email: "ana.torres@gmail.com",
    phone: "+57 300 123 4567",
    program: "Intercambio Canadá",
    source: "WhatsApp",
    status: "qualified",
    score: 85,
    lastContact: "2024-01-15T10:30:00Z",
    createdAt: "2024-01-10T09:15:00Z",
    agent: "María González",
    location: "Bogotá, Colombia",
    notes: "Muy interesada en programas de 6 meses. Tiene IELTS 7.0",
    budget: "5000-8000 USD"
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    email: "carlos.mendoza@outlook.com",
    phone: "+57 301 987 6543",
    program: "Work & Study Australia",
    source: "Instagram",
    status: "contacted",
    score: 72,
    lastContact: "2024-01-14T16:45:00Z",
    createdAt: "2024-01-12T14:20:00Z",
    agent: "Laura Gómez",
    location: "Medellín, Colombia",
    notes: "Prefiere programas de trabajo. Experiencia en marketing digital",
    budget: "6000-10000 USD"
  },
  {
    id: 3,
    name: "Sofia Ramirez",
    email: "sofia.ramirez@hotmail.com",
    phone: "+57 305 456 7890",
    program: "Inglés Malta",
    source: "Website",
    status: "new",
    score: 68,
    lastContact: null,
    createdAt: "2024-01-15T11:00:00Z",
    agent: null,
    location: "Cali, Colombia",
    notes: "Primera vez viajando al exterior. Busca programas económicos",
    budget: "3000-5000 USD"
  },
  {
    id: 4,
    name: "Diego Herrera",
    email: "diego.herrera@gmail.com",
    phone: "+57 302 654 3210",
    program: "Universidad Reino Unido",
    source: "Facebook",
    status: "lost",
    score: 45,
    lastContact: "2024-01-08T12:15:00Z",
    createdAt: "2024-01-05T10:30:00Z",
    agent: "Carlos Méndez",
    location: "Barranquilla, Colombia",
    notes: "No respondió a los últimos 3 seguimientos",
    budget: "15000-20000 USD"
  }
];

const getStatusColor = (status: string) => {
  const colors = {
    new: "bg-blue-100 text-blue-800",
    contacted: "bg-yellow-100 text-yellow-800",
    qualified: "bg-green-100 text-green-800",
    lost: "bg-red-100 text-red-800",
    converted: "bg-purple-100 text-purple-800"
  };
  return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
};

const getScoreColor = (score: number) => {
  if (score >= 80) return "text-green-600";
  if (score >= 60) return "text-yellow-600";
  return "text-red-600";
};

export default function LeadsPage() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLead, setSelectedLead] = useState(null);

  const filteredLeads = mockLeads.filter(lead => {
    const matchesStatus = selectedStatus === "all" || lead.status === selectedStatus;
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.program.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const stats = {
    total: mockLeads.length,
    new: mockLeads.filter(l => l.status === "new").length,
    contacted: mockLeads.filter(l => l.status === "contacted").length,
    qualified: mockLeads.filter(l => l.status === "qualified").length,
    lost: mockLeads.filter(l => l.status === "lost").length,
    avgScore: Math.round(mockLeads.reduce((sum, l) => sum + l.score, 0) / mockLeads.length)
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
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Gestión de Leads</h1>
                  <p className="text-sm text-gray-500">Automatización y seguimiento de prospectos</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Lead
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Exportar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Leads</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-blue-600">{stats.new}</div>
            <div className="text-sm text-gray-600">Nuevos</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-yellow-600">{stats.contacted}</div>
            <div className="text-sm text-gray-600">Contactados</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-green-600">{stats.qualified}</div>
            <div className="text-sm text-gray-600">Calificados</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-red-600">{stats.lost}</div>
            <div className="text-sm text-gray-600">Perdidos</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-purple-600">{stats.avgScore}</div>
            <div className="text-sm text-gray-600">Score Promedio</div>
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
                  placeholder="Buscar leads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Todos los estados</option>
                <option value="new">Nuevos</option>
                <option value="contacted">Contactados</option>
                <option value="qualified">Calificados</option>
                <option value="lost">Perdidos</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                Mostrando {filteredLeads.length} de {mockLeads.length} leads
              </span>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lead
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Programa
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fuente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Agente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Último Contacto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                          <div className="text-sm text-gray-500">{lead.email}</div>
                          <div className="text-xs text-gray-400">{lead.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{lead.program}</div>
                      <div className="text-xs text-gray-500">{lead.budget}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {lead.source === 'WhatsApp' && <MessageSquare className="h-4 w-4 text-green-600 mr-2" />}
                        {lead.source === 'Instagram' && <Star className="h-4 w-4 text-pink-600 mr-2" />}
                        {lead.source === 'Website' && <Eye className="h-4 w-4 text-blue-600 mr-2" />}
                        {lead.source === 'Facebook' && <Flag className="h-4 w-4 text-blue-700 mr-2" />}
                        <span className="text-sm text-gray-900">{lead.source}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                        {lead.status === 'new' ? 'Nuevo' : 
                         lead.status === 'contacted' ? 'Contactado' :
                         lead.status === 'qualified' ? 'Calificado' :
                         lead.status === 'lost' ? 'Perdido' : lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm font-medium ${getScoreColor(lead.score)}`}>
                        {lead.score}/100
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {lead.agent || (
                          <span className="text-gray-400 italic">Sin asignar</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {lead.lastContact ? (
                          <>
                            {new Date(lead.lastContact).toLocaleDateString('es-ES')}
                            <div className="text-xs text-gray-500">
                              {new Date(lead.lastContact).toLocaleTimeString('es-ES')}
                            </div>
                          </>
                        ) : (
                          <span className="text-gray-400 italic">Sin contactar</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-green-600 transition-colors">
                          <Phone className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-purple-600 transition-colors">
                          <Mail className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Mostrando 1 a {filteredLeads.length} de {mockLeads.length} resultados
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

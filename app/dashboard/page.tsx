"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MessageSquare,
  BarChart2,
  FileText,
  Layers,
  Cpu,
  Users,
  Calendar,
  Clock,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  AlertCircle,
  Eye,
  Phone,
  Mail,
  MapPin,
  Filter,
  Download,
  Settings,
  Bell,
  Search,
  Plus,
  Upload,
  Star,
  Activity,
  Globe,
  Target,
  DollarSign,
  BookOpen,
  UserCheck,
  Send,
  Archive,
  RefreshCw,
  Menu,
  X,
  Home,
  Database,
  Shield,
  Briefcase,
  GraduationCap,
  CreditCard,
  FileSpreadsheet,
  PieChart,
  Headphones,
  Building,
  UserPlus,
  Zap,
  ChevronDown,
  ChevronRight
} from "lucide-react";

// Mock data for the dashboard
const mockData = {
  leads: {
    total: 1247,
    thisMonth: 89,
    conversion: 67.8,
    pending: 23,
    qualified: 156,
    contacted: 89
  },
  agents: {
    total: 12,
    active: 10,
    topPerformer: "María González",
    avgResponseTime: "8 min",
    totalCalls: 342,
    totalEmails: 567
  },
  students: {
    total: 2340,
    activeApplications: 145,
    completed: 1890,
    pending: 205,
    rejected: 100
  },
  programs: {
    total: 87,
    popular: "Intercambio Canadá",
    applications: 234,
    revenue: "145,000 USD"
  },
  support: {
    tickets: 45,
    resolved: 38,
    avgResolution: "4.2 hrs",
    satisfaction: 96.5
  }
};

const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  color, 
  trend,
  trendValue,
  trendUp = true
}: any) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        {trend && (
          <div className="flex items-center mt-2">
            {trendUp ? (
              <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
            )}
            <span className={`text-sm font-medium ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
              {trendValue}
            </span>
            <span className="text-gray-500 text-sm ml-1">{trend}</span>
          </div>
        )}
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
  </div>
);

const ModuleCard = ({ 
  title, 
  description, 
  icon: Icon, 
  status, 
  usage,
  href 
}: any) => (
  <Link 
    href={href}
    className="block bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer hover:border-blue-300"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center">
        <div className="p-2 rounded-lg bg-blue-50">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center mt-1">
            <div className={`w-2 h-2 rounded-full mr-2 ${
              status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
            }`} />
            <span className="text-sm text-gray-600 capitalize">{status}</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm font-medium text-gray-900">{usage}%</div>
        <div className="text-xs text-gray-500">Uso</div>
      </div>
    </div>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
        style={{ width: `${usage}%` }}
      />
    </div>
  </Link>
);

const RecentActivity = ({ activities }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Actividad Reciente</h3>
    <div className="space-y-4">
      {activities.map((activity: any, index: number) => (
        <div key={index} className="flex items-start space-x-3">
          <div className={`w-2 h-2 rounded-full mt-2 ${
            activity.type === 'lead' ? 'bg-green-500' : 
            activity.type === 'agent' ? 'bg-blue-500' : 
            activity.type === 'student' ? 'bg-purple-500' : 'bg-yellow-500'
          }`} />
          <div className="flex-1">
            <p className="text-sm text-gray-900">{activity.message}</p>
            <p className="text-xs text-gray-500">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SidebarItem = ({ icon: Icon, title, href, isActive = false, children = null, isExpanded = false, onClick }: any) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (children) {
      e.preventDefault();
      setIsSubmenuOpen(!isSubmenuOpen);
    }
    if (onClick) onClick();
  };

  return (
    <div className="mb-1">
      <Link
        href={href || '#'}
        onClick={handleClick}
        className={`flex items-center px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
          isActive
            ? 'bg-white/20 text-white border-r-2 border-white backdrop-blur-sm'
            : 'text-red-100 hover:bg-white/10 hover:text-white'
        }`}
      >
        <Icon className={`h-5 w-5 ${isExpanded ? 'mr-3' : 'mx-auto'}`} />
        {isExpanded && (
          <>
            <span className="flex-1">{title}</span>
            {children && (
              <ChevronRight
                className={`h-4 w-4 transition-transform ${
                  isSubmenuOpen ? 'rotate-90' : ''
                }`}
              />
            )}
          </>
        )}
      </Link>
      
      {children && isExpanded && isSubmenuOpen && (
        <div className="ml-8 mt-2 space-y-1">
          {children.map((child: any, index: number) => (
            <Link
              key={index}
              href={child.href || '#'}
              className="flex items-center px-3 py-2 text-sm text-red-200 hover:text-white hover:bg-white/10 rounded-md transition-colors"
            >
              <child.icon className="h-4 w-4 mr-2" />
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function IceDashboard() {
  const [activeModule, setActiveModule] = useState(null);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');

  useEffect(() => {
    // Initialize time on client side only
    setCurrentTime(new Date());
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const sidebarItems = [
    {
      id: 'dashboard',
      title: 'Panel Principal',
      icon: Home,
      href: '/ice-dashboard',
      isActive: activeSection === 'dashboard'
    },
    {
      id: 'leads-management',
      title: 'Gestión de Leads',
      icon: Target,
      children: [
        { title: 'Automatización', icon: Zap, href: '/ice-dashboard/leads' },
        { title: 'Seguimiento Manual', icon: Eye, href: '/ice-dashboard/leads/manual' },
        { title: 'Reportes de Conversión', icon: BarChart2, href: '/ice-dashboard/leads/reports' }
      ]
    },
    {
      id: 'agents',
      title: 'Agentes Comerciales',
      icon: Users,
      children: [
        { title: 'Panel de Rendimiento', icon: BarChart2, href: '/ice-dashboard/agents' },
        { title: 'Gestión de Equipo', icon: UserPlus, href: '/ice-dashboard/agents/team' },
        { title: 'Capacitación', icon: BookOpen, href: '/ice-dashboard/agents/training' },
        { title: 'Comisiones', icon: DollarSign, href: '/ice-dashboard/agents/commissions' }
      ]
    },
    {
      id: 'students',
      title: 'Estudiantes',
      icon: GraduationCap,
      children: [
        { title: 'Portal Estudiantil', icon: FileText, href: '/ice-dashboard/students' },
        { title: 'Documentos Pendientes', icon: Clock, href: '/ice-dashboard/students/pending' },
        { title: 'Aplicaciones Activas', icon: CheckCircle, href: '/ice-dashboard/students/applications' },
        { title: 'Base de Datos', icon: Database, href: '/ice-dashboard/students/database' }
      ]
    },
    {
      id: 'programs',
      title: 'Programas Académicos',
      icon: Globe,
      children: [
        { title: 'Sistema ERP', icon: Layers, href: '/ice-dashboard/erp' },
        { title: 'Catálogo de Programas', icon: BookOpen, href: '/ice-dashboard/programs/catalog' },
        { title: 'Precios y Promociones', icon: CreditCard, href: '/ice-dashboard/programs/pricing' },
        { title: 'Universidades Aliadas', icon: Building, href: '/ice-dashboard/programs/universities' }
      ]
    },
    {
      id: 'finances',
      title: 'Finanzas',
      icon: DollarSign,
      children: [
        { title: 'Ingresos y Gastos', icon: PieChart, href: '/ice-dashboard/finances/overview' },
        { title: 'Facturas', icon: FileSpreadsheet, href: '/ice-dashboard/finances/invoices' },
        { title: 'Pagos Pendientes', icon: Clock, href: '/ice-dashboard/finances/pending' },
        { title: 'Reportes Fiscales', icon: Archive, href: '/ice-dashboard/finances/tax' }
      ]
    },
    {
      id: 'support',
      title: 'Soporte y Atención',
      icon: Headphones,
      children: [
        { title: 'Soporte IA 24/7', icon: Cpu, href: '/ice-dashboard/support' },
        { title: 'Chat en Vivo', icon: MessageSquare, href: '/ice-dashboard/support/chat' },
        { title: 'Base de Conocimiento', icon: BookOpen, href: '/ice-dashboard/support/kb' },
        { title: 'Tickets Manuales', icon: AlertCircle, href: '/ice-dashboard/support/tickets' }
      ]
    },
    {
      id: 'communications',
      title: 'Comunicaciones',
      icon: Mail,
      children: [
        { title: 'Email Marketing', icon: Send, href: '/ice-dashboard/communications/email' },
        { title: 'WhatsApp Business', icon: Phone, href: '/ice-dashboard/communications/whatsapp' },
        { title: 'Campañas Activas', icon: Zap, href: '/ice-dashboard/communications/campaigns' },
        { title: 'Plantillas', icon: FileText, href: '/ice-dashboard/communications/templates' }
      ]
    },
    {
      id: 'analytics',
      title: 'Análisis y Reportes',
      icon: PieChart,
      children: [
        { title: 'Dashboard Ejecutivo', icon: BarChart2, href: '/ice-dashboard/analytics/executive' },
        { title: 'Métricas de Conversión', icon: TrendingUp, href: '/ice-dashboard/analytics/conversion' },
        { title: 'Reportes Personalizados', icon: FileSpreadsheet, href: '/ice-dashboard/analytics/custom' },
        { title: 'Exportar Datos', icon: Download, href: '/ice-dashboard/analytics/export' }
      ]
    },
    {
      id: 'settings',
      title: 'Configuración',
      icon: Settings,
      children: [
        { title: 'Configuración General', icon: Settings, href: '/ice-dashboard/settings/general' },
        { title: 'Usuarios y Permisos', icon: Shield, href: '/ice-dashboard/settings/users' },
        { title: 'Integraciones', icon: Zap, href: '/ice-dashboard/settings/integrations' },
        { title: 'Respaldos', icon: Archive, href: '/ice-dashboard/settings/backups' }
      ]
    }
  ];

  const modules = [
    {
      id: 'leads',
      title: 'Automatización de Leads',
      description: 'Gestión automática de prospectos desde WhatsApp, Instagram y Web',
      icon: MessageSquare,
      status: 'active',
      usage: 89,
      href: '/ice-dashboard/leads',
      stats: {
        totalLeads: mockData.leads.total,
        conversion: mockData.leads.conversion,
        pending: mockData.leads.pending
      }
    },
    {
      id: 'agents',
      title: 'Panel de Agentes',
      description: 'Métricas de rendimiento y análisis de agentes comerciales',
      icon: BarChart2,
      status: 'active',
      usage: 76,
      href: '/ice-dashboard/agents',
      stats: {
        totalAgents: mockData.agents.total,
        activeAgents: mockData.agents.active,
        avgResponse: mockData.agents.avgResponseTime
      }
    },
    {
      id: 'students',
      title: 'Portal Estudiantil',
      description: 'Plataforma para gestión de documentos y seguimiento',
      icon: FileText,
      status: 'active',
      usage: 92,
      href: '/ice-dashboard/students',
      stats: {
        totalStudents: mockData.students.total,
        activeApps: mockData.students.activeApplications,
        completed: mockData.students.completed
      }
    },
    {
      id: 'erp',
      title: 'Sistema ERP',
      description: 'Centralización de programas, finanzas y operaciones',
      icon: Layers,
      status: 'active',
      usage: 67,
      href: '/ice-dashboard/erp',
      stats: {
        totalPrograms: mockData.programs.total,
        revenue: mockData.programs.revenue,
        applications: mockData.programs.applications
      }
    },
    {
      id: 'support',
      title: 'Soporte IA 24/7',
      description: 'Asistente inteligente para atención al cliente',
      icon: Cpu,
      status: 'active',
      usage: 84,
      href: '/ice-dashboard/ai-agent',
      stats: {
        tickets: mockData.support.tickets,
        resolved: mockData.support.resolved,
        satisfaction: mockData.support.satisfaction
      }
    }
  ];

  const recentActivities = [
    { 
      type: 'lead', 
      message: 'Nuevo lead calificado: Ana María Torres - Programa Canadá',
      time: 'Hace 2 minutos'
    },
    { 
      type: 'agent', 
      message: 'Carlos Méndez completó llamada con prospecto - Convertido',
      time: 'Hace 8 minutos'
    },
    { 
      type: 'student', 
      message: 'Documentos aprobados para Miguel Rodríguez - Reino Unido',
      time: 'Hace 15 minutos'
    },
    { 
      type: 'system', 
      message: 'Backup automático completado exitosamente',
      time: 'Hace 1 hora'
    },
    { 
      type: 'lead', 
      message: 'Prospecto respondió en WhatsApp - Asignado a Laura Gómez',
      time: 'Hace 2 horas'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 ${isSidebarExpanded ? 'w-72' : 'w-20'} bg-gradient-to-b from-red-600 via-red-700 to-red-800 shadow-xl transition-all duration-300 ease-in-out`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-red-500/30">
          <div className="flex items-center space-x-3">
            {isSidebarExpanded && (
              <div>
                <h1 className="text-lg font-bold text-white">ICE Colombia</h1>
                <p className="text-xs text-red-100">Panel Administrativo</p>
              </div>
            )}
          </div>
          <button
            onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
          >
            {isSidebarExpanded ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <div className="space-y-2">
            {sidebarItems.map((item) => (
              <SidebarItem
                key={item.id}
                icon={item.icon}
                title={item.title}
                href={item.href}
                isActive={item.isActive}
                isExpanded={isSidebarExpanded}
                onClick={() => setActiveSection(item.id)}
              >
                {item.children}
              </SidebarItem>
            ))}
          </div>
        </nav>

        {/* Sidebar Footer */}
        {isSidebarExpanded && (
          <div className="p-6 border-t border-red-500/30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-sm font-medium">AD</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">Admin ICE</p>
                <p className="text-xs text-red-100">Administrador</p>
              </div>
              <button className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white">
                <Settings className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 ${isSidebarExpanded ? 'ml-72' : 'ml-20'} transition-all duration-300 ease-in-out`}>
        {/* Top Navigation Bar */}
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 shadow-lg">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* ICE Logo */}
                <div className="flex items-center space-x-3">
                  <img 
                    src="/images/logo_ice.png" 
                    alt="ICE Colombia" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <h1 className="text-xl font-bold text-white">Panel de Control</h1>
                <div className="text-sm text-red-100 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                  Sistema Activo
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="h-5 w-5 text-red-200 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Buscar estudiantes, leads..."
                    className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm placeholder-red-200 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 backdrop-blur-sm w-80"
                  />
                </div>
                
                <button className="relative p-2 text-red-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                  <Bell className="h-5 w-5" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </button>

                <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
                  <Clock className="h-4 w-4 text-red-100" />
                  <span className="text-sm text-white font-mono">
                    {currentTime ? currentTime.toLocaleTimeString('es-ES') : '--:--:--'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="p-6">
        {/* Header Stats */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Resumen General</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <StatCard
              title="Leads Totales"
              value={mockData.leads.total.toLocaleString()}
              icon={Target}
              color="bg-blue-600"
              trend="vs mes pasado"
              trendValue="+12%"
              trendUp={true}
            />
            <StatCard
              title="Agentes Activos"
              value={`${mockData.agents.active}/${mockData.agents.total}`}
              icon={Users}
              color="bg-green-600"
              trend="tiempo respuesta"
              trendValue={mockData.agents.avgResponseTime}
              trendUp={true}
            />
            <StatCard
              title="Aplicaciones Activas"
              value={mockData.students.activeApplications}
              icon={BookOpen}
              color="bg-purple-600"
              trend="completadas"
              trendValue="+8"
              trendUp={true}
            />
            <StatCard
              title="Programas Activos"
              value={mockData.programs.total}
              icon={Globe}
              color="bg-orange-600"
              trend="más popular"
              trendValue="Canadá"
              trendUp={true}
            />
            <StatCard
              title="Satisfacción"
              value={`${mockData.support.satisfaction}%`}
              icon={Star}
              color="bg-yellow-600"
              trend="tickets resueltos"
              trendValue={`${mockData.support.resolved}/${mockData.support.tickets}`}
              trendUp={true}
            />
          </div>
        </div>

        {/* Modules Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Módulos del Sistema</h2>
            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Settings className="h-4 w-4 mr-2" />
                Configurar
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <RefreshCw className="h-4 w-4 mr-2" />
                Actualizar
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <ModuleCard
                key={module.id}
                title={module.title}
                description={module.description}
                icon={module.icon}
                status={module.status}
                usage={module.usage}
                href={module.href}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <div className="flex items-center">
                  <Plus className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Nuevo Lead</span>
                </div>
                <span className="text-xs text-gray-500">Ctrl+N</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="flex items-center">
                  <Upload className="h-5 w-5 text-gray-600 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Subir Documentos</span>
                </div>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="flex items-center">
                  <Send className="h-5 w-5 text-gray-600 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Enviar Reporte</span>
                </div>
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-600 mr-3" />
                  <span className="text-sm font-medium text-gray-900">Agendar Cita</span>
                </div>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <RecentActivity activities={recentActivities} />
          </div>
        </div>

        {/* Performance Charts Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Lead Conversion Chart Mockup */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Conversión de Leads</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded">7D</button>
                <button className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded">30D</button>
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded">90D</button>
              </div>
            </div>
            
            {/* Mockup Chart Area */}
            <div className="h-64 bg-gradient-to-t from-blue-50 to-transparent rounded-lg flex items-end justify-between px-4 pb-4">
              {[65, 78, 45, 82, 91, 67, 73].map((height, i) => (
                <div
                  key={i}
                  className="bg-blue-600 rounded-t-md"
                  style={{ 
                    height: `${height}%`,
                    width: '12%'
                  }}
                />
              ))}
            </div>
            
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span><span>Dom</span>
            </div>
          </div>

          {/* Agent Performance */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Agentes del Mes</h3>
            <div className="space-y-4">
              {[
                { name: 'María González', leads: 45, conversion: 72, avatar: 'MG' },
                { name: 'Carlos Méndez', leads: 38, conversion: 68, avatar: 'CM' },
                { name: 'Laura Gómez', leads: 32, conversion: 65, avatar: 'LG' },
                { name: 'Pedro Silva', leads: 28, conversion: 58, avatar: 'PS' }
              ].map((agent, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">{agent.avatar}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{agent.name}</p>
                      <p className="text-xs text-gray-500">{agent.leads} leads procesados</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-green-600">{agent.conversion}%</p>
                    <p className="text-xs text-gray-500">conversión</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div>
              <span>© 2024 ICE Colombia. Powered by APEX AI Solutions.</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Sistema Operativo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4" />
                <span>Todos los servicios activos</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

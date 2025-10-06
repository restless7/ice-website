'use client';

import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  Users,
  GraduationCap,
  Settings,
  LogOut,
  User,
  ChevronDown,
  Bell,
  Search,
  Shield,
  BarChart3,
  FileText,
  MessageSquare,
  CreditCard,
  Building2,
  Briefcase,
  Award,
  Mail,
  Terminal,
  Eye,
  UserCheck,
  PieChart,
  CheckSquare,
  TrendingUp,
  DollarSign,
  BookOpen,
  Database,
  HelpCircle,
  Phone,
} from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { ThemeName, getTheme } from '@/app/lib/design-system';
import { UserRole } from '@/app/lib/auth';

// Icon mapping for dynamic icon rendering
const iconMap = {
  Home,
  Users,
  GraduationCap,
  Settings,
  LogOut,
  User,
  Bell,
  Search,
  Shield,
  BarChart3,
  FileText,
  MessageSquare,
  CreditCard,
  Building2,
  Briefcase,
  Award,
  Mail,
  Terminal,
  Eye,
  UserCheck,
  PieChart,
  CheckSquare,
  TrendingUp,
  DollarSign,
  BookOpen,
  Database,
  HelpCircle,
  Phone,
} as const;

type IconName = keyof typeof iconMap;

interface NavigationItem {
  name: string;
  href: string;
  icon: IconName;
  active?: boolean;
  badge?: number;
  description?: string;
  children?: NavigationItem[];
}

interface UnifiedNavigationProps {
  packageName?: 'ice-website' | 'apex-website' | 'security-portfolio' | 'main-portal';
  theme?: ThemeName;
  navigation?: {
    main: NavigationItem[];
    secondary?: NavigationItem[];
    user?: NavigationItem[];
  };
  branding?: {
    title: string;
    logo?: string;
    logoFallback?: string;
  };
  className?: string;
}

const defaultBranding = {
  'ice-website': {
    title: 'ICE Colombia',
    logo: '/images/logo_ice.png',
    logoFallback: 'ICE',
  },
  'apex-website': {
    title: 'APEX AI Solutions',
    logo: '/images/apex-logo.png',
    logoFallback: 'APEX',
  },
  'security-portfolio': {
    title: 'SG Security',
    logo: '/images/sg-logo.png',
    logoFallback: 'SG',
  },
  'main-portal': {
    title: 'ICE Portal',
    logo: '/images/portal-logo.png',
    logoFallback: 'Portal',
  },
};

const getNavigationForRole = (role: UserRole, packageName: string): { main: NavigationItem[], secondary?: NavigationItem[], user?: NavigationItem[] } => {
  const commonUser = [
    { name: 'Profile', href: '/profile', icon: 'User' as IconName },
    { name: 'Settings', href: '/settings', icon: 'Settings' as IconName },
  ];

  switch (role) {
    case UserRole.STUDENT:
      return {
        main: [
          { name: 'Dashboard', href: '/students/portal', icon: 'Home' },
          { name: 'Documents', href: '/students/documents', icon: 'FileText' },
          { name: 'Progress', href: '/students/progress', icon: 'BarChart3' },
          { name: 'Messages', href: '/students/messages', icon: 'MessageSquare' },
          { name: 'Payments', href: '/students/payments', icon: 'CreditCard' },
        ],
        secondary: [
          { name: 'Help Center', href: '/help', icon: 'HelpCircle' },
          { name: 'Contact Support', href: '/support', icon: 'Phone' },
        ],
        user: commonUser,
      };

    case UserRole.AGENT:
      return {
        main: [
          { name: 'Dashboard', href: '/agents/dashboard', icon: 'BarChart3' },
          { name: 'Leads', href: '/ice-leads', icon: 'Users' },
          { name: 'Students', href: '/students', icon: 'GraduationCap' },
          { name: 'Tasks', href: '/agents/tasks', icon: 'CheckSquare' },
          { name: 'Performance', href: '/agents/performance', icon: 'TrendingUp' },
          { name: 'Commissions', href: '/agents/commissions', icon: 'DollarSign' },
        ],
        secondary: [
          { name: 'Training', href: '/agents/training', icon: 'BookOpen' },
          { name: 'Resources', href: '/agents/resources', icon: 'Database' },
        ],
        user: commonUser,
      };

    case UserRole.ADMIN:
    case UserRole.SUPER_ADMIN:
      return {
        main: [
          { name: 'Dashboard', href: '/admin/dashboard', icon: 'BarChart3' },
          { name: 'Users', href: '/admin/users', icon: 'Users' },
          { name: 'Students', href: '/students', icon: 'GraduationCap' },
          { name: 'Agents', href: '/agents', icon: 'UserCheck' },
          { name: 'Programs', href: '/programs', icon: 'BookOpen' },
          { name: 'Analytics', href: '/analytics', icon: 'PieChart' },
          { name: 'Settings', href: '/admin/settings', icon: 'Settings' },
        ],
        secondary: [
          { name: 'Audit Logs', href: '/admin/audit', icon: 'FileText' },
          { name: 'Backup', href: '/admin/backup', icon: 'Database' },
        ],
        user: commonUser,
      };

    default:
      // Public/guest navigation
      if (packageName === 'ice-website') {
        return {
          main: [
            { name: 'Inicio', href: '/', icon: 'Home' },
            { name: 'Nosotros', href: '/nosotros', icon: 'Building2' },
            { name: 'Portafolio', href: '/portafolio', icon: 'Briefcase' },
            { name: 'ICExperiences', href: '/experiences', icon: 'Award' },
            { name: 'Portal', href: '/portal', icon: 'User' },
            { name: 'Contacto', href: '/contacto', icon: 'Mail' },
          ],
        };
      } else if (packageName === 'security-portfolio') {
        return {
          main: [
            { name: 'Home', href: '/', icon: 'Terminal' },
            { name: 'Skills', href: '/skills', icon: 'Shield' },
            { name: 'Projects', href: '/projects', icon: 'Briefcase' },
            { name: 'Certifications', href: '/certifications', icon: 'Award' },
            { name: 'Security Posture', href: '/security-posture', icon: 'Eye' },
            { name: 'About', href: '/about', icon: 'User' },
            { name: 'Contact', href: '/contact', icon: 'Mail' },
          ],
        };
      }
      
      return {
        main: [
          { name: 'Dashboard', href: '/', icon: 'Home' },
        ],
      };
  }
};

export default function UnifiedNavigation({
  packageName = 'main-portal',
  theme = 'main-portal',
  navigation: customNavigation,
  branding: customBranding,
  className,
}: UnifiedNavigationProps) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const designTheme = getTheme(theme);
  const branding = customBranding || defaultBranding[packageName];
  const userRole = session?.user?.role as UserRole;
  
  const navigation = customNavigation || getNavigationForRole(userRole || UserRole.GUEST, packageName);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleSignOut = () => {
    signOut({ callbackUrl: '/auth/signin' });
  };

  const getThemeClasses = () => {
    const baseClasses = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300';
    
    switch (theme) {
      case 'ice-colombia':
        return cn(baseClasses, 
          isScrolled 
            ? 'bg-black/90 backdrop-blur-lg border-b border-emerald-400/20' 
            : 'bg-transparent'
        );
      case 'apex-ai':
        return cn(baseClasses,
          isScrolled
            ? 'bg-slate-900/90 backdrop-blur-lg border-b border-blue-400/20'
            : 'bg-transparent'
        );
      case 'security-portfolio':
        return cn(baseClasses,
          'bg-black/95 backdrop-blur-lg border-b border-cyan-400/20'
        );
      default:
        return cn(baseClasses,
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm'
            : 'bg-white border-b border-slate-200'
        );
    }
  };

  const getLinkClasses = (item: NavigationItem, isActive: boolean) => {
    const baseClasses = 'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200';
    
    switch (theme) {
      case 'ice-colombia':
        return cn(baseClasses,
          isActive
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-400/30'
            : 'text-white/90 hover:text-emerald-400 hover:bg-emerald-500/10'
        );
      case 'apex-ai':
        return cn(baseClasses,
          isActive
            ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
            : 'text-slate-200 hover:text-blue-400 hover:bg-blue-500/10'
        );
      case 'security-portfolio':
        return cn(baseClasses,
          isActive
            ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-400/30'
            : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
        );
      default:
        return cn(baseClasses,
          isActive
            ? 'bg-blue-50 text-blue-700 border border-blue-200'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
        );
    }
  };

  const getTextColor = () => {
    switch (theme) {
      case 'ice-colombia':
        return 'text-white';
      case 'apex-ai':
        return 'text-slate-100';
      case 'security-portfolio':
        return 'text-white';
      default:
        return 'text-slate-900';
    }
  };

  const renderLogo = () => (
    <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
      {!logoError && branding.logo ? (
        <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={branding.logo}
            alt={`${branding.title} Logo`}
            width={40}
            height={40}
            className="w-full h-full object-contain"
            onError={() => setLogoError(true)}
          />
        </div>
      ) : (
        <div className={cn(
          'w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white shadow-lg',
          theme === 'ice-colombia' && 'bg-gradient-to-br from-emerald-500 to-green-600',
          theme === 'apex-ai' && 'bg-gradient-to-br from-blue-500 to-indigo-600',
          theme === 'security-portfolio' && 'bg-gradient-to-br from-cyan-500 to-teal-600',
          theme === 'main-portal' && 'bg-gradient-to-br from-blue-600 to-indigo-700'
        )}>
          {branding.logoFallback}
        </div>
      )}
      <div className={cn('font-bold text-lg hidden sm:block', getTextColor())}>
        {branding.title}
      </div>
    </Link>
  );

  const renderNavigationItem = (item: NavigationItem, isMobile = false) => {
    const isActive = pathname === item.href;
    const Icon = iconMap[item.icon];
    
    return (
      <Link
        key={item.href}
        href={item.href}
        className={getLinkClasses(item, isActive)}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        <Icon className="w-4 h-4" />
        <span>{item.name}</span>
        {item.badge && (
          <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {item.badge}
          </span>
        )}
      </Link>
    );
  };

  const renderUserMenu = () => {
    if (status === 'loading') {
      return (
        <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
      );
    }

    if (!session?.user) {
      return (
        <Link
          href="/auth/signin"
          className={cn(
            'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
            theme === 'ice-colombia' && 'bg-emerald-500 hover:bg-emerald-600 text-white',
            theme === 'apex-ai' && 'bg-blue-500 hover:bg-blue-600 text-white',
            theme === 'security-portfolio' && 'bg-cyan-500 hover:bg-cyan-600 text-black',
            theme === 'main-portal' && 'bg-blue-600 hover:bg-blue-700 text-white'
          )}
        >
          Sign In
        </Link>
      );
    }

    return (
      <div className="relative">
        <button
          onClick={() => setUserDropdownOpen(!userDropdownOpen)}
          className={cn(
            'flex items-center gap-2 p-2 rounded-lg transition-colors',
            'hover:bg-slate-100',
            theme !== 'main-portal' && 'hover:bg-white/10'
          )}
        >
          <div className={cn(
            'w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm',
            theme === 'ice-colombia' && 'bg-emerald-500 text-white',
            theme === 'apex-ai' && 'bg-blue-500 text-white',
            theme === 'security-portfolio' && 'bg-cyan-500 text-black',
            theme === 'main-portal' && 'bg-blue-600 text-white'
          )}>
            {session.user.name?.charAt(0).toUpperCase() || 'U'}
          </div>
          <ChevronDown className={cn('w-4 h-4', getTextColor())} />
        </button>

        <AnimatePresence>
          {userDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={cn(
                'absolute right-0 mt-2 w-48 rounded-lg shadow-lg border backdrop-blur-lg z-50',
                theme === 'main-portal' && 'bg-white border-slate-200',
                theme !== 'main-portal' && 'bg-black/90 border-white/20'
              )}
            >
              <div className="p-3 border-b border-slate-200">
                <p className={cn('text-sm font-medium', getTextColor())}>
                  {session.user.name}
                </p>
                <p className={cn('text-xs text-opacity-70', getTextColor())}>
                  {session.user.email}
                </p>
                <p className={cn('text-xs text-opacity-50 mt-1', getTextColor())}>
                  {session.user.role}
                </p>
              </div>
              
              <div className="p-2">
                {navigation.user?.map((item) => renderNavigationItem(item))}
                <button
                  onClick={handleSignOut}
                  className={cn(
                    'w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left',
                    'text-red-400 hover:bg-red-500/10'
                  )}
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(getThemeClasses(), className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {renderLogo()}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.main.map((item) => renderNavigationItem(item))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Desktop User Menu */}
            <div className="hidden lg:block">
              {renderUserMenu()}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                'hover:bg-white/10',
                getTextColor()
              )}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={cn(
              'lg:hidden overflow-hidden backdrop-blur-lg border-t',
              theme === 'ice-colombia' && 'bg-black/95 border-emerald-400/20',
              theme === 'apex-ai' && 'bg-slate-900/95 border-blue-400/20',
              theme === 'security-portfolio' && 'bg-black/95 border-cyan-400/20',
              theme === 'main-portal' && 'bg-white/95 border-slate-200'
            )}
          >
            <div className="px-4 py-6 space-y-2">
              {navigation.main.map((item) => renderNavigationItem(item, true))}
              
              {navigation.secondary && navigation.secondary.length > 0 && (
                <>
                  <div className={cn('h-px my-4 bg-current opacity-20', getTextColor())} />
                  {navigation.secondary.map((item) => renderNavigationItem(item, true))}
                </>
              )}

              {/* Mobile User Section */}
              {session?.user && (
                <>
                  <div className={cn('h-px my-4 bg-current opacity-20', getTextColor())} />
                  <div className={cn('p-3 rounded-lg bg-current bg-opacity-5', getTextColor())}>
                    <p className={cn('text-sm font-medium', getTextColor())}>
                      {session.user.name}
                    </p>
                    <p className={cn('text-xs opacity-70', getTextColor())}>
                      {session.user.email}
                    </p>
                  </div>
                  {navigation.user?.map((item) => renderNavigationItem(item, true))}
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </>
              )}

              {!session?.user && (
                <>
                  <div className={cn('h-px my-4 bg-current opacity-20', getTextColor())} />
                  <Link
                    href="/auth/signin"
                    className={cn(
                      'block w-full px-4 py-3 rounded-lg text-center text-sm font-medium transition-colors',
                      theme === 'ice-colombia' && 'bg-emerald-500 hover:bg-emerald-600 text-white',
                      theme === 'apex-ai' && 'bg-blue-500 hover:bg-blue-600 text-white',
                      theme === 'security-portfolio' && 'bg-cyan-500 hover:bg-cyan-600 text-black',
                      theme === 'main-portal' && 'bg-blue-600 hover:bg-blue-700 text-white'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close dropdowns */}
      {(userDropdownOpen || isMobileMenuOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setUserDropdownOpen(false);
            setIsMobileMenuOpen(false);
          }}
        />
      )}
    </motion.nav>
  );
}
// Auth types and constants for the ICE website
// This file defines user roles and authentication-related types

export enum UserRole {
  GUEST = 'guest',
  STUDENT = 'student',
  AGENT = 'agent',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin',
}

// User interface extending NextAuth user
export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  image?: string;
  role: UserRole;
  // Additional user properties for ICE system
  firstName?: string;
  lastName?: string;
  phone?: string;
  studentId?: string;
  agentId?: string;
  permissions?: string[];
  lastLogin?: Date;
  isActive?: boolean;
}

// Session interface extending NextAuth session
export interface AuthSession {
  user: AuthUser;
  expires: string;
  accessToken?: string;
}

// Permission constants
export const PERMISSIONS = {
  // Student permissions
  VIEW_OWN_DOCUMENTS: 'view_own_documents',
  VIEW_OWN_PROGRESS: 'view_own_progress',
  SEND_MESSAGES: 'send_messages',
  VIEW_PAYMENTS: 'view_payments',
  
  // Agent permissions
  VIEW_LEADS: 'view_leads',
  MANAGE_STUDENTS: 'manage_students',
  VIEW_COMMISSIONS: 'view_commissions',
  ACCESS_TRAINING: 'access_training',
  
  // Admin permissions
  MANAGE_USERS: 'manage_users',
  VIEW_ANALYTICS: 'view_analytics',
  MANAGE_PROGRAMS: 'manage_programs',
  ACCESS_AUDIT_LOGS: 'access_audit_logs',
  
  // Super Admin permissions
  SYSTEM_SETTINGS: 'system_settings',
  MANAGE_ADMINS: 'manage_admins',
  BACKUP_RESTORE: 'backup_restore',
} as const;

// Helper function to check if user has permission
export const hasPermission = (user: AuthUser, permission: string): boolean => {
  if (!user.permissions) return false;
  return user.permissions.includes(permission);
};

// Helper function to check if user has role
export const hasRole = (user: AuthUser, role: UserRole): boolean => {
  return user.role === role;
};

// Helper function to check if user has minimum role level
export const hasMinimumRole = (user: AuthUser, minimumRole: UserRole): boolean => {
  const roleHierarchy = {
    [UserRole.GUEST]: 0,
    [UserRole.STUDENT]: 1,
    [UserRole.AGENT]: 2,
    [UserRole.ADMIN]: 3,
    [UserRole.SUPER_ADMIN]: 4,
  };
  
  const userLevel = roleHierarchy[user.role] || 0;
  const minimumLevel = roleHierarchy[minimumRole] || 0;
  
  return userLevel >= minimumLevel;
};

// Default permissions by role
export const DEFAULT_PERMISSIONS = {
  [UserRole.GUEST]: [],
  [UserRole.STUDENT]: [
    PERMISSIONS.VIEW_OWN_DOCUMENTS,
    PERMISSIONS.VIEW_OWN_PROGRESS,
    PERMISSIONS.SEND_MESSAGES,
    PERMISSIONS.VIEW_PAYMENTS,
  ],
  [UserRole.AGENT]: [
    PERMISSIONS.VIEW_OWN_DOCUMENTS,
    PERMISSIONS.VIEW_OWN_PROGRESS,
    PERMISSIONS.SEND_MESSAGES,
    PERMISSIONS.VIEW_LEADS,
    PERMISSIONS.MANAGE_STUDENTS,
    PERMISSIONS.VIEW_COMMISSIONS,
    PERMISSIONS.ACCESS_TRAINING,
  ],
  [UserRole.ADMIN]: [
    PERMISSIONS.VIEW_OWN_DOCUMENTS,
    PERMISSIONS.VIEW_OWN_PROGRESS,
    PERMISSIONS.SEND_MESSAGES,
    PERMISSIONS.VIEW_LEADS,
    PERMISSIONS.MANAGE_STUDENTS,
    PERMISSIONS.VIEW_COMMISSIONS,
    PERMISSIONS.ACCESS_TRAINING,
    PERMISSIONS.MANAGE_USERS,
    PERMISSIONS.VIEW_ANALYTICS,
    PERMISSIONS.MANAGE_PROGRAMS,
    PERMISSIONS.ACCESS_AUDIT_LOGS,
  ],
  [UserRole.SUPER_ADMIN]: [
    PERMISSIONS.VIEW_OWN_DOCUMENTS,
    PERMISSIONS.VIEW_OWN_PROGRESS,
    PERMISSIONS.SEND_MESSAGES,
    PERMISSIONS.VIEW_LEADS,
    PERMISSIONS.MANAGE_STUDENTS,
    PERMISSIONS.VIEW_COMMISSIONS,
    PERMISSIONS.ACCESS_TRAINING,
    PERMISSIONS.MANAGE_USERS,
    PERMISSIONS.VIEW_ANALYTICS,
    PERMISSIONS.MANAGE_PROGRAMS,
    PERMISSIONS.ACCESS_AUDIT_LOGS,
    PERMISSIONS.SYSTEM_SETTINGS,
    PERMISSIONS.MANAGE_ADMINS,
    PERMISSIONS.BACKUP_RESTORE,
  ],
} as const;
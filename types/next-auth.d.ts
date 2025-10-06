import { UserRole } from '@/app/lib/auth';

declare module "next-auth" {
  interface User {
    role: UserRole;
    firstName?: string;
    lastName?: string;
    phone?: string;
    studentId?: string;
    agentId?: string;
    permissions?: string[];
    lastLogin?: Date;
    isActive?: boolean;
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: UserRole;
      firstName?: string;
      lastName?: string;
      phone?: string;
      studentId?: string;
      agentId?: string;
      permissions?: string[];
      lastLogin?: Date;
      isActive?: boolean;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: UserRole;
    firstName?: string;
    lastName?: string;
    phone?: string;
    studentId?: string;
    agentId?: string;
    permissions?: string[];
    lastLogin?: Date;
    isActive?: boolean;
  }
}
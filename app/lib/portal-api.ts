/**
 * Portal API Client
 * 
 * Connects ice-website to the ICE-Visa-Rescheduler-Bot backend API.
 * Handles authentication, token management, and typed API calls.
 */

// ─── Configuration ────────────────────────────────────────────────────

const API_BASE_URL = process.env.NEXT_PUBLIC_PORTAL_API_URL || 'https://contributors-attention-outsourcing-school.trycloudflare.com';

// ─── Token Management ─────────────────────────────────────────────────

const TOKEN_KEY = 'ice_portal_token';
const USER_KEY = 'ice_portal_user';

export function getStoredToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser(): PortalUser | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

export function storeAuth(token: string, user: PortalUser): void {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearAuth(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function isAuthenticated(): boolean {
  return !!getStoredToken();
}

// ─── Types ────────────────────────────────────────────────────────────

export interface PortalUser {
  id: string;
  email: string;
  name: string;
  role: string;
  personId?: string;
  studentId?: string;
  student?: {
    id: string;
    studentNumber: string | null;
    program: string | null;
    status: string;
  } | null;
}

export interface StudentProfile {
  id: string;
  studentNumber: string | null;
  fullName: string;
  email: string | null;
  phone: string | null;
  city: string | null;
  country: string | null;
  program: string | null;
  status: string;
  startDate: string | null;
  endDate: string | null;
  gpa: number | null;
  universityName: string | null;
  career: string | null;
}

export interface StudentDocument {
  id: string;
  documentType: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  status: string;
  uploadedAt: string;
  approvedAt: string | null;
  comments: string | null;
  version: number;
}

export interface StudentRequirement {
  id: string;
  name: string;
  description: string | null;
  category: string;
  isRequired: boolean;
  status: string;
  completedAt: string | null;
  notes: string | null;
}

export interface StudentMilestone {
  id: string;
  name: string;
  description: string | null;
  type: string;
  scheduledDate: string;
  completedAt: string | null;
  status: string;
  notes: string | null;
}

export interface StudentPayment {
  id: string;
  amount: number;
  currency: string;
  status: string;
  paymentDate: string | null;
  concept: string | null;
  method: string | null;
}

export interface SponsorStudent {
  assignmentId: string;
  relationshipType: string | null;
  assignedAt: string;
  student: {
    id: string;
    fullName: string;
    email: string | null;
    phone: string | null;
    program: string | null;
    status: string;
    startDate: string | null;
    currentEnrollment: {
      program: { name: string; code: string; category: string };
      status: string;
    } | null;
  };
  stats: {
    documentsTotal: number;
    documentsApproved: number;
    requirementsTotal: number;
    requirementsMet: number;
    milestonesTotal: number;
    milestonesCompleted: number;
  };
  progressPercent: number;
}

interface ApiResponse<T> {
  success: boolean;
  error?: string;
  data?: T;
}

// ─── Fetch Wrapper ────────────────────────────────────────────────────

async function portalFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getStoredToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers as Record<string, string> || {}),
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    // If 401, clear auth and redirect
    if (response.status === 401) {
      clearAuth();
      if (typeof window !== 'undefined') {
        window.location.href = '/student-portal';
      }
    }
    throw new Error(data.error || `API error ${response.status}`);
  }

  return data;
}

// ─── Auth API ─────────────────────────────────────────────────────────

export async function login(email: string, password: string): Promise<{
  success: boolean;
  token?: string;
  user?: PortalUser;
  error?: string;
}> {
  const data = await portalFetch<any>('/api/portal/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  if (data.success && data.token) {
    storeAuth(data.token, data.user);
  }

  return data;
}

export async function verifyToken(): Promise<{ success: boolean; user?: PortalUser }> {
  try {
    const data = await portalFetch<any>('/api/portal/auth/verify');
    return data;
  } catch {
    clearAuth();
    return { success: false };
  }
}

export function logout(): void {
  clearAuth();
  if (typeof window !== 'undefined') {
    window.location.href = '/student-portal';
  }
}

// ─── Student API ──────────────────────────────────────────────────────

export async function getStudentProfile(): Promise<{
  success: boolean;
  profile: StudentProfile;
  enrollments: any[];
  stats: any;
  progressPercent: number;
}> {
  return portalFetch('/api/portal/student/profile');
}

export async function getStudentDocuments(): Promise<{
  success: boolean;
  documents: StudentDocument[];
  summary: {
    total: number;
    approved: number;
    pending: number;
    review: number;
    rejected: number;
  };
}> {
  return portalFetch('/api/portal/student/documents');
}

export async function getStudentProgress(): Promise<{
  success: boolean;
  requirements: StudentRequirement[];
  milestones: StudentMilestone[];
  payments: StudentPayment[];
}> {
  return portalFetch('/api/portal/student/progress');
}

// ─── Sponsor API ──────────────────────────────────────────────────────

export async function getSponsorStudents(): Promise<{
  success: boolean;
  sponsorName: string;
  students: SponsorStudent[];
  summary: {
    totalStudents: number;
    avgProgress: number;
  };
}> {
  return portalFetch('/api/portal/sponsor/students');
}

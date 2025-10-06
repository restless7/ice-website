"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
  LogOut,
  Shield,
  UserCheck,
  Building2,
  Bookmark
} from "lucide-react";

// Mock sponsor data based on company ID
const sponsorData = {
  1: {
    name: "TechCorp International",
    country: "United States",
    flag: "🇺🇸",
    programs: ["Software Engineering", "Computer Science", "MBA"],
    recruiterName: "Sarah Johnson",
    contactEmail: "sarah.johnson@techcorp.com",
    activePositions: 15,
    studentsPlaced: 43
  },
  2: {
    name: "Maple Leaf Industries",
    country: "Canada", 
    flag: "🇨🇦",
    programs: ["Canada Exchange", "International Business"],
    recruiterName: "Mike Chen",
    contactEmail: "mike.chen@mapleleaf.ca",
    activePositions: 8,
    studentsPlaced: 67
  },
  3: {
    name: "Intraxinc",
    country: "United States",
    flag: "🇺🇸", 
    programs: ["Technology Internships", "Software Development", "Data Science"],
    recruiterName: "David Martinez",
    contactEmail: "david.martinez@intraxinc.com",
    activePositions: 22,
    studentsPlaced: 156
  },
  4: {
    name: "European Innovation Hub",
    country: "Spain",
    flag: "🇪🇸", 
    programs: ["Medicine", "Biomedical Research"],
    recruiterName: "Carmen García",
    contactEmail: "carmen.garcia@eurohub.es",
    activePositions: 5,
    studentsPlaced: 23
  },
  5: {
    name: "Aussie Future Works", 
    country: "Australia",
    flag: "🇦🇺",
    programs: ["Academic English", "Tourism & Hospitality"],
    recruiterName: "James Wilson",
    contactEmail: "james.wilson@aussie.com.au",
    activePositions: 12,
    studentsPlaced: 31
  }
};

// Enhanced mock students filtered by sponsor programs
const getStudentsByPrograms = (programs: string[]) => {
  const allStudents = [
    // TechCorp International & Intraxinc candidates
    {
      id: 1,
      name: "Ana María Torres",
      email: "ana.torres@email.com", 
      phone: "+57 300 123 4567",
      program: "Canada Exchange - University of Toronto",
      destination: "Canada",
      flag: "🇨🇦",
      startDate: "2024-09-15",
      status: "approved",
      stage: "completed", 
      progress: 100,
      agent: "María González",
      avatar: "AT",
      lastLogin: "2 hours ago",
      gpa: "3.9/4.0",
      englishLevel: "C1 Advanced",
      workExperience: "2 years",
      skills: ["React", "Node.js", "Python", "AWS", "JavaScript", "MongoDB"],
      education: "Systems Engineering - Universidad Nacional",
      documents: [
        { name: "Passport", status: "approved", uploadDate: "2024-01-10" },
        { name: "Visa", status: "approved", uploadDate: "2024-01-15" },
        { name: "IELTS Certificate", status: "approved", uploadDate: "2024-01-12" },
        { name: "Acceptance Letter", status: "approved", uploadDate: "2024-01-20" },
        { name: "Payment Receipt", status: "approved", uploadDate: "2024-01-18" },
        { name: "Academic Transcripts", status: "approved", uploadDate: "2024-01-08" },
        { name: "CV/Resume", status: "approved", uploadDate: "2024-01-05" }
      ],
      budget: "25,000-30,000 USD",
      createdAt: "2024-01-05T10:00:00Z",
      isBookmarked: true,
      matchScore: 95
    },
    {
      id: 2,
      name: "Diego Ramírez",
      email: "diego.ramirez@email.com",
      phone: "+57 301 234 5678",
      program: "Software Development Bootcamp - Stanford",
      destination: "United States",
      flag: "🇺🇸",
      startDate: "2024-08-20",
      status: "approved",
      stage: "completed",
      progress: 100,
      agent: "Carlos Méndez",
      avatar: "DR",
      lastLogin: "1 day ago",
      gpa: "3.8/4.0",
      englishLevel: "C1 Advanced",
      workExperience: "3 years",
      skills: ["Java", "Spring Boot", "Docker", "Kubernetes", "React", "PostgreSQL"],
      education: "Computer Science - Universidad de los Andes",
      documents: [
        { name: "Passport", status: "approved", uploadDate: "2024-01-08" },
        { name: "Academic Transcripts", status: "approved", uploadDate: "2024-01-12" },
        { name: "TOEFL Certificate", status: "approved", uploadDate: "2024-01-14" },
        { name: "Work Portfolio", status: "approved", uploadDate: "2024-01-16" },
        { name: "Financial Proof", status: "approved", uploadDate: "2024-01-10" }
      ],
      budget: "35,000-45,000 USD",
      createdAt: "2024-01-08T14:30:00Z",
      isBookmarked: false,
      matchScore: 93
    },
    {
      id: 3,
      name: "Camila Herrera",
      email: "camila.herrera@email.com",
      phone: "+57 302 345 6789",
      program: "Data Science Internship - Google",
      destination: "United States",
      flag: "🇺🇸",
      startDate: "2024-07-15",
      status: "in_process",
      stage: "interview",
      progress: 75,
      agent: "Laura Gómez",
      avatar: "CH",
      lastLogin: "3 hours ago",
      gpa: "3.95/4.0",
      englishLevel: "C2 Proficiency",
      workExperience: "1.5 years",
      skills: ["Python", "Machine Learning", "TensorFlow", "SQL", "Tableau", "R"],
      education: "Data Science - Universidad Javeriana",
      documents: [
        { name: "Passport", status: "approved", uploadDate: "2024-01-05" },
        { name: "Academic Transcripts", status: "approved", uploadDate: "2024-01-07" },
        { name: "IELTS Certificate", status: "approved", uploadDate: "2024-01-09" },
        { name: "Research Portfolio", status: "review", uploadDate: "2024-01-15" },
        { name: "Recommendation Letters", status: "approved", uploadDate: "2024-01-12" }
      ],
      budget: "40,000-50,000 USD",
      createdAt: "2024-01-05T09:15:00Z",
      isBookmarked: true,
      matchScore: 97
    },
    {
      id: 4,
      name: "Pedro Silva García", 
      email: "pedro.silva@email.com",
      phone: "+57 303 456 7890",
      program: "Master's in Engineering - MIT",
      destination: "United States",
      flag: "🇺🇸",
      startDate: "2024-08-01",
      status: "approved",
      stage: "completed",
      progress: 100, 
      agent: "Carlos Méndez",
      avatar: "PS",
      lastLogin: "1 week ago",
      gpa: "4.0/4.0",
      englishLevel: "C2 Proficiency",
      workExperience: "4 years",
      skills: ["Machine Learning", "Data Science", "TensorFlow", "Python", "AI Research", "Deep Learning"],
      education: "Electronic Engineering - Universidad de los Andes",
      documents: [
        { name: "Passport", status: "approved", uploadDate: "2024-01-06" },
        { name: "Academic Transcripts", status: "approved", uploadDate: "2024-01-10" },
        { name: "Personal Statement", status: "approved", uploadDate: "2024-01-12" },
        { name: "Recommendation Letters", status: "approved", uploadDate: "2024-01-14" },
        { name: "Financial Proof", status: "approved", uploadDate: "2024-01-08" },
        { name: "GRE Scores", status: "approved", uploadDate: "2024-01-03" },
        { name: "Research Portfolio", status: "approved", uploadDate: "2024-01-01" }
      ],
      budget: "60,000-70,000 USD",
      createdAt: "2024-01-03T16:20:00Z",
      isBookmarked: false,
      matchScore: 92
    },
    {
      id: 5,
      name: "Alejandro Morales",
      email: "alejandro.morales@email.com",
      phone: "+57 304 567 8901",
      program: "Technology Internship - Microsoft",
      destination: "United States",
      flag: "🇺🇸",
      startDate: "2024-06-01",
      status: "approved",
      stage: "visa",
      progress: 85,
      agent: "María González",
      avatar: "AM",
      lastLogin: "1 hour ago",
      gpa: "3.85/4.0",
      englishLevel: "C1 Advanced",
      workExperience: "2.5 years",
      skills: ["C#", ".NET", "Azure", "JavaScript", "Angular", "SQL Server"],
      education: "Software Engineering - Universidad Nacional",
      documents: [
        { name: "Passport", status: "approved", uploadDate: "2024-01-20" },
        { name: "Academic Transcripts", status: "approved", uploadDate: "2024-01-22" },
        { name: "TOEFL Certificate", status: "approved", uploadDate: "2024-01-25" },
        { name: "Work Portfolio", status: "approved", uploadDate: "2024-01-28" },
        { name: "Visa Application", status: "pending", uploadDate: null }
      ],
      budget: "30,000-40,000 USD",
      createdAt: "2024-01-20T11:45:00Z",
      isBookmarked: true,
      matchScore: 94
    },
    {
      id: 6,
      name: "Valentina Castro",
      email: "valentina.castro@email.com",
      phone: "+57 305 678 9012",
      program: "MBA Technology Management - Stanford",
      destination: "United States",
      flag: "🇺🇸",
      startDate: "2024-09-05",
      status: "in_process",
      stage: "documentation",
      progress: 60,
      agent: "Pedro Silva",
      avatar: "VC",
      lastLogin: "5 hours ago",
      gpa: "3.7/4.0",
      englishLevel: "C1 Advanced",
      workExperience: "6 years",
      skills: ["Product Management", "Strategy", "Leadership", "Agile", "Data Analysis", "Business Intelligence"],
      education: "Industrial Engineering - Universidad Javeriana",
      documents: [
        { name: "Passport", status: "approved", uploadDate: "2024-02-01" },
        { name: "GMAT Scores", status: "approved", uploadDate: "2024-02-03" },
        { name: "Work Experience Letters", status: "review", uploadDate: "2024-02-05" },
        { name: "MBA Essays", status: "pending", uploadDate: null },
        { name: "TOEFL Certificate", status: "approved", uploadDate: "2024-02-02" }
      ],
      budget: "80,000-90,000 USD",
      createdAt: "2024-02-01T13:20:00Z",
      isBookmarked: false,
      matchScore: 87
    },
    {
      id: 7,
      name: "Sebastián López",
      email: "sebastian.lopez@email.com",
      phone: "+57 306 789 0123",
      program: "Computer Science Exchange - University of Waterloo",
      destination: "Canada",
      flag: "🇨🇦",
      startDate: "2024-05-20",
      status: "approved",
      stage: "completed",
      progress: 100,
      agent: "Laura Gómez",
      avatar: "SL",
      lastLogin: "4 days ago",
      gpa: "3.92/4.0",
      englishLevel: "C2 Proficiency",
      workExperience: "3 years",
      skills: ["Python", "Go", "Kubernetes", "DevOps", "AWS", "Microservices"],
      education: "Computer Science - Universidad de los Andes",
      documents: [
        { name: "Passport", status: "approved", uploadDate: "2024-01-25" },
        { name: "Academic Transcripts", status: "approved", uploadDate: "2024-01-28" },
        { name: "IELTS Certificate", status: "approved", uploadDate: "2024-01-30" },
        { name: "Acceptance Letter", status: "approved", uploadDate: "2024-02-02" },
        { name: "Financial Proof", status: "approved", uploadDate: "2024-01-27" }
      ],
      budget: "35,000-45,000 USD",
      createdAt: "2024-01-25T10:30:00Z",
      isBookmarked: true,
      matchScore: 96
    },
    // Medical/Research candidates for European Innovation Hub
    {
      id: 8,
      name: "María Rodríguez López",
      email: "maria.rodriguez@email.com",
      phone: "+57 307 890 1234", 
      program: "PhD in Medicine - University of Barcelona",
      destination: "Spain",
      flag: "🇪🇸",
      startDate: "2025-01-15",
      status: "in_process",
      stage: "interview",
      progress: 65,
      agent: "María González",
      avatar: "MR",
      lastLogin: "4 hours ago",
      gpa: "3.8/4.0", 
      englishLevel: "B2 Upper",
      workExperience: "1 year",
      skills: ["Clinical Research", "Anatomy", "Physiology", "Medical Statistics", "Laboratory Techniques", "Research Methodology"],
      education: "Medicine - Universidad del Rosario",
      documents: [
        { name: "Passport", status: "approved", uploadDate: "2024-01-15" },
        { name: "Academic Records", status: "approved", uploadDate: "2024-01-18" },
        { name: "Research Proposal", status: "review", uploadDate: "2024-01-20" },
        { name: "Language Certificate", status: "approved", uploadDate: "2024-01-16" },
        { name: "Academic CV", status: "pending", uploadDate: null }
      ],
      budget: "35,000-45,000 USD", 
      createdAt: "2024-01-15T11:30:00Z",
      isBookmarked: true,
      matchScore: 88
    },
    {
      id: 9,
      name: "Dr. Andrés Vega",
      email: "andres.vega@email.com",
      phone: "+57 308 901 2345",
      program: "Biomedical Research Fellowship - CSIC Madrid",
      destination: "Spain",
      flag: "🇪🇸",
      startDate: "2024-10-01",
      status: "approved",
      stage: "visa",
      progress: 90,
      agent: "Carlos Méndez",
      avatar: "AV",
      lastLogin: "2 days ago",
      gpa: "3.95/4.0",
      englishLevel: "C1 Advanced",
      workExperience: "5 years",
      skills: ["Molecular Biology", "Bioinformatics", "CRISPR", "Cell Culture", "Research Management", "Grant Writing"],
      education: "Biomedical Sciences PhD - Universidad Nacional",
      documents: [
        { name: "Passport", status: "approved", uploadDate: "2024-02-10" },
        { name: "PhD Diploma", status: "approved", uploadDate: "2024-02-12" },
        { name: "Research Publications", status: "approved", uploadDate: "2024-02-15" },
        { name: "Fellowship Award Letter", status: "approved", uploadDate: "2024-02-18" },
        { name: "Visa Application", status: "pending", uploadDate: null }
      ],
      budget: "45,000-55,000 USD",
      createdAt: "2024-02-10T15:45:00Z",
      isBookmarked: false,
      matchScore: 91
    },
    // Business/MBA candidates
    {
      id: 10,
      name: "Carlos Mendoza",
      email: "carlos.mendoza@email.com",
      phone: "+57 309 012 3456",
      program: "MBA - London Business School",
      destination: "United Kingdom",
      flag: "🇬🇧",
      startDate: "2024-09-01",
      status: "approved",
      stage: "completed",
      progress: 100,
      agent: "Laura Gómez",
      avatar: "CM",
      lastLogin: "3 days ago",
      gpa: "3.7/4.0",
      englishLevel: "C1 Advanced",
      workExperience: "5 years",
      skills: ["Finance", "Strategy", "Leadership", "Data Analysis", "Investment Banking", "Corporate Finance"],
      education: "Business Administration - Universidad Javeriana",
      documents: [
        { name: "Passport", status: "approved", uploadDate: "2024-01-05" },
        { name: "GMAT Scores", status: "approved", uploadDate: "2024-01-08" },
        { name: "Work Experience Letters", status: "approved", uploadDate: "2024-01-10" },
        { name: "MBA Essays", status: "approved", uploadDate: "2024-01-12" },
        { name: "Financial Statements", status: "approved", uploadDate: "2024-01-07" }
      ],
      budget: "45,000-55,000 USD",
      createdAt: "2024-01-02T14:30:00Z",
      isBookmarked: true,
      matchScore: 90
    },
    // Additional diverse candidates
    {
      id: 11,
      name: "Sofía Ramírez",
      email: "sofia.ramirez@email.com",
      phone: "+57 310 123 4567",
      program: "International Business - University of Toronto",
      destination: "Canada",
      flag: "🇨🇦",
      startDate: "2024-08-25",
      status: "in_process",
      stage: "documentation",
      progress: 55,
      agent: "Pedro Silva",
      avatar: "SR",
      lastLogin: "6 hours ago",
      gpa: "3.6/4.0",
      englishLevel: "B2 Upper",
      workExperience: "3 years",
      skills: ["International Trade", "Business Development", "Market Analysis", "Negotiation", "Project Management", "French"],
      education: "International Business - Universidad Externado",
      documents: [
        { name: "Passport", status: "approved", uploadDate: "2024-02-20" },
        { name: "Academic Transcripts", status: "review", uploadDate: "2024-02-22" },
        { name: "IELTS Certificate", status: "pending", uploadDate: null },
        { name: "Work Experience Letters", status: "approved", uploadDate: "2024-02-25" },
        { name: "Statement of Purpose", status: "review", uploadDate: "2024-02-28" }
      ],
      budget: "28,000-35,000 USD",
      createdAt: "2024-02-20T09:15:00Z",
      isBookmarked: false,
      matchScore: 82
    },
    {
      id: 12,
      name: "Isabella Martínez",
      email: "isabella.martinez@email.com",
      phone: "+57 311 234 5678",
      program: "Work & Study - Auckland Institute", 
      destination: "New Zealand",
      flag: "🇳🇿",
      startDate: "2024-10-15",
      status: "rejected",
      stage: "application",
      progress: 25,
      agent: "Pedro Silva",
      avatar: "IM",
      lastLogin: "2 weeks ago",
      gpa: "3.2/4.0",
      englishLevel: "B1 Intermediate", 
      workExperience: "6 months",
      skills: ["Customer Service", "Tourism", "Spanish", "Communication", "Event Planning", "Social Media"],
      education: "Tourism - Universidad Externado",
      documents: [
        { name: "Passport", status: "approved", uploadDate: "2024-01-18" },
        { name: "English Test", status: "rejected", uploadDate: "2024-01-20" },
        { name: "Bank Statement", status: "rejected", uploadDate: "2024-01-19" },
        { name: "Health Insurance", status: "pending", uploadDate: null },
        { name: "Criminal Background", status: "pending", uploadDate: null }
      ],
      budget: "15,000-20,000 USD",
      createdAt: "2024-01-18T14:45:00Z",
      isBookmarked: false,
      matchScore: 45
    }
  ];

  return allStudents.filter(student => {
    return programs.some(program => 
      student.program.toLowerCase().includes(program.toLowerCase()) ||
      student.skills.some(skill => 
        program.toLowerCase().includes(skill.toLowerCase())
      ) ||
      student.education.toLowerCase().includes(program.toLowerCase())
    );
  });
};

// Stages and status definitions (same as original)
const stages = {
  application: { label: "Application", color: "bg-blue-500", textColor: "text-blue-700", bgColor: "bg-blue-50" },
  documentation: { label: "Documentation", color: "bg-yellow-500", textColor: "text-yellow-700", bgColor: "bg-yellow-50" },
  interview: { label: "Interview", color: "bg-purple-500", textColor: "text-purple-700", bgColor: "bg-purple-50" },
  visa: { label: "Visa Process", color: "bg-orange-500", textColor: "text-orange-700", bgColor: "bg-orange-50" },
  completed: { label: "Completed", color: "bg-green-500", textColor: "text-green-700", bgColor: "bg-green-50" }
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

// Enhanced candidate card for sponsors
const CandidateCard = ({ student, onViewDetails, onBookmark, sponsor }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-all">
    {/* Header */}
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-sm">{student.avatar}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-xl">{student.flag}</span>
            <span className="text-sm text-gray-600">{student.destination}</span>
            <div className={`w-2 h-2 rounded-full ${statusColors[student.status as keyof typeof statusColors]}`}></div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onBookmark(student)}
          className={`p-2 rounded-lg transition-colors ${
            student.isBookmarked 
              ? 'text-yellow-600 bg-yellow-50 hover:bg-yellow-100' 
              : 'text-gray-400 bg-gray-50 hover:bg-gray-100'
          }`}
        >
          <Bookmark className={`h-4 w-4 ${student.isBookmarked ? 'fill-current' : ''}`} />
        </button>
        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${stages[student.stage as keyof typeof stages].bgColor} ${stages[student.stage as keyof typeof stages].textColor}`}>
          {stages[student.stage as keyof typeof stages].label}
        </div>
      </div>
    </div>

    {/* Match Score */}
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-900">Match with {sponsor.name}</span>
        <span className="text-sm font-semibold text-green-600">{student.matchScore}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-300 ${
            student.matchScore >= 90 ? 'bg-green-600' :
            student.matchScore >= 70 ? 'bg-blue-600' :
            student.matchScore >= 50 ? 'bg-yellow-600' : 'bg-red-600'
          }`}
          style={{ width: `${student.matchScore}%` }}
        ></div>
      </div>
    </div>

    {/* Program */}
    <div className="mb-4">
      <p className="text-sm font-medium text-gray-900 mb-2">{student.program}</p>
      <div className="flex items-center text-sm text-gray-600">
        <Calendar className="h-4 w-4 mr-1" />
        Start: {student.startDate}
      </div>
    </div>

    {/* Key Info Grid */}
    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">GPA:</span>
          <span className="font-medium text-gray-900">{student.gpa}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">English:</span>
          <span className="font-medium text-gray-900">{student.englishLevel}</span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Experience:</span>
          <span className="font-medium text-gray-900">{student.workExperience}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Documents:</span>
          <span className="font-medium text-green-600">
            {student.documents.filter((d: any) => d.status === 'approved').length}/{student.documents.length}
          </span>
        </div>
      </div>
    </div>

    {/* Skills */}
    <div className="mb-4">
      <p className="text-sm font-medium text-gray-900 mb-2">Key Skills</p>
      <div className="flex flex-wrap gap-1">
        {student.skills.slice(0, 3).map((skill: string, index: number) => (
          <span
            key={index}
            className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
          >
            {skill}
          </span>
        ))}
        {student.skills.length > 3 && (
          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
            +{student.skills.length - 3} más
          </span>
        )}
      </div>
    </div>

    {/* Actions */}
    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <div className="flex items-center space-x-2">
        <Mail className="h-4 w-4 text-gray-400" />
        <Phone className="h-4 w-4 text-gray-400" />
      </div>
      <div className="flex space-x-2">
        <button 
          onClick={() => onViewDetails(student)}
          className="flex items-center px-3 py-1.5 text-sm bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors font-medium"
        >
          <Eye className="h-4 w-4 mr-1" />
          Ver Perfil
        </button>
        <button className="flex items-center px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors font-medium">
          <Send className="h-4 w-4 mr-1" />
          Contactar
        </button>
      </div>
    </div>
  </div>
);

function SponsorDashboardContent() {
  const searchParams = useSearchParams();
  const companyId = searchParams?.get('company') || '1';
  const validCompanyIds = ['1', '2', '3', '4', '5'] as const;
  const numericCompanyId = (validCompanyIds as readonly string[]).includes(companyId) ? parseInt(companyId) as keyof typeof sponsorData : 1;
  const sponsor = sponsorData[numericCompanyId];
  
  const [candidates, setCandidates] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);
  const [showCandidateModal, setShowCandidateModal] = useState(false);

  // Load candidates based on sponsor programs
  useEffect(() => {
    if (sponsor) {
      const filteredCandidates = getStudentsByPrograms(sponsor.programs);
      setCandidates(filteredCandidates);
    }
  }, [sponsor]);

  const handleViewDetails = useCallback((candidate: any) => {
    setSelectedCandidate(candidate);
    setShowCandidateModal(true);
  }, []);

  const handleBookmark = useCallback((candidate: any) => {
    setCandidates(prev => 
      prev.map(c => 
        c.id === candidate.id 
          ? { ...c, isBookmarked: !c.isBookmarked }
          : c
      )
    );
  }, []);

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.skills.some((skill: string) => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === "all" || candidate.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: candidates.length,
    approved: candidates.filter(c => c.status === "approved").length,
    inProcess: candidates.filter(c => c.status === "in_process").length,
    bookmarked: candidates.filter(c => c.isBookmarked).length,
    highMatch: candidates.filter(c => c.matchScore >= 90).length
  };

  if (!sponsor) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Empresa no encontrada</h1>
        <Link href="/ice-dashboard/sponsors/login" className="text-red-600 hover:text-red-700">
          Volver al login
        </Link>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 shadow-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/ice-dashboard/sponsors/login"
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div className="flex items-center space-x-3">
                <img 
                  src="/images/logo_ice.png" 
                  alt="ICE Colombia" 
                  className="h-8 w-auto object-contain"
                />
                <div>
                  <h1 className="text-xl font-bold text-white">Portal de Sponsors</h1>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{sponsor.flag}</span>
                    <span className="text-red-100">{sponsor.name}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-5 w-5 text-red-200 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar candidatos..."
                  className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm placeholder-red-200 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 backdrop-blur-sm w-80"
                />
              </div>
              
              <button className="relative p-2 text-red-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                <Bell className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </button>

              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm">
                <UserCheck className="h-4 w-4 text-red-100" />
                <span className="text-sm text-white">{sponsor.recruiterName}</span>
              </div>

              <button className="p-2 text-red-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Company Info Banner */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">{sponsor.flag}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{sponsor.name}</h2>
                  <p className="text-gray-600">{sponsor.country} • Activo desde 2019</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Programas Activos:</h3>
                <div className="flex flex-wrap gap-2">
                  {sponsor.programs.map((program, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-red-50 text-red-700 text-sm rounded-full border border-red-200"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{sponsor.activePositions}</div>
                <div className="text-sm text-gray-600">Posiciones Activas</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{sponsor.studentsPlaced}</div>
                <div className="text-sm text-gray-600">Estudiantes Colocados</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
            <div className="text-sm text-gray-600">Candidatos Disponibles</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
            <div className="text-sm text-gray-600">Listos para Trabajo</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-blue-600">{stats.inProcess}</div>
            <div className="text-sm text-gray-600">En Proceso</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-yellow-600">{stats.bookmarked}</div>
            <div className="text-sm text-gray-600">Marcados</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-purple-600">{stats.highMatch}</div>
            <div className="text-sm text-gray-600">Alta Compatibilidad</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar por nombre, programa o habilidad..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-80"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="all">Todos los estados</option>
                  <option value="approved">Listos para trabajo</option>
                  <option value="in_process">En proceso</option>
                  <option value="pending">Pendientes</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                Mostrando {filteredCandidates.length} candidatos compatibles
              </span>
            </div>
          </div>
        </div>

        {/* Candidates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {filteredCandidates.map((candidate) => (
            <CandidateCard 
              key={candidate.id} 
              student={candidate}
              sponsor={sponsor}
              onViewDetails={handleViewDetails}
              onBookmark={handleBookmark}
            />
          ))}
        </div>

        {filteredCandidates.length === 0 && (
          <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-100 text-center">
            <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron candidatos</h3>
            <p className="text-gray-500 mb-6">
              {searchTerm || statusFilter !== "all" 
                ? "Intenta ajustar los filtros de búsqueda"
                : "No hay candidatos disponibles para sus programas actualmente"
              }
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div>
              <span>© 2024 ICE Colombia - Portal Exclusivo para Sponsors</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Sistema Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>SSL Activo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Candidate Detail Modal */}
      {showCandidateModal && selectedCandidate && (
        <CandidateDetailModal 
          candidate={selectedCandidate}
          onClose={() => setShowCandidateModal(false)}
          sponsor={sponsor}
        />
      )}
    </div>
  );
}

// Candidate Detail Modal Component
const CandidateDetailModal = ({ candidate, onClose, sponsor }: any) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">{candidate.avatar}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{candidate.name}</h2>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xl">{candidate.flag}</span>
                <span className="text-gray-600">{candidate.destination}</span>
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${stages[candidate.stage as keyof typeof stages].bgColor} ${stages[candidate.stage as keyof typeof stages].textColor}`}>
                  {stages[candidate.stage as keyof typeof stages].label}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Compatibility Score */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Compatibilidad con {sponsor.name}</h3>
            <div className="text-3xl font-bold text-red-600">{candidate.matchScore}%</div>
          </div>
          <div className="w-full bg-white rounded-full h-3">
            <div 
              className={`h-3 rounded-full ${
                candidate.matchScore >= 90 ? 'bg-green-600' :
                candidate.matchScore >= 70 ? 'bg-blue-600' :
                candidate.matchScore >= 50 ? 'bg-yellow-600' : 'bg-red-600'
              }`}
              style={{ width: `${candidate.matchScore}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {candidate.matchScore >= 90 ? 'Excelente candidato para sus programas' :
             candidate.matchScore >= 70 ? 'Buen candidato con potencial' :
             candidate.matchScore >= 50 ? 'Candidato con algunas competencias' : 
             'Requiere evaluación adicional'}
          </p>
        </div>

        {/* Basic Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Información Personal</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">Email:</span>
                  <span className="text-gray-900">{candidate.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">Teléfono:</span>
                  <span className="text-gray-900">{candidate.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">Fecha de inicio:</span>
                  <span className="text-gray-900">{candidate.startDate}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Perfil Académico</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">GPA:</span>
                  <span className="font-semibold text-gray-900">{candidate.gpa}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Nivel de Inglés:</span>
                  <span className="font-semibold text-gray-900">{candidate.englishLevel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Experiencia Laboral:</span>
                  <span className="font-semibold text-gray-900">{candidate.workExperience}</span>
                </div>
              </div>
              <div className="mt-3">
                <span className="text-gray-600 text-sm">Educación:</span>
                <p className="text-gray-900 text-sm mt-1">{candidate.education}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Programa Actual</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-gray-900 mb-2">{candidate.program}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{candidate.destination}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Habilidades</h3>
              <div className="flex flex-wrap gap-2">
                {candidate.skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Documentación</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {candidate.documents.map((doc: any, index: number) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getDocumentStatusIcon(doc.status)}
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{doc.name}</p>
                    {doc.uploadDate && (
                      <p className="text-xs text-gray-500">Subido: {doc.uploadDate}</p>
                    )}
                  </div>
                </div>
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                  {doc.status === 'approved' ? 'Aprobado' :
                   doc.status === 'rejected' ? 'Rechazado' :
                   doc.status === 'review' ? 'En Revisión' : 'Pendiente'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
              <Send className="h-4 w-4 mr-2" />
              Contactar Candidato
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              <Download className="h-4 w-4 mr-2" />
              Descargar CV
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              <Bookmark className="h-4 w-4 mr-2" />
              {candidate.isBookmarked ? 'Guardado' : 'Guardar'}
            </button>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function SponsorDashboard() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando dashboard...</p>
        </div>
      </div>
    }>
      <SponsorDashboardContent />
    </Suspense>
  );
}

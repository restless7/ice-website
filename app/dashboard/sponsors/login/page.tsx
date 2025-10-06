"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Building,
  Eye,
  EyeOff,
  LogIn,
  Shield,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  Star,
  FileText,
  Lock,
  User,
  ArrowLeft
} from "lucide-react";

// Mock sponsor companies for demo
const mockSponsors = [
  {
    id: 1,
    name: "TechCorp International",
    country: "United States",
    flag: "🇺🇸",
    programs: ["Software Engineering", "Computer Science", "MBA"],
    activePositions: 15,
    studentsPlaced: 43,
    since: "2019"
  },
  {
    id: 2,
    name: "Maple Leaf Industries",
    country: "Canada",
    flag: "🇨🇦",
    programs: ["Canada Exchange", "International Business"],
    activePositions: 8,
    studentsPlaced: 67,
    since: "2018"
  },
  {
    id: 3,
    name: "Intraxinc",
    country: "United States",
    flag: "🇺🇸",
    programs: ["Technology Internships", "Software Development", "Data Science"],
    activePositions: 22,
    studentsPlaced: 156,
    since: "2017"
  },
  {
    id: 4,
    name: "European Innovation Hub",
    country: "Spain",
    flag: "🇪🇸",
    programs: ["Medicine", "Biomedical Research"],
    activePositions: 5,
    studentsPlaced: 23,
    since: "2020"
  },
  {
    id: 5,
    name: "Aussie Future Works",
    country: "Australia",
    flag: "🇦🇺",
    programs: ["Academic English", "Tourism & Hospitality"],
    activePositions: 12,
    studentsPlaced: 31,
    since: "2021"
  }
];

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
    <div className="flex items-center space-x-3 mb-2">
      <Icon className="h-5 w-5 text-white" />
      <h3 className="font-semibold text-white">{title}</h3>
    </div>
    <p className="text-red-100 text-sm">{description}</p>
  </div>
);

export default function SponsorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [selectedSponsor, setSelectedSponsor] = useState<any>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginStep, setLoginStep] = useState(1); // 1: Select Company, 2: Login Form
  const router = useRouter();

  const handleCompanySelect = (sponsor: any) => {
    setSelectedSponsor(sponsor);
    setLoginStep(2);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to sponsor dashboard with selected sponsor data
      router.push(`/ice-dashboard/sponsors/dashboard?company=${selectedSponsor.id}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Branding & Info */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          {/* Header */}
          <div className="mb-8">
              <Link 
                href="/ice-dashboard"
                className="inline-flex items-center text-white hover:text-red-100 transition-colors mb-6"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Dashboard
              </Link>
            
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/images/logo_ice.png" 
                alt="ICE Colombia" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-white">
                  Sponsor Portal
                </h1>
                <p className="text-red-100 text-lg">
                  ICE Colombia - Corporate Access
                </p>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Connecting Talent with Opportunities
            </h2>
            <p className="text-red-100 text-lg leading-relaxed">
              Access our exclusive portal for sponsor companies and discover 
              highly qualified students ready for international job opportunities 
              in your specific programs.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <FeatureCard
              icon={Users}
              title="Verified Candidates"
              description="Access to complete profiles of pre-approved students"
            />
            <FeatureCard
              icon={FileText}
              title="Complete Documentation"
              description="View documents, certifications and references"
            />
            <FeatureCard
              icon={Shield}
              title="Secure Process"
              description="Secure platform with corporate authentication"
            />
            <FeatureCard
              icon={Globe}
              title="Global Reach"
              description="Qualified students for international programs"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">150+</div>
              <div className="text-red-100 text-sm">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2,340</div>
              <div className="text-red-100 text-sm">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-red-100 text-sm">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              {loginStep === 1 ? (
                /* Step 1: Company Selection */
                <>
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Select Your Company
                    </h3>
                    <p className="text-gray-600">
                      Choose your sponsor company to access the portal
                    </p>
                  </div>

                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {mockSponsors.map((sponsor) => (
                      <button
                        key={sponsor.id}
                        onClick={() => handleCompanySelect(sponsor)}
                        className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border-2 border-transparent hover:border-red-300 transition-all text-left group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{sponsor.flag}</span>
                            <div>
                              <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                                {sponsor.name}
                              </h4>
                              <p className="text-sm text-gray-600">{sponsor.country}</p>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-red-600 transition-colors" />
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                          <div className="text-center p-2 bg-white rounded">
                            <div className="font-semibold text-red-600">{sponsor.activePositions}</div>
                            <div className="text-gray-500">Positions</div>
                          </div>
                          <div className="text-center p-2 bg-white rounded">
                            <div className="font-semibold text-green-600">{sponsor.studentsPlaced}</div>
                            <div className="text-gray-500">Placed</div>
                          </div>
                          <div className="text-center p-2 bg-white rounded">
                            <div className="font-semibold text-blue-600">{sponsor.since}</div>
                            <div className="text-gray-500">Since</div>
                          </div>
                        </div>
                        
                        <div className="mt-3 flex flex-wrap gap-1">
                          {sponsor.programs.slice(0, 2).map((program, index) => (
                            <span
                              key={index}
                              className="inline-block px-2 py-1 bg-red-50 text-red-700 text-xs rounded-full"
                            >
                              {program}
                            </span>
                          ))}
                          {sponsor.programs.length > 2 && (
                            <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              +{sponsor.programs.length - 2} more
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500 text-center">
                      Can't find your company?{" "}
                      <button className="text-red-600 hover:text-red-700 font-medium">
                        Contact Support
                      </button>
                    </p>
                  </div>
                </>
              ) : (
                /* Step 2: Login Form */
                <>
                  <div className="text-center mb-8">
                    <div className="flex items-center space-x-3 justify-center mb-4">
                      <span className="text-2xl">{selectedSponsor?.flag}</span>
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-gray-900">
                          {selectedSponsor?.name}
                        </h3>
                        <p className="text-sm text-gray-600">{selectedSponsor?.country}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setLoginStep(1)}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Change company
                    </button>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="h-4 w-4 inline mr-1" />
                        Corporate Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="user@company.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Lock className="h-4 w-4 inline mr-1" />
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          placeholder="Enter your password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Building className="h-4 w-4 inline mr-1" />
                        Company Code
                      </label>
                      <input
                        type="text"
                        value={companyCode}
                        onChange={(e) => setCompanyCode(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="e.g: TECH001"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      ) : (
                        <>
                          <LogIn className="h-5 w-5 mr-2" />
                          Access Portal
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-6 flex items-center justify-between text-sm">
                    <button className="text-red-600 hover:text-red-700">
                      Forgot password?
                    </button>
                    <button className="text-red-600 hover:text-red-700">
                      Request Access
                    </button>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <Shield className="h-4 w-4" />
                      <span>Secure SSL Connection</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="text-center mt-6">
              <p className="text-red-100 text-sm">
                © 2024 ICE Colombia. Exclusive portal for sponsor companies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Linkedin, 
  Copy, 
  QrCode, 
  Send,
  CheckCircle,
  Download,
  Eye
} from 'lucide-react';
import { 
  generateEmailTemplate, 
  generateWhatsAppMessage, 
  generateLinkedInMessage,
  generateSharingSummary,
  getQRCodeData,
  ShareData 
} from '@/app/lib/shareProposal';

interface ProposalSharingProps {
  proposalToken: string;
  defaultData?: Partial<ShareData>;
  className?: string;
}

export default function ProposalSharing({ proposalToken, defaultData, className = "" }: ProposalSharingProps) {
  const [activeTab, setActiveTab] = useState<'email' | 'whatsapp' | 'linkedin' | 'summary'>('summary');
  const [copied, setCopied] = useState(false);
  const [shareData, setShareData] = useState<ShareData>({
    recipientName: defaultData?.recipientName || 'Cliente',
    recipientEmail: defaultData?.recipientEmail || 'cliente@ice.edu.co',
    companyName: defaultData?.companyName || 'ICE Colombia',
    proposalUrl: `${typeof window !== 'undefined' ? window.location.origin : 'https://apexdigitalsolutions.com'}/propuesta/${proposalToken}`,
    validUntil: defaultData?.validUntil || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    senderName: defaultData?.senderName || 'Sebastian García',
    senderEmail: defaultData?.senderEmail || 'sebastian@apexdigitalsolutions.com'
  });

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const downloadHTML = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank');
  };

  const tabs = [
    { id: 'summary', label: 'Resumen', icon: Eye },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
    { id: 'linkedin', label: 'LinkedIn', icon: Linkedin }
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case 'email':
        const emailTemplate = generateEmailTemplate(shareData);
        return (
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <h4 className="text-sm font-medium text-emerald-400 mb-2">Email HTML Template</h4>
              <div className="bg-gray-900 rounded p-3 text-xs text-gray-300 max-h-40 overflow-y-auto">
                <pre className="whitespace-pre-wrap break-words">{emailTemplate.substring(0, 500)}...</pre>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(emailTemplate)}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copiado!' : 'Copiar HTML'}
              </button>
              <button
                onClick={() => downloadHTML(emailTemplate, `propuesta-ice-${proposalToken}.html`)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Download className="h-4 w-4" />
                Descargar
              </button>
            </div>
          </div>
        );

      case 'whatsapp':
        const whatsappMessage = generateWhatsAppMessage(shareData);
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
        return (
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <h4 className="text-sm font-medium text-emerald-400 mb-2">Mensaje para WhatsApp</h4>
              <div className="bg-gray-900 rounded p-3 text-sm text-gray-300 max-h-60 overflow-y-auto">
                <pre className="whitespace-pre-wrap">{whatsappMessage}</pre>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(whatsappMessage)}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copiado!' : 'Copiar Mensaje'}
              </button>
              <button
                onClick={() => openInNewTab(whatsappUrl)}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Send className="h-4 w-4" />
                Abrir WhatsApp
              </button>
            </div>
          </div>
        );

      case 'linkedin':
        const linkedinMessage = generateLinkedInMessage(shareData);
        return (
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <h4 className="text-sm font-medium text-emerald-400 mb-2">Mensaje para LinkedIn</h4>
              <div className="bg-gray-900 rounded p-3 text-sm text-gray-300 max-h-60 overflow-y-auto">
                <pre className="whitespace-pre-wrap">{linkedinMessage}</pre>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(linkedinMessage)}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copiado!' : 'Copiar Mensaje'}
              </button>
              <button
                onClick={() => openInNewTab('https://linkedin.com/messaging')}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                Abrir LinkedIn
              </button>
            </div>
          </div>
        );

      case 'summary':
      default:
        const summary = generateSharingSummary(proposalToken);
        return (
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <h4 className="text-sm font-medium text-emerald-400 mb-2">Resumen de Compartir</h4>
              <div className="bg-gray-900 rounded p-3 text-sm text-gray-300 max-h-60 overflow-y-auto">
                <pre className="whitespace-pre-wrap">{summary}</pre>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => copyToClipboard(shareData.proposalUrl)}
                className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copiado!' : 'Copiar URL'}
              </button>
              <button
                onClick={() => openInNewTab(shareData.proposalUrl)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Eye className="h-4 w-4" />
                Ver Propuesta
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`bg-gray-900 border border-gray-700 rounded-xl p-6 text-white ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-emerald-400 mb-2">🚀 Compartir Propuesta ICE</h3>
        <p className="text-sm text-gray-400">Herramientas profesionales para compartir la propuesta de forma segura y efectiva</p>
      </div>

      {/* Form para personalizar datos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Nombre del Cliente</label>
          <input
            type="text"
            value={shareData.recipientName}
            onChange={(e) => setShareData({...shareData, recipientName: e.target.value})}
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm"
            placeholder="Ej: Dr. Juan Pérez"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email del Cliente</label>
          <input
            type="email"
            value={shareData.recipientEmail}
            onChange={(e) => setShareData({...shareData, recipientEmail: e.target.value})}
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm"
            placeholder="cliente@ice.edu.co"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Tu Nombre</label>
          <input
            type="text"
            value={shareData.senderName}
            onChange={(e) => setShareData({...shareData, senderName: e.target.value})}
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm"
            placeholder="Sebastian García"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Tu Email</label>
          <input
            type="email"
            value={shareData.senderEmail}
            onChange={(e) => setShareData({...shareData, senderEmail: e.target.value})}
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm"
            placeholder="sebastian@apexdigitalsolutions.com"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-4 bg-gray-800 p-1 rounded-lg">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
}

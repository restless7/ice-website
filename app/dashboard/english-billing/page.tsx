'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight,
  Clock, 
  DollarSign, 
  Plus, 
  CheckCircle2, 
  WalletCards,
  Calendar as CalendarIcon,
  Trash2,
  Edit2,
  X
} from 'lucide-react';

// --- Types ---
type SessionStatus = 'unbilled' | 'billed' | 'paid';

interface ClassSession {
  id: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  topic: string;
  studentGroup: string;
  durationHours: number;
  hourlyRate: number;
  status: SessionStatus;
}

// --- Helpers ---
const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function formatDate(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

// --- Mock Data ---
const initialSessions: ClassSession[] = [
  { id: '1', date: '2026-03-11', startTime: '19:00', topic: 'English Class', studentGroup: 'ICE', durationHours: 2.0, hourlyRate: 30, status: 'unbilled' },
  { id: '2', date: '2026-03-12', startTime: '19:00', topic: 'English Class', studentGroup: 'ICE', durationHours: 2.0, hourlyRate: 30, status: 'unbilled' },
  { id: '3', date: '2026-03-13', startTime: '19:00', topic: 'English Class', studentGroup: 'ICE', durationHours: 2.0, hourlyRate: 30, status: 'unbilled' },
  { id: '4', date: '2026-03-16', startTime: '19:00', topic: 'English Class', studentGroup: 'ICE', durationHours: 2.0, hourlyRate: 30, status: 'unbilled' },
  { id: '5', date: '2026-03-17', startTime: '19:00', topic: 'English Class', studentGroup: 'ICE', durationHours: 2.0, hourlyRate: 30, status: 'unbilled' },
  { id: '6', date: '2026-03-18', startTime: '19:00', topic: 'English Class', studentGroup: 'ICE', durationHours: 2.0, hourlyRate: 30, status: 'unbilled' },
  { id: '7', date: '2026-03-19', startTime: '19:00', topic: 'English Class', studentGroup: 'ICE', durationHours: 2.0, hourlyRate: 30, status: 'unbilled' },
  { id: '8', date: '2026-03-20', startTime: '19:00', topic: 'English Class', studentGroup: 'ICE', durationHours: 2.0, hourlyRate: 30, status: 'unbilled' },
];

export default function EnglishBillingCalendar() {
  const [sessions, setSessions] = useState<ClassSession[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Calendar State
  const [currentDate, setCurrentDate] = useState(new Date('2026-03-01T12:00:00Z'));
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Day Modal State
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [editingSessionId, setEditingSessionId] = useState<string | null>(null);

  // Filter Modal State
  const [filterModal, setFilterModal] = useState<SessionStatus | 'all' | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    startTime: '19:00',
    topic: '',
    studentGroup: 'ICE IT Dept',
    durationHours: '2',
    hourlyRate: '30',
    status: 'unbilled' as SessionStatus
  });

  useEffect(() => {
    const stored = localStorage.getItem('ice-english-sessions-v4');
    if (stored) {
      try {
        setSessions(JSON.parse(stored));
      } catch (e) {
        setSessions(initialSessions);
      }
    } else {
      // First time with new seed
      setSessions(initialSessions);
    }
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('ice-english-sessions-v4', JSON.stringify(sessions));
    }
  }, [sessions, isClient]);

  // --- Metrics ---
  const totalHours = useMemo(() => sessions.reduce((acc, s) => acc + s.durationHours, 0), [sessions]);
  const totalEarned = useMemo(() => sessions.reduce((acc, s) => acc + (s.durationHours * s.hourlyRate), 0), [sessions]);
  const unbilledAmount = useMemo(() => 
    sessions.filter(s => s.status === 'unbilled')
            .reduce((acc, s) => acc + (s.durationHours * s.hourlyRate), 0), 
  [sessions]);

  // --- Handlers ---
  const nextMonth = () => setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  const prevMonth = () => setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  const goToToday = () => setCurrentDate(new Date());

  const openDay = (dateStr: string) => {
    setSelectedDate(dateStr);
    resetForm();
  };

  const closeDay = () => {
    setSelectedDate(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      startTime: '09:00',
      topic: '',
      studentGroup: 'ICE IT Dept',
      durationHours: '1.5',
      hourlyRate: '50',
      status: 'unbilled'
    });
    setEditingSessionId(null);
  };

  const handleSaveSession = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) return;

    if (editingSessionId) {
      setSessions(sessions.map(s => s.id === editingSessionId ? {
        ...s,
        date: selectedDate,
        startTime: formData.startTime,
        topic: formData.topic,
        studentGroup: formData.studentGroup,
        durationHours: parseFloat(formData.durationHours),
        hourlyRate: parseFloat(formData.hourlyRate),
        status: formData.status
      } : s));
    } else {
      const newSession: ClassSession = {
        id: Math.random().toString(36).substr(2, 9),
        date: selectedDate,
        startTime: formData.startTime,
        topic: formData.topic,
        studentGroup: formData.studentGroup,
        durationHours: parseFloat(formData.durationHours),
        hourlyRate: parseFloat(formData.hourlyRate),
        status: formData.status
      };
      setSessions([...sessions, newSession]);
    }
    resetForm();
  };

  const handleEdit = (session: ClassSession) => {
    setEditingSessionId(session.id);
    setFormData({
      startTime: session.startTime,
      topic: session.topic,
      studentGroup: session.studentGroup,
      durationHours: session.durationHours.toString(),
      hourlyRate: session.hourlyRate.toString(),
      status: session.status
    });
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this class?')) {
      setSessions(sessions.filter(s => s.id !== id));
      if (editingSessionId === id) resetForm();
    }
  };

  const toggleStatus = (id: string) => {
    setSessions(sessions.map(s => {
      if (s.id === id) {
        let nextStatus: SessionStatus = 'unbilled';
        if (s.status === 'unbilled') nextStatus = 'billed';
        else if (s.status === 'billed') nextStatus = 'paid';
        return { ...s, status: nextStatus };
      }
      return s;
    }));
  };

  // --- Calendar Grid Calculation ---
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  
  const blanks = Array.from({ length: firstDay }, (_, i) => i);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-blue-500/30 pb-20">
      
      {/* Header */}
      <header className="border-b border-neutral-800 bg-[#0f0f0f]/80 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              <CalendarIcon className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-xl font-medium tracking-tight text-white hidden sm:block">English Dept. <span className="text-neutral-500">ICE</span></h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button onClick={goToToday} className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block">
              Today
            </button>
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full p-1">
              <button onClick={prevMonth} className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="w-32 text-center font-medium text-sm text-neutral-200">
                {MONTHS[currentMonth]} {currentYear}
              </div>
              <button onClick={nextMonth} className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div 
            onClick={() => setFilterModal('all')}
            className="bg-[#141414] border border-neutral-800 rounded-2xl p-5 flex justify-between items-center cursor-pointer hover:border-neutral-700 hover:bg-[#1a1a1a] transition-all"
          >
            <div>
              <p className="text-neutral-400 text-xs font-medium uppercase tracking-wider mb-1">Total Hours</p>
              <h3 className="text-2xl font-semibold text-white">{totalHours.toFixed(1)}h</h3>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-xl"><Clock className="w-5 h-5 text-blue-400" /></div>
          </div>
          <div 
            onClick={() => setFilterModal('unbilled')}
            className="bg-[#141414] border border-neutral-800 rounded-2xl p-5 flex justify-between items-center cursor-pointer hover:border-emerald-900 hover:bg-[#1a1a1a] transition-all"
          >
            <div>
              <p className="text-emerald-500 text-xs font-medium uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Unbilled
              </p>
              <h3 className="text-2xl font-semibold text-white">${unbilledAmount.toFixed(2)}</h3>
            </div>
            <div className="p-3 bg-emerald-500/10 rounded-xl"><DollarSign className="w-5 h-5 text-emerald-400" /></div>
          </div>
          <div 
            onClick={() => setFilterModal('paid')}
            className="bg-[#141414] border border-neutral-800 rounded-2xl p-5 flex justify-between items-center cursor-pointer hover:border-purple-900 hover:bg-[#1a1a1a] transition-all"
          >
            <div>
              <p className="text-neutral-400 text-xs font-medium uppercase tracking-wider mb-1">Total Billed</p>
              <h3 className="text-2xl font-semibold text-white">${totalEarned.toFixed(2)}</h3>
            </div>
            <div className="p-3 bg-purple-500/10 rounded-xl"><WalletCards className="w-5 h-5 text-purple-400" /></div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-[#141414] border border-neutral-800 rounded-2xl overflow-hidden">
          {/* Days of week header */}
          <div className="grid grid-cols-7 border-b border-neutral-800 bg-neutral-900/50">
            {DAYS_OF_WEEK.map(day => (
              <div key={day} className="py-3 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar Body */}
          <div className="grid grid-cols-7 auto-rows-[120px] sm:auto-rows-[140px] bg-neutral-800 gap-[1px]">
            {blanks.map(blank => (
              <div key={`blank-${blank}`} className="bg-[#141414] opacity-50"></div>
            ))}
            
            {days.map(day => {
              const dateStr = formatDate(currentYear, currentMonth, day);
              const daySessions = sessions.filter(s => s.date === dateStr).sort((a, b) => a.startTime.localeCompare(b.startTime));
              const isToday = dateStr === formatDate(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
              
              return (
                <div 
                  key={day} 
                  onClick={() => openDay(dateStr)}
                  className="bg-[#141414] p-2 hover:bg-neutral-800/30 transition-colors cursor-pointer relative group flex flex-col"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${isToday ? 'bg-blue-600 text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                      {day}
                    </span>
                    <button className="opacity-0 group-hover:opacity-100 p-1 text-neutral-500 hover:text-white transition-all">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto space-y-1.5 no-scrollbar pb-1">
                    {daySessions.map(session => (
                      <div 
                        key={session.id} 
                        className={`text-xs px-2 py-1 rounded border border-neutral-800/80 truncate
                          ${session.status === 'unbilled' ? 'bg-amber-500/10 text-amber-500/90' : 
                            session.status === 'billed' ? 'bg-blue-500/10 text-blue-400' : 
                            'bg-emerald-500/10 text-emerald-400'}
                        `}
                      >
                        <span className="font-semibold">{session.startTime}</span> {session.topic}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Day Modal */}
      {selectedDate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 opacity-100">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeDay}></div>
          <div className="relative bg-[#0f0f0f] border border-neutral-800 rounded-2xl w-full max-w-4xl max-h-[90vh] shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Left side: Class List for the day */}
            <div className="flex-1 border-b md:border-b-0 md:border-r border-neutral-800 flex flex-col bg-[#141414] overflow-y-auto">
              <div className="p-6 border-b border-neutral-800 flex justify-between items-center sticky top-0 bg-[#141414] z-10">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {new Date(selectedDate + 'T12:00:00Z').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                  </h2>
                  <p className="text-neutral-500 text-sm mt-1">{sessions.filter(s => s.date === selectedDate).length} classes scheduled</p>
                </div>
                <button onClick={closeDay} className="md:hidden text-neutral-500 hover:text-white p-2">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                {sessions.filter(s => s.date === selectedDate).sort((a,b) => a.startTime.localeCompare(b.startTime)).length === 0 ? (
                  <p className="text-neutral-500 text-center py-10">No classes scheduled for this day.</p>
                ) : (
                  sessions.filter(s => s.date === selectedDate).sort((a,b) => a.startTime.localeCompare(b.startTime)).map(session => (
                    <div key={session.id} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 group">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-neutral-800 text-neutral-300 font-mono text-sm px-2.5 py-1 rounded-md">
                            {session.startTime}
                          </div>
                          <div>
                            <h4 className="font-medium text-white">{session.topic}</h4>
                            <p className="text-sm text-neutral-400">{session.studentGroup} • {session.durationHours}h</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                          <button onClick={() => handleEdit(session)} className="p-1.5 text-neutral-500 hover:text-blue-400 bg-neutral-800/50 hover:bg-neutral-800 rounded transition-colors" title="Edit">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(session.id)} className="p-1.5 text-neutral-500 hover:text-red-400 bg-neutral-800/50 hover:bg-neutral-800 rounded transition-colors" title="Delete">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4 pt-4 border-t border-neutral-800/50">
                        <span className="text-sm font-medium text-neutral-300">
                          ${(session.hourlyRate * session.durationHours).toFixed(2)}
                        </span>
                        <button 
                          onClick={() => toggleStatus(session.id)}
                          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors flex items-center gap-1.5
                            ${session.status === 'unbilled' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500/20' : 
                              session.status === 'billed' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20' : 
                              'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20'}`}
                        >
                          {session.status === 'paid' && <CheckCircle2 className="w-3.5 h-3.5" />}
                          {session.status.toUpperCase()}
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Right side: Add / Edit Form */}
            <div className="w-full md:w-[400px] flex flex-col bg-[#0f0f0f]">
              <div className="p-6 border-b border-neutral-800 flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">
                  {editingSessionId ? 'Edit Session' : 'Add New Session'}
                </h3>
                <button onClick={closeDay} className="hidden md:block text-neutral-500 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto">
                <form onSubmit={handleSaveSession} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-1.5">Time (HH:MM)</label>
                    <input 
                      type="time" 
                      required
                      value={formData.startTime}
                      onChange={e => setFormData({...formData, startTime: e.target.value})}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all [color-scheme:dark]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-1.5">Topic Taught</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Present Continuous"
                      value={formData.topic}
                      onChange={e => setFormData({...formData, topic: e.target.value})}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-1.5">Student / Group</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Exec Team A"
                      value={formData.studentGroup}
                      onChange={e => setFormData({...formData, studentGroup: e.target.value})}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-neutral-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-400 mb-1.5">Duration (Hours)</label>
                      <input 
                        type="number" 
                        step="0.5"
                        min="0.5"
                        required
                        value={formData.durationHours}
                        onChange={e => setFormData({...formData, durationHours: e.target.value})}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-400 mb-1.5">Rate ($/hr)</label>
                      <input 
                        type="number" 
                        step="1"
                        min="0"
                        required
                        value={formData.hourlyRate}
                        onChange={e => setFormData({...formData, hourlyRate: e.target.value})}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-1.5">Status</label>
                    <select 
                      value={formData.status}
                      onChange={e => setFormData({...formData, status: e.target.value as SessionStatus})}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all appearance-none"
                    >
                      <option value="unbilled">Unbilled</option>
                      <option value="billed">Billed</option>
                      <option value="paid">Paid</option>
                    </select>
                  </div>

                  <div className="pt-4 flex gap-3">
                    {editingSessionId && (
                      <button 
                        type="button"
                        onClick={resetForm}
                        className="flex-1 bg-neutral-900 text-white font-medium py-3 rounded-lg hover:bg-neutral-800 border border-neutral-800 transition-all"
                      >
                        Cancel
                      </button>
                    )}
                    <button 
                      type="submit"
                      className="flex-[2] bg-white text-black font-medium py-3 rounded-lg hover:bg-neutral-200 active:scale-[0.98] transition-all flex justify-center items-center gap-2"
                    >
                      {editingSessionId ? <Edit2 className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      {editingSessionId ? 'Update Session' : 'Add Session'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      )}

      {/* Filter Modal */}
      {filterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 opacity-100">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setFilterModal(null)}></div>
          <div className="relative bg-[#0f0f0f] border border-neutral-800 rounded-2xl w-full max-w-2xl max-h-[90vh] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-neutral-800 flex justify-between items-center bg-[#141414] z-10">
              <h2 className="text-xl font-semibold text-white capitalize">
                {filterModal === 'all' ? 'All Sessions' : `${filterModal} Sessions`}
              </h2>
              <button onClick={() => setFilterModal(null)} className="text-neutral-500 hover:text-white p-2 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 bg-[#0a0a0a] space-y-3">
              {sessions
                .filter(s => filterModal === 'all' ? true : filterModal === 'paid' ? s.status !== 'unbilled' : s.status === filterModal)
                .sort((a,b) => new Date(`${b.date}T${b.startTime}`).getTime() - new Date(`${a.date}T${a.startTime}`).getTime())
                .map(session => (
                  <div key={session.id} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-neutral-400 font-mono">{session.date} • {session.startTime}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-medium border uppercase
                          ${session.status === 'unbilled' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : 
                            session.status === 'billed' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                            'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}`}
                        >
                          {session.status}
                        </span>
                      </div>
                      <h4 className="font-medium text-white">{session.topic}</h4>
                      <p className="text-sm text-neutral-500">{session.studentGroup} • {session.durationHours}h</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-medium text-white">
                        ${(session.hourlyRate * session.durationHours).toFixed(2)}
                      </span>
                    </div>
                  </div>
              ))}
              {sessions.filter(s => filterModal === 'all' ? true : filterModal === 'paid' ? s.status !== 'unbilled' : s.status === filterModal).length === 0 && (
                <p className="text-neutral-500 text-center py-10">No sessions found in this category.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


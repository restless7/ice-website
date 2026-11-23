"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Award,
  BookOpen,
  Mic,
  Clock,
  Sparkles,
  Users,
  ShieldCheck,
  ChevronRight,
  Shuffle,
  MessageSquare,
  Radio,
  FileText,
  Briefcase,
  Compass,
  Copy,
  Check,
  Search,
  Printer,
  ArrowRight,
  ExternalLink,
  Coffee,
  Utensils,
  Flame,
  SlidersHorizontal,
} from "lucide-react";
import { CurriculumHeader } from "@/components/english-class/CurriculumHeader";
import { CurriculumBlock } from "@/components/english-class/CurriculumBlock";
import { CurriculumNavigation } from "@/components/english-class/CurriculumNavigation";

// Types
interface PhoneticItem {
  title: string;
  issue: string;
  rule: string;
  bad: string;
  good: string;
  ipa: string;
  audioText: string;
}

interface SlangItem {
  term: string;
  category: "Kitchen & F&B" | "Operations & Shifts" | "Resort & Hotel";
  meaning: string;
  example: string;
  ipa: string;
  audioText: string;
}

interface QuestionItem {
  id: number;
  category: "University & Background" | "Motivation & Culture" | "Workload & Flexibility" | "Customer Service" | "Housing & Roommates" | "Visa & Compliance";
  question: string;
  intent: string;
  formula: string;
  modelAnswerB2: string;
  modelAnswerC1: string;
  ipaKey: string;
  redFlag: string;
}

interface DialogueLine {
  speaker: "Interviewer" | "Participant";
  text: string;
  ipa: string;
  linking: string;
  intonation: "rising" | "falling";
  teacherTip: string;
}

interface DialogueScenario {
  id: number;
  title: string;
  category: string;
  context: string;
  lines: DialogueLine[];
}

export default function WorkAndTravelSponsorInterviewPage() {
  const [activeTab, setActiveTab] = useState<"rubric" | "phonetics" | "questions" | "dialogues" | "simulator" | "handout">("rubric");
  const [selectedTraits, setSelectedTraits] = useState<string[]>([
    "Hardworking & Resilient",
    "Adaptable / Flexible",
    "Team Player",
    "Enthusiastic & Outgoing",
    "Responsible & Independent",
  ]);
  const [isPlayingAudio, setIsPlayingAudio] = useState<string | null>(null);
  const [speechRate, setSpeechRate] = useState<number>(0.9);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Question State
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeQuestionId, setActiveQuestionId] = useState<number>(1);
  const [practicedQuestions, setPracticedQuestions] = useState<number[]>([1]);
  const [activeAnswerTier, setActiveAnswerTier] = useState<"B2" | "C1">("B2");

  // Custom STAR Builder State
  const [starS, setStarS] = useState("");
  const [starT, setStarT] = useState("");
  const [starA, setStarA] = useState("");
  const [starR, setStarR] = useState("");

  // Dialogue State
  const [activeDialogueId, setActiveDialogueId] = useState<number>(1);
  const [practiceMode, setPracticeMode] = useState<boolean>(false);

  // Simulator State
  const [simTime, setSimTime] = useState(600); // 10 minutes in seconds
  const [simRunning, setSimRunning] = useState(false);
  const [simQuestionId, setSimQuestionId] = useState<number>(1);
  const [scores, setScores] = useState({ clarity: 4, structure: 4, fluency: 4, trait: 5, compliance: 5 });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const copyToClipboard = (text: string, label = "Content") => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard!`);
  };

  // Web Speech API synthesis handler
  const speakText = (text: string, id: string, pitch = 1, rate = speechRate) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Text-to-speech is not supported in your browser.");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = rate;
    utterance.pitch = pitch;

    utterance.onstart = () => setIsPlayingAudio(id);
    utterance.onend = () => setIsPlayingAudio(null);
    utterance.onerror = () => setIsPlayingAudio(null);

    window.speechSynthesis.speak(utterance);
  };

  // Timer logic for simulator
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (simRunning && simTime > 0) {
      timer = setInterval(() => setSimTime((prev) => prev - 1), 1000);
    } else if (simTime === 0) {
      setSimRunning(false);
    }
    return () => clearInterval(timer);
  }, [simRunning, simTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleTraitToggle = (trait: string) => {
    if (selectedTraits.includes(trait)) {
      setSelectedTraits(selectedTraits.filter((t) => t !== trait));
    } else {
      if (selectedTraits.length < 5) {
        setSelectedTraits([...selectedTraits, trait]);
      } else {
        showToast("Maximum 5 core traits allowed. Unselect one first.");
      }
    }
  };

  const togglePracticedQuestion = (id: number) => {
    if (practicedQuestions.includes(id)) {
      setPracticedQuestions(practicedQuestions.filter((qId) => qId !== id));
    } else {
      setPracticedQuestions([...practicedQuestions, id]);
      showToast(`Question #${id} marked as rehearsed!`);
    }
  };

  // Phonetics Data
  const phoneticsData: PhoneticItem[] = [
    {
      title: "1. The /ʃ/ vs /tʃ/ Sound Distinction (Shift vs Cheat / Cashier)",
      issue: "L1 Spanish speakers often pronounce the continuous soft /ʃ/ (shoe, shift, wash) as an explosive hard /tʃ/ (chew, cheat, watch).",
      rule: "For /ʃ/, produce a continuous rushing sound ('shhh'). Do not stop the airflow with your tongue against the upper teeth as in /tʃ/.",
      bad: "I can take any cheat and clean the kitchen chair.",
      good: "I can take any shift /ʃɪft/ and wash /wɒʃ/ the cashier station with care.",
      ipa: "/ʃɪft/ vs /tʃiːt/ • /kæˈʃɪər/",
      audioText: "I am ready for any work shift and I can help as a cashier.",
    },
    {
      title: "2. Consonant Clusters /st/, /sp/, /sk/ (Eliminating Initial 'Es-')",
      issue: "Adding an extra intrusive /e/ vowel before 's' clusters (e.g. es-schedule, es-sponsor, es-supervisor).",
      rule: "Start directly with a prolonged 'sss' hiss before releasing into the consonant without opening your mouth into an /e/.",
      bad: "I checked the es-schedule with my es-sponsor.",
      good: "I checked the schedule /ˈskɛdʒuːl/ with my sponsor /ˈspɒnsər/ and staff /stæf/.",
      ipa: "/ˈskɛdʒuːl/ • /ˈspɒnsər/ • /stæf/",
      audioText: "My sponsor confirmed the schedule for our seasonal staff.",
    },
    {
      title: "3. Regular Past-Tense -ed Endings (/t/, /d/, /ɪd/)",
      issue: "Pronouncing every '-ed' as a separate full syllable (e.g., work-ed, clean-ed, help-ed).",
      rule: "Pronounce /t/ after unvoiced sounds (worked, helped), /d/ after voiced (cleaned, served), and /ɪd/ only after t & d (assisted, adjusted).",
      bad: "I work-ed in a restaurant and clean-ed the tables.",
      good: "I worked /wɜːkt/ in a busy restaurant, cleaned /kliːnd/ the tables, and assisted /əˈsɪstɪd/ customers.",
      ipa: "/wɜːkt/ • /kliːnd/ • /əˈsɪstɪd/",
      audioText: "I worked quickly, cleaned the stations, and assisted every customer.",
    },
    {
      title: "4. The /v/ vs /b/ Sound Contrast (Travel, Available, Service)",
      issue: "Spanish treats 'v' and 'b' almost interchangeably as bilabial /b/.",
      rule: "Gently place top teeth against your lower lip and vibrate your vocal cords for /v/.",
      bad: "I am bery excited to trabel and gibe good serbice.",
      good: "I am very /ˈvɛri/ excited to travel /ˈtrævəl/ and give /ɡɪv/ excellent service /ˈsɜːvɪs/.",
      ipa: "/ˈtrævəl/ • /ˈvɛri/ • /ˈsɜːvɪs/",
      audioText: "I am very excited to travel and provide reliable service.",
    },
    {
      title: "5. Short /ɪ/ vs Long /iː/ (Shift vs Sheet, Slip vs Sleep)",
      issue: "Spanish only has one /i/ vowel. In English, swapping short /ɪ/ and long /iː/ alters workplace meaning.",
      rule: "Short /ɪ/ is relaxed and quick; long /iː/ requires drawn-back lips like a smile.",
      bad: "I worked a 10-hour sheep and put clean sheeps on the bed.",
      good: "I worked a ten-hour shift /ʃɪft/ and placed clean sheets /ʃiːts/ on the beds.",
      ipa: "/ʃɪft/ vs /ʃiːts/ • /lɪv/ vs /liːv/",
      audioText: "During my morning shift, I put fresh clean sheets on the beds.",
    },
  ];

  // Seasonal Slang & Resort Workplace Idioms
  const slangData: SlangItem[] = [
    {
      term: "In the weeds",
      category: "Kitchen & F&B",
      meaning: "Industry slang for being swamped, overwhelmed, or falling behind during an intense peak rush of orders or customers.",
      example: "When the front patio section got into the weeds, I stepped in to run drinks and bus tables immediately.",
      ipa: "/ɪn ðə wiːdz/",
      audioText: "When the front patio got in the weeds, I stepped in to run drinks and bus tables immediately.",
    },
    {
      term: "86 / 86'd",
      category: "Kitchen & F&B",
      meaning: "When a restaurant item is sold out, discontinued, or cancelled by the kitchen lead.",
      example: "The kitchen lead announced that fresh clam chowder is 86'd, so I guided guests to our seafood special instead.",
      ipa: "/ˌeɪti ˈsɪkst/",
      audioText: "The kitchen lead announced clam chowder is 86'd, so I guided guests to our seafood special instead.",
    },
    {
      term: "On the fly",
      category: "Operations & Shifts",
      meaning: "Needing something prepared or delivered immediately right away to fix a customer situation.",
      example: "Table four dropped their silverware; I need a clean cutlery roll on the fly!",
      ipa: "/ɒn ðə flaɪ/",
      audioText: "Table four dropped their silverware; I need a clean cutlery roll on the fly!",
    },
    {
      term: "Opener / Closer",
      category: "Operations & Shifts",
      meaning: "Working the first shift of the day to set up the facility or the final shift of the night to clean and reconcile cash drawers.",
      example: "I am scheduled as opener on Friday morning and closer on Saturday night, and I always arrive fifteen minutes early.",
      ipa: "/ˈəʊpnər/ • /ˈkləʊzər/",
      audioText: "I am scheduled as opener on Friday morning and closer on Saturday night.",
    },
    {
      term: "Side work",
      category: "Operations & Shifts",
      meaning: "Routine maintenance and preparatory duties performed around shifts (restocking napkins, polishing cutlery, refilling ice).",
      example: "Before clocking out, I always ensure all my side work is 100% completed so the next crew is set up for success.",
      ipa: "/saɪd wɜːk/",
      audioText: "Before clocking out, I always ensure all my side work is completed for the next crew.",
    },
    {
      term: "Walk-in",
      category: "Resort & Hotel",
      meaning: "Customers or resort guests who arrive seeking a table, ticket, or room without an advance reservation.",
      example: "We had a rush of twenty walk-ins right after the fireworks show, and I coordinated seating calmly.",
      ipa: "/ˈwɔːk ɪn/",
      audioText: "We had a rush of twenty walk-ins right after the fireworks, and I coordinated seating calmly.",
    },
  ];

  // 15 Sponsor Questions Data
  const questionsData: QuestionItem[] = [
    {
      id: 1,
      category: "Motivation & Culture",
      question: "Why do you want to participate in the Summer Work and Travel USA program?",
      intent: "Verify authentic cultural exchange, self-development motivation, and program purpose over purely financial motives.",
      formula: "Curiosity for American workplace culture + Professional English immersion + Independent life skills.",
      modelAnswerB2: "I want to participate in the Summer Work and Travel program to immerse myself completely in American culture, improve my English in a fast-paced workplace, and build self-reliance by living independently abroad during my university break.",
      modelAnswerC1: "Participating in Summer Work and Travel is an invaluable opportunity for me to develop intercultural competencies, master professional English in high-volume customer environments, and represent Colombia warmly while expanding my worldview.",
      ipaKey: "opportunity /ˌɒpəˈtjuːnəti/ • participate /pɑːˈtɪsɪpeɪt/ • culture /ˈkʌltʃər/",
      redFlag: "Saying 'I only want to go to make lots of US dollars and buy gadgets'.",
    },
    {
      id: 2,
      category: "University & Background",
      question: "What university do you attend, what is your major, and which semester are you currently in?",
      intent: "Confirm mandatory full-time enrollment and academic continuity under federal J-1 SWT regulations (22 CFR § 62.32).",
      formula: "Exact University Name + Academic Degree + Current Semester Number + Expected Graduation Timeline.",
      modelAnswerB2: "I am currently in my sixth semester of Business Administration at Pontificia Universidad Javeriana in Bogotá. I am a full-time student and I expect to complete my degree by December 2027.",
      modelAnswerC1: "I am enrolled full-time at Universidad del Norte in Barranquilla, pursuing my fifth semester of Industrial Engineering. My academic standing is strong, and I am on track to graduate within two years.",
      ipaKey: "enrolled /ɪnˈrəʊld/ • semester /sɪˈmɛstər/ • administration /ədˌmɪnɪˈstreɪʃən/",
      redFlag: "Admitting you dropped out, paused studies indefinitely, or don't know your semester status.",
    },
    {
      id: 3,
      category: "Workload & Flexibility",
      question: "Have you ever worked before in customer service, hospitality, retail, or physical jobs?",
      intent: "Evaluate past workplace discipline, interpersonal skills, and realistic understanding of day-to-day employment.",
      formula: "Past role/experience + Core tasks executed + Skills gained (punctuality, speed, customer care).",
      modelAnswerB2: "Yes, I worked part-time as a cashier and barista at a local coffee shop in Colombia. I greeted customers, took orders accurately, handled cash registers, and kept the service area clean and organized.",
      modelAnswerC1: "Yes, during my previous vacations I worked as a customer service associate at a retail store. I managed inventory replenishment, handled point-of-sale transactions, and resolved guest inquiries swiftly during peak sales rushes.",
      ipaKey: "cashier /kæˈʃɪər/ • barista /bəˈrɪstə/ • associate /əˈsəʊʃieɪt/",
      redFlag: "Saying 'I have never done anything and I expect a quiet desk job'.",
    },
    {
      id: 4,
      category: "Workload & Flexibility",
      question: "Many Work & Travel jobs require standing for 8 hours or doing physical tasks (lifting trays, cleaning, standing in heat/cold). How will you handle this workload?",
      intent: "Gauge stamina, realistic expectations of entry-level seasonal labor, and resilience against physical fatigue.",
      formula: "Acknowledge physical nature + Proof of personal stamina/fitness + Positive proactive mindset.",
      modelAnswerB2: "I am fully prepared for physical work. I stay active by playing soccer and working out regularly, and at university I am used to long active days. I stay hydrated, wear comfortable shoes, and maintain high energy.",
      modelAnswerC1: "I understand that seasonal resort and hospitality roles demand strong physical endurance. I maintain great stamina through regular cardiovascular training and active sports. I take pride in being energetic and reliable throughout long shifts.",
      ipaKey: "endurance /ɪnˈdjʊərəns/ • physical /ˈfɪzɪkəl/ • stamina /ˈstæmɪnə/",
      redFlag: "Complaining about back pain, refusing to stand, or asking if you can sit down all day.",
    },
    {
      id: 5,
      category: "Workload & Flexibility",
      question: "What seasonal positions are you most interested in (e.g. food & beverage, cashier, lifeguard, housekeeping, ride operator) and why?",
      intent: "Assess role suitability while confirming total placement flexibility across employer needs.",
      formula: "Preferred role + Relevant personal strength + Reiteration of willingness to excel in ANY assigned role.",
      modelAnswerB2: "I am especially enthusiastic about customer-facing roles like cashier or food runner because I love interacting with guests. However, I am flexible and equally ready to work in housekeeping or kitchen prep if needed.",
      modelAnswerC1: "My primary interest lies in guest-facing positions such as food and beverage attendant or amusement ride operator where I can actively practice conversational English. That said, I am versatile and eager to excel in any operational role assigned to me.",
      ipaKey: "versatile /ˈvɜːsətaɪl/ • operator /ˈɒpəreɪtər/ • beverage /ˈbɛvərɪdʒ/",
      redFlag: "Saying 'I refuse to do housekeeping or dishwashing under any circumstances'.",
    },
    {
      id: 6,
      category: "Workload & Flexibility",
      question: "What will you do if your employer schedules you for night shifts, weekend shifts, or early morning shifts?",
      intent: "Test schedule adaptability and commitment to peak seasonal resort operations without complaints.",
      formula: "Total schedule commitment + Understanding of seasonal business needs + Punctuality guarantee.",
      modelAnswerB2: "I am completely flexible with my schedule. I understand that summer resorts and parks are busiest on weekends and holidays. Whatever shift I am assigned, I will always arrive on time and ready to work.",
      modelAnswerC1: "Flexibility is essential for seasonal operations. I welcome variable shifts, whether early mornings, closing duties, or weekend rushes. I am disciplined with sleep and time management, guaranteeing punctuality every single day.",
      ipaKey: "flexibility /ˌflɛksəˈbɪləti/ • punctuality /ˌpʌŋktʃuˈæləti/ • scheduled /ˈskɛdʒuːld/",
      redFlag: "Demanding weekends off to party or saying you cannot wake up before 10 AM.",
    },
    {
      id: 7,
      category: "Customer Service",
      question: "How would you handle an upset or impatient American customer complaining about their order or service?",
      intent: "Assess English de-escalation skills, emotional regulation, and service recovery orientation.",
      formula: "Listen actively without interruption + Sincere empathy/apology + Immediate solution / Supervisor escalation.",
      modelAnswerB2: "First, I listen attentively without interrupting and maintain a calm, polite tone. I apologize sincerely: 'I am so sorry for the delay, let me resolve this immediately.' Then I correct the order or ask my supervisor for assistance.",
      modelAnswerC1: "I follow proven service recovery principles: listen actively, acknowledge their frustration empathetically, and take immediate ownership. I would apologize politely, offer a rapid replacement, or escalate to my manager while ensuring the customer feels respected.",
      ipaKey: "apologize /əˈpɒlədʒaɪz/ • frustration /frʌsˈtreɪʃən/ • empathy /ˈɛmpəθi/",
      redFlag: "Arguing with the customer, raising your voice, or blaming your coworkers.",
    },
    {
      id: 8,
      category: "Housing & Roommates",
      question: "Have you ever lived away from your parents or shared a bedroom with roommates? How will you adapt to staff housing?",
      intent: "Evaluate maturity, personal hygiene, domestic self-sufficiency, and communal living respect.",
      formula: "Past independent living or shared experience + Household cleaning discipline + Respect for roommates' rest.",
      modelAnswerB2: "Yes, I have shared apartments with fellow university students and attended summer camps. I am organized, I clean up after myself immediately, and I always respect quiet hours when roommates are resting.",
      modelAnswerC1: "Yes, I have experienced shared living during university projects and travel. I pride myself on being tidy, proactive with communal chores, and highly considerate of shared spaces, schedules, and quiet hours.",
      ipaKey: "communal /kəˈmjuːnəl/ • considerate /kənˈsɪdərət/ • hygiene /ˈhaɪdʒiːn/",
      redFlag: "Admitting you never clean, leave dirty dishes for days, or expect someone else to clean your room.",
    },
    {
      id: 9,
      category: "Housing & Roommates",
      question: "What would you do if you have a conflict with a roommate or coworker who isn't doing their part in keeping the apartment clean?",
      intent: "Test conflict resolution, emotional maturity, and diplomatic interpersonal communication.",
      formula: "Calm private dialogue + Proposing a fair chore roster + Cooperative problem-solving without hostility.",
      modelAnswerB2: "I would invite my roommate for a calm, friendly conversation. I'd say: 'Let's create a weekly chore schedule together so our space stays pleasant for both of us.' Keeping it positive avoids conflict.",
      modelAnswerC1: "I believe in direct, respectful, and non-confrontational communication. I would speak with them privately, express our shared need for a clean living environment, and propose a rotating chore chart so expectations are transparent and fair.",
      ipaKey: "non-confrontational /ˌnɒn kənfrʌnˈteɪʃənl/ • resolution /ˌrɛzəˈluːʃən/ • transparent /trænsˈpærənt/",
      redFlag: "Yelling at roommates, throwing their belongings out, or posting passive-aggressive messages.",
    },
    {
      id: 10,
      category: "Motivation & Culture",
      question: "What are your main cultural goals during your time in the United States? What American traditions do you want to experience?",
      intent: "Confirm adherence to the Department of State cultural exchange mission of the J-1 program.",
      formula: "Specific cultural traditions (4th of July, baseball game, local festivals) + Visiting iconic landmarks + Making American friends.",
      modelAnswerB2: "I want to attend an authentic American baseball game, celebrate the Fourth of July with fireworks and barbecues, visit national parks during my travel month, and build lasting friendships with local Americans.",
      modelAnswerC1: "My primary cultural objectives include participating in community events like Fourth of July parades, experiencing local food traditions, exploring historic landmarks and national parks, and gaining an authentic understanding of American community life.",
      ipaKey: "traditions /trəˈdɪʃənz/ • fireworks /ˈfaɪəwɜːks/ • authentic /ɔːˈθɛntɪk/",
      redFlag: "Saying 'I don't care about American culture, I will stay inside my room when not working'.",
    },
    {
      id: 11,
      category: "Motivation & Culture",
      question: "How will you share your Colombian / home culture with Americans and international coworkers?",
      intent: "Measure cultural ambassadorship, enthusiasm, and reciprocal cultural exchange capabilities.",
      formula: "Sharing traditional cuisine (arepas, empanadas, coffee) + Music, dance, and geography + Dispelling misconceptions.",
      modelAnswerB2: "I plan to cook traditional Colombian meals like arepas for my roommates, brew authentic Colombian coffee, and share our vibrant music, geography, and welcoming traditions with everyone I meet.",
      modelAnswerC1: "I look forward to being an enthusiastic cultural ambassador. I intend to host dinners featuring authentic Colombian coffee and recipes, share our diverse music and geography, and promote a warm, accurate perspective of Colombia.",
      ipaKey: "ambassador /æmˈbæsədər/ • authentic /ɔːˈθɛntɪk/ • perspective /pəˈspɛktɪv/",
      redFlag: "Saying 'There is nothing interesting about my country to share'.",
    },
    {
      id: 12,
      category: "Visa & Compliance",
      question: "What would you do in an emergency, or if you feel sick and cannot make it to your scheduled shift?",
      intent: "Validate understanding of employer notification policies, sick leave protocol, and sponsor emergency hotlines.",
      formula: "Notify supervisor 2+ hours prior to shift + Visit urgent care/clinic + Contact sponsor emergency line if severe.",
      modelAnswerB2: "If I am sick, I will call my supervisor at least two hours before my shift starts so they can cover the position. If it is a serious emergency, I will seek medical attention and contact my sponsor's 24/7 hotline.",
      modelAnswerC1: "I would immediately notify my manager and scheduling supervisor well in advance, following our employer's exact call-in protocol. For medical care, I would locate in-network urgent care, and for any crisis, utilize my sponsor's 24/7 emergency support line.",
      ipaKey: "protocol /ˈprəʊtəkɒl/ • emergency /ɪˈmɜːdʒənsi/ • supervisor /ˈsuːpərvaɪzər/",
      redFlag: "Not showing up to work (No Call, No Show) or assuming texting a coworker is sufficient.",
    },
    {
      id: 13,
      category: "Visa & Compliance",
      question: "Are you allowed to start a second job without sponsor approval? What are the rules regarding second jobs on J-1 SWT?",
      intent: "CRITICAL REGULATORY COMPLIANCE CHECK. Working unauthorized jobs violates federal law and leads to SEVIS termination.",
      formula: "Firm refusal of unvetted work + Primary job priority + Mandatory sponsor vetting and written approval before starting.",
      modelAnswerB2: "No, absolutely not. J-1 regulations strictly forbid working any second job without official vetting and written approval from my sponsor. Unauthorized work leads to visa termination, so I will always follow the rules.",
      modelAnswerC1: "Under no circumstances am I permitted to begin a second job without prior sponsor vetting and formal authorization in SEVIS. My primary job is my main priority, and any supplementary employment must adhere strictly to Department of State regulations.",
      ipaKey: "regulations /ˌrɛɡjʊˈleɪʃənz/ • authorization /ˌɔːθəraɪˈzeɪʃən/ • forbidden /fəˈbɪdn/",
      redFlag: "CRITICAL REJECTION: Saying 'Yes, I can work anywhere for cash under the table'.",
    },
    {
      id: 14,
      category: "University & Background",
      question: "How will this Summer Work and Travel experience help you with your academic and future professional career?",
      intent: "Confirm educational enrichment and clear correlation between exchange experience and home country career.",
      formula: "Enhanced business/conversational English + Adaptability in high-pressure teams + Competitive edge in home job market.",
      modelAnswerB2: "Gaining fluent English and practical customer experience will give me a huge advantage when applying for multinational corporate jobs in Colombia after I graduate from university.",
      modelAnswerC1: "Operating in a diverse, high-volume American workplace will sharpen my operational problem-solving, resilience, and professional English fluency. These competencies are highly sought after by top international firms in Colombia.",
      ipaKey: "competencies /ˈkɒmpɪtənsiz/ • professional /prəˈfɛʃənl/ • advantage /ədˈvɑːntɪdʒ/",
      redFlag: "Saying 'This has nothing to do with my studies, I just want an excuse to leave my country'.",
    },
    {
      id: 15,
      category: "Visa & Compliance",
      question: "What are your specific plans after your J-1 program ends, and when does your next university semester start?",
      intent: "MANDATORY NON-IMMIGRANT INTENT & BINDING HOME TIES VERIFICATION under US federal immigration law.",
      formula: "Exact return date + Resume university enrollment + Clear ties to home country (family, degree completion, career).",
      modelAnswerB2: "Immediately after completing my program and travel period in September, I will fly back to Colombia. My next university semester begins in early October, and my top priority is completing my degree and graduating.",
      modelAnswerC1: "Upon concluding my travel period in September, I will return immediately to Colombia to resume my full-time coursework for the upcoming semester. My entire family, academic degree, and long-term career aspirations are firmly established in Colombia.",
      ipaKey: "immediately /ɪˈmiːdiətli/ • concluded /kənˈkluːdɪd/ • established /ɪˈstæblɪʃt/",
      redFlag: "CRITICAL REJECTION: Saying 'I might look for a way to stay in the US, change status, or not go back'.",
    },
  ];

  // Scenarios Data
  const dialogueScenariosData: DialogueScenario[] = [
    {
      id: 1,
      title: "Scenario 1: University Status & Program Motivation",
      category: "Academic & Motivation",
      context: "Sponsor officer validates that you are a legitimate full-time university student with clear cultural exchange ambitions.",
      lines: [
        {
          speaker: "Interviewer",
          text: "Hello! It's great to meet you. Could you please introduce yourself, tell me what university you attend in Colombia, and why you applied for Summer Work and Travel?",
          ipa: "/hɛˈləʊ | ɪts ɡreɪt tuː miːt juː...",
          linking: "great ⁀ to • tell ⁀ me • applied ⁀ for",
          intonation: "rising",
          teacherTip: "The sponsor starts with a welcoming tone but is actively testing your comprehension and initial fluency.",
        },
        {
          speaker: "Participant",
          text: "Hello! It is a pleasure to meet you as well. My name is Sofia, and I am currently in my sixth semester of Industrial Engineering at Universidad de los Andes in Bogotá.",
          ipa: "/hɛˈləʊ | ɪt ɪz ə ˈplɛʒər tuː miːt juː...",
          linking: "pleasure ⁀ to • semester ⁀ of • industrial ⁀ engineering",
          intonation: "falling",
          teacherTip: "Use confident falling intonation (↘). State your university and semester clearly without hesitation.",
        },
        {
          speaker: "Participant",
          text: "I applied for the Summer Work and Travel program because I want to challenge myself in a fast-paced American workplace, achieve complete English fluency, and experience American cultural diversity firsthand during my university vacation break!",
          ipa: "/aɪ əˈplaɪd fɔː ðə ˈsʌmər wɜːk ænd ˈtrævl...",
          linking: "applied ⁀ for • fast ⁀ paced • cultural ⁀ diversity",
          intonation: "falling",
          teacherTip: "Pronounce 'applied' /əˈplaɪd/ with a soft /d/ ending and 'diversity' /daɪˈvɜːsəti/ cleanly.",
        },
      ],
    },
    {
      id: 2,
      title: "Scenario 2: Physical Stamina & High-Volume Shifts",
      category: "Workplace Stamina",
      context: "Sponsor evaluates whether you have realistic expectations regarding 8-hour standing shifts, heat, and seasonal resort workloads.",
      lines: [
        {
          speaker: "Interviewer",
          text: "At our partner resorts and amusement parks, summer days can be hot and shifts last eight hours on your feet. Have you ever worked a physically demanding job or handled long hours before?",
          ipa: "/æt ˈaʊər ˈpɑːtnər rɪˈzɔːts...",
          linking: "resorts ⁀ and • eight ⁀ hours • worked ⁀ a",
          intonation: "rising",
          teacherTip: "The interviewer wants to hear a concrete, believable example of physical stamina.",
        },
        {
          speaker: "Participant",
          text: "Yes, absolutely! At university, I play on our varsity sports team and train several days a week, so I have strong physical endurance and know how to stay energized.",
          ipa: "/jɛs | ˌæbsəˈluːtli! æt ˌjuːnɪˈvɜːsəti...",
          linking: "varsity ⁀ sports • physical ⁀ endurance • stay ⁀ energized",
          intonation: "falling",
          teacherTip: "Emphasize 'strong physical endurance' with assertive falling tone to reassure the sponsor.",
        },
        {
          speaker: "Participant",
          text: "Furthermore, during university festivals, I stood on my feet for nine-hour shifts managing food stands and customer queues. I wear supportive footwear, stay hydrated, and always maintain an upbeat, energetic attitude with guests and teammates!",
          ipa: "/ˈfɜːðəmɔː | ˈdjʊərɪŋ ˌjuːnɪˈvɜːsəti...",
          linking: "stood ⁀ on • nine ⁀ hour • energetic ⁀ attitude",
          intonation: "falling",
          teacherTip: "Pronounce 'footwear' /ˈfʊtwɛər/ and 'hydrated' /ˈhaɪdreɪtɪd/ without adding extra Spanish vowels.",
        },
      ],
    },
    {
      id: 3,
      title: "Scenario 3: Customer Service Recovery & De-escalation",
      category: "Customer Service",
      context: "Sponsor checks your English reaction when a guest is frustrated about service or food delays.",
      lines: [
        {
          speaker: "Interviewer",
          text: "Picture this: a customer storms up to your register, visibly angry, shouting that they have waited twenty minutes for their order and the food is cold. How do you respond?",
          ipa: "/ˈpɪktʃər ðɪs: ə ˈkʌstəmər stɔːmz ʌp...",
          linking: "storms ⁀ up • waited ⁀ twenty • cold ⁀ how",
          intonation: "falling",
          teacherTip: "This is a pressure question. Never say you would shout back or tell the customer to calm down.",
        },
        {
          speaker: "Participant",
          text: "First and foremost, I remain calm and listen attentively without interrupting them. I keep an open, professional posture and acknowledge their frustration immediately.",
          ipa: "/fɜːst ænd ˈfɔːməʊst | aɪ rɪˈmeɪn kɑːm...",
          linking: "first ⁀ and • listen ⁀ attentively • without ⁀ interrupting",
          intonation: "falling",
          teacherTip: "Pronounce 'calm' /kɑːm/ (silent 'l'). Do not pronounce the 'l'.",
        },
        {
          speaker: "Participant",
          text: "I say: 'I am so sorry for the delay and for your wait; let me take care of this right away for you.' I immediately replace their meal with fresh hot food or involve my lead supervisor if a refund is necessary. My goal is to make sure every guest leaves feeling respected and valued!",
          ipa: "/aɪ seɪ: aɪ æm səʊ ˈsɒri fɔː ðə dɪˈleɪ...",
          linking: "sorry ⁀ for • right ⁀ away • leaves ⁀ feeling",
          intonation: "falling",
          teacherTip: "Notice how taking personal ownership de-escalates the tension immediately.",
        },
      ],
    },
    {
      id: 4,
      title: "Scenario 4: Shared Staff Housing & Multicultural Roommates",
      category: "Staff Housing",
      context: "Sponsor tests your readiness to live peacefully with international roommates in shared employer housing.",
      lines: [
        {
          speaker: "Interviewer",
          text: "You will likely share an apartment with participants from different countries like Poland, Jamaica, or Thailand. What will you do if your roommate plays loud music late at night or leaves the kitchen messy?",
          ipa: "/juː wɪl ˈlaɪkli ʃɛər ən əˈpɑːtmənt...",
          linking: "share ⁀ an • loud ⁀ music • leaves ⁀ the",
          intonation: "rising",
          teacherTip: "Sponsors want to prevent roommate drama that results in employer housing evictions.",
        },
        {
          speaker: "Participant",
          text: "Living with international roommates is one of the aspects I look forward to most! When conflicts arise, I always choose calm, respectful, and direct communication.",
          ipa: "/ˈlɪvɪŋ wɪð ˌɪntəˈnæʃənl ˈruːmmeɪts...",
          linking: "look ⁀ forward ⁀ to • conflicts ⁀ arise • direct ⁀ communication",
          intonation: "falling",
          teacherTip: "Frame multicultural living as an exciting opportunity rather than an obstacle.",
        },
        {
          speaker: "Participant",
          text: "I would speak with my roommate privately and kindly: 'Hey, I have an early morning shift tomorrow; would you mind using headphones after 10 PM?' I also suggest creating a shared chore chart so everyone knows their daily cleaning tasks. Respect and teamwork make shared living enjoyable!",
          ipa: "/aɪ wʊd spiːk wɪð maɪ ˈruːmmeɪt...",
          linking: "speak ⁀ with • early ⁀ morning • chore ⁀ chart",
          intonation: "falling",
          teacherTip: "Proposing a 'shared chore chart' shows exceptional maturity and proactive problem-solving.",
        },
      ],
    },
    {
      id: 5,
      title: "Scenario 5: Second Jobs & J-1 Non-Immigrant Return Intent",
      category: "J-1 Regulations & Home Ties",
      context: "The definitive legal compliance check. Tests knowledge of unauthorized employment and binding ties to Colombia.",
      lines: [
        {
          speaker: "Interviewer",
          text: "What if you meet friends who offer you cash to work night shifts at a local grocery store without notifying us? And what are your exact plans when your program ends in September?",
          ipa: "/wɒt ɪf juː miːt frɛndz...",
          linking: "friends ⁀ who • offer ⁀ you • program ⁀ ends",
          intonation: "falling",
          teacherTip: "A high-stakes dual question testing immigration rules and return intent.",
        },
        {
          speaker: "Participant",
          text: "I would refuse immediately! J-1 visa regulations strictly state that working any second job without prior sponsor vetting and written authorization is a direct violation that results in immediate SEVIS termination.",
          ipa: "/aɪ wʊd rɪˈfjuːz ɪˈmiːdiətli...",
          linking: "refuse ⁀ immediately • direct ⁀ violation • results ⁀ in",
          intonation: "falling",
          teacherTip: "Firm, unwavering stance on J-1 regulations proves you are an informed, low-risk participant.",
        },
        {
          speaker: "Participant",
          text: "My primary employer is my sole operational focus. And when my contract concludes in September, I will use my 30-day travel window to visit national parks and then fly directly home to Colombia to begin my upcoming university semester. My education and my future are rooted in Colombia!",
          ipa: "/maɪ ˈpraɪməri ɪmˈplɔɪər ɪz...",
          linking: "sole ⁀ operational • travel ⁀ window • rooted ⁀ in",
          intonation: "falling",
          teacherTip: "Conclude with 'rooted in Colombia' using strong falling intonation (↘) to cement non-immigrant intent.",
        },
      ],
    },
  ];

  // Filtering questions
  const filteredQuestions = useMemo(() => {
    return questionsData.filter((q) => {
      const matchesCategory = selectedCategory === "All" || q.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.intent.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeQuestion = questionsData.find((q) => q.id === activeQuestionId) || questionsData[0];
  const simQuestion = questionsData.find((q) => q.id === simQuestionId) || questionsData[0];
  const activeDialogue = dialogueScenariosData.find((d) => d.id === activeDialogueId) || dialogueScenariosData[0];

  const calculateTotalScore = () => {
    return scores.clarity + scores.structure + scores.fluency + scores.trait + scores.compliance;
  };

  const synthesizedStarAnswer = useMemo(() => {
    const parts = [];
    if (starS.trim()) parts.push(`Situation: ${starS.trim()}`);
    if (starT.trim()) parts.push(`Task: ${starT.trim()}`);
    if (starA.trim()) parts.push(`Action: ${starA.trim()}`);
    if (starR.trim()) parts.push(`Result: ${starR.trim()}`);
    return parts.join(" • ");
  }, [starS, starT, starA, starR]);

  const handleCopyScorecard = () => {
    const total = calculateTotalScore();
    const statusText =
      total >= 20
        ? "APPROVED (High-Intermediate / Customer-Facing Tier)"
        : "CONDITIONAL / NEEDS PHONETICS RE-DRILL";
    const report = `ICE ACADEMY — J-1 WORK & TRAVEL SPONSOR INTERVIEW SCORECARD
Candidate Practice Report
Total Score: ${total} / 25 [${statusText}]

1. Phonetic Clarity & Pronunciation: ${scores.clarity}/5
2. Response Structure (STAR Method): ${scores.structure}/5
3. Spontaneity & Conversational Fluency: ${scores.fluency}/5
4. Work Ethic & Trait Impression: ${scores.trait}/5
5. J-1 Visa & Regulatory Compliance: ${scores.compliance}/5

Evaluation: ${total >= 20 ? "Candidate exhibits strong front-of-house customer communication and robust non-immigrant intent." : "Candidate should repeat Block 2 Phonetics and review question formulas."}
Verified by ICE Colombia English Academy.`;

    copyToClipboard(report, "Evaluation scorecard");
  };

  const handlePrintHandout = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-6 right-6 z-50 bg-slate-900 border border-emerald-500/40 text-emerald-300 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-semibold backdrop-blur-md"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Header */}
      <CurriculumHeader
        hourNumber="Module 3 (2 Hours)"
        title="Work & Travel Sponsor Interview Masterclass."
        subtitle="Conversational, Workplace & J-1 Compliance Preparation."
        description="Comprehensive 2-Hour Intensive Training tailored for official J-1 Summer Work Travel Sponsor Interviews (CIEE, InterExchange, Intrax Form SWT-01). Master L1-Spanish phonetics, STAR answer formulas, 15 official report questions, and turn-by-turn interactive dialogues."
        accentColor="emerald"
        moduleInfo="WORK & TRAVEL Sponsor Screening Track"
      />

      {/* Quick Stats Pill Strip */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-8 relative z-10">
        <div className="bg-slate-900/90 border border-emerald-500/20 rounded-2xl p-4 shadow-xl backdrop-blur-md flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-slate-300 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" /> 22 CFR § 62.32 Standard
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-cyan-400" /> 15 Official Questions
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Mic className="w-4 h-4 text-emerald-400" /> 5 Phonetic Repairs
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Coffee className="w-4 h-4 text-amber-400" /> 6 Seasonal Slang Terms
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-rose-400" /> 10-Min Mock Simulator
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400 font-mono">Audio Speed:</span>
            <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-white/5 font-mono text-[10px]">
              {[0.8, 0.9, 1.0].map((rate) => (
                <button
                  key={rate}
                  onClick={() => {
                    setSpeechRate(rate);
                    showToast(`Audio speed set to ${rate}x`);
                  }}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-all ${
                    speechRate === rate
                      ? "bg-emerald-500 text-slate-950 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-10">
        
        {/* Sticky Glassmorphic Navigation Tabs */}
        <div className="sticky top-4 z-40 bg-slate-950/85 backdrop-blur-xl border border-white/10 p-1.5 rounded-2xl shadow-2xl flex flex-wrap gap-1.5">
          {[
            { id: "rubric", label: "Block 1: Sponsor Rubric & Traits", icon: Award, badge: "Rubric" },
            { id: "phonetics", label: "Block 2: Phonetics & Slang Audio", icon: Mic, badge: "5 Drills + Slang" },
            { id: "questions", label: "Block 3: 15 Questions & STAR Lab", icon: BookOpen, badge: `${practicedQuestions.length}/15 Rehearsed` },
            { id: "dialogues", label: "Block 4: Turn-by-Turn Audio Scenarios", icon: MessageSquare, badge: "5 Scenarios" },
            { id: "simulator", label: "Block 5: Mock Interview Studio", icon: Clock, badge: "Timed 10m" },
            { id: "handout", label: "Top 10 Golden Rules", icon: ShieldCheck, badge: "Printable" },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-xs transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-[1.01]"
                    : "bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-white/5"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-slate-950" : "text-emerald-400"}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? "bg-slate-950/20 text-slate-950" : "bg-slate-800 text-slate-400 border border-white/5"
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* BLOCK 1: RUBRIC & PERSONALITY MATRIX */}
        {activeTab === "rubric" && (
          <div className="space-y-6">
            <CurriculumBlock
              icon={<Award className="w-6 h-6 text-emerald-400" />}
              title="Official Sponsor Evaluation Standards (J-1 SWT Screening Form)"
              subtitle="20 Minutes • Grading Rubric & Work Ethic Trait Selection"
              methodology="CEFR & SWT Placement Rubric"
              accentColor="emerald"
            >
              <div className="space-y-8 mt-4">
                {/* Placement Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    {
                      level: "Intermediate (B1)",
                      badge: "Back-of-House Threshold",
                      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
                      roles: "Dishwasher, Line Cook Prep, Housekeeping Attendant, Laundry",
                      desc: "Understands core workplace commands; responds beyond one-word answers; occasional hesitation when searching for vocabulary.",
                      tip: "Good for operational non-customer roles. Strive for B2 for higher tips and social interaction.",
                    },
                    {
                      level: "High Intermediate (B2)",
                      badge: "Recommended Target ⭐",
                      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
                      roles: "Cashier, Food Runner, Server Assistant, Lifeguard, Ride Operator",
                      desc: "Interacts fluently and spontaneously with guests; explains options; handles complaints and rapid front-of-house dialogue without panic.",
                      tip: "The golden threshold for Summer Work Travel. Maximizes earning potential and cross-cultural friendship.",
                    },
                    {
                      level: "Advanced (C1)",
                      badge: "Top Placement Tier",
                      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
                      roles: "Lead Shift Cashier, Host/Hostess, Concierge, Event Operations",
                      desc: "Quick, natural, nuanced responses; rich vocabulary; capable of lead positions, shift coordination, and complex guest problem solving.",
                      tip: "Candidate is designated as an outstanding cultural ambassador and prioritized for premium resort placements.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all space-y-4 relative overflow-hidden group shadow-lg"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-white text-lg group-hover:text-emerald-400 transition-colors">
                          {item.level}
                        </h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="bg-slate-950/80 p-2.5 rounded-xl border border-white/5">
                          <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">Eligible Positions:</span>
                          <span className="text-slate-200 font-medium">{item.roles}</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                      </div>

                      <div className="pt-2 border-t border-white/5 text-[11px] text-emerald-400/90 italic">
                        💡 {item.tip}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trait Selector with Dynamic Feedback */}
                <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-5 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Users className="w-5 h-5 text-emerald-400" /> J-1 Work & Travel Personality Matrix
                      </h3>
                      <p className="text-xs text-slate-400">
                        Select your top 5 qualities. Sponsors evaluate how these traits reflect in your verbal responses.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        Selected: {selectedTraits.length} / 5
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3">
                    {[
                      "Hardworking & Resilient",
                      "Adaptable / Flexible",
                      "Team Player",
                      "Enthusiastic & Outgoing",
                      "Responsible & Independent",
                      "Punctual & Reliable",
                      "Calm Under Pressure",
                      "Customer-Focused",
                      "Proactive Problem Solver",
                      "Energetic & Active",
                      "Quick Learner",
                      "Detail-Oriented",
                      "Friendly & Polite",
                      "Culturally Open-Minded",
                      "Honest & Trustworthy",
                      "Positive Attitude",
                    ].map((trait) => {
                      const isSelected = selectedTraits.includes(trait);
                      const isRecommended = [
                        "Hardworking & Resilient",
                        "Adaptable / Flexible",
                        "Team Player",
                        "Enthusiastic & Outgoing",
                        "Responsible & Independent",
                      ].includes(trait);

                      return (
                        <button
                          key={trait}
                          onClick={() => handleTraitToggle(trait)}
                          className={`p-3 rounded-xl text-xs font-bold border transition-all text-left flex flex-col justify-between gap-2 cursor-pointer ${
                            isSelected
                              ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/20"
                              : "bg-slate-950/70 text-slate-300 border-white/5 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1 w-full">
                            <span>{trait}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3] text-slate-950" />}
                          </div>
                          {isRecommended && (
                            <span
                              className={`text-[9px] px-1.5 py-0.5 rounded w-fit ${
                                isSelected ? "bg-slate-950 text-emerald-400" : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                              }`}
                            >
                              Top Match
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Dynamic Persona Insight */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 flex items-start gap-3 text-xs">
                    <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Your Projected Sponsor Profile:</strong>
                      <p className="text-slate-300">
                        {selectedTraits.length === 5 ? (
                          <>
                            You present as a <strong className="text-emerald-400">{selectedTraits.join(", ")}</strong> candidate.
                            This combination signals high adaptability in fast-paced resort environments, strong peer living compatibility, and reliable non-immigrant program compliance.
                          </>
                        ) : (
                          `Select ${5 - selectedTraits.length} more trait(s) to finalize your target interview persona.`
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CurriculumBlock>
          </div>
        )}

        {/* BLOCK 2: PHONETICS & WORKPLACE SLANG */}
        {activeTab === "phonetics" && (
          <div className="space-y-6">
            <CurriculumBlock
              icon={<Mic className="w-6 h-6 text-emerald-400" />}
              title="Block 2: L1-Spanish Phonetic Repair & Workplace Audio"
              subtitle="20 Minutes • Contrastive Phonetics & American Seasonal Slang"
              methodology="Phonetic Drills & IPA Audio"
              accentColor="emerald"
            >
              <div className="space-y-8 mt-4">
                {/* 5 Phonetic Repairs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {phoneticsData.map((item, index) => {
                    const audioId = `phonetic-${index}`;
                    const isPlaying = isPlayingAudio === audioId;
                    return (
                      <div
                        key={index}
                        className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all space-y-4 shadow-lg"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-white text-base">{item.title}</h3>
                          <span className="text-xs font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-300 rounded border border-emerald-500/20">
                            {item.ipa}
                          </span>
                        </div>

                        <div className="space-y-1 text-xs">
                          <p className="text-amber-400 font-medium">⚠️ Issue: {item.issue}</p>
                          <p className="text-slate-300">💡 Rule: {item.rule}</p>
                        </div>

                        <div className="bg-slate-950 p-3 rounded-xl space-y-2 border border-white/5 font-mono text-xs">
                          <div className="text-red-400/90 flex items-start gap-2">
                            <span className="font-bold shrink-0">❌ Spanish Habit:</span>
                            <span className="line-through">{item.bad}</span>
                          </div>
                          <div className="text-emerald-400 flex items-start gap-2 font-bold">
                            <span className="shrink-0">✅ Clean Repair:</span>
                            <span>{item.good}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <button
                            onClick={() => speakText(item.audioText, audioId)}
                            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                              isPlaying
                                ? "bg-emerald-500 text-slate-950 animate-pulse shadow-lg shadow-emerald-500/30"
                                : "bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30"
                            }`}
                          >
                            <Volume2 className="w-4 h-4" />
                            {isPlaying ? "Pronouncing Native Audio..." : "🔊 Practice Pronunciation"}
                          </button>
                          <button
                            onClick={() => copyToClipboard(item.good, "Pronunciation drill")}
                            className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-white/5 text-slate-400 hover:text-white cursor-pointer"
                            title="Copy drill text"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Seasonal Workplace Slang Section */}
                <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-5">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Flame className="w-5 h-5 text-amber-400" /> American Seasonal Workplace Slang & Resort Idioms
                    </h3>
                    <span className="text-xs text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 font-bold">
                      Essential On-The-Job Lingo
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Sponsors love hearing candidates who understand common American hospitality terms. Recognizing these expressions prevents miscommunication during busy shifts.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {slangData.map((item, idx) => {
                      const slangAudioId = `slang-${idx}`;
                      const isPlaying = isPlayingAudio === slangAudioId;
                      return (
                        <div key={idx} className="bg-slate-950/80 p-4 rounded-xl border border-white/5 space-y-3 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <h4 className="font-bold text-white text-sm text-emerald-400">"{item.term}"</h4>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-white/5">
                                {item.category}
                              </span>
                            </div>
                            <p className="text-xs text-slate-300 mb-2">{item.meaning}</p>
                            <p className="text-[11px] text-slate-400 italic bg-slate-900/50 p-2 rounded-lg border border-white/5">
                              "{item.example}"
                            </p>
                          </div>

                          <button
                            onClick={() => speakText(item.audioText, slangAudioId)}
                            className={`w-full py-1.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                              isPlaying
                                ? "bg-amber-400 text-slate-950 animate-pulse"
                                : "bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/20"
                            }`}
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            {isPlaying ? "Playing..." : "Listen In Context"}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CurriculumBlock>
          </div>
        )}

        {/* BLOCK 3: 15 QUESTIONS & STAR BUILDER */}
        {activeTab === "questions" && (
          <div className="space-y-6">
            <CurriculumBlock
              icon={<BookOpen className="w-6 h-6 text-emerald-400" />}
              title="Block 3: The 15 Official Sponsor Questions & STAR Lab"
              subtitle="35 Minutes • Master Answers, Search & Interactive STAR Generator"
              methodology="STAR Response Method"
              accentColor="emerald"
            >
              <div className="space-y-6 mt-4">
                {/* Search & Category Filter Toolbar */}
                <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        placeholder="Search questions by keyword (e.g. visa, roommate, schedule, customer)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="px-3 py-2 text-xs font-bold bg-slate-800 text-slate-300 hover:text-white rounded-xl cursor-pointer"
                      >
                        Clear Search
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "All",
                      "University & Background",
                      "Motivation & Culture",
                      "Workload & Flexibility",
                      "Customer Service",
                      "Housing & Roommates",
                      "Visa & Compliance",
                    ].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          selectedCategory === cat
                            ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                            : "bg-slate-950/70 text-slate-400 hover:text-white border border-white/5"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Master-Detail Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Sidebar Question List */}
                  <div className="lg:col-span-5 space-y-2.5 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
                    {filteredQuestions.length === 0 ? (
                      <div className="p-8 text-center text-slate-400 bg-slate-900/50 rounded-2xl border border-dashed border-slate-800 text-xs">
                        No questions matched your search query. Try another term.
                      </div>
                    ) : (
                      filteredQuestions.map((q) => {
                        const isActive = q.id === activeQuestionId;
                        const isPracticed = practicedQuestions.includes(q.id);
                        return (
                          <div
                            key={q.id}
                            className={`w-full p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                              isActive
                                ? "bg-emerald-500/15 border-emerald-400/50 shadow-lg shadow-emerald-500/10"
                                : "bg-slate-900/70 border-white/5 hover:border-white/10 text-slate-300"
                            }`}
                          >
                            <button
                              onClick={() => setActiveQuestionId(q.id)}
                              className="text-left flex-1 cursor-pointer"
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                  Q{q.id}
                                </span>
                                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                                  {q.category}
                                </span>
                              </div>
                              <h4 className="text-xs font-bold text-white line-clamp-2 leading-relaxed">{q.question}</h4>
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                togglePracticedQuestion(q.id);
                              }}
                              className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                                isPracticed
                                  ? "bg-emerald-500 text-slate-950 border-emerald-400"
                                  : "bg-slate-950 text-slate-600 border-white/5 hover:text-slate-400"
                              }`}
                              title={isPracticed ? "Marked as rehearsed" : "Mark as rehearsed"}
                            >
                              <CheckCircle2 className="w-4 h-4" />
                            </button>
                          </div>
                        );
                      })
                    )}
                  </div>

                  {/* Right Detail Panel */}
                  <div className="lg:col-span-7 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          QUESTION {activeQuestion.id} OF 15
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => copyToClipboard(activeQuestion.question, "Question text")}
                            className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                            title="Copy Question"
                          >
                            <Copy className="w-3.5 h-3.5" /> Copy
                          </button>
                          <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                            <ShieldCheck className="w-4 h-4" /> {activeQuestion.category}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">"{activeQuestion.question}"</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="bg-slate-950 p-3.5 rounded-xl border border-white/5">
                        <span className="text-cyan-400 font-bold block mb-1">🎯 Sponsor Intent:</span>
                        <p className="text-slate-300 leading-relaxed">{activeQuestion.intent}</p>
                      </div>
                      <div className="bg-slate-950 p-3.5 rounded-xl border border-white/5">
                        <span className="text-emerald-400 font-bold block mb-1">💡 Response Formula:</span>
                        <p className="text-slate-300 leading-relaxed">{activeQuestion.formula}</p>
                      </div>
                    </div>

                    {/* Tier Tab Selector (B2 vs C1) */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setActiveAnswerTier("B2")}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              activeAnswerTier === "B2"
                                ? "bg-emerald-500 text-slate-950 shadow"
                                : "bg-slate-950 text-slate-400 hover:text-white border border-white/5"
                            }`}
                          >
                            High Intermediate (B2)
                          </button>
                          <button
                            onClick={() => setActiveAnswerTier("C1")}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              activeAnswerTier === "C1"
                                ? "bg-cyan-500 text-slate-950 shadow"
                                : "bg-slate-950 text-slate-400 hover:text-white border border-white/5"
                            }`}
                          >
                            Advanced (C1)
                          </button>
                        </div>

                        <button
                          onClick={() => {
                            const answer = activeAnswerTier === "B2" ? activeQuestion.modelAnswerB2 : activeQuestion.modelAnswerC1;
                            speakText(answer, `model-${activeAnswerTier}-${activeQuestion.id}`);
                          }}
                          className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                            isPlayingAudio === `model-${activeAnswerTier}-${activeQuestion.id}`
                              ? "bg-emerald-500 text-slate-950 animate-pulse"
                              : "bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30"
                          }`}
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          {isPlayingAudio === `model-${activeAnswerTier}-${activeQuestion.id}` ? "Playing Answer..." : `Listen ${activeAnswerTier}`}
                        </button>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono text-slate-400 uppercase">
                            Model Script ({activeAnswerTier})
                          </span>
                          <button
                            onClick={() => {
                              const answer = activeAnswerTier === "B2" ? activeQuestion.modelAnswerB2 : activeQuestion.modelAnswerC1;
                              copyToClipboard(answer, `${activeAnswerTier} Model Answer`);
                            }}
                            className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                          >
                            <Copy className="w-3 h-3" /> Copy Script
                          </button>
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed italic">
                          "{activeAnswerTier === "B2" ? activeQuestion.modelAnswerB2 : activeQuestion.modelAnswerC1}"
                        </p>
                      </div>
                    </div>

                    {/* Vocabulary & Red Flag */}
                    <div className="space-y-2.5">
                      <div className="text-[11px] font-mono text-emerald-300 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>🔑 Key Vocabulary IPA: {activeQuestion.ipaKey}</span>
                      </div>

                      <div className="text-[11px] text-red-400 bg-red-500/10 p-3 rounded-xl border border-red-500/20 flex items-start gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-red-300">⚠️ Red Flag Warning (Automatic Rejection Risk):</strong>
                          <span className="text-red-200/90">{activeQuestion.redFlag}</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Custom STAR Builder Lab */}
                    <div className="bg-slate-950/90 p-4 rounded-xl border border-emerald-500/20 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-white text-xs flex items-center gap-1.5">
                          <SlidersHorizontal className="w-4 h-4 text-emerald-400" /> Personal STAR Builder Lab
                        </h4>
                        <span className="text-[10px] text-slate-400">Draft your personalized example</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div>
                          <label className="text-[10px] text-slate-400 font-mono block mb-1">S - Situation</label>
                          <input
                            type="text"
                            placeholder="e.g. During peak summer at my university food stand..."
                            value={starS}
                            onChange={(e) => setStarS(e.target.value)}
                            className="w-full bg-slate-900 border border-white/5 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-400 font-mono block mb-1">T - Task</label>
                          <input
                            type="text"
                            placeholder="e.g. I had to manage long lines and register receipts..."
                            value={starT}
                            onChange={(e) => setStarT(e.target.value)}
                            className="w-full bg-slate-900 border border-white/5 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-400 font-mono block mb-1">A - Action</label>
                          <input
                            type="text"
                            placeholder="e.g. I organized the queue and stayed polite under pressure..."
                            value={starA}
                            onChange={(e) => setStarA(e.target.value)}
                            className="w-full bg-slate-900 border border-white/5 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-slate-400 font-mono block mb-1">R - Result</label>
                          <input
                            type="text"
                            placeholder="e.g. We cleared 150 customers with zero errors and great tips..."
                            value={starR}
                            onChange={(e) => setStarR(e.target.value)}
                            className="w-full bg-slate-900 border border-white/5 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      {synthesizedStarAnswer && (
                        <div className="bg-slate-900 p-3 rounded-lg border border-emerald-500/30 space-y-2 pt-2">
                          <span className="text-[10px] font-bold text-emerald-400 block">Synthesized Response Preview:</span>
                          <p className="text-xs text-slate-200 italic">{synthesizedStarAnswer}</p>
                          <div className="flex gap-2">
                            <button
                              onClick={() => speakText(synthesizedStarAnswer, "custom-star")}
                              className="px-3 py-1 bg-emerald-500 text-slate-950 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
                            >
                              <Volume2 className="w-3 h-3" /> Listen To My Answer
                            </button>
                            <button
                              onClick={() => copyToClipboard(synthesizedStarAnswer, "My STAR Answer")}
                              className="px-3 py-1 bg-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
                            >
                              <Copy className="w-3 h-3" /> Copy
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CurriculumBlock>
          </div>
        )}

        {/* BLOCK 4: DIALOGUES */}
        {activeTab === "dialogues" && (
          <div className="space-y-6">
            <CurriculumBlock
              icon={<MessageSquare className="w-6 h-6 text-emerald-400" />}
              title="Block 4: Extensive Interview Dialogues & Scenario Audio"
              subtitle="25 Minutes • Turn-by-Turn Audio & Workplace Intonation Drills"
              methodology="Interactive Dialogue Shadowing"
              accentColor="emerald"
            >
              <div className="space-y-6 mt-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {dialogueScenariosData.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setActiveDialogueId(s.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          activeDialogueId === s.id
                            ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                            : "bg-slate-900 text-slate-400 hover:text-white border border-white/5"
                        }`}
                      >
                        {s.title}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setPracticeMode(!practiceMode);
                      showToast(practiceMode ? "Full Audio Mode activated." : "Practice Mode activated (Candidate muted).");
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      practiceMode
                        ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                        : "bg-slate-900 text-emerald-400 border border-emerald-500/30 hover:bg-slate-800"
                    }`}
                  >
                    <Radio className="w-4 h-4" />
                    {practiceMode ? "🎙️ Practice Mode ACTIVE (Candidate Muted)" : "🔊 Full Audio Mode"}
                  </button>
                </div>

                <div className="bg-slate-900/90 p-5 rounded-2xl border border-emerald-500/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <FileText className="w-5 h-5 text-emerald-400" /> {activeDialogue.title}
                    </h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {activeDialogue.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 italic">Context: {activeDialogue.context}</p>
                </div>

                <div className="space-y-4">
                  {activeDialogue.lines.map((line, idx) => {
                    const audioId = `dialogue-${activeDialogue.id}-${idx}`;
                    const isPlaying = isPlayingAudio === audioId;
                    const isInterviewer = line.speaker === "Interviewer";

                    return (
                      <div
                        key={idx}
                        className={`p-5 rounded-2xl border transition-all space-y-3 ${
                          isInterviewer
                            ? "bg-slate-950/80 border-cyan-500/20 ml-0 mr-4 sm:mr-12"
                            : "bg-slate-900/90 border-emerald-500/30 ml-4 sm:ml-12 mr-0"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-xs font-extrabold px-2.5 py-0.5 rounded ${
                                isInterviewer
                                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                                  : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              }`}
                            >
                              {line.speaker === "Interviewer" ? "👤 SPONSOR OFFICER" : "🧑 WORK & TRAVEL PARTICIPANT"}
                            </span>

                            <span className="text-[10px] font-mono text-slate-400">
                              Intonation: {line.intonation === "rising" ? "↗ Rising (Polite Question)" : "↘ Falling (Assertive)"}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                if (practiceMode && !isInterviewer) {
                                  alert("Practice Mode active! Read the participant response aloud yourself.");
                                  return;
                                }
                                speakText(line.text, audioId, isInterviewer ? 1.05 : 0.95, speechRate);
                              }}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                                isPlaying
                                  ? "bg-emerald-500 text-slate-950 animate-pulse shadow-md shadow-emerald-500/30"
                                  : "bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30"
                              }`}
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                              {isPlaying ? "Playing Line..." : "🔊 Listen Line"}
                            </button>
                            <button
                              onClick={() => copyToClipboard(line.text, "Dialogue line")}
                              className="p-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-white/5 text-slate-400 hover:text-white cursor-pointer"
                              title="Copy dialogue line"
                            >
                              <Copy className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <p className="text-sm font-medium text-white leading-relaxed">
                          "{line.text}"
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs pt-2 border-t border-white/5 font-mono">
                          <div className="text-cyan-300 bg-cyan-500/10 p-2 rounded-lg">
                            🗣️ Connected Speech Links: <span className="font-bold">{line.linking}</span>
                          </div>
                          <div className="text-emerald-300 bg-emerald-500/10 p-2 rounded-lg">
                            🔑 IPA Guide: <span className="font-bold">{line.ipa}</span>
                          </div>
                        </div>

                        <div className="text-[11px] text-amber-300 bg-amber-500/10 p-2 rounded-lg italic">
                          💡 Teacher Tip: {line.teacherTip}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CurriculumBlock>
          </div>
        )}

        {/* BLOCK 5: SIMULATOR & SCORECARD */}
        {activeTab === "simulator" && (
          <div className="space-y-6">
            <CurriculumBlock
              icon={<Clock className="w-6 h-6 text-emerald-400" />}
              title="Block 5: Simulated Sponsor Mock Interview & Rubric Scorecard"
              subtitle="20 Minutes • Timed Mock Interview & Live Scorecard"
              methodology="Simulation & Feedback"
              accentColor="emerald"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">
                {/* Left: Stopwatch & Random Question */}
                <div className="md:col-span-6 space-y-6">
                  <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 text-center space-y-4 shadow-xl">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-400" /> Mock Interview Official Clock
                    </div>
                    <div className="text-5xl font-mono font-extrabold text-emerald-400 tracking-wider">
                      {formatTime(simTime)}
                    </div>

                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="bg-emerald-500 h-full transition-all duration-1000"
                        style={{ width: `${(simTime / 600) * 100}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => setSimRunning(!simRunning)}
                        className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                          simRunning ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25" : "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25"
                        }`}
                      >
                        {simRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        {simRunning ? "Pause Interview" : "Start Mock Interview"}
                      </button>
                      <button
                        onClick={() => {
                          setSimTime(600);
                          setSimRunning(false);
                        }}
                        className="px-4 py-2.5 rounded-xl font-bold text-xs bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center gap-2 cursor-pointer"
                      >
                        <RotateCcw className="w-4 h-4" /> Reset
                      </button>
                    </div>
                  </div>

                  {/* Random Question Spinner */}
                  <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white text-sm flex items-center gap-2">
                        <Shuffle className="w-4 h-4 text-emerald-400" /> Random Question Spinner
                      </h3>
                      <button
                        onClick={() => {
                          const randomId = Math.floor(Math.random() * 15) + 1;
                          setSimQuestionId(randomId);
                          showToast(`Spun Question #${randomId}!`);
                        }}
                        className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-lg border border-emerald-500/30 hover:bg-emerald-500/30 flex items-center gap-1.5 cursor-pointer"
                      >
                        🎲 Spin Next Question
                      </button>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase">
                          Question #{simQuestion.id} • {simQuestion.category}
                        </span>
                        <button
                          onClick={() => speakText(simQuestion.question, `sim-q-${simQuestion.id}`)}
                          className="text-[10px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer font-bold"
                        >
                          <Volume2 className="w-3 h-3" /> Read Question
                        </button>
                      </div>
                      <p className="text-sm font-bold text-white leading-relaxed">"{simQuestion.question}"</p>
                      <div className="text-xs text-slate-400 pt-2 border-t border-white/5">
                        💡 Quick Formula: {simQuestion.formula}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Scorecard */}
                <div className="md:col-span-6 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-5 shadow-xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <h3 className="font-bold text-white text-base flex items-center gap-2">
                        <Award className="w-5 h-5 text-emerald-400" /> Teacher & Peer Evaluation Scorecard
                      </h3>
                      <p className="text-[11px] text-slate-400">Score 1 to 5 per criterion (Target: 20+ / 25)</p>
                    </div>
                    <span className="text-xl font-mono font-extrabold text-emerald-400">
                      {calculateTotalScore()} / 25
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    {[
                      { key: "clarity", label: "1. Phonetic Clarity & Pronunciation", desc: "Clean /ʃ/ (shift) vs /tʃ/, /v/ distinction, and no initial 'es-' clusters" },
                      { key: "structure", label: "2. Response Structure (STAR)", desc: "Concrete past work, university, and stamina examples provided" },
                      { key: "fluency", label: "3. Spontaneity & Fluency", desc: "Natural conversational flow without Spanish filler words (eeee, este)" },
                      { key: "trait", label: "4. Work Ethic & Trait Impression", desc: "Exhibits Resilience, Flexibility & Team-player mindset" },
                      { key: "compliance", label: "5. J-1 Visa & Sponsor Compliance", desc: "Mandatory return intent, student ties & no unauthorized jobs" },
                    ].map((item) => (
                      <div key={item.key} className="space-y-1.5 bg-slate-950 p-3 rounded-xl border border-white/5">
                        <div className="flex items-center justify-between font-bold text-slate-200">
                          <span>{item.label}</span>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((val) => {
                              const isVal = (scores as any)[item.key] === val;
                              return (
                                <button
                                  key={val}
                                  onClick={() => setScores({ ...scores, [item.key]: val })}
                                  className={`w-6 h-6 rounded flex items-center justify-center font-mono text-[11px] font-bold cursor-pointer transition-all ${
                                    isVal
                                      ? "bg-emerald-500 text-slate-950 shadow"
                                      : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                                  }`}
                                >
                                  {val}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                        <p className="text-[10px] text-slate-400">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`p-4 rounded-xl border text-xs text-center font-bold ${
                      calculateTotalScore() >= 20
                        ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                        : "bg-amber-500/10 text-amber-300 border-amber-500/30"
                    }`}
                  >
                    {calculateTotalScore() >= 20
                      ? "🎉 APPROVED: Eligible for Top Customer-Facing Positions (Cashier, Server, Lifeguard)! High-Intermediate / Advanced standard."
                      : "⚠️ NEEDS DRILL: Score is under 20. Revisit Block 2 Phonetics & Block 4 Dialogues before taking sponsor screening."}
                  </div>

                  <button
                    onClick={handleCopyScorecard}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-950 hover:bg-slate-800 text-slate-200 border border-white/10 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Copy className="w-4 h-4 text-emerald-400" /> Copy Evaluation Scorecard Report
                  </button>
                </div>
              </div>
            </CurriculumBlock>
          </div>
        )}

        {/* CHEAT SHEET & PRINTABLE HANDOUT */}
        {activeTab === "handout" && (
          <div className="space-y-6">
            <CurriculumBlock
              icon={<ShieldCheck className="w-6 h-6 text-emerald-400" />}
              title="Printable Student Cheat Sheet: Top 10 Golden Rules for J-1 Work & Travel"
              subtitle="Quick Pre-Interview Reference Guide"
              methodology="Self-Study Reference"
              accentColor="emerald"
            >
              <div className="space-y-6 mt-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                  <p className="text-xs text-slate-300">
                    Review these 10 non-negotiable principles right before connecting to your CIEE, InterExchange, or Intrax video interview.
                  </p>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handlePrintHandout}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" /> Print Sheet
                    </button>
                    <button
                      onClick={() => {
                        const allRules = [
                          "1. PROVE FULL-TIME ENROLLMENT: State your university, major, and current semester immediately without hesitation.",
                          "2. REJECT UNAUTHORIZED JOBS: Never accept unregistered cash work. State that any second job requires written sponsor vetting.",
                          "3. CONFIRM RETURN INTENT: Emphasize that your next semester begins in Colombia right after your travel grace period concludes.",
                          "4. EXPRESS TOTAL SCHEDULE FLEXIBILITY: State you are willing and ready to work early mornings, closing shifts, and peak weekends.",
                          "5. HIGHLIGHT PHYSICAL STAMINA: Reassure the sponsor that you can easily handle 8-hour standing shifts using sports/work examples.",
                          "6. MASTER L1 PHONETICS: Practice /ʃ/ in 'shift', eliminate initial 'es-' in 'schedule', and pronounce past tense -ed cleanly.",
                          "7. PRACTICE SERVICE RECOVERY: When asked about angry customers, always apologize with empathy and solve the problem swiftly.",
                          "8. RESPECT MULTICULTURAL HOUSING: Emphasize shared cleaning rosters, quiet hours, and respectful communication with roommates.",
                          "9. EMBRACE CULTURAL EXCHANGE: Name authentic American traditions (4th of July, baseball, national parks) and your desire to share Colombian culture.",
                          "10. SMILE & PROJECT ENERGY: Maintain confident eye contact, warm body language, and enthusiastic, spontaneous English interaction!",
                        ].join("\n");
                        copyToClipboard(allRules, "Top 10 Golden Rules");
                      }}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950 flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-500/20"
                    >
                      <Copy className="w-3.5 h-3.5" /> Copy All 10 Rules
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "1. PROVE FULL-TIME ENROLLMENT: State your university, major, and current semester immediately without hesitation.",
                    "2. REJECT UNAUTHORIZED JOBS: Never accept unregistered cash work. State that any second job requires written sponsor vetting.",
                    "3. CONFIRM RETURN INTENT: Emphasize that your next semester begins in Colombia right after your travel grace period concludes.",
                    "4. EXPRESS TOTAL SCHEDULE FLEXIBILITY: State you are willing and ready to work early mornings, closing shifts, and peak weekends.",
                    "5. HIGHLIGHT PHYSICAL STAMINA: Reassure the sponsor that you can easily handle 8-hour standing shifts using sports/work examples.",
                    "6. MASTER L1 PHONETICS: Practice /ʃ/ in 'shift', eliminate initial 'es-' in 'schedule', and pronounce past tense -ed cleanly.",
                    "7. PRACTICE SERVICE RECOVERY: When asked about angry customers, always apologize with empathy and solve the problem swiftly.",
                    "8. RESPECT MULTICULTURAL HOUSING: Emphasize shared cleaning rosters, quiet hours, and respectful communication with roommates.",
                    "9. EMBRACE CULTURAL EXCHANGE: Name authentic American traditions (4th of July, baseball, national parks) and your desire to share Colombian culture.",
                    "10. SMILE & PROJECT ENERGY: Maintain confident eye contact, warm body language, and enthusiastic, spontaneous English interaction!",
                  ].map((rule, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex items-start gap-3 hover:border-emerald-500/30 transition-all shadow"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-200 font-medium leading-relaxed">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CurriculumBlock>
          </div>
        )}

      </div>

      <CurriculumNavigation
        prevHref="/english-class/hospitality-internship"
        prevLabel="Hospitality Internship Masterclass"
        nextHref="/english-class/au-pair-sponsor-interview"
        nextLabel="Au Pair Sponsor Interview Masterclass"
        accentColor="emerald"
        moduleTitle="Work & Travel Sponsor Interview Masterclass"
      />
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  Info,
  Zap,
  MessageSquare,
  Radio,
  FileText,
  Utensils,
  Hotel,
  Wine,
  Star,
  Check,
  ArrowRight,
  Briefcase,
  Compass,
  Sparkle,
  Coffee,
  HelpCircle,
  Copy
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

interface IdiomItem {
  term: string;
  meaning: string;
  example: string;
  audioText: string;
}

interface QuestionItem {
  id: number;
  category: "Background & Education" | "F&B & Front Desk" | "Conflict & L.A.S.T." | "DS-7002 Training Plan" | "Visa & Intent";
  question: string;
  intent: string;
  formula: string;
  modelAnswerB2: string;
  modelAnswerC1: string;
  ipaKey: string;
  redFlag: string;
}

interface DialogueLine {
  speaker: "Interviewer / Guest" | "Intern";
  text: string;
  ipa: string;
  linking: string;
  intonation: "rising" | "falling";
  teacherTip: string;
}

interface DialogueScenario {
  id: number;
  title: string;
  topic: "Front Desk & Concierge" | "Food & Beverage Operations" | "Banquets & Events" | "Housekeeping & Facilities" | "DS-7002 & Consular Visa";
  category: string;
  context: string;
  lines: DialogueLine[];
}

export default function HospitalityInternshipPage() {
  const [activeTab, setActiveTab] = useState<"rubric" | "phonetics" | "questions" | "dialogues" | "simulator" | "handout">("rubric");
  const [selectedTraits, setSelectedTraits] = useState<string[]>([
    "Polished & Professional",
    "Guest-Obsessed",
    "Agile & Adaptable",
    "Crisis-Resilient",
    "Detail-Oriented"
  ]);
  const [isPlayingAudio, setIsPlayingAudio] = useState<string | null>(null);

  // Question State
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeQuestionId, setActiveQuestionId] = useState<number>(1);

  // Dialogue State
  const [selectedDialogueTopic, setSelectedDialogueTopic] = useState<string>("All Topics");
  const [activeDialogueId, setActiveDialogueId] = useState<number>(1);
  const [practiceMode, setPracticeMode] = useState<boolean>(false);

  // STAR Builder State
  const [starS, setStarS] = useState("");
  const [starT, setStarT] = useState("");
  const [starA, setStarA] = useState("");
  const [starR, setStarR] = useState("");
  const [copiedScript, setCopiedScript] = useState(false);

  // Simulator State
  const [simTime, setSimTime] = useState(600); // 10 minutes in seconds
  const [simRunning, setSimRunning] = useState(false);
  const [simQuestionId, setSimQuestionId] = useState<number>(1);
  const [scores, setScores] = useState({ presence: 5, vocabulary: 4, recovery: 4, fluency: 4, compliance: 5 });

  // Web Speech API synthesis handler
  const speakText = (text: string, id: string, pitch = 1, rate = 0.9) => {
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
      }
    }
  };

  // Phonetics Data
  const phoneticsData: PhoneticItem[] = [
    {
      title: "1. Silent Letters in Gastronomy & Billing",
      issue: "Spanish speakers tend to pronounce every written consonant phonetically (e.g. re-ceipt, sal-mon).",
      rule: "The 'p' in receipt, 'l' in salmon, and 'b' in subtle are completely silent.",
      bad: "Here is your re-ceipt with the grilled sal-mon and sub-tle sauce.",
      good: "Here is your receipt /rɪˈsiːt/ with the grilled salmon /ˈsæmən/ and subtle /ˈsʌtl/ citrus sauce.",
      ipa: "/rɪˈsiːt/ • /ˈsæmən/ • /ˈsʌtl/",
      audioText: "Here is your receipt with the grilled salmon and subtle citrus sauce."
    },
    {
      title: "2. Vowel Reduction in High-Frequency Hotel Terms",
      issue: "Pronouncing 4 or 5 syllables instead of native 3-syllable compressed vowel reductions.",
      rule: "Unstressed middle vowels collapse into a schwa or drop entirely in rapid hospitality English.",
      bad: "Our com-for-ta-ble rooms include fresh ve-ge-ta-bles at the res-tau-rant.",
      good: "Our comfortable /ˈkʌmftəbl/ rooms include fresh vegetables /ˈvɛdʒtəblz/ at the restaurant /ˈrɛstrɒnt/.",
      ipa: "/ˈkʌmftəbl/ • /ˈvɛdʒtəblz/ • /ˈrɛstrɒnt/",
      audioText: "Our comfortable rooms include fresh vegetables at the restaurant."
    },
    {
      title: "3. Homophones & False Friends: Suite vs Suit & Dessert vs Desert",
      issue: "Pronouncing hotel 'suite' like 'suit' /suːt/ and confusing 'dessert' with 'desert'.",
      rule: "'Suite' sounds exactly like 'sweet' /swiːt/. 'Dessert' has stress on the second syllable /dɪˈzɜːrt/.",
      bad: "I will escort you to your executive suit and bring the desert.",
      good: "I will escort you to your executive suite /swiːt/ and bring your dessert /dɪˈzɜːrt/ menu shortly.",
      ipa: "/swiːt/ (sweet) • /dɪˈzɜːrt/ (dessert)",
      audioText: "I will escort you to your executive suite and bring your dessert menu shortly."
    },
    {
      title: "4. Connected Speech in 5-Star Polite Service Modals",
      issue: "Choppy, robotic delivery: 'Would - you - like - another - drink?' sounds blunt and cold.",
      rule: "Link the final 'd' of 'would' to 'you' creating /wʊdʒuː/ and glide into 'like'.",
      bad: "Do you want more coffee or do you need the check?",
      good: "Would you like /wʊdʒuː laɪk/ another beverage, or may I present your check /prizɛnt jɔːr tʃɛk/?",
      ipa: "/wʊdʒuː laɪk/ • /meɪ aɪ əˈsɪst juː/",
      audioText: "Would you like another beverage, or may I assist you with anything else?"
    },
    {
      title: "5. The Critical /v/ vs /b/ Sound in Operations",
      issue: "Spanish merges 'v' and 'b' into /b/, confusing 'reservation', 'VIP', and 'beverage'.",
      rule: "Touch upper teeth to bottom lip and vibrate vocal cords for /v/.",
      bad: "Let me check the beserbation for our bip guest.",
      good: "Let me verify the reservation /ˌrɛzərˈveɪʃən/ for our VIP /ˌviː aɪ ˈpiː/ guest.",
      ipa: "/ˌrɛzərˈveɪʃən/ • /ˈbɛvərɪdʒ/ • /ˌviː aɪ ˈpiː/",
      audioText: "Let me verify the reservation for our VIP guest and prepare their welcome beverage."
    }
  ];

  // Industry Idioms Data
  const idiomsData: IdiomItem[] = [
    {
      term: "Walk a guest",
      meaning: "Relocating a guest with a confirmed booking to an equivalent luxury sister hotel due to unexpected overbooking, covering their transport and meals.",
      example: "Due to emergency plumbing repairs, we had to walk two arrivals to our partner property with complimentary upgrades.",
      audioText: "Due to emergency repairs, we walked the guests with complimentary upgrades to our sister property."
    },
    {
      term: "Comp an item / service",
      meaning: "Short for 'complimentary'. Providing a meal, beverage, or room night at zero charge to recover from a service flaw.",
      example: "I apologized for the wait and comped the table's artisanal desserts and dessert wines.",
      audioText: "I apologized for the wait and comped the table's artisanal desserts."
    },
    {
      term: "Run the pass / Expediting",
      meaning: "The critical hot-line inspection station between the executive chef and the servers ensuring temperature, garnish, and allergy tags are perfect.",
      example: "During the banquet rush, I assisted the expeditor on the pass to ensure every special diet ticket was verified.",
      audioText: "During the banquet rush, I assisted the expeditor on the pass to ensure allergy tickets were verified."
    },
    {
      term: "Turn-down service",
      meaning: "Evening housekeeping service preparing the bed linens, setting dim relaxation lighting, and providing water and pillow amenities.",
      example: "Our evening turn-down service includes lavender pillow mist, ambient jazz music, and slippers placed by the bedside.",
      audioText: "Our evening turn-down service includes lavender pillow mist and slippers placed by the bedside."
    },
    {
      term: "In the weeds",
      meaning: "Industry slang for being temporarily overwhelmed by a sudden rush of guest orders or check-ins.",
      example: "When the patio section got into the weeds, I stepped in as food runner to keep table pacing flawless.",
      audioText: "When the patio section got in the weeds, I stepped in as food runner to keep table pacing flawless."
    },
    {
      term: "Attend to / Look into",
      meaning: "Executive hospitality standard replacing blunt phrases like 'I will check' or 'Wait a minute'.",
      example: "Allow me to look into your suite status immediately, Mr. Adams. I will attend to your request personally.",
      audioText: "Allow me to look into your suite status immediately, Mr. Adams. I will attend to your request personally."
    }
  ];

  // 20 Questions Data
  const questionsData: QuestionItem[] = [
    {
      id: 1,
      category: "Background & Education",
      question: "Tell me about your academic background in hospitality and why you chose this industry.",
      intent: "Verify formal enrollment or recent graduation in tourism/hospitality and passion for service excellence.",
      formula: "Degree + University + Passion Origin + Professional Mission.",
      modelAnswerB2: "I am in my 7th semester of Hospitality and Tourism Management at Universidad Externado in Colombia. I chose this field because I am passionate about cross-cultural communication and creating memorable experiences for international travelers.",
      modelAnswerC1: "I am completing my final academic term in International Hospitality Management at Universidad Externado. I gravitated toward this industry because luxury hospitality blends operational precision with human connection. My goal is to master 5-star service standards at an internationally recognized property.",
      ipaKey: "hospitality /ˌhɒspɪˈtæləti/ • management /ˈmænɪdʒmənt/ • international /ˌɪntərˈnæʃənl/",
      redFlag: "Saying 'I just want to live in America' or having no coherent academic background in hospitality."
    },
    {
      id: 2,
      category: "Background & Education",
      question: "Why did you choose our specific hotel brand and location for your J-1 internship?",
      intent: "Evaluate whether the candidate researched the property's brand values, Forbes rating, or signature outlets.",
      formula: "Specific Brand Recognition + Signature Service Standard + Alignment with Career Goals.",
      modelAnswerB2: "I chose Marriott because of your reputation for excellence and employee development. Your resort in Orlando is known for high-volume, world-class guest service, which is exactly the environment where I want to challenge myself.",
      modelAnswerC1: "I specifically targeted your property because of your Forbes Four-Star distinction and your commitment to personalized guest recognition. Training in your luxury Food and Beverage operations will give me the benchmark operational standards I need to lead luxury boutique properties in Colombia.",
      ipaKey: "distinction /dɪˈstɪŋkʃən/ • benchmark /ˈbɛntʃmɑːrk/ • recognized /ˈrɛkəɡnaɪzd/",
      redFlag: "Giving a generic answer that could apply to any hotel, or not knowing the city/state of the property."
    },
    {
      id: 3,
      category: "Background & Education",
      question: "What prior practical experience do you have in food and beverage or front office operations?",
      intent: "Confirm certified hospitality experience (internships, banquet serving, restaurant line, or guest services).",
      formula: "Position + Property Name + Core Responsibilities + Key Performance Achievement.",
      modelAnswerB2: "I completed a six-month internship at the Sofitel Legend Santa Clara in Cartagena. I worked as a server and host, managing guest seatings, handling POS transactions, and ensuring smooth dining service for over 150 covers per night.",
      modelAnswerC1: "Over the past year, I served as a banquet captain assistant at the Sofitel Legend Santa Clara. In that capacity, I coordinated table setups for high-profile diplomatic banquets, ensured strict HACCP sanitation compliance, and maintained a 98% positive guest rating on table satisfaction surveys.",
      ipaKey: "banquet /ˈbæŋkwɪt/ • coordinated /koʊˈɔːrdɪneɪtɪd/ • compliance /kəmˈplaɪəns/",
      redFlag: "Exaggerating roles or admitting you have never stepped foot into a commercial kitchen or hotel."
    },
    {
      id: 4,
      category: "Background & Education",
      question: "What are your greatest professional strengths, and how do you handle constructive criticism?",
      intent: "Assess emotional maturity, coachability, and humility in high-pressure training environments.",
      formula: "Key Strength + Concrete Example + Constructive Feedback Welcoming Philosophy.",
      modelAnswerB2: "My greatest strength is adaptability and attention to detail. When a manager gives me feedback on table service, I write it down, thank them, and adjust immediately so I constantly improve.",
      modelAnswerC1: "My primary strength is emotional resilience under operational pressure, combined with acute situational awareness. I view constructive critique as essential mentorship; in fine dining, micro-adjustments in posture or wine presentation separate good service from extraordinary Forbes 5-star experiences.",
      ipaKey: "resilience /rɪˈzɪliəns/ • mentorship /ˈmɛntɔːrʃɪp/ • adjustments /əˈdʒʌstmənts/",
      redFlag: "Getting defensive or saying you never make mistakes."
    },
    {
      id: 5,
      category: "F&B & Front Desk",
      question: "How do you handle a guest with a severe food allergy or strict dietary restriction?",
      intent: "Test knowledge of food safety, cross-contamination prevention, POS tagging, and direct kitchen communication.",
      formula: "Immediate Empathy & Confirmation + POS Documentation + In-Person Chef Consultation + Dedicated Delivery.",
      modelAnswerB2: "First, I thank the guest and take their allergy very seriously. I write down the exact allergy, enter a red allergen alert in the POS system, and personally inform the Executive Chef. I also ensure clean utensils and separate preparation stations are used.",
      modelAnswerC1: "Allergen safety is an absolute zero-tolerance protocol. I first clarify the severity of the allergy with the guest, document it with high-priority tags in our POS, and personally brief the kitchen expeditor and Executive Chef. I inspect the plate before serving to ensure zero cross-contamination and personally present the dish to the guest.",
      ipaKey: "allergy /ˈælərdʒi/ • celiac /ˈsiːliæk/ • contamination /kənˌtæmɪˈneɪʃən/",
      redFlag: "Assuming allergies are not serious or saying 'I just tell the kitchen and hope they remember'."
    },
    {
      id: 6,
      category: "F&B & Front Desk",
      question: "What Property Management Systems (PMS) or Point-of-Sale (POS) software have you used?",
      intent: "Assess technological adaptability and comfort with industry-standard platforms (Opera, Micros, Toast, Aloha).",
      formula: "Systems Used + Specific Modules Mastered + Speed of Learning New Software.",
      modelAnswerB2: "I have hands-on experience using Micros and Toast POS for order entry, split checks, and payment processing. I also learned the basics of Opera PMS during my university hotel laboratory courses.",
      modelAnswerC1: "In my previous hotel role, I utilized Micros Symphony daily for table pacing, coursing, and inventory checks. Additionally, my university curriculum included comprehensive training on Opera Cloud PMS for reservations, check-ins, and guest folio management. I am very agile with digital hospitality interfaces.",
      ipaKey: "software /ˈsɒftwɛər/ • interfaces /ˈɪntərfeɪsɪz/ • transaction /trænˈzækʃən/",
      redFlag: "Saying you hate technology or getting confused about what POS or PMS stands for."
    },
    {
      id: 7,
      category: "F&B & Front Desk",
      question: "How do you maintain high energy and accuracy during a 200-cover dinner rush or busy banquet?",
      intent: "Determine stamina, poise under pressure, prioritization, and teamwork under high guest volumes.",
      formula: "Mental Preparation + Section Prioritization + Clear Communication with Expeditor.",
      modelAnswerB2: "I stay organized by prioritizing my tasks: greeting guests, taking drink orders, and communicating with food runners. I remain calm, smile, and support my teammates so the entire dining room runs smoothly.",
      modelAnswerC1: "High-volume service requires proactive situational awareness. I focus on table pacing, maintain continuous eye contact with my section, and keep tight communication with the kitchen expeditor. Maintaining composure and a welcoming smile ensures the guest feels cared for even during our busiest rushes.",
      ipaKey: "situational /ˌsɪtʃuˈeɪʃənl/ • composure /kəmˈpoʊʒər/ • expeditor /ˈɛkspɪdaɪtər/",
      redFlag: "Admitting you lose your temper, panic, or freeze when multiple tickets print at once."
    },
    {
      id: 8,
      category: "F&B & Front Desk",
      question: "How do you handle suggestive selling and upselling without appearing aggressive or intrusive?",
      intent: "Evaluate luxury sales finesse, menu mastery, and curating guest pleasure over pressure.",
      formula: "Anticipatory Inquiry + Descriptive Flavor Storytelling + Personal Recommendations.",
      modelAnswerB2: "I never pressure guests. Instead, I describe dishes enthusiastically, suggesting a complementary wine pairing or a house specialty that pairs beautifully with their main course.",
      modelAnswerC1: "Upselling in luxury dining is storytelling and curation, not hard sales. I listen to the guest's palate preferences and recommend sensory pairings: for instance, suggesting our sommelier's Reserve Pinot Noir to elevate the earthy notes of a pan-seared duck breast. It enhances their dining experience naturally.",
      ipaKey: "curation /kjʊˈreɪʃən/ • storytelling /ˈstɔːritɛlɪŋ/ • sensory /ˈsɛnsəri/",
      redFlag: "Pushing the most expensive item without considering what the guest actually ordered."
    },
    {
      id: 9,
      category: "Conflict & L.A.S.T.",
      question: "Tell me about a time a guest was furious about their meal or room. How did you resolve it?",
      intent: "Assess service recovery competence using the L.A.S.T. (Listen, Apologize, Solve, Thank) framework.",
      formula: "Situation + L.A.S.T. Step-by-Step Action + Positive Guest Loyalty Result.",
      modelAnswerB2: "A guest was upset because their steak was overcooked. I listened actively without interrupting, apologized sincerely for the delay, and immediately had the kitchen fire a fresh steak while offering a complimentary dessert. The guest left very happy and thanked me for the fast resolution.",
      modelAnswerC1: "I utilize the L.A.S.T. method. When an executive guest was frustrated over a significant check-in delay, I listened empathetically, validated his travel fatigue, and apologized sincerely. I immediately upgraded him to a Club Level room with lounge access and sent complimentary artisanal refreshments. He appreciated the proactive recovery and commended our service on TripAdvisor.",
      ipaKey: "empathy /ˈɛmpəθi/ • resolution /ˌrɛzəˈluːʃən/ • recovery /rɪˈkʌvəri/",
      redFlag: "Arguing with the guest, blaming another department, or saying 'it was not my fault'."
    },
    {
      id: 10,
      category: "Conflict & L.A.S.T.",
      question: "How do you handle unexpected schedule changes, working overtime, or covering an understaffed shift?",
      intent: "Evaluate flexibility, team commitment, and physical resilience required by 24/7 hotel operations.",
      formula: "Team-First Mindset + Personal Flexibility + Maintaining High Energy.",
      modelAnswerB2: "Hospitality operates 24/7, so flexibility is essential. If a coworker calls in sick or we have an unexpected influx of guests, I am always ready to step in, stay late, and help the team succeed.",
      modelAnswerC1: "In luxury hospitality, unexpected operational spikes are standard. I maintain a flexible, team-oriented mindset. When our banquet team was understaffed during an international medical convention, I gladly stayed for an additional four hours to ensure banquet turnover went seamlessly without compromising guest experience.",
      ipaKey: "flexibility /ˌflɛksəˈbɪləti/ • operational /ˌɒpəˈreɪʃənl/ • convention /kənˈvɛnʃən/",
      redFlag: "Demanding strict 9-to-5 schedules or complaining about working weekends and holidays."
    },
    {
      id: 11,
      category: "Conflict & L.A.S.T.",
      question: "How do you collaborate with colleagues from completely different cultural and linguistic backgrounds?",
      intent: "Verify cultural adaptability, open-mindedness, and communication skills in international hotel kitchens/teams.",
      formula: "Respect & Active Listening + Patience + Leveraging Diversity for Superior Guest Service.",
      modelAnswerB2: "I love working in diverse teams. In Colombia, I worked with colleagues from different regions and countries. I listen patiently, respect their perspectives, and focus on our common goal of guest satisfaction.",
      modelAnswerC1: "Cultural diversity is one of the greatest strengths of the hospitality sector. I approach international team dynamics with deep respect, patience, and clear verbal communication. Cross-cultural collaboration broadens my perspective and allows our team to anticipate the needs of global guests more authentically.",
      ipaKey: "diversity /daɪˈvɜːrsɪti/ • collaboration /kəˌlæbəˈreɪʃən/ • perspective /pərˈspɛktɪv/",
      redFlag: "Expressing prejudice, intolerance, or frustration when working with non-Spanish speakers."
    },
    {
      id: 12,
      category: "Conflict & L.A.S.T.",
      question: "How would you handle an intoxicated or disruptive guest in the lobby lounge while preserving decorum?",
      intent: "Assess diplomacy, guest safety, discretion, and knowing when to escalate to security/management.",
      formula: "Discreet De-escalation + Low Firm Tone + Offering Hydration + Manager / Security Support.",
      modelAnswerB2: "I would maintain a calm, quiet tone so other guests are not disturbed. I would offer them water or a coffee, speak to them respectfully, and discreetly alert my floor manager or security if safety became a concern.",
      modelAnswerC1: "Discretion and safety are paramount. I would lower my voice, avoid confrontation, and politely decline further alcoholic service while offering complimentary infused water or gourmet appetizers. If the guest became aggressive, I would immediately notify hotel security and the MOD (Manager on Duty) to handle the situation with dignity.",
      ipaKey: "discretion /dɪˈskrɛʃən/ • decorum /dɪˈkɔːrəm/ • paramount /ˈpærəmaʊnt/",
      redFlag: "Shouting back at the guest or ignoring safety risks."
    },
    {
      id: 13,
      category: "DS-7002 Training Plan",
      question: "What specific rotational phases and learning objectives are detailed in your Form DS-7002?",
      intent: "Confirm the applicant has studied their Training/Internship Placement Plan (TIPP) and understands it is training, not routine labor.",
      formula: "Phase 1 (Foundations) + Phase 2 (Rotational Operations) + Phase 3 (Supervisory & Analysis).",
      modelAnswerB2: "My DS-7002 has three phases. Phase 1 is orientation and foundational guest standards. Phase 2 covers food and beverage service rotations, banquet operations, and POS management. Phase 3 focuses on shift supervision, inventory control, and operational reporting.",
      modelAnswerC1: "My DS-7002 outlines a structured 12-month professional progression across three phases. Phase 1 establishes mastery of luxury service standards and departmental SOPs. Phase 2 immerses me in advanced food and beverage operations, including cellar management and high-volume banqueting. Phase 3 advances into managerial shadowing, labor scheduling, and guest satisfaction analytics.",
      ipaKey: "objectives /əbˈdʒɛktɪvz/ • rotational /roʊˈteɪʃənl/ • supervision /ˌsuːpərˈvɪʒən/",
      redFlag: "Saying 'I don't know what a DS-7002 is' or 'I am just going to carry plates and wash dishes'."
    },
    {
      id: 14,
      category: "DS-7002 Training Plan",
      question: "How does this J-1 internship differ from ordinary employment in the United States?",
      intent: "Legal requirement under 22 CFR § 62.22: J-1 internships are educational cultural exchanges, not ordinary labor.",
      formula: "Cultural Exchange & Learning Objectives + Continuous Mentorship + Prohibition of Unskilled Labor.",
      modelAnswerB2: "This is a cultural exchange training program, not regular employment. I will be supervised by experienced mentors, following a structured learning curriculum that develops my professional skills to take back to Colombia.",
      modelAnswerC1: "A J-1 internship is strictly an educational cultural exchange governed by the Department of State. Unlike ordinary employment, every activity is guided by a formal Training Plan (DS-7002) with dedicated mentor oversight, rotational evaluations, and clear educational milestones designed to enhance my professional expertise for my career in Colombia.",
      ipaKey: "educational /ˌɛdʒʊˈkeɪʃənl/ • mentorship /ˈmɛntɔːrʃɪp/ • curriculum /kəˈrɪkjʊləm/",
      redFlag: "Describing it as 'a job to earn dollars' or claiming you will replace a permanent US worker."
    },
    {
      id: 15,
      category: "DS-7002 Training Plan",
      question: "Who will be your primary supervisor or mentor, and how will your progress be evaluated?",
      intent: "Verify knowledge of the host employer's organizational structure and periodic evaluation checkpoints.",
      formula: "Supervisor Title + Frequency of Formal Check-Ins + Performance Metrics (Guest feedback, SOP mastery).",
      modelAnswerB2: "My designated supervisor is the Director of Food and Beverage. We will conduct bi-weekly check-ins to review my learning goals, alongside formal mid-term and final evaluations submitted to my J-1 sponsor.",
      modelAnswerC1: "My primary mentor is the Assistant Director of Food and Beverage Operations. In accordance with J-1 guidelines, we have scheduled bi-weekly one-on-one progress assessments, along with formal written mid-term and concluding evaluations measuring my mastery of luxury operational standards.",
      ipaKey: "supervisor /ˈsuːpərvaɪzər/ • designated /ˈdɛzɪɡneɪtɪd/ • evaluations /ɪˌvæljuˈeɪʃənz/",
      redFlag: "Not knowing who manages the department or claiming there is no supervisor."
    },
    {
      id: 16,
      category: "DS-7002 Training Plan",
      question: "What would you do if your host property asked you to perform tasks outside your approved DS-7002?",
      intent: "Test knowledge of J-1 Department of State regulations and proper communication with your designated sponsor.",
      formula: "Professional Clarification with Host Mentor + Checking DS-7002 + Contacting Sponsor Representative.",
      modelAnswerB2: "I would politely discuss the matter with my supervisor and reference my DS-7002 learning plan. If the issue continued, I would contact my J-1 sponsor coordinator for guidance.",
      modelAnswerC1: "I would first initiate a constructive conversation with my department mentor, reviewing the learning objectives outlined in my DS-7002. If non-compliant operational duties persisted that did not align with my educational training, I would promptly reach out to my designated sponsor support liaison to ensure regulatory compliance.",
      ipaKey: "liaison /liˈeɪzɒn/ • compliance /kəmˈplaɪəns/ • constructive /kənˈstrʌktɪv/",
      redFlag: "Saying you would simply abandon the property without notifying your sponsor."
    },
    {
      id: 17,
      category: "Visa & Intent",
      question: "Why do you need to complete this internship in the United States rather than remaining in Colombia?",
      intent: "Confirm genuine educational motivation: exposure to US luxury standards, global guest volumes, and English immersion.",
      formula: "Scale & Benchmarks in the US + Global Guest Diversity + Industry English Fluency.",
      modelAnswerB2: "The United States is the global leader in hospitality management and brand standards. Training in a high-volume US property allows me to master native hospitality English and learn service systems that are not yet available in Colombia.",
      modelAnswerC1: "The United States sets the international benchmark for luxury hospitality operations and guest loyalty systems. Immersing myself in a high-caliber US property exposes me to global operational scale, advanced PMS technologies, and diverse international guest demographics that cannot be replicated locally.",
      ipaKey: "benchmark /ˈbɛntʃmɑːrk/ • immersion /ɪˈmɜːrʒən/ • demographics /ˌdɛməˈɡræfɪks/",
      redFlag: "Saying 'because Colombia has no good hotels' or 'because salaries in Colombia are too low'."
    },
    {
      id: 18,
      category: "Visa & Intent",
      question: "What are your specific professional plans immediately following the completion of your 12-month program?",
      intent: "Section 214(b) Non-Immigrant Intent: Prove ties to Colombia and clear intention to return home.",
      formula: "Immediate Return Date + Concrete Career Target in Colombia + How US Experience Guarantees Success.",
      modelAnswerB2: "Upon completing my 12-month program, I will return directly to Colombia. I will complete my degree and pursue an assistant F&B manager position at an international luxury hotel chain in Cartagena or Bogotá.",
      modelAnswerC1: "Immediately following my program, I am returning to Colombia to finish my final university thesis on luxury service recovery. The 12 months of US 5-star training and professional English fluency will qualify me for supervisory roles at premier hotel chains expanding in Cartagena and Medellín, where bilingual managers are in high demand.",
      ipaKey: "immediately /ɪˈmiːdiətli/ • supervisory /ˌsuːpərˈvaɪzəri/ • expanding /ɪkˈspændɪŋ/",
      redFlag: "Hesitating on your return date, saying 'maybe I will look for a sponsor to stay', or having vague plans."
    },
    {
      id: 19,
      category: "Visa & Intent",
      question: "Why will luxury hotel properties in Colombia value your J-1 US internship experience so highly?",
      intent: "Validate understanding of Colombia's tourism boom and the premium value of bilingual hospitality managers.",
      formula: "Booming Luxury Tourism in Colombia + Shortage of English-Fluent Leaders + Direct Transfer of US Best Practices.",
      modelAnswerB2: "Colombia's tourism industry is growing rapidly, with new luxury international hotel chains opening every year. Properties in Cartagena and Medellín urgently need leaders with fluent English and proven experience in American service standards.",
      modelAnswerC1: "International tourism to Colombia is experiencing unprecedented growth, particularly from North American travelers. Luxury properties require managers who understand the expectations of high-end international guests. My US internship experience, coupled with fluent hospitality English, gives me an undeniable competitive edge in our domestic market.",
      ipaKey: "unprecedented /ʌnˈprɛsɪdɛntɪd/ • competitive /kəmˈpɛtətɪv/ • expectations /ˌɛkspɛkˈteɪʃənz/",
      redFlag: "Claiming that nobody in Colombia cares about international hospitality standards."
    },
    {
      id: 20,
      category: "Visa & Intent",
      question: "What strong ties (familial, academic, or financial) ensure you will return to Colombia?",
      intent: "Direct Section 214(b) INA non-immigrant intent examination. Officer looks for rooted commitments.",
      formula: "Academic Enrollment / Thesis Obligation + Close Family Support + Verifiable Career Placement Pathway.",
      modelAnswerB2: "My entire family resides in Bogotá, and I must return to finish my remaining university credits and defend my graduation thesis. Furthermore, I have letters of support from Colombian hotel managers who wish to interview me upon my return.",
      modelAnswerC1: "My ties to Colombia are definitive and binding. Academically, my graduation diploma is contingent upon defending my thesis on operational hotel quality at Universidad Externado. Socially and emotionally, my parents and siblings are in Colombia. Professionally, my long-term ambition is to become a General Manager in our rapidly expanding domestic luxury resort sector.",
      ipaKey: "contingent /kənˈtɪndʒənt/ • definitive /dɪˈfɪnətɪv/ • ambition /æmˈbɪʃən/",
      redFlag: "Saying 'I have nothing holding me in Colombia' or failing to mention your degree."
    }
  ];

  // 10 Realistic Scenarios
  const dialoguesData: DialogueScenario[] = [
    {
      id: 1,
      title: "Scenario 1: Resolving a Double-Booked Oceanfront Suite",
      topic: "Front Desk & Concierge",
      category: "Front Desk & L.A.S.T. Recovery",
      context: "An executive VIP guest arrives after a 10-hour flight for their wedding anniversary, only to find their reserved Oceanfront Suite has an emergency plumbing issue.",
      lines: [
        {
          speaker: "Interviewer / Guest",
          text: "I booked an Oceanfront Suite six months ago for our wedding anniversary, and you're telling me you don't have it?! This is unacceptable!",
          ipa: "/ˌʌnəkˈsɛptəbl/",
          linking: "six ⁀ months ⁀ ago • gave ⁀ it ⁀ away",
          intonation: "rising",
          teacherTip: "Notice the guest's intense stress and rising pitch. Do not interrupt or defend the hotel."
        },
        {
          speaker: "Intern",
          text: "Mr. Davis, I completely understand your frustration, and I sincerely apologize for this distressing situation on such a special occasion.",
          ipa: "/kəmˈpliːtli/ • /sɪnˈsɪərli əˈpɒlədʒaɪz/",
          linking: "understand ⁀ your • on ⁀ such ⁀ a",
          intonation: "falling",
          teacherTip: "Use a warm, low, reassuring tone. Fall at the end of the sentence to show grounded control."
        },
        {
          speaker: "Intern",
          text: "While our original suite undergoes emergency plumbing repair, I have personally secured our Presidential Penthouse Suite for you at no additional charge.",
          ipa: "/ˌprɛzɪˈdɛnʃəl/ • /ˈpɛnthaʊs/",
          linking: "secured ⁀ our • for ⁀ you ⁀ at",
          intonation: "falling",
          teacherTip: "Emphasize the solution immediately. Don't linger on the technical problem."
        },
        {
          speaker: "Intern",
          text: "Furthermore, I have arranged a complimentary bottle of chilled champagne and a $150 dining credit at our signature restaurant tonight. May I escort you directly to your suite right now?",
          ipa: "/ˌkɒmplɪˈmɛntri/ • /ʃæmˈpeɪn/",
          linking: "complimentary ⁀ bottle • escort ⁀ you",
          intonation: "rising",
          teacherTip: "End with a courteous, rising modal question ('May I escort you...?') to restore the guest's dignity."
        },
        {
          speaker: "Interviewer / Guest",
          text: "Well... that is very generous of you, and I appreciate you taking immediate action. Thank you.",
          ipa: "/ˈdʒɛnərəs/ • /əˈpriːʃieɪt/",
          linking: "generous ⁀ of ⁀ you",
          intonation: "falling",
          teacherTip: "The L.A.S.T. method successfully converted a potential 1-star review into high guest loyalty."
        }
      ]
    },
    {
      id: 2,
      title: "Scenario 2: Managing a Severe Food Allergy Protocol",
      topic: "Food & Beverage Operations",
      category: "Food & Beverage Operations",
      context: "A high-end dinner guest informs the server of severe celiac disease and peanut anaphylaxis during a packed Friday night dinner service.",
      lines: [
        {
          speaker: "Interviewer / Guest",
          text: "Good evening. Before we order, I need to emphasize that my daughter has severe celiac disease and a peanut allergy. Even microscopic cross-contamination will cause anaphylaxis.",
          ipa: "/ˈsiːliæk/ • /ˌænəfɪˈlæksɪs/",
          linking: "severe ⁀ celiac • cross ⁀ contamination",
          intonation: "falling",
          teacherTip: "Guest is testing your protocol knowledge. Zero hesitation is permitted on allergen questions."
        },
        {
          speaker: "Intern",
          text: "Thank you so much for informing me immediately, ma'am. Your daughter's safety is our absolute priority.",
          ipa: "/ɪˈmiːdiətli/ • /ˈpræɪˈɒrəti/",
          linking: "thank ⁀ you ⁀ so ⁀ much • absolute ⁀ priority",
          intonation: "falling",
          teacherTip: "Confirm receipt of the information with eye contact and write it down verbatim on your order pad."
        },
        {
          speaker: "Intern",
          text: "I am entering a red allergen flag into our Micros POS system right now, and I will personally walk into the kitchen to brief our Executive Chef.",
          ipa: "/ˈɛntaɪrɪŋ/ • /ˈpɜːrsənəli/",
          linking: "allergen ⁀ alert • walk ⁀ into ⁀ the",
          intonation: "falling",
          teacherTip: "Explain the backend kitchen process to give the guest complete peace of mind."
        },
        {
          speaker: "Intern",
          text: "We utilize sanitized cookware and dedicated allergen preparation stations. I will personally inspect the plate at the pass and deliver it directly to your table.",
          ipa: "/ˈsænɪtaɪzd/ • /ˈdɛdɪkeɪtɪd/",
          linking: "inspect ⁀ the • deliver ⁀ it",
          intonation: "falling",
          teacherTip: "Taking personal ownership demonstrates 5-star Forbes Travel Guide standards."
        }
      ]
    },
    {
      id: 3,
      title: "Scenario 3: Explaining the DS-7002 to a Sponsor Screener",
      topic: "DS-7002 & Consular Visa",
      category: "DS-7002 & Visa Regulations",
      context: "An official J-1 sponsor interviewer (CetUSA / AAG) tests whether the candidate understands the difference between an educational internship and regular manual employment.",
      lines: [
        {
          speaker: "Interviewer / Guest",
          text: "Your DS-7002 states you will be training in Food and Beverage for 12 months. Can you explain the specific phases and how this is educational rather than just serving tables?",
          ipa: "/ˌɛdʒʊˈkeɪʃənl/ • /ˈspəsɪfɪk/",
          linking: "phases ⁀ and • rather ⁀ than",
          intonation: "rising",
          teacherTip: "Sponsor is probing 22 CFR § 62.22 compliance. Never use the word 'labor' or 'work shift'."
        },
        {
          speaker: "Intern",
          text: "Certainly! My training program is divided into three structured learning phases under direct managerial mentorship.",
          ipa: "/ˈsɜːrtnli/ • /ˈstrʌktʃərd/",
          linking: "divided ⁀ into • learning ⁀ phases",
          intonation: "falling",
          teacherTip: "Start with an energetic 'Certainly!' and outline the 3 phases systematically."
        },
        {
          speaker: "Intern",
          text: "Phase 1 focuses on Forbes 5-star service standards, luxury banquet staging, and mastering Micros POS inventory tracking.",
          ipa: "/ˈfəʊkəsɪz/ • /ˈsteɪdʒɪŋ/",
          linking: "focuses ⁀ on • standards ⁀ and",
          intonation: "falling",
          teacherTip: "Emphasize technology, standards, and operational processes."
        },
        {
          speaker: "Intern",
          text: "Phase 2 advances into cellar wine pairing, high-profile banquet coordination, and international guest relations.",
          ipa: "/ədˈvænsɪz/ • /ˌkəʊɔːrdɪˈneɪʃən/",
          linking: "advances ⁀ into • banquet ⁀ coordination",
          intonation: "falling",
          teacherTip: "Shows progression from foundational skills to complex cross-departmental coordination."
        },
        {
          speaker: "Intern",
          text: "Finally, Phase 3 involves shadowing departmental leaders to study labor forecasting, food cost controls, and shift supervision to prepare me for management in Colombia.",
          ipa: "/ˌsuːpərˈvɪʒən/ • /ˈfɔːrkæstɪŋ/",
          linking: "shadowing ⁀ our • prepare ⁀ me ⁀ for",
          intonation: "falling",
          teacherTip: "Tie the final phase directly back to your post-program career trajectory in Colombia."
        }
      ]
    },
    {
      id: 4,
      title: "Scenario 4: High-Volume Banquet Team Collaboration",
      topic: "Banquets & Events",
      category: "Operations & Teamwork",
      context: "During an international medical gala with 350 VIP attendees, the main dish line is delayed by 15 minutes due to an oven breakdown.",
      lines: [
        {
          speaker: "Interviewer / Guest",
          text: "Imagine you are serving a 350-guest gala, and the kitchen announces the entrée is delayed by 15 minutes. Guests are waiting. What do you do?",
          ipa: "/ˈgɑːlə/ • /ˈɒntreɪ/",
          linking: "serving ⁀ a • delayed ⁀ by",
          intonation: "rising",
          teacherTip: "Tests cross-functional communication and proactive table pacing."
        },
        {
          speaker: "Intern",
          text: "In that situation, communication and proactive guest pacing are critical. First, I coordinate immediately with our banquet captain and team servers.",
          ipa: "/kəmˌjuːnɪˈkeɪʃən/ • /ˈkæptɪn/",
          linking: "coordinate ⁀ immediately • with ⁀ our",
          intonation: "falling",
          teacherTip: "Emphasize team alignment first before rushing into the dining room."
        },
        {
          speaker: "Intern",
          text: "I ensure bread baskets are replenished and offer fresh water and wine refills to all tables, keeping guests engaged and relaxed.",
          ipa: "/rɪˈplɛnɪʃt/ • /ˈbæskɪts/",
          linking: "bread ⁀ baskets • water ⁀ and ⁀ wine",
          intonation: "falling",
          teacherTip: "Proactive refills distract guests naturally from timing delays."
        },
        {
          speaker: "Intern",
          text: "I maintain a calm, smiling presence on the floor, communicating warmly with table hosts so they never feel neglected. When the entrées arrive, our team synchronizes service effortlessly.",
          ipa: "/ˈsɪŋkrənaɪzɪz/ • /ˈɛfərtləsli/",
          linking: "smiling ⁀ presence • synchronizes ⁀ service",
          intonation: "falling",
          teacherTip: "Shows seamless coordination under high-pressure banquet operations."
        }
      ]
    },
    {
      id: 5,
      title: "Scenario 5: Consular Officer Visa Screening (Section 214b)",
      topic: "DS-7002 & Consular Visa",
      category: "J-1 Embassy Consular Interview",
      context: "A US Consular Officer at the Embassy in Bogotá questions why you cannot simply learn hospitality in Colombia or if you plan to seek permanent US employment.",
      lines: [
        {
          speaker: "Interviewer / Guest",
          text: "Colombia has plenty of luxury hotels in Cartagena and Bogotá. Why do you need to spend 12 months in the US, and why shouldn't I believe you'll just stay there?",
          ipa: "/ˈkənzʊlər/ • /ˌkɒləmˈbiːə/",
          linking: "plenty ⁀ of • stay ⁀ there",
          intonation: "rising",
          teacherTip: "Consular officers look for hesitation or defensive body language. Answer with instant conviction."
        },
        {
          speaker: "Intern",
          text: "Officer, while Colombia has fantastic hotels, the United States is the undisputed global benchmark for international hotel brand management and high-volume operations.",
          ipa: "/ˌʌndɪˈspjuːtɪd/ • /ˈbɛntʃmɑːrk/",
          linking: "undisputed ⁀ global • benchmark ⁀ for",
          intonation: "falling",
          teacherTip: "Validate Colombia respectfully while pinpointing the exact training value of US operational scale."
        },
        {
          speaker: "Intern",
          text: "Training at this high-volume property gives me bilingual mastery and exposure to North American guest expectations that simply cannot be replicated at home.",
          ipa: "/baɪˈlɪŋɡwəl/ • /ˌrɛplɪˈkeɪtɪd/",
          linking: "gives ⁀ me • exposure ⁀ to",
          intonation: "falling",
          teacherTip: "Emphasize language and cultural demographic expertise."
        },
        {
          speaker: "Intern",
          text: "My entire future is in Colombia. Following this 12-month program, I am returning to Bogotá to complete my degree and step into a supervisory role at an international chain in Cartagena.",
          ipa: "/ˌsuːpərˈvaɪzəri/ • /dɪˈɡriː/",
          linking: "entire ⁀ future • step ⁀ into ⁀ a",
          intonation: "falling",
          teacherTip: "Unambiguous non-immigrant intent: concrete date, university ties, and target career in Colombia."
        }
      ]
    },
    {
      id: 6,
      title: "Scenario 6: Concierge VIP Cultural Itinerary Curation",
      topic: "Front Desk & Concierge",
      category: "Front Desk & Concierge",
      context: "A high-net-worth couple staying at your resort for a 48-hour anniversary retreat requests an exclusive, off-the-beaten-path dining and cultural experience.",
      lines: [
        {
          speaker: "Interviewer / Guest",
          text: "We only have 48 hours in the city and we want an unforgettable evening away from typical tourist crowds. What private culinary or cultural experience do you recommend?",
          ipa: "/ʌnfərˈɡɛtəbl/ • /ˈkjʊərɪeɪt/",
          linking: "forty ⁀ eight ⁀ hours • away ⁀ from",
          intonation: "rising",
          teacherTip: "Demonstrate anticipatory service and local neighborhood expertise."
        },
        {
          speaker: "Intern",
          text: "It would be an absolute pleasure to curate this evening for your anniversary. May I recommend a private after-hours tour of the Modern Art Pavilion followed by a chef's tasting table at Bistro L'Étoile?",
          ipa: "/ˈkʊreɪt/ • /ˈteɪstɪŋ/",
          linking: "absolute ⁀ pleasure • chef's ⁀ tasting",
          intonation: "rising",
          teacherTip: "Use sophisticated modal phrases ('It would be an absolute pleasure... May I recommend...?')"
        },
        {
          speaker: "Intern",
          text: "I can personally contact the General Manager at L'Étoile to secure their secluded garden table and arrange our private house Tesla chauffeur to escort you door-to-door.",
          ipa: "/sɪˈkjʊər/ • /ˈʃoʊfər/",
          linking: "personally ⁀ contact • door ⁀ to ⁀ door",
          intonation: "falling",
          teacherTip: "Highlight seamless logistical execution and exclusive relationships."
        },
        {
          speaker: "Interviewer / Guest",
          text: "That sounds sublime. Please proceed with making those arrangements for seven o'clock tonight.",
          ipa: "/səˈblaɪm/ • /əˈreɪndʒmənts/",
          linking: "seven ⁀ o'clock",
          intonation: "falling",
          teacherTip: "Forbes 5-star concierge execution: effortless, bespoke, and exceeding expectations."
        }
      ]
    },
    {
      id: 7,
      title: "Scenario 7: In-Room Dining Late-Night Arrival & Upselling",
      topic: "Food & Beverage Operations",
      category: "In-Room Dining & Culinary",
      context: "An exhausted corporate executive dials In-Room Dining at 11:30 PM seeking a light, healthy dinner and wine recommendation before an 8:00 AM shareholder conference.",
      lines: [
        {
          speaker: "Interviewer / Guest",
          text: "Good evening, In-Room Dining? I just landed after a delayed transcontinental flight. Is your kitchen still open? I need something healthy and quick.",
          ipa: "/ˌtrænskɒntɪˈnɛntl/ • /ˈhɛlθi/",
          linking: "just ⁀ landed • quick ⁀ and ⁀ healthy",
          intonation: "rising",
          teacherTip: "Acknowledge the guest's fatigue with warm empathy."
        },
        {
          speaker: "Intern",
          text: "Good evening, Mr. Vance! Our overnight culinary kitchen is fully at your service. For a nourishing and restful meal, I highly recommend our pan-roasted wild salmon with organic asparagus.",
          ipa: "/ˈnʌrɪʃɪŋ/ • /ˈwaɪld ˈsæmən/",
          linking: "at ⁀ your ⁀ service • pan ⁀ roasted",
          intonation: "falling",
          teacherTip: "Use the guest's surname and propose a specific, revitalizing dish immediately."
        },
        {
          speaker: "Intern",
          text: "To complement the dish and help you unwind, would you like our sommelier's half-bottle of crisp Russian River Chardonnay? I can also set your breakfast delivery cart for 6:30 AM.",
          ipa: "/kəmˈpliːmənt/ • /ˌʃɑːrdəˈneɪ/",
          linking: "would ⁀ you ⁀ like • set ⁀ your",
          intonation: "rising",
          teacherTip: "Artful upselling: half-bottle option respects their schedule, and pre-setting breakfast saves their morning."
        },
        {
          speaker: "Interviewer / Guest",
          text: "You read my mind. That sounds wonderful. Please send both up, and schedule a continental breakfast for 6:30 AM.",
          ipa: "/ˈʃɛdjuːl/ • /ˌkɒntɪˈnɛntl/",
          linking: "send ⁀ both ⁀ up",
          intonation: "falling",
          teacherTip: "Anticipatory upselling created high check average while delivering deep comfort."
        }
      ]
    },
    {
      id: 8,
      title: "Scenario 8: Housekeeping Quality Escalation & Fast Recovery",
      topic: "Housekeeping & Facilities",
      category: "Housekeeping & Facilities",
      context: "A Diamond Tier loyalty member arrives in their Club Level King room and finds a stray hair on the vanity mirror counter and missing plush robes.",
      lines: [
        {
          speaker: "Interviewer / Guest",
          text: "I am a Diamond Elite member and I just checked into Room 1402. There is a hair on the bathroom vanity and no robes in the closet. This is far below your standards!",
          ipa: "/ɪˈliːt/ • /ˈvænəti/",
          linking: "checked ⁀ into • far ⁀ below",
          intonation: "rising",
          teacherTip: "High-tier loyalty members expect perfection. Acknowledge tier status with reverence."
        },
        {
          speaker: "Intern",
          text: "Mrs. Sterling, thank you for bringing this to my attention right away, and I am deeply apologetic. As our valued Diamond member, this falls completely short of the pristine standard you deserve.",
          ipa: "/ˈvæljuːd/ • /ˈprɪstiːn/",
          linking: "deeply ⁀ apologetic • short ⁀ of",
          intonation: "falling",
          teacherTip: "Validate loyalty status and apologize without making excuses for housekeeping."
        },
        {
          speaker: "Intern",
          text: "I am dispatching our Floor Housekeeping Supervisor to your room right now with freshly laundered plush robes to inspect and re-sanitize your bathroom thoroughly in under five minutes.",
          ipa: "/dɪˈspætʃɪŋ/ • /ˈsænɪtaɪz/",
          linking: "dispatching ⁀ our • under ⁀ five ⁀ minutes",
          intonation: "falling",
          teacherTip: "Provide a concrete, accountable timeframe (5 minutes)."
        },
        {
          speaker: "Intern",
          text: "May I also invite you to enjoy complimentary artisan cocktails and hors d'oeuvres in our Executive Club Lounge while we ensure your room is flawless?",
          ipa: "/ˌkɒmplɪˈmɛntri/ • /ɔːr ˈdɜːrvz/",
          linking: "invite ⁀ you • room ⁀ is ⁀ flawless",
          intonation: "rising",
          teacherTip: "L.A.S.T. recovery: giving the guest an enjoyable environment while the room is perfected."
        }
      ]
    },
    {
      id: 9,
      title: "Scenario 9: Sommelier & Fine Dining Wine Pairing",
      topic: "Food & Beverage Operations",
      category: "Food & Beverage Operations",
      context: "A celebratory party of four has ordered both prime bone-in dry-aged ribeye steaks and pan-seared Chilean sea bass, seeking one or two wine pairings to harmonize the table.",
      lines: [
        {
          speaker: "Interviewer / Guest",
          text: "Two of us are having the heavy dry-aged ribeye, while our partners chose the delicate Chilean sea bass. We can't agree on a bottle. What do you suggest?",
          ipa: "/ˈdɛlɪkət/ • /hɑːrməˈnaɪz/",
          linking: "two ⁀ of ⁀ us • bottle ⁀ of",
          intonation: "rising",
          teacherTip: "Classic fine dining dilemma. Bridging rich red meat with delicate white fish."
        },
        {
          speaker: "Intern",
          text: "That is a magnificent culinary pairing dilemma! You have two splendid options depending on your preference for one versatile bottle or two tailored selections.",
          ipa: "/mæɡˈnɪfɪsnt/ • /ˈvɜːrsətəl/",
          linking: "splendid ⁀ options • versatile ⁀ bottle",
          intonation: "falling",
          teacherTip: "Celebrate their menu choices and provide structured alternatives."
        },
        {
          speaker: "Intern",
          text: "If you desire a single harmonious bottle, a high-elevation Willamette Valley Pinot Noir features bright red fruit acidity that cuts through the ribeye's marbling without overpowering the sea bass.",
          ipa: "/wɪˈlæmɪt/ • /æˈsɪdəti/",
          linking: "cuts ⁀ through • without ⁀ overpowering",
          intonation: "falling",
          teacherTip: "Use sensory vocabulary (acidity, marbling, overpowering, high-elevation)."
        },
        {
          speaker: "Intern",
          text: "Alternatively, we can pour glasses of our cellar Napa Cabernet for the ribeye and a crisp Sancerre for the sea bass. Shall I uncork the Willamette Pinot Noir for the table?",
          ipa: "/sɒnˈsɛər/ • /ʌnˈkɔːrk/",
          linking: "pour ⁀ glasses • shall ⁀ I",
          intonation: "rising",
          teacherTip: "Polite close: asking permission to uncork."
        }
      ]
    },
    {
      id: 10,
      title: "Scenario 10: Security & Lost Property Protocol in Ballroom",
      topic: "Banquets & Events",
      category: "Banquets & Security Protocol",
      context: "Following a midnight charity gala, a guest returns in a panic having left an Italian leather briefcase containing passports and high-value jewelry at table 14.",
      lines: [
        {
          speaker: "Interviewer / Guest",
          text: "Please help me! I left a brown leather briefcase under table 14 in the ballroom 30 minutes ago. My family's international passports and diamond jewelry are inside!",
          ipa: "/ˈbriːfkeɪs/ • /ˈdʒuːəlri/",
          linking: "left ⁀ a • under ⁀ table",
          intonation: "rising",
          teacherTip: "High-anxiety security situation. Maintain calm authority and follow chain of custody."
        },
        {
          speaker: "Intern",
          text: "Please take a deep breath, sir. I understand this is stressful, but our ballroom was locked immediately upon conclusion of the gala under continuous security surveillance.",
          ipa: "/sərˈveɪləns/ • /ˈkɒnkluːʒən/",
          linking: "deep ⁀ breath • locked ⁀ immediately",
          intonation: "falling",
          teacherTip: "Reassure the guest immediately that the space is locked and monitored."
        },
        {
          speaker: "Intern",
          text: "Our banquet team follows strict chain-of-custody protocols. Any items found are logged into our Security Office dual-key safe deposit registry. Let me escort you directly to Security.",
          ipa: "/ˈprəʊtəkɒl/ • /ˈrɛdʒɪstri/",
          linking: "chain ⁀ of ⁀ custody • dual ⁀ key",
          intonation: "falling",
          teacherTip: "Explain the formal chain-of-custody protocol to build institutional trust."
        },
        {
          speaker: "Intern",
          text: "For your protection, our Security Director will verify your photo identification and itemize the contents before releasing the briefcase. You are in very safe hands.",
          ipa: "/ˌaɪtəmaɪz/ • /ˈvɛrɪfaɪ/",
          linking: "verify ⁀ your • in ⁀ very ⁀ safe",
          intonation: "falling",
          teacherTip: "Uphold security protocols professionally without cutting corners."
        }
      ]
    }
  ];

  // Pre-loaded STAR Examples
  const preloadedStarExamples = [
    {
      title: "Example 1: The Shellfish Allergy Crisis (F&B)",
      s: "During a Friday evening rush of 250 covers at Hotel Santa Clara in Cartagena...",
      t: "A VIP table informed me that the bride had a life-threatening shellfish anaphylaxis right as the seafood paella was being plated.",
      a: "I immediately tagged the table's ticket with a red allergen alert in Micros POS, personally walked into the hot line, had the Executive Chef clean and re-sanitize a dedicated pan, and hand-inspected every component before serving her a pristine vegetarian risotto.",
      r: "The bride enjoyed her meal safely with zero reaction. The wedding host thanked me personally and left a $100 server gratuity, mentioning our vigilance in their review."
    },
    {
      title: "Example 2: The Overbooked Suite (Front Desk)",
      s: "During an international medical convention, our hotel experienced an unexpected 105% occupancy overbooking due to extended stays...",
      t: "A tired executive traveler with a confirmed King Suite reservation arrived at midnight with no standard rooms available in the wing.",
      a: "I applied the L.A.S.T. method: listened empathetically, apologized sincerely, and upgraded him to our top-tier Presidential Penthouse Suite with complimentary Club Lounge access, while arranging breakfast vouchers and personal baggage assistance.",
      r: "The guest was thrilled by the unexpected upgrade and commended our proactive front desk team to the General Manager the following morning."
    },
    {
      title: "Example 3: POS System Failure During Sunday Brunch (Operations)",
      s: "During Sunday Mother's Day brunch with over 300 guests dining simultaneously, a sudden electrical surge caused all POS terminals to shut down...",
      t: "My responsibility was to maintain order pacing between the floor servers and the kitchen expeditors without losing billing tracking.",
      a: "I immediately coordinated with the floor captain to implement manual duplicate guest checks, set up a whiteboard order queue at the kitchen pass, and calculated bills manually using our quick-reference price sheets.",
      r: "All 300 covers were served with under a 5-minute variance from standard ticket times, and billing reconciliation at shift end was 100% accurate with zero charge disputes."
    },
    {
      title: "Example 4: Sudden Rainstorm Ballroom Relocation (Banquets)",
      s: "Thirty minutes before an outdoor luxury wedding ceremony in the garden pavilion, an unpredicted tropical downpour struck...",
      t: "Our banquet team had 25 minutes to relocate 180 guests, floral centerpieces, and delicate table settings into the indoor Grand Ballroom.",
      a: "I helped coordinate the team: delegated food runners to transport glassware in covered racks, collaborated with audiovisual technicians to adjust chandeliers, and warmly welcomed arriving guests with hot spiced apple cider in the foyer.",
      r: "The transition was executed in 20 minutes flat. The couple was deeply moved by our speed and composure, praising the seamless elegance of their reception."
    }
  ];

  const handleLoadStarExample = (ex: typeof preloadedStarExamples[0]) => {
    setStarS(ex.s);
    setStarT(ex.t);
    setStarA(ex.a);
    setStarR(ex.r);
  };

  const filteredQuestions = selectedCategory === "All"
    ? questionsData
    : questionsData.filter((q) => q.category === selectedCategory);

  const filteredDialogues = selectedDialogueTopic === "All Topics"
    ? dialoguesData
    : dialoguesData.filter((d) => d.topic === selectedDialogueTopic);

  const activeQuestion = questionsData.find((q) => q.id === activeQuestionId) || questionsData[0];
  const activeDialogue = dialoguesData.find((d) => d.id === activeDialogueId) || dialoguesData[0];
  const simQuestion = questionsData.find((q) => q.id === simQuestionId) || questionsData[0];

  const handleNextSimQuestion = () => {
    const nextId = (simQuestionId % questionsData.length) + 1;
    setSimQuestionId(nextId);
    speakText(questionsData[nextId - 1].question, `sim-q-${nextId}`);
  };

  const handleRandomSimQuestion = () => {
    const randomId = Math.floor(Math.random() * questionsData.length) + 1;
    setSimQuestionId(randomId);
    speakText(questionsData[randomId - 1].question, `sim-q-${randomId}`);
  };

  const copyStarScript = () => {
    const script = `MY HOSPITALITY STAR INTERVIEW SCRIPT:\n\nSITUATION:\n${starS || "[Describe the hotel property, rush hour, or guest situation]"}\n\nTASK:\n${starT || "[What was your exact guest service responsibility?]"}\n\nACTION (L.A.S.T. / Hospitality Protocol):\n${starA || "[What specific steps did you take? How did you communicate?]"}\n\nRESULT:\n${starR || "[Measurable guest satisfaction outcome or feedback]"}`;
    navigator.clipboard.writeText(script);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  const handleDownloadMaterials = () => {
    const content = `ICE ENGLISH ACADEMY — J-1 HOSPITALITY INTERNSHIP MASTERCLASS
EXPANDED STUDY COMPANION & INTERVIEW COMPLIANCE GUIDE

Course Code: ICE-ENG-HOSP-EXP2
Regulatory Standards: Form DS-7002 (TIPP) & 22 CFR § 62.22
Standard: Forbes Travel Guide 5-Star Hospitality Benchmarks

===================================================================
1. THE 5-STAR HOSPITALITY PERSONALITY MATRIX
===================================================================
Target Traits:
- Polished & Professional (Grooming, diplomatic tone, executive presence)
- Guest-Obsessed (Empathetic, anticipatory service)
- Agile & Adaptable (Stamina during peak rushes, cross-functional)
- Crisis-Resilient (Steady under pressure, L.A.S.T. recovery)
- Detail-Oriented (HACCP safety, allergen protocols, VIP notes)

===================================================================
2. TOP HOSPITALITY PHONETIC REPAIRS FOR SPANISH SPEAKERS
===================================================================
1. Silent Letters:
   - Receipt: /rɪˈsiːt/ (Silent 'p')
   - Salmon: /ˈsæmən/ (Silent 'l')
   - Subtle: /ˈsʌtl/ (Silent 'b')

2. Compressed Vowels:
   - Comfortable: /ˈkʌmftəbl/ (3 syllables)
   - Vegetables: /ˈvɛdʒtəblz/ (3 syllables)
   - Restaurant: /ˈrɛstrɒnt/ (2 syllables)

3. Homophones & Service Modals:
   - Suite: /swiːt/ (Sounds like 'sweet')
   - Dessert: /dɪˈzɜːrt/ (Stress on 2nd syllable)
   - Linked Politeness: "Would you like" -> /wʊdʒuː laɪk/

===================================================================
3. INDUSTRY PHRASAL VERBS & IDIOMS
===================================================================
- Walk a guest: Relocating to a partner luxury hotel due to overbooking.
- Comp an item: Complimentary offering for service recovery.
- Run the pass: Quality control staging line from kitchen to floor.
- Turn-down service: Evening luxury bedtime room preparation.
- In the weeds: Overwhelmed during intense service spikes.
- Attend to / Look into: Diplomatic alternatives to "I will check".

===================================================================
4. THE L.A.S.T. SERVICE RECOVERY PROTOCOL
===================================================================
L - LISTEN actively without interrupting. Validate the guest's emotion.
A - APOLOGIZE sincerely on behalf of the property.
S - SOLVE the issue immediately with an upgraded alternative.
T - THANK the guest for bringing the matter to your attention.

===================================================================
5. DS-7002 ROTATIONAL PHASES FORMULA
===================================================================
- Phase 1: Orientation, brand SOPs, Forbes 5-star foundational service.
- Phase 2: Rotational food & beverage / front desk operations & POS management.
- Phase 3: Managerial shadowing, labor forecasting, inventory controls.

===================================================================
6. SECTION 214(b) NON-IMMIGRANT INTENT PROOF
===================================================================
- Immediate return to Colombia upon completing 12-month program.
- Completion of university degree / academic obligations.
- Expanding luxury tourism market in Cartagena, Medellín, and Bogotá.
- High domestic industry demand for US-trained bilingual managers.

© ICE - International Cultural Exchange. All rights reserved.`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ICE_Hospitality_Internship_Expanded_Masterclass.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30">
      <CurriculumHeader
        hourNumber="2 Hours"
        title="J-1 Hospitality Internship Masterclass"
        subtitle="Mastering the Sponsor & Luxury Hotel Interview"
        description="Specialized masterclass for Hospitality, Culinary, and Tourism candidates. Master luxury service communication, Forbes 5-star guest recovery (L.A.S.T.), the official DS-7002 Training Plan, and J-1 non-immigrant intent."
        accentColor="amber"
        moduleInfo="Hospitality & Culinary Arts Track"
      />

      {/* Main Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20 py-4">
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between overflow-x-auto gap-2">
          <div className="flex items-center gap-2">
            {[
              { id: "rubric", label: "Rubric & Presence", icon: <Award className="w-4 h-4" /> },
              { id: "phonetics", label: "Phonetics & Idioms", icon: <Mic className="w-4 h-4" /> },
              { id: "questions", label: "20 Core Questions", icon: <BookOpen className="w-4 h-4" /> },
              { id: "dialogues", label: "10 Scenario Dialogues", icon: <MessageSquare className="w-4 h-4" /> },
              { id: "simulator", label: "Interview Simulator", icon: <Radio className="w-4 h-4" /> },
              { id: "handout", label: "STAR Builder & Handout", icon: <FileText className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                    : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={handleDownloadMaterials}
            className="hidden lg:flex items-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors shrink-0 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" /> Download Guide
          </button>
        </div>
      </section>

      {/* Content Container */}
      <main className="container mx-auto px-6 max-w-7xl py-12">
        {/* BLOCK 1: RUBRIC & EXECUTIVE PRESENCE */}
        {activeTab === "rubric" && (
          <div className="space-y-8">
            <CurriculumBlock
              icon={<Award />}
              title="Block 1: Sponsor & Luxury Hotel Evaluation Standard"
              subtitle="20 Minutes • Grading Rubric & Executive Presence"
              methodology="Forbes 5-Star Benchmarks + DS-7002 Competency"
              accentColor="amber"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                {/* Rubric Column */}
                <div className="space-y-4">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    Sponsor & Hotel Screener Grading Scale
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Sponsors (CetUSA, AAG, Cultural Vistas) and international properties (Marriott, Hyatt, Ritz-Carlton) evaluate candidates on spontaneous English fluency and luxury guest etiquette.
                  </p>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-500 p-2 rounded">
                      <span>[ ] Basic (A2)</span>
                      <span className="text-[10px]">Short fragments, needs translation</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400 p-2 rounded">
                      <span>[ ] Intermediate (B1)</span>
                      <span className="text-[10px]">Repetitive vocabulary, pauses on conflict</span>
                    </div>
                    <div className="flex items-center justify-between bg-amber-500/20 text-amber-300 font-bold p-2.5 rounded border border-amber-500/30">
                      <span>[*] High Intermediate (B2)</span>
                      <span className="text-[10px] text-amber-200">Fluent flow, explains processes, handles guests</span>
                    </div>
                    <div className="flex items-center justify-between bg-emerald-500/20 text-emerald-300 font-bold p-2.5 rounded border border-emerald-500/30">
                      <span>[*] Advanced (C1)</span>
                      <span className="text-[10px] text-emerald-200">Nuanced tone, anticipatory service, Forbes polish</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400 p-2 rounded">
                      <span>[ ] Fluent (C2)</span>
                      <span className="text-[10px]">Total ease, diplomacy under intense operational pressure</span>
                    </div>
                  </div>
                </div>

                {/* Personality Matrix Column */}
                <div className="space-y-4">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    The 5-Star Hospitality Trait Matrix
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Toggle traits to configure your interview profile. Recruiters look for candidates who balance high energy with impeccable diplomatic composure.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Polished & Professional",
                      "Guest-Obsessed",
                      "Agile & Adaptable",
                      "Crisis-Resilient",
                      "Detail-Oriented",
                      "Culturally Curious",
                      "Energetic Host",
                      "Team-Centric"
                    ].map((trait) => {
                      const isSelected = selectedTraits.includes(trait);
                      return (
                        <button
                          key={trait}
                          onClick={() => handleTraitToggle(trait)}
                          className={`p-3 rounded-xl border text-xs font-bold text-left transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? "bg-amber-500/20 border-amber-400/50 text-amber-300 shadow-md shadow-amber-500/10"
                              : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                          }`}
                        >
                          <span>{trait}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                    <div className="text-amber-400 font-bold flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> The Forbes 5-Star Formula:
                    </div>
                    <p className="text-slate-300 italic">
                      "I present an immaculate, polished professional demeanor, anticipate guest needs before they speak, and handle operational surprises with calm grace."
                    </p>
                  </div>
                </div>
              </div>

              {/* Grooming and Virtual Video Standards */}
              <div className="mt-8 pt-8 border-t border-slate-800">
                <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                  <Hotel className="w-4 h-4 text-amber-400" /> Executive Virtual Grooming & Setup Protocols
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-amber-400 font-bold block mb-1">👔 Professional Attire:</span>
                    <p className="text-slate-300 leading-relaxed">
                      Wear formal business attire (suit jacket or tailored collared shirt). Hair neatly styled back; minimal jewelry; clean background.
                    </p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-amber-400 font-bold block mb-1">💡 Lighting & Eye Contact:</span>
                    <p className="text-slate-300 leading-relaxed">
                      Camera at eye level. Soft white light in front of your face. Look directly into the lens when greeting the interviewer, not at the screen.
                    </p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <span className="text-amber-400 font-bold block mb-1">🎙️ Vocal Projection:</span>
                    <p className="text-slate-300 leading-relaxed">
                      Use a warm, resonant voice. Keep your posture upright, shoulders relaxed, and maintain a subtle hospitable smile while speaking.
                    </p>
                  </div>
                </div>
              </div>
            </CurriculumBlock>
          </div>
        )}

        {/* BLOCK 2: PHONETICS & INDUSTRY IDIOMS */}
        {activeTab === "phonetics" && (
          <div className="space-y-8">
            <CurriculumBlock
              icon={<Mic />}
              title="Block 2: Hospitality Phonetics & Professional Phrasal Verbs"
              subtitle="25 Minutes • L1-Spanish Softening & Industry Idiom Mastery"
              methodology="Minimal Pairs + Connected Speech Glides"
              accentColor="amber"
            >
              {/* Phonetics Section */}
              <div className="space-y-4 mt-6">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" /> Top 5 Hospitality Phonetic Traps for Spanish Speakers
                </h4>

                <div className="grid grid-cols-1 gap-4">
                  {phoneticsData.map((item, index) => {
                    const audioKey = `ph-${index}`;
                    const isPlaying = isPlayingAudio === audioKey;
                    return (
                      <div
                        key={item.title}
                        className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 hover:border-amber-500/30 transition-all"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <h5 className="text-white font-bold text-xs flex items-center gap-2">
                            <span className="w-5 h-5 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-[10px] font-mono">
                              {index + 1}
                            </span>
                            {item.title}
                          </h5>
                          <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                            {item.ipa}
                          </span>
                        </div>

                        <p className="text-slate-400 text-xs leading-relaxed">{item.issue}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                          <div className="bg-red-500/10 border border-red-500/20 p-2.5 rounded-xl text-red-300">
                            <span className="text-red-400 font-bold block mb-0.5">❌ Common Spanish Trap:</span>
                            "{item.bad}"
                          </div>
                          <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl text-emerald-300">
                            <span className="text-emerald-400 font-bold block mb-0.5">✅ 5-Star Native Standard:</span>
                            "{item.good}"
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                          <div className="text-xs text-slate-300">
                            <strong className="text-amber-400">Rule:</strong> {item.rule}
                          </div>
                          <button
                            onClick={() => speakText(item.audioText, audioKey)}
                            className={`py-1.5 px-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shrink-0 ${
                              isPlaying
                                ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                                : "bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/30"
                            }`}
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            {isPlaying ? "Playing..." : "Listen Audio"}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Industry Idioms Section */}
              <div className="mt-10 pt-8 border-t border-slate-800 space-y-4">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                  <Hotel className="w-4 h-4 text-amber-400" />
                  Essential Luxury Hospitality Phrasal Verbs &amp; Industry Idioms
                </h4>
                <p className="text-slate-400 text-xs">
                  Using these exact industry terms signals to American recruiters that you already understand professional kitchen and front office culture.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {idiomsData.map((idiom, idx) => {
                    const audioKey = `idiom-${idx}`;
                    const isPlaying = isPlayingAudio === audioKey;
                    return (
                      <div
                        key={idiom.term}
                        className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 hover:border-amber-500/40 transition-colors flex flex-col justify-between"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <h5 className="text-amber-400 font-bold text-xs font-mono">"{idiom.term}"</h5>
                            <button
                              onClick={() => speakText(idiom.audioText, audioKey)}
                              className="text-slate-400 hover:text-amber-300 p-1 cursor-pointer"
                              title="Listen Example"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-[11px] text-slate-300 font-medium leading-snug">{idiom.meaning}</p>
                        </div>
                        <div className="bg-slate-900/60 p-2.5 rounded-lg border border-white/5 text-[11px] text-slate-400 italic">
                          "{idiom.example}"
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CurriculumBlock>
          </div>
        )}

        {/* BLOCK 3: 20 CORE QUESTIONS & STAR GENERATOR */}
        {activeTab === "questions" && (
          <div className="space-y-8">
            <CurriculumBlock
              icon={<BookOpen />}
              title="Block 3: The 20 Core Sponsor, Hotel & Consular Questions"
              subtitle="40 Minutes • Model B2/C1 Answers & STAR Framework"
              methodology="STAR Response Method"
              accentColor="amber"
            >
              <div className="space-y-6 mt-6">
                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-2">
                  {["All", "Background & Education", "F&B & Front Desk", "Conflict & L.A.S.T.", "DS-7002 Training Plan", "Visa & Intent"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                          : "bg-slate-900 text-slate-400 hover:text-white border border-white/5"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left Column: Questions List */}
                  <div className="lg:col-span-5 space-y-2 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
                    {filteredQuestions.map((q) => {
                      const isActive = q.id === activeQuestionId;
                      return (
                        <button
                          key={q.id}
                          onClick={() => setActiveQuestionId(q.id)}
                          className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                            isActive
                              ? "bg-amber-500/15 border-amber-400/50 shadow-lg shadow-amber-500/10"
                              : "bg-slate-950/60 border-white/5 hover:border-white/10 text-slate-300"
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                Q{q.id}
                              </span>
                              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                                {q.category}
                              </span>
                            </div>
                            <h4 className="text-xs font-bold text-white line-clamp-2">{q.question}</h4>
                          </div>
                          <ChevronRight className={`w-4 h-4 shrink-0 mt-2 ${isActive ? "text-amber-400" : "text-slate-600"}`} />
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Column: Question Details */}
                  <div className="lg:col-span-7 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          QUESTION {activeQuestion.id} OF 20
                        </span>
                        <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                          <ShieldCheck className="w-4 h-4" /> Category: {activeQuestion.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">{activeQuestion.question}</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-3 text-xs">
                      <div className="bg-slate-950 p-3 rounded-xl border border-white/5">
                        <span className="text-amber-400 font-bold block mb-1">🎯 Recruiter / Sponsor Intent:</span>
                        <p className="text-slate-300">{activeQuestion.intent}</p>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-xl border border-white/5">
                        <span className="text-emerald-400 font-bold block mb-1">💡 Response Strategy:</span>
                        <p className="text-slate-300">{activeQuestion.formula}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-slate-950 p-4 rounded-xl border border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-amber-300">Model Answer (High Intermediate B2):</span>
                          <button
                            onClick={() => speakText(activeQuestion.modelAnswerB2, `q-b2-${activeQuestion.id}`)}
                            className="text-[11px] text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5" /> Listen B2
                          </button>
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed italic">"{activeQuestion.modelAnswerB2}"</p>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-emerald-300">Model Answer (Advanced C1 / Forbes Polish):</span>
                          <button
                            onClick={() => speakText(activeQuestion.modelAnswerC1, `q-c1-${activeQuestion.id}`)}
                            className="text-[11px] text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5" /> Listen C1
                          </button>
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed italic">"{activeQuestion.modelAnswerC1}"</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[11px] font-mono text-amber-300 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                        🔑 Key Vocabulary IPA: {activeQuestion.ipaKey}
                      </div>

                      <div className="text-[11px] text-red-300 bg-red-500/10 p-2.5 rounded-lg border border-red-500/20 flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-red-400">Red Flag Warning:</strong> {activeQuestion.redFlag}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CurriculumBlock>
          </div>
        )}

        {/* BLOCK 4: 10 SCENARIO DIALOGUES */}
        {activeTab === "dialogues" && (
          <div className="space-y-8">
            <CurriculumBlock
              icon={<MessageSquare />}
              title="Block 4: 10 Real-World Turn-by-Turn Hospitality Dialogues"
              subtitle="35 Minutes • Department-Specific Service Recovery, Wine Pairing & Security"
              methodology="Intonation & Connected Speech Modeling"
              accentColor="amber"
            >
              <div className="space-y-6 mt-6">
                {/* Topic Filter Pills */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "All Topics",
                    "Front Desk & Concierge",
                    "Food & Beverage Operations",
                    "Banquets & Events",
                    "Housekeeping & Facilities",
                    "DS-7002 & Consular Visa"
                  ].map((topic) => (
                    <button
                      key={topic}
                      onClick={() => setSelectedDialogueTopic(topic)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedDialogueTopic === topic
                          ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                          : "bg-slate-900 text-slate-400 hover:text-white border border-white/5"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>

                {/* Scenario Selector Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {filteredDialogues.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setActiveDialogueId(d.id)}
                      className={`p-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${
                        activeDialogueId === d.id
                          ? "bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20"
                          : "bg-slate-900 text-slate-400 hover:text-white border-white/5"
                      }`}
                    >
                      <span className="block text-[10px] opacity-75 uppercase">Scenario {d.id}</span>
                      <span className="line-clamp-1">{d.title.split(":")[1] || d.title}</span>
                    </button>
                  ))}
                </div>

                {/* Scenario Header Card */}
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {activeDialogue.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-2">{activeDialogue.title}</h3>
                    </div>

                    <button
                      onClick={() => setPracticeMode(!practiceMode)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                        practiceMode
                          ? "bg-emerald-500 text-slate-950 border-emerald-400"
                          : "bg-slate-800 text-slate-300 border-slate-700 hover:text-white"
                      }`}
                    >
                      {practiceMode ? "✓ Practice Mode Active" : "Enable Turn-by-Turn Practice"}
                    </button>
                  </div>

                  <p className="text-slate-300 text-xs italic bg-slate-950 p-3 rounded-xl border border-white/5">
                    <strong>Context:</strong> {activeDialogue.context}
                  </p>

                  {/* Lines list */}
                  <div className="space-y-4 pt-2">
                    {activeDialogue.lines.map((line, idx) => {
                      const isIntern = line.speaker === "Intern";
                      const lineKey = `diag-${activeDialogue.id}-${idx}`;
                      const isPlaying = isPlayingAudio === lineKey;

                      return (
                        <div
                          key={idx}
                          className={`p-4 rounded-xl border space-y-2.5 transition-all ${
                            isIntern
                              ? "bg-amber-950/20 border-amber-500/30 ml-4 sm:ml-8"
                              : "bg-slate-950 border-slate-800 mr-4 sm:mr-8"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-xs font-bold uppercase tracking-wider ${
                                isIntern ? "text-amber-400" : "text-cyan-400"
                              }`}
                            >
                              {line.speaker}
                            </span>

                            <button
                              onClick={() => speakText(line.text, lineKey, isIntern ? 1.05 : 0.95)}
                              className="text-[11px] text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                              {isPlaying ? "Playing..." : "Listen"}
                            </button>
                          </div>

                          <p className="text-xs text-slate-100 font-serif leading-relaxed">"{line.text}"</p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-slate-400 bg-slate-900/50 p-2 rounded-lg">
                            <div>🔗 Connected Speech: <span className="text-amber-300">{line.linking}</span></div>
                            <div>
                              Intonation:{" "}
                              <span className={line.intonation === "rising" ? "text-cyan-300" : "text-emerald-300"}>
                                {line.intonation === "rising" ? "Rising ↗ (Question/Polite)" : "Falling ↘ (Confident Statement)"}
                              </span>
                            </div>
                          </div>

                          <div className="text-[11px] text-slate-400 bg-slate-900/80 p-2 rounded-lg border border-white/5">
                            💡 <strong className="text-white">Coach Tip:</strong> {line.teacherTip}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CurriculumBlock>
          </div>
        )}

        {/* BLOCK 5: INTERVIEW SIMULATOR */}
        {activeTab === "simulator" && (
          <div className="space-y-8">
            <CurriculumBlock
              icon={<Radio />}
              title="Block 5: 10-Minute Host Hotel Interview Simulator"
              subtitle="20 Minutes • Timed Mock Interview & Live Evaluator Rubric"
              methodology="Pressure Inoculation + Rubric Scoring"
              accentColor="amber"
            >
              <div className="space-y-6 mt-6">
                {/* Timer and Controls Bar */}
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-mono text-xl font-bold">
                      {formatTime(simTime)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Simulated 10-Minute Screening</h4>
                      <p className="text-slate-400 text-xs">Simulates high-pressure live video screening with a US property recruiter.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSimRunning(!simRunning)}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                        simRunning
                          ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                          : "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                      }`}
                    >
                      {simRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      {simRunning ? "Pause Timer" : "Start Mock Interview"}
                    </button>

                    <button
                      onClick={() => {
                        setSimRunning(false);
                        setSimTime(600);
                      }}
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Spoken Question Screen */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-amber-500/30 space-y-4 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 animate-pulse" /> CURRENT INTERVIEWER PROMPT
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleRandomSimQuestion}
                        className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-1 cursor-pointer"
                      >
                        <Shuffle className="w-3.5 h-3.5" /> Randomize
                      </button>
                      <button
                        onClick={handleNextSimQuestion}
                        className="px-3 py-1 rounded-lg text-xs font-bold bg-amber-500 text-slate-950 flex items-center gap-1 cursor-pointer"
                      >
                        Next Question <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white leading-relaxed">
                    "{simQuestion.question}"
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => speakText(simQuestion.question, `sim-voice-${simQuestion.id}`, 0.95)}
                      className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1.5 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" /> Repeat Question Audio
                    </button>
                    <span className="text-xs text-slate-500">
                      Category: {simQuestion.category} • Target: STAR Response Formula
                    </span>
                  </div>
                </div>

                {/* Live Scoring Rubric */}
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-bold text-sm flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Evaluator Rubric (Passing Score: 22 / 25)
                    </h4>
                    <span className="text-sm font-bold font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      Total: {scores.presence + scores.vocabulary + scores.recovery + scores.fluency + scores.compliance} / 25
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {[
                      { key: "presence", label: "Executive Presence & Grooming", desc: "Upright posture, eye contact, smiling, formal attire." },
                      { key: "vocabulary", label: "Hospitality Lexicon & STAR Precision", desc: "Covers, HACCP, POS, banquet staging, clear results." },
                      { key: "recovery", label: "L.A.S.T. / Guest Conflict Recovery", desc: "Active listening, sincere apology, creative solution." },
                      { key: "fluency", label: "Fluency & Connected Speech", desc: "Reduced pauses, clean /v/ sounds, linked modals." },
                      { key: "compliance", label: "DS-7002 & J-1 Visa Non-Immigrant Intent", desc: "Rotational phases, ties to Colombia tourism market." }
                    ].map((item) => (
                      <div key={item.key} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-200">{item.label}</span>
                          <span className="font-bold font-mono text-amber-400">
                            {scores[item.key as keyof typeof scores]} / 5
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">{item.desc}</p>
                        <input
                          type="range"
                          min="1"
                          max="5"
                          value={scores[item.key as keyof typeof scores]}
                          onChange={(e) =>
                            setScores({ ...scores, [item.key]: parseInt(e.target.value) })
                          }
                          className="w-full accent-amber-500 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CurriculumBlock>
          </div>
        )}

        {/* BLOCK 6: HANDOUT & STAR SCRIPT BUILDER */}
        {activeTab === "handout" && (
          <div className="space-y-8">
            <CurriculumBlock
              icon={<FileText />}
              title="Block 6: Interactive STAR Hospitality Script Generator & Examples"
              subtitle="Personalized Interview Practice & Downloadable Handout"
              methodology="Structured Output Generation"
              accentColor="amber"
            >
              {/* Preloaded Example Buttons */}
              <div className="space-y-3 mt-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> One-Click Pre-loaded STAR Case Studies:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {preloadedStarExamples.map((ex, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleLoadStarExample(ex)}
                      className="p-3 bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-xl text-left transition-colors cursor-pointer group"
                    >
                      <span className="text-[10px] text-amber-400 font-bold block mb-1">Load Template</span>
                      <h5 className="text-xs font-bold text-slate-200 group-hover:text-white line-clamp-1">{ex.title}</h5>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                {/* Inputs */}
                <div className="space-y-4">
                  <h4 className="text-white font-bold text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" /> Build Your STAR Hospitality Story
                  </h4>
                  <p className="text-slate-400 text-xs">
                    Draft a real scenario from your previous hotel or restaurant experience using the STAR structure.
                  </p>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="text-amber-400 font-bold block mb-1">
                        S - Situation (Where were you? What was the event?):
                      </label>
                      <textarea
                        rows={2}
                        value={starS}
                        onChange={(e) => setStarS(e.target.value)}
                        placeholder="e.g. During a 300-guest diplomatic dinner at Hotel Santa Clara in Cartagena..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-cyan-400 font-bold block mb-1">
                        T - Task (What was your exact challenge or responsibility?):
                      </label>
                      <textarea
                        rows={2}
                        value={starT}
                        onChange={(e) => setStarT(e.target.value)}
                        placeholder="e.g. A guest informed me of a severe celiac allergy right as the entrée course began..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-emerald-400 font-bold block mb-1">
                        A - Action (How did you communicate and solve it?):
                      </label>
                      <textarea
                        rows={3}
                        value={starA}
                        onChange={(e) => setStarA(e.target.value)}
                        placeholder="e.g. I entered an urgent alert in our POS, briefed the Executive Chef, and oversaw dedicated plate preparation..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-purple-400 font-bold block mb-1">
                        R - Result (What was the measurable feedback or praise?):
                      </label>
                      <textarea
                        rows={2}
                        value={starR}
                        onChange={(e) => setStarR(e.target.value)}
                        placeholder="e.g. The guest enjoyed a safe dining experience and personally commended our service to the General Manager."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Formatted Preview Card */}
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-bold text-sm">Generated Script Preview</h4>
                      <button
                        onClick={copyStarScript}
                        className="text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        {copiedScript ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedScript ? "Copied!" : "Copy to Clipboard"}
                      </button>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-xl border border-white/5 font-serif text-xs text-slate-200 space-y-3 leading-relaxed">
                      <p>
                        <strong className="text-amber-400">Situation:</strong>{" "}
                        {starS || "During a 300-guest diplomatic dinner at Hotel Santa Clara..."}
                      </p>
                      <p>
                        <strong className="text-cyan-400">Task:</strong>{" "}
                        {starT || "A guest informed me of a severe celiac allergy right as dinner service began..."}
                      </p>
                      <p>
                        <strong className="text-emerald-400">Action:</strong>{" "}
                        {starA || "I flagged the order in our Micros POS and coordinated directly with the Executive Chef..."}
                      </p>
                      <p>
                        <strong className="text-purple-400">Result:</strong>{" "}
                        {starR || "The dish was served safely, and the guest praised our team's attentiveness."}
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/20 space-y-2">
                    <div className="text-amber-300 font-bold text-xs flex items-center gap-1.5">
                      <FileText className="w-4 h-4" /> Download Complete Study Packet
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Download the full offline study guide containing phonetics rules, all 20 question model answers, the L.A.S.T. framework, and DS-7002 reference guidelines.
                    </p>
                    <button
                      onClick={handleDownloadMaterials}
                      className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FileText className="w-4 h-4" /> Download Offline Handout (.txt)
                    </button>
                  </div>
                </div>
              </div>
            </CurriculumBlock>
          </div>
        )}
      </main>

      {/* Navigation Footer */}
      <CurriculumNavigation
        prevHref="/english-class/au-pair-sponsor-interview"
        prevLabel="Au Pair Sponsor Interview"
        nextHref="/english-class/work-and-travel-sponsor-interview"
        nextLabel="Work & Travel Sponsor Interview"
        accentColor="amber"
        moduleTitle="J-1 Hospitality Internship Masterclass"
      />
    </div>
  );
}

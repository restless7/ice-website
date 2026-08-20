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

interface QuestionItem {
  id: number;
  category: "Background" | "Childcare" | "Workload" | "Discipline" | "Host Family" | "Visa";
  question: string;
  intent: string;
  formula: string;
  modelAnswerB2: string;
  modelAnswerC1: string;
  ipaKey: string;
  redFlag: string;
}

interface DialogueLine {
  speaker: "Interviewer" | "Au Pair";
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

export default function AuPairSponsorInterviewPage() {
  const [activeTab, setActiveTab] = useState<"rubric" | "phonetics" | "questions" | "dialogues" | "simulator" | "handout">("rubric");
  const [selectedTraits, setSelectedTraits] = useState<string[]>(["Confident", "Responsible", "Flexible", "Mature", "Bubbly/Cheerful"]);
  const [isPlayingAudio, setIsPlayingAudio] = useState<string | null>(null);

  // Question State
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeQuestionId, setActiveQuestionId] = useState<number>(1);

  // Dialogue State
  const [activeDialogueId, setActiveDialogueId] = useState<number>(1);
  const [practiceMode, setPracticeMode] = useState<boolean>(false);

  // STAR Builder State
  const [starS, setStarS] = useState("");
  const [starT, setStarT] = useState("");
  const [starA, setStarA] = useState("");
  const [starR, setStarR] = useState("");

  // Simulator State
  const [simTime, setSimTime] = useState(600); // 10 minutes in seconds
  const [simRunning, setSimRunning] = useState(false);
  const [simQuestionId, setSimQuestionId] = useState<number>(1);
  const [scores, setScores] = useState({ clarity: 4, structure: 4, fluency: 4, trait: 5, compliance: 5 });

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
      title: "1. The /v/ vs /b/ Sound Repair",
      issue: "L1 Spanish speakers pronounce both 'v' and 'b' as bilabial /b/.",
      rule: "Place top teeth gently on bottom lip and vibrate vocal cords for /v/.",
      bad: "I bary much want to lib in the US.",
      good: "I very much want to live in the US with my host family.",
      ipa: "/ˈvɛri/ - /lɪv/",
      audioText: "I very much want to live in the United States.",
    },
    {
      title: "2. Initial /s/ Cluster Softening",
      issue: "Adding an extra /e/ sound before 's' + consonant (e.g. es-skills).",
      rule: "Start directly with a snake hiss (s-s-s) without opening your mouth for an 'e'.",
      bad: "My es-skills with children are es-special.",
      good: "My skills with children are special and proven.",
      ipa: "/skɪlz/ - /ˈspɛʃəl/",
      audioText: "My skills with children are special.",
    },
    {
      title: "3. Past Tense -ed Endings (/t/, /d/, /ɪd/)",
      issue: "Pronouncing every '-ed' as a full extra syllable (e.g., work-ed).",
      rule: "-ed is pronounced /t/ after voiceless consonants, /d/ after voiced, /ɪd/ ONLY after t & d.",
      bad: "I work-ed and help-ed the family.",
      good: "I worked /wɜːkt/ and helped /hɛlpt/ the family, then adjusted /əˈdʒʌstɪd/ the schedule.",
      ipa: "/wɜːkt/ - /hɛlpt/ - /əˈdʒʌstɪd/",
      audioText: "I worked hard, helped the family, and adjusted quickly.",
    },
    {
      title: "4. Short /ɪ/ vs Long /iː/ Vowels",
      issue: "Spanish only has one /i/ sound. English contrasts short /ɪ/ from long /iː/.",
      rule: "Short /ɪ/ is relaxed and quick; long /iː/ smiles and holds.",
      bad: "I want to leave in America for a year.",
      good: "I want to live /lɪv/ in America for a year before I leave /liːv/ for university.",
      ipa: "/lɪv/ vs /liːv/",
      audioText: "I live here now, but I will leave tomorrow.",
    },
    {
      title: "5. The /dʒ/ vs /j/ Consonant Distinction",
      issue: "Confusing the soft 'y' /j/ (yes) with the hard 'j' /dʒ/ (job, enjoy).",
      rule: "Push tongue to roof of mouth for /dʒ/ like 'jump' or 'job'.",
      bad: "I yoy my yob very much.",
      good: "I enjoy /ɪnˈdʒɔɪ/ my job /dʒɒb/, yes /jɛs/ I do!",
      ipa: "/ɪnˈdʒɔɪ/ - /dʒɒb/",
      audioText: "I enjoy my job very much, yes I do!",
    },
  ];

  // 15 Sponsor Questions Data
  const questionsData: QuestionItem[] = [
    {
      id: 1,
      category: "Background",
      question: "Have you been an au pair before? If yes, when and where? If in the U.S., which au pair agency sponsored your J-1 Visa?",
      intent: "Verify prior visa compliance, J-1 history, and childcare background consistency.",
      formula: "Direct status statement + Transition to total verifiable hours of experience.",
      modelAnswerB2: "No, I haven't been an au pair abroad before. However, I have over 800 hours of formal childcare experience in Colombia working as a tutor and babysitter for toddlers and young kids.",
      modelAnswerC1: "While I haven't previously participated in a formal international au pair program, I bring over 800 hours of documented childcare experience in private homes and daycare centers, which has fully prepared me for this J-1 experience.",
      ipaKey: "agency /ˈeɪdʒənsi/ • sponsored /ˈspɒnsərd/ • previous /ˈpriːviəs/",
      redFlag: "Sounding confused about past visa status or giving contradictory dates.",
    },
    {
      id: 2,
      category: "Background",
      question: "Have you ever traveled to another country? If yes, when, where, and how long?",
      intent: "Gauge independence, international adaptability, and resilience against cultural shock.",
      formula: "Destination + Duration + What personal skill or independence you developed.",
      modelAnswerB2: "Yes, I traveled to Panama for two weeks with my family and spent a month in Argentina for a youth seminar. It taught me how to navigate new environments and adapt quickly.",
      modelAnswerC1: "Yes, I spent a month in Argentina for an academic exchange program. Managing my itinerary independently strengthened my self-reliance and gave me great practice adapting to new cultural environments.",
      ipaKey: "traveled /ˈtrævəld/ • country /ˈkʌntri/ • independently /ˌɪndɪˈpɛndəntli/",
      redFlag: "Admitting to overwhelming homesickness during short trips.",
    },
    {
      id: 3,
      category: "Visa",
      question: "Do you have any family members living in the United States? If so, please provide more information on why they are in the U.S. and how long they have been living there.",
      intent: "Evaluate immigration risk (intent to overstay J-1 visa to reside near relatives).",
      formula: "Direct status statement + Full transparency on legal status/city + Reiteration of independent host family placement goals.",
      modelAnswerB2: "No, I do not have any family members living in the United States. My entire family lives in Colombia.",
      modelAnswerC1: "I have an aunt who has lived legally in Florida for ten years working as an accountant. However, I am seeking a full cultural exchange experience with a host family anywhere in the US to foster my total independence.",
      ipaKey: "relatives /ˈrɛlətɪvz/ • temporary /ˈtɛmpərəri/ • residence /ˈrɛzɪdəns/",
      redFlag: "Sounding evasive or stating you plan to rely on US relatives for housing/finances.",
    },
    {
      id: 4,
      category: "Background",
      question: "Have you lived away from your home (independently) and family for more than one month? If yes, please explain.",
      intent: "Assess emotional maturity and capacity to live peacefully in a new household.",
      formula: "Duration & Location + Domestic duties managed + Positive independence result.",
      modelAnswerB2: "Yes, I lived away from home for six months during university in Medellín. I managed my cooking, cleaning, and studies independently without problems.",
      modelAnswerC1: "Yes, I lived independently for six months during university. Taking full responsibility for my meals, laundry, and daily routine proved to me that I can adapt seamlessly to new domestic environments.",
      ipaKey: "independently /ˌɪndɪˈpɛndəntli/ • month /mʌnθ/ • managed /ˈmænɪdʒd/",
      redFlag: "Admitting you couldn't handle chores or cried daily due to parent separation.",
    },
    {
      id: 5,
      category: "Background",
      question: "Tell me about your parents, siblings, and family background.",
      intent: "Understand upbringing, family communication values, and host family support.",
      formula: "Family structure + Occupations + Core family values + Family support for Au Pair program.",
      modelAnswerB2: "I come from a loving family of four. My father is an engineer, my mother is a teacher, and I have a younger brother. They raised me with strong values of responsibility and fully support my au pair journey.",
      modelAnswerC1: "I grew up in a supportive household of four in Bogotá. My mother is an educator and my father is a civil engineer. My family emphasized open communication and respect, and they are thrilled to support my cultural exchange year.",
      ipaKey: "parents /ˈpɛərənts/ • siblings /ˈsɪblɪŋz/ • supportive /səˈpɔːtɪv/",
      redFlag: "Describing severe family hostility or saying family hates your plan to go.",
    },
    {
      id: 6,
      category: "Childcare",
      question: "Where did you learn your childcare skills?",
      intent: "Validate 200+ (or 500+) required hours. Ensure hands-on, practical safety knowledge.",
      formula: "Primary setting (daycare, babysitting, school) + Specific age groups + Main safety responsibilities.",
      modelAnswerB2: "I learned my childcare skills by volunteering for over a year at an after-school program with kids aged 3 to 7, and by babysitting toddlers in my neighborhood.",
      modelAnswerC1: "I built my childcare foundation through 500+ hours at a local early learning center working with toddlers aged 1 to 4, as well as providing private nanny care involving meal prep and bedtime routines.",
      ipaKey: "childcare /ˈtʃaɪldkɛər/ • volunteered /ˌvɒlənˈtɪərd/ • toddlers /ˈtɒdlərz/",
      redFlag: "Vague answers like 'I just watched television with my little cousin twice'.",
    },
    {
      id: 7,
      category: "Childcare",
      question: "What do you enjoy most about caring for children?",
      intent: "Differentiate genuine child passion from applicants seeking a cheap tourist visa.",
      formula: "Child milestone/creativity aspect + Specific activity example + Emotional reward.",
      modelAnswerB2: "I love seeing children's curiosity and helping them learn. It's so rewarding to organize creative arts and crafts and see their happy faces when they learn something new.",
      modelAnswerC1: "What inspires me most is witnessing their developmental milestones. I love creating interactive games and storytelling sessions that spark their imagination while building trust.",
      ipaKey: "rewarding /rɪˈwɔːdɪŋ/ • milestones /ˈmaɪlstəʊnz/ • curiosity /ˌkjʊəriˈɒsəti/",
      redFlag: "Saying 'I like it because children sleep a lot and don't bother me'.",
    },
    {
      id: 8,
      category: "Workload",
      question: "Working 45 hours per week/10 hours per day is a lot of work. Have you ever worked this much before? How will you handle/adjust to this much work?",
      intent: "Test stamina, realistic expectations of the J-1 work cap, and active time management.",
      formula: "Acknowledge workload + Provide past example of high-energy routine + Time management strategy.",
      modelAnswerB2: "Yes, I am used to busy schedules. During university, I balanced 30 hours of class with 20 hours of part-time work. I stay organized, sleep well, and keep children active so the day flows smoothly.",
      modelAnswerC1: "Absolutely. I previously managed a full university course load alongside 25 weekly hours of childcare and sports coaching. I maintain stamina by organizing structured daily schedules with a healthy personal balance.",
      ipaKey: "schedule /ˈskɛdʒuːl/ • stamina /ˈstæmɪnə/ • adjusted /əˈdʒʌstɪd/",
      redFlag: "Complaining about long hours or asking if overtime pay is provided.",
    },
    {
      id: 9,
      category: "Childcare",
      question: "Can you describe some of the challenges caring for children and how you overcome these challenges?",
      intent: "Evaluate patience under pressure, crisis de-escalation, and safety focus.",
      formula: "STAR Method: Situation (tantrum/conflict) + Task + Action (calm eye-level dialogue) + Positive Result.",
      modelAnswerB2: "When a 4-year-old had a tantrum refusing to pick up toys, I stayed calm, got down to his eye level, validated his feelings, and turned cleanup into a fun 2-minute timed game.",
      modelAnswerC1: "A common challenge is managing emotional outbursts when children get tired. Once, when a toddler refused to wear his coat in the cold, I acknowledged his feelings calmly and offered him a choice between two colored coats, resolving the situation without yelling.",
      ipaKey: "tantrum /ˈtæntrəm/ • eye-level /aɪ ˈlɛvəl/ • patience /ˈpeɪʃəns/",
      redFlag: "Saying 'I just lock them in their room until they stop crying'.",
    },
    {
      id: 10,
      category: "Discipline",
      question: "What is your view on disciplining children? How will you try to correct children’s behavior when it is a problem?",
      intent: "Confirm zero tolerance for physical punishment (spanking is illegal under J-1) and positive reinforcement alignment.",
      formula: "Firm positive discipline stance + Rejection of physical punishment + Redirection & Host family alignment.",
      modelAnswerB2: "I believe in positive discipline and clear boundaries. Physical punishment or yelling is never acceptable. I use calm communication, redirection, and follow the host parents' exact rules.",
      modelAnswerC1: "I strictly practice positive discipline and verbal reinforcement. Physical punishment is entirely unacceptable. My approach centers on setting clear, consistent boundaries, redirecting negative energy, and maintaining complete alignment with host parents.",
      ipaKey: "disciplining /ˈdɪsɪplɪnɪŋ/ • acceptable /əkˈsɛptəbəl/ • reinforcement /ˌriːɪnˈfɔːsmənt/",
      redFlag: "CRITICAL REJECTION: Any mention of hitting, slapping, spanking, or aggressive shouting.",
    },
    {
      id: 11,
      category: "Host Family",
      question: "Do you prefer more or less direction from the host parents on how to manage your day caring for the children?",
      intent: "Measure adaptability to different managerial styles (micromanaging vs hands-off host parents).",
      formula: "Express flexibility + Initial detailed orientation preference + Eventual proactive autonomy.",
      modelAnswerB2: "I am flexible! At the start, I prefer clear direction to learn the family routine. Once I understand everything, I am proactive and can manage the day independently.",
      modelAnswerC1: "I thrive under both! Initially, I welcome structured guidance and feedback to align with family preferences. Once established, I am fully autonomous and proactive in managing routines smoothly.",
      ipaKey: "direction /dɪˈrɛkʃən/ • proactive /prəʊˈæktɪv/ • autonomous /ɔːˈtɒnəməs/",
      redFlag: "Saying 'I hate being told what to do by parents'.",
    },
    {
      id: 12,
      category: "Host Family",
      question: "What support do you need from the host parents to be successful caring for their children?",
      intent: "Check open communication mindset and willingness to ask for help when safety requires it.",
      formula: "Communication & mutual trust focus + Weekly check-in preference + Teamwork orientation.",
      modelAnswerB2: "The main support I need is open communication and trust. Having weekly check-ins to discuss routines and challenges helps us work together as a team.",
      modelAnswerC1: "Key support for me is transparent communication and mutual feedback. Brief weekly check-ins to review the kids' schedules and goals ensure we operate as a unified team.",
      ipaKey: "successful /səkˈsɛsfʊl/ • communication /kəˌmjuːnɪˈkeɪʃən/ • mutual /ˈmjuːtʃuəl/",
      redFlag: "Demanding personal favors, expensive cars, or complete freedom from rules.",
    },
    {
      id: 13,
      category: "Host Family",
      question: "What support do you need from your host parents to be successful in living as a member of your host family?",
      intent: "Evaluate realistic cultural integration expectations and family living respect.",
      formula: "Clear household rules respect + Cultural exchange desire + Being treated like a big sister.",
      modelAnswerB2: "I appreciate clear house rules, shared meals, and cultural exchange. Being treated like a big sister will help me integrate warmly into American culture.",
      modelAnswerC1: "Living as a family member relies on mutual respect and open house guidelines. Participating in family meals and receiving gentle cultural guidance will make me feel genuinely at home.",
      ipaKey: "guidelines /ˈɡaɪdlaɪnz/ • integration /ˌɪntɪˈɡreɪʃən/ • exchange /ɪksˈtʃeɪndʒ/",
      redFlag: "Treating the host family house like a hotel where you ignore everyone.",
    },
    {
      id: 14,
      category: "Visa",
      question: "What are your long-term goals and how will the Au Pair USA program help you achieve these goals?",
      intent: "Validate career vision and verify that J-1 program serves legitimate educational enrichment.",
      formula: "Specific career goal in home country + English fluency benefit + Intercultural leadership gain.",
      modelAnswerB2: "My goal is to graduate in International Business and work for a global company in Colombia. Achieving native English fluency and cross-cultural skills in the US will make me very competitive.",
      modelAnswerC1: "My long-term aspiration is to work as an international project manager in Colombia. Native-level English fluency and cross-cultural adaptability gained through Au Pair USA will be pivotal for my career.",
      ipaKey: "achieve /əˈtʃiːv/ • competitive /kəmˈpɛtɪtɪv/ • fluency /ˈfluːənsi/",
      redFlag: "Saying 'I don't have any goals, I just want to leave Colombia forever'.",
    },
    {
      id: 15,
      category: "Visa",
      question: "What do you plan to do after returning home from your au pair year?",
      intent: "CRITICAL J-1 NON-IMMIGRANT INTENT VERIFICATION under US federal immigration law.",
      formula: "Immediate return plan + Degree completion / Job application in home country + Leveraging English fluency locally.",
      modelAnswerB2: "Upon returning home to Colombia, I will resume my university studies in Modern Languages and apply for bilingual teaching positions in my home city.",
      modelAnswerC1: "Immediately after completing my program, I will return to Colombia to finish my degree and apply for bilingual project coordinator roles, leveraging my enhanced English fluency.",
      ipaKey: "return /rɪˈtɜːn/ • degree /dɪˈɡriː/ • bilingual /baɪˈlɪŋɡwəl/",
      redFlag: "CRITICAL REJECTION: Saying 'I plan to stay in the US, get married, or get a work visa'.",
    },
  ];

  // Scenarios Data
  const dialogueScenariosData: DialogueScenario[] = [
    {
      id: 1,
      title: "Scenario 1: Emergency & Child Safety Protocol",
      category: "Emergency Safety",
      context: "Sponsor officer tests how calmly and logically you react if a child gets injured at home.",
      lines: [
        {
          speaker: "Interviewer",
          text: "Imagine you are alone at home with a 3-year-old and a 6-year-old. The 3-year-old falls in the backyard and gets a deep cut on her knee. She is crying hysterically, and the 6-year-old starts panicking. What exact steps would you take?",
          ipa: "/ɪˈmædʒɪn juː ɑːr əˈləʊn æt həʊm...",
          linking: "falls ⁀ in • cut ⁀ on • starts ⁀ panicking",
          intonation: "falling",
          teacherTip: "Notice how the interviewer speaks clearly. Pay attention to how you respond without panicking.",
        },
        {
          speaker: "Au Pair",
          text: "First of all, I would stay calm because children pick up on my energy. I would carry the 3-year-old inside safely while instructing the 6-year-old to sit on the couch with a coloring book to stay calm.",
          ipa: "/fɜːst əv ɔːl | aɪ wʊd steɪ kɑːm...",
          linking: "first ⁀ of ⁀ all • pick ⁀ up ⁀ on • sit ⁀ on",
          intonation: "falling",
          teacherTip: "Assertive falling intonation (↘) demonstrates authority and calm safety instincts.",
        },
        {
          speaker: "Au Pair",
          text: "Next, I would inspect the wound, apply pressure with a clean cloth, and wash it with lukewarm water. Immediately after securing the cut, I would call the host mother to inform her. If it were a severe emergency, I would call 911 right away. Safety is always my top priority!",
          ipa: "/nɛkst | aɪ wʊd ɪnˈspɛkt ðə wuːnd...",
          linking: "wash ⁀ it • right ⁀ away • top ⁀ priority",
          intonation: "falling",
          teacherTip: "Pronounce 'immediately' /ɪˈmiːdiətli/ without adding extra Spanish vowel sounds.",
        },
      ],
    },
    {
      id: 2,
      title: "Scenario 2: Public Tantrum & Positive Discipline",
      category: "Positive Discipline",
      context: "Sponsor officer tests your patience when a toddler throws a tantrum at a public park.",
      lines: [
        {
          speaker: "Interviewer",
          text: "You are at a local playground, and it's time to leave. The 4-year-old child throws himself on the ground, screams 'No!', and refuses to walk to the car. People are watching. How do you handle this?",
          ipa: "/juː ɑːr æt ə ˈləʊkəl ˈpleɪɡraʊnd...",
          linking: "time ⁀ to • throws ⁀ himself • walk ⁀ to",
          intonation: "rising",
          teacherTip: "The interviewer uses rising intonation (↗) to see if you feel pressured by public spectators.",
        },
        {
          speaker: "Au Pair",
          text: "That's a very common situation with four-year-olds! First, I never react with anger or shouting, and I don't care about what onlookers think—I focus entirely on the child's safety.",
          ipa: "/ðæts ə ˈvɛri ˈkɒmən ˌsɪtʃuˈeɪʃən...",
          linking: "four-year-olds • react ⁀ with • focus ⁀ entirely",
          intonation: "falling",
          teacherTip: "Fix the /v/ in 'very' /ˈvɛri/ and 'situation' /ˌsɪtʃuˈeɪʃən/.",
        },
        {
          speaker: "Au Pair",
          text: "I get down to his eye level, keep my voice very gentle and quiet, and validate his feelings. I say: 'I know you're having fun and it's hard to leave, but it's time for lunch.' Then, I offer a positive choice: 'Do you want to hold my left hand or my right hand to the car?' Giving them control over a small decision usually de-escalates the tantrum smoothly.",
          ipa: "/aɪ ɡɛt daʊn tuː hɪz aɪ ˈlɛvəl...",
          linking: "eye ⁀ level • time ⁀ for • hold ⁀ my",
          intonation: "rising",
          teacherTip: "Use rising intonation (↗) when offering the positive choice question to the child.",
        },
      ],
    },
    {
      id: 3,
      title: "Scenario 3: 45-Hour Workload & Stamina",
      category: "Workload Stamina",
      context: "Sponsor checks if you have realistic expectations of J-1 work hours and time management.",
      lines: [
        {
          speaker: "Interviewer",
          text: "Working 10 hours a day caring for toddlers can be physically draining. Have you ever worked a 45-hour week before, and how will you maintain high energy day after day?",
          ipa: "/ˈwɜːkɪŋ tɛn ˈaʊəz ə deɪ...",
          linking: "caring ⁀ for • worked ⁀ a • day ⁀ after",
          intonation: "rising",
          teacherTip: "Sponsors want to make sure candidates won't get homesick or burn out on week 2.",
        },
        {
          speaker: "Au Pair",
          text: "Yes, I have! During my final university semester, I balanced 28 hours of coursework with 20 hours of nanny work and tutoring every week.",
          ipa: "/jɛs | aɪ hæv! ˈdjʊərɪŋ maɪ ˈfaɪnl...",
          linking: "balanced ⁀ 28 • hours ⁀ of • work ⁀ and",
          intonation: "falling",
          teacherTip: "Pronounce 'balanced' as /ˈbælənst/ with a clean /t/ ending sound.",
        },
        {
          speaker: "Au Pair",
          text: "To maintain high energy, I rely on two main strategies: structured routines and self-care. During the day, I create a balanced schedule with active outdoor play in the morning, quiet reading or nap time after lunch, and creative games in the afternoon. Having a rhythm keeps the children engaged and prevents exhaustion for both of us!",
          ipa: "/tuː meɪnˈteɪn haɪ ˈɛnədʒi...",
          linking: "rely ⁀ on • nap ⁀ time • after ⁀ lunch",
          intonation: "falling",
          teacherTip: "Keep your pace steady. Group items logically to show high organizational maturity.",
        },
      ],
    },
    {
      id: 4,
      title: "Scenario 4: Host Family Living & Communication",
      category: "Host Family Relations",
      context: "Sponsor verifies how you handle minor misunderstandings regarding household duties.",
      lines: [
        {
          speaker: "Interviewer",
          text: "What would you do if you felt the host parents' expectations regarding household chores were different from what was agreed in your contract?",
          ipa: "/wɒt wʊd juː duː ɪf juː fɛlt...",
          linking: "felt ⁀ the • agreed ⁀ in",
          intonation: "rising",
          teacherTip: "A trap question! Never complain about host parents; emphasize proactive dialogue.",
        },
        {
          speaker: "Au Pair",
          text: "I believe open and respectful communication is the key to living together happily. If I noticed a mismatch, I would ask the host parents for a quick 10-minute check-in after the children are asleep.",
          ipa: "/aɪ bɪˈliːv ˈəʊpən ænd rɪsˈpɛktfʊl...",
          linking: "open ⁀ and • check ⁀ in • after ⁀ the",
          intonation: "falling",
          teacherTip: "Pronounce 'communication' /kəˌmjuːnɪˈkeɪʃən/ with correct primary stress on 'ca'.",
        },
        {
          speaker: "Au Pair",
          text: "I would start by thanking them for welcoming me, and then gently review our schedule together. I'd say: 'I want to make sure I am giving 100% to the children's safety and routines, so let's clarify how we can structure light household tasks.' By keeping it positive and team-focused, we can resolve any issue easily!",
          ipa: "/aɪ wʊd stɑːt baɪ ˈθæŋkɪŋ ðɛm...",
          linking: "thanking ⁀ them • giving ⁀ 100% • team ⁀ focused",
          intonation: "falling",
          teacherTip: "Framing it as 'team-focused' demonstrates high maturity and emotional intelligence.",
        },
      ],
    },
    {
      id: 5,
      title: "Scenario 5: J-1 Visa Return Intent (Home Ties)",
      category: "Visa Intent",
      context: "Crucial US federal immigration question verifying your intention to return to Colombia.",
      lines: [
        {
          speaker: "Interviewer",
          text: "What are your specific plans after completing your au pair year in the United States?",
          ipa: "/wɒt ɑːr jɔː spəˈsɪfɪk plænz...",
          linking: "plans ⁀ after • au ⁀ pair ⁀ year",
          intonation: "falling",
          teacherTip: "This is a mandatory legal compliance checkpoint. Never hesitate or give vague answers.",
        },
        {
          speaker: "Au Pair",
          text: "Immediately after completing my program, I am returning home to Colombia. My main goal is to finish my final two semesters of my International Relations degree at university in Bogotá.",
          ipa: "/ɪˈmiːdiətli ˈɑːftə kəmˈpliːtɪŋ...",
          linking: "immediately ⁀ after • returning ⁀ home • degree ⁀ at",
          intonation: "falling",
          teacherTip: "Stress 'returning home to Colombia' with firm falling intonation (↘).",
        },
        {
          speaker: "Au Pair",
          text: "The native English fluency and cross-cultural management skills I gain in the US will make me an outstanding candidate for bilingual coordinator roles in my home city. My family and my career future are all rooted here in Colombia!",
          ipa: "/ðə ˈneɪtɪv ˈɪŋɡlɪʃ ˈfluːənsi...",
          linking: "bilingual ⁀ coordinator • rooted ⁀ here",
          intonation: "falling",
          teacherTip: "Emphasize 'rooted here in Colombia' to establish indisputable home ties.",
        },
      ],
    },
  ];

  const activeQuestion = questionsData.find((q) => q.id === activeQuestionId) || questionsData[0];
  const simQuestion = questionsData.find((q) => q.id === simQuestionId) || questionsData[0];
  const activeDialogue = dialogueScenariosData.find((d) => d.id === activeDialogueId) || dialogueScenariosData[0];

  const filteredQuestions =
    selectedCategory === "All"
      ? questionsData
      : questionsData.filter((q) => q.category === selectedCategory);

  const calculateTotalScore = () => {
    return scores.clarity + scores.structure + scores.fluency + scores.trait + scores.compliance;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500/30">
      <CurriculumHeader
        hourNumber="Module 2 (2 Hours)"
        title="Au Pair Sponsor Interview Masterclass."
        subtitle="Conversational, Phonetics & STAR Method Preparation."
        description="Comprehensive 2-Hour Intensive Training tailored for official J-1 Sponsor Interviews (InterExchange AP-PA05-0725). Master L1-Spanish phonetics, STAR answer formulas, 15 official report questions, and turn-by-turn interactive dialogues."
        accentColor="cyan"
        moduleInfo="AU PAIR Sponsor Screening Track"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
          {[
            { id: "rubric", label: "Block 1: Sponsor Rubric & Traits", icon: Award },
            { id: "phonetics", label: "Block 2: Phonetics & IPA Audio", icon: Mic },
            { id: "questions", label: "Block 3: 15 Questions & STAR Builder", icon: BookOpen },
            { id: "dialogues", label: "Block 4: Extensive Dialogues & Audio Scenarios", icon: MessageSquare },
            { id: "simulator", label: "Block 5: Mock Interview Simulator", icon: Clock },
            { id: "handout", label: "Golden Rules Cheat Sheet", icon: ShieldCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-[1.02]"
                    : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-white/5"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-slate-950" : "text-cyan-400"}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* BLOCK 1 */}
        {activeTab === "rubric" && (
          <div className="space-y-6">
            <CurriculumBlock
              icon={<Award />}
              title="Official Sponsor Evaluation Standards (Form AP-PA05-0725)"
              subtitle="20 Minutes • Grading Rubric & Personality Trait Selection"
              methodology="CEFR & Evaluation Matrix"
              accentColor="cyan"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {[
                  {
                    level: "Intermediate (B1)",
                    badge: "Minimum Threshold",
                    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
                    desc: "Understands most questions; responds beyond basic answers; occasional pauses to search for words.",
                  },
                  {
                    level: "High Intermediate (B2)",
                    badge: "Recommended Target ⭐",
                    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
                    desc: "Interacts with degree of fluency & spontaneity; clear detailed responses; explains opinions with pros & cons.",
                  },
                  {
                    level: "Advanced (C1)",
                    badge: "Top Placement Tier",
                    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
                    desc: "Responses come quickly & naturally; robust vocabulary; flexible expression with minimal mistakes.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white text-lg">{item.level}</h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Trait Selector */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-emerald-400" /> Host Family Personality Matrix (Select 5 traits)
                  </h3>
                  <span className="text-sm font-bold text-cyan-400">Selected: {selectedTraits.length}/5</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {[
                    "Bubbly/Cheerful",
                    "Confident",
                    "Open-minded",
                    "Shy/Reserved",
                    "Serious",
                    "Mature",
                    "Professional",
                    "Responsible",
                    "Organized",
                    "Motivated",
                    "Flexible",
                    "Athletic",
                    "Creative",
                    "Homebody",
                    "Social",
                    "Studious/Academic",
                  ].map((trait) => {
                    const isSelected = selectedTraits.includes(trait);
                    const isRecommended = ["Confident", "Responsible", "Flexible", "Mature", "Bubbly/Cheerful"].includes(trait);
                    return (
                      <button
                        key={trait}
                        onClick={() => handleTraitToggle(trait)}
                        className={`p-3 rounded-xl text-xs font-bold border transition-all text-center flex flex-col items-center justify-between gap-1 cursor-pointer ${
                          isSelected
                            ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20"
                            : "bg-slate-900/60 text-slate-300 border-white/10 hover:border-white/20"
                        }`}
                      >
                        <span>{trait}</span>
                        {isRecommended && (
                          <span className={`text-[9px] px-1.5 py-0.5 rounded ${isSelected ? "bg-slate-950 text-cyan-400" : "bg-cyan-500/20 text-cyan-400"}`}>
                            Top Match
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </CurriculumBlock>
          </div>
        )}

        {/* BLOCK 2 */}
        {activeTab === "phonetics" && (
          <div className="space-y-6">
            <CurriculumBlock
              icon={<Mic />}
              title="Block 2: L1-Spanish Phonetic Repair & Native Audio"
              subtitle="20 Minutes • Contrastive Phonetics for Spanish Speakers"
              methodology="Phonetic Drills & IPA Audio"
              accentColor="cyan"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {phoneticsData.map((item, index) => {
                  const audioId = `phonetic-${index}`;
                  const isPlaying = isPlayingAudio === audioId;
                  return (
                    <div key={index} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-white text-base">{item.title}</h3>
                        <span className="text-xs font-mono px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded border border-cyan-500/20">
                          {item.ipa}
                        </span>
                      </div>

                      <div className="space-y-1 text-xs">
                        <p className="text-amber-400 font-medium">⚠️ Issue: {item.issue}</p>
                        <p className="text-slate-300">💡 Rule: {item.rule}</p>
                      </div>

                      <div className="bg-slate-950 p-3 rounded-xl space-y-2 border border-white/5 font-mono text-xs">
                        <div className="text-red-400/90 flex items-center gap-2">
                          <span>❌ Error:</span> <span className="line-through">{item.bad}</span>
                        </div>
                        <div className="text-emerald-400 flex items-center gap-2 font-bold">
                          <span>✅ Repair:</span> <span>{item.good}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => speakText(item.audioText, audioId)}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          isPlaying
                            ? "bg-emerald-500 text-slate-950 animate-pulse"
                            : "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/30"
                        }`}
                      >
                        <Volume2 className="w-4 h-4" />
                        {isPlaying ? "Playing Audio..." : "🔊 Listen Native Audio Pronunciation"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </CurriculumBlock>
          </div>
        )}

        {/* BLOCK 3 */}
        {activeTab === "questions" && (
          <div className="space-y-6">
            <CurriculumBlock
              icon={<BookOpen />}
              title="Block 3: The 15 Official Sponsor Questions & STAR Generator"
              subtitle="35 Minutes • Master Answers & STAR Generator"
              methodology="STAR Response Method"
              accentColor="cyan"
            >
              <div className="space-y-6 mt-4">
                <div className="flex flex-wrap gap-2">
                  {["All", "Background", "Childcare", "Workload", "Discipline", "Host Family", "Visa"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                          : "bg-slate-900 text-slate-400 hover:text-white border border-white/5"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Sidebar */}
                  <div className="lg:col-span-5 space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {filteredQuestions.map((q) => {
                      const isActive = q.id === activeQuestionId;
                      return (
                        <button
                          key={q.id}
                          onClick={() => setActiveQuestionId(q.id)}
                          className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                            isActive
                              ? "bg-cyan-500/15 border-cyan-400/50 shadow-lg shadow-cyan-500/10"
                              : "bg-slate-950/60 border-white/5 hover:border-white/10 text-slate-300"
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                                Q{q.id}
                              </span>
                              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                                {q.category}
                              </span>
                            </div>
                            <h4 className="text-xs font-bold text-white line-clamp-2">{q.question}</h4>
                          </div>
                          <ChevronRight className={`w-4 h-4 shrink-0 mt-2 ${isActive ? "text-cyan-400" : "text-slate-600"}`} />
                        </button>
                      );
                    })}
                  </div>

                  {/* Detail Panel */}
                  <div className="lg:col-span-7 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          QUESTION {activeQuestion.id} OF 15
                        </span>
                        <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                          <ShieldCheck className="w-4 h-4" /> Category: {activeQuestion.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">{activeQuestion.question}</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-3 text-xs">
                      <div className="bg-slate-950 p-3 rounded-xl border border-white/5">
                        <span className="text-cyan-400 font-bold block mb-1">🎯 Sponsor Intent:</span>
                        <p className="text-slate-300">{activeQuestion.intent}</p>
                      </div>
                      <div className="bg-slate-950 p-3 rounded-xl border border-white/5">
                        <span className="text-emerald-400 font-bold block mb-1">💡 Response Formula:</span>
                        <p className="text-slate-300">{activeQuestion.formula}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-slate-950 p-4 rounded-xl border border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-cyan-300">Model Answer (High Intermediate B2):</span>
                          <button
                            onClick={() => speakText(activeQuestion.modelAnswerB2, `q-b2-${activeQuestion.id}`)}
                            className="text-[11px] text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5" /> Listen B2
                          </button>
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed italic">"{activeQuestion.modelAnswerB2}"</p>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-emerald-300">Model Answer (Advanced C1):</span>
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
                      <div className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 p-2.5 rounded-lg border border-cyan-500/20">
                        🔑 Key Vocabulary IPA: {activeQuestion.ipaKey}
                      </div>

                      <div className="text-[11px] text-red-400 bg-red-500/10 p-2.5 rounded-lg border border-red-500/20 flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-red-300">⚠️ Red Flag Warning:</strong> {activeQuestion.redFlag}
                        </div>
                      </div>
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
              icon={<MessageSquare />}
              title="Block 4: Extensive Interview Dialogues & Scenario Audio"
              subtitle="25 Minutes • Turn-by-Turn Audio & Intonation Drills"
              methodology="Interactive Dialogue Shadowing"
              accentColor="cyan"
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
                            ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                            : "bg-slate-900 text-slate-400 hover:text-white border border-white/5"
                        }`}
                      >
                        {s.title}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setPracticeMode(!practiceMode)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      practiceMode
                        ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                        : "bg-slate-900 text-cyan-400 border border-cyan-500/30 hover:bg-slate-800"
                    }`}
                  >
                    <Radio className="w-4 h-4" />
                    {practiceMode ? "🎙️ Practice Mode ACTIVE (Candidate Muted)" : "🔊 Full Audio Mode"}
                  </button>
                </div>

                <div className="bg-slate-900/90 p-5 rounded-2xl border border-cyan-500/20 space-y-2">
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
                              {line.speaker === "Interviewer" ? "👤 SPONSOR OFFICER" : "👧 AU PAIR CANDIDATE"}
                            </span>

                            <span className="text-[10px] font-mono text-slate-400">
                              Intonation: {line.intonation === "rising" ? "↗ Rising (Polite Question)" : "↘ Falling (Assertive)"}
                            </span>
                          </div>

                          <button
                            onClick={() => {
                              if (practiceMode && !isInterviewer) {
                                alert("Practice Mode active! Read the candidate response aloud yourself.");
                                return;
                              }
                              speakText(line.text, audioId, isInterviewer ? 1.1 : 0.95, 0.9);
                            }}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                              isPlaying
                                ? "bg-emerald-500 text-slate-950 animate-pulse"
                                : "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/30"
                            }`}
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            {isPlaying ? "Playing Line..." : "🔊 Listen Line"}
                          </button>
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

        {/* BLOCK 5: SIMULATOR */}
        {activeTab === "simulator" && (
          <div className="space-y-6">
            <CurriculumBlock
              icon={<Clock />}
              title="Block 5: Simulated Sponsor Mock Interview & Rubric Scorecard"
              subtitle="20 Minutes • Timed Mock Interview & Live Scorecard"
              methodology="Simulation & Feedback"
              accentColor="cyan"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">
                <div className="md:col-span-6 space-y-6">
                  <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mock Interview Clock</div>
                    <div className="text-5xl font-mono font-extrabold text-cyan-400 tracking-wider">
                      {formatTime(simTime)}
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => setSimRunning(!simRunning)}
                        className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                          simRunning ? "bg-amber-500 text-slate-950" : "bg-emerald-500 text-slate-950"
                        }`}
                      >
                        {simRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        {simRunning ? "Pause Timer" : "Start Mock Interview"}
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

                  <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white text-sm flex items-center gap-2">
                        <Shuffle className="w-4 h-4 text-cyan-400" /> Random Question Spinner
                      </h3>
                      <button
                        onClick={() => {
                          const randomId = Math.floor(Math.random() * 15) + 1;
                          setSimQuestionId(randomId);
                        }}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded-lg border border-cyan-500/30 hover:bg-cyan-500/30 cursor-pointer"
                      >
                        🎲 Spin Next Question
                      </button>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-2">
                      <span className="text-[10px] font-bold text-cyan-400 uppercase">Question #{simQuestion.id} ({simQuestion.category})</span>
                      <p className="text-sm font-bold text-white">{simQuestion.question}</p>
                      <div className="text-xs text-slate-400 pt-2 border-t border-white/5">
                        💡 Quick Hint: {simQuestion.formula}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-6 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                      <Award className="w-5 h-5 text-emerald-400" /> Teacher Evaluation Scorecard
                    </h3>
                    <span className="text-lg font-mono font-extrabold text-emerald-400">
                      {calculateTotalScore()} / 25
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    {[
                      { key: "clarity", label: "1. Phonetic Clarity & Pronunciation", desc: "No critical /v/ or past tense -ed errors" },
                      { key: "structure", label: "2. Response Structure (STAR)", desc: "Concrete childcare examples provided" },
                      { key: "fluency", label: "3. Spontaneity & Fluency", desc: "No long pauses or Spanish 'eeee' fillers" },
                      { key: "trait", label: "4. Personality Trait Impression", desc: "Exhibits Confidence, Maturity & Flexibility" },
                      { key: "compliance", label: "5. Visa & Program Safety Logic", desc: "Positive discipline & home ties confirmed" },
                    ].map((item) => (
                      <div key={item.key} className="space-y-1 bg-slate-950 p-3 rounded-xl border border-white/5">
                        <div className="flex items-center justify-between font-bold text-slate-200">
                          <span>{item.label}</span>
                          <select
                            value={(scores as any)[item.key]}
                            onChange={(e) => setScores({ ...scores, [item.key]: parseInt(e.target.value) })}
                            className="bg-slate-900 text-cyan-400 border border-white/10 rounded px-2 py-0.5 font-mono cursor-pointer"
                          >
                            {[1, 2, 3, 4, 5].map((val) => (
                              <option key={val} value={val}>
                                {val} / 5
                              </option>
                            ))}
                          </select>
                        </div>
                        <p className="text-[10px] text-slate-400">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className={`p-4 rounded-xl border text-xs text-center font-bold ${
                    calculateTotalScore() >= 20
                      ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                      : "bg-amber-500/10 text-amber-300 border-amber-500/30"
                  }`}>
                    {calculateTotalScore() >= 20
                      ? "🎉 PASSED: Approved for Host Family Matching! Excellent High-Intermediate/Advanced standard."
                      : "⚠️ NEEDS DRILL: Score is under 20. Retake Block 2 Phonetics & Block 4 Dialogues."}
                  </div>
                </div>
              </div>
            </CurriculumBlock>
          </div>
        )}

        {/* CHEAT SHEET */}
        {activeTab === "handout" && (
          <div className="space-y-6">
            <CurriculumBlock
              icon={<ShieldCheck />}
              title="Printable Student Cheat Sheet: Top 10 Golden Rules"
              subtitle="Quick Pre-Interview Reference Guide"
              methodology="Self-Study Reference"
              accentColor="cyan"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  "1. NEVER mention physical punishment or spanking. Always state 'Positive Discipline'.",
                  "2. ALWAYS state clear plans to return home to Colombia after completing your J-1 year.",
                  "3. Use concrete EXAMPLES (ages, numbers, specific activities) for every childcare question.",
                  "4. Watch your top teeth on bottom lip for /v/ words (Live, Very, Overcome).",
                  "5. Eliminate 'eeee' or 'este' -> Use 'That is a great question...' as a transition phrase.",
                  "6. Maintain steady camera eye contact and keep a warm, open smile throughout.",
                  "7. Confirm you can handle 45 hours/week by citing past busy study/work routines.",
                  "8. Highlight host family teamwork, weekly check-ins, and open communication.",
                  "9. Pronounce regular past tense cleanly (worked = /wɜːkt/, traveled = /ˈtrævəld/).",
                  "10. Show enthusiasm! Confident, mature, and flexible au pairs get matched first!",
                ].map((rule, idx) => (
                  <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-200 font-medium leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </CurriculumBlock>
          </div>
        )}

      </div>

      <CurriculumNavigation
        prevHref="/english-class/au-pair-5-hours"
        prevLabel="Au Pair 5-Hour Course"
        nextHref="/english-class/hours-1-2"
        nextLabel="Hours 1 & 2: General Essentials"
        accentColor="teal"
        moduleTitle="Au Pair Sponsor Interview Masterclass"
      />
    </div>
  );
}

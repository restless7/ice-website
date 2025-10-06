"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import RealTimeVoiceChat from '@/app/components/RealTimeVoiceChat';
import {
  ArrowLeft,
  Cpu,
  Bot,
  User,
  MessageSquare,
  BarChart2,
  Settings,
  Bell,
  Download,
  Upload,
  Zap,
  BookOpen,
  Sliders,
  Layers,
  Search,
  RotateCw,
  Save,
  X,
  CheckCircle,
  AlertCircle,
  PlayCircle,
  Paperclip,
  Mic,
  Send,
  TrendingUp,
  ThumbsUp,
  ThumbsDown,
  Globe,
  Calendar,
  Clock,
  DollarSign,
  GraduationCap,
  Heart,
  Eye,
  Phone,
  Volume2,
  VolumeX,
  Pause,
  Play,
  MicOff
} from "lucide-react";

// Mock data for CreatorAI Assistant Dashboard
const mockAiData = {
  stats: {
    conversationsToday: 340,
    avgResolutionTime: "12 seconds",
    satisfactionRate: 96.7,
    escalations: 3,
    issuesResolved: 642
  },
  recentConversations: [
    {
      id: 1,
      topic: "Custom Video Request with Sarah M.",
      user: "VIP_Fan_2024",
      status: "resolved",
      time: "2 minutes ago",
      agent: "CreatorAI",
      summary: "Successfully handled custom content pricing and scheduling. Generated $150 in revenue."
    },
    {
      id: 2,
      topic: "Subscription Renewal Question",
      user: "LoyalFan_Jake",
      status: "resolved",
      time: "8 minutes ago",
      agent: "CreatorAI",
      summary: "Provided renewal incentives and exclusive content preview. Fan renewed with tip."
    },
    {
      id: 3,
      topic: "PPV Content Inquiry",
      user: "NewSubscriber_Alex",
      status: "resolved",
      time: "15 minutes ago",
      agent: "CreatorAI",
      summary: "Upsold premium content bundle. Increased average order value by 280%."
    }
  ],
  performance: {
    resolutionRate: 94.3,
    firstContactResolution: 91.8,
    avgInteractions: 2.1,
    commonTopics: [
      { topic: "Custom Content Requests", percentage: 42 },
      { topic: "Subscription Management", percentage: 28 },
      { topic: "PPV Content Inquiries", percentage: 18 },
      { topic: "Pricing Questions", percentage: 8 },
      { topic: "Platform Support", percentage: 4 }
    ]
  },
  knowledgeBase: {
    articles: [
      { 
        id: 1, 
        title: "Ultimate Guide to Fan Engagement Strategies", 
        category: "Fan Engagement", 
        views: 1247, 
        lastUpdated: "2024-12-15",
        content: `# Ultimate Guide to Fan Engagement Strategies

## Building Deep Connections with Your Audience

### Personalization Techniques
- **Custom Greetings**: Always use fan names and reference previous conversations
- **Remember Preferences**: Track favorite content types, spending habits, and interaction patterns
- **Special Occasions**: Acknowledge birthdays, anniversaries, and personal milestones
- **Tailored Content**: Create content based on individual fan interests and requests

### Communication Best Practices
- **Response Time**: Aim to respond within 2-4 hours maximum
- **Authentic Voice**: Maintain your unique personality while being professional
- **Active Listening**: Ask follow-up questions and show genuine interest
- **Emotional Connection**: Share personal stories and create intimate moments

## Engagement Escalation Ladder

### Level 1: Initial Contact
- Welcome new subscribers with personalized messages
- Send exclusive content as a "thank you" for joining
- Establish communication preferences and boundaries

### Level 2: Regular Interaction
- Daily check-ins and casual conversations
- Share behind-the-scenes content and daily life
- Respond to comments and messages consistently

### Level 3: Premium Engagement
- Offer custom content and personalized requests
- Provide exclusive access to new content before public release
- Create special content based on fan suggestions

### Level 4: VIP Treatment
- One-on-one video calls or voice messages
- Custom photo sets or videos with fan's name
- Exclusive merchandise or physical items
- Anniversary celebrations and special recognition

## Content Strategy for Engagement

### Content Types That Drive Engagement
1. **Interactive Polls**: Ask fans to vote on outfit choices, content themes
2. **Q&A Sessions**: Regular ask-me-anything posts
3. **Behind-the-Scenes**: Preparation process, daily routines
4. **Tutorials**: Makeup, fitness, lifestyle tips
5. **Personal Stories**: Challenges, achievements, life updates

### Timing Optimization
- **Peak Hours**: 7-9 PM local time for highest engagement
- **Weekend Boost**: Friday-Sunday typically see 40% higher interaction
- **Special Events**: Holidays, birthdays, platform anniversaries

## Fan Retention Strategies

### Subscription Renewal Techniques
- Send renewal reminders 1 week before expiration
- Offer loyalty discounts for long-term subscribers
- Create "what you missed" highlight reels
- Exclusive renewal bonuses and content

### Dealing with Fan Concerns
- Address complaints quickly and professionally
- Offer solutions or alternatives when possible
- Follow up to ensure satisfaction
- Use feedback to improve content and service

## Advanced Engagement Metrics

### Key Performance Indicators
- **Response Rate**: Percentage of fans who engage with content
- **Message-to-Sale Conversion**: How often conversations lead to purchases
- **Average Conversation Length**: Number of messages per interaction
- **Fan Lifetime Value**: Total spending per subscriber over time

### Tracking Tools
- Use platform analytics to monitor engagement trends
- Create spreadsheets to track individual fan preferences
- Set up alerts for high-value fan interactions
- Regular review of successful conversation patterns`
      },
      { 
        id: 2, 
        title: "Content Monetization Masterclass", 
        category: "Content Monetization", 
        views: 892, 
        lastUpdated: "2024-12-14",
        content: `# Content Monetization Masterclass

## Revenue Stream Diversification

### Primary Revenue Sources
- **Subscription Fees**: Monthly recurring revenue from platform subscriptions
- **Pay-Per-View (PPV)**: Premium content sold individually
- **Custom Content**: Personalized videos, photos, and experiences
- **Tips and Donations**: Spontaneous fan appreciation payments
- **Merchandise Sales**: Branded items and physical products
- **Live Streaming**: Real-time interactive content with donations

### Pricing Psychology

#### Subscription Tiers
- **Basic Tier ($9.99/month)**: Access to regular posts and basic interaction
- **Premium Tier ($19.99/month)**: Exclusive content, priority messaging
- **VIP Tier ($39.99/month)**: Custom content, video calls, personal attention

#### PPV Content Pricing
- **Photo Sets**: $15-25 for 10-15 high-quality images
- **Short Videos (2-5 min)**: $20-35 per video
- **Long-form Content (10+ min)**: $40-75 per video
- **Custom Requests**: $50-200+ depending on complexity

## Content Value Optimization

### High-Converting Content Types
1. **Exclusive Reveals**: Content not available elsewhere (85% conversion rate)
2. **Interactive Content**: Polls, games, personalized responses (72% conversion)
3. **Limited-Time Offers**: Scarcity-driven sales (68% conversion)
4. **Custom Requests**: Personalized content (95% conversion)
5. **Behind-the-Scenes**: Authentic, personal moments (61% conversion)

### Content Bundling Strategies
- **Weekly Packages**: Combine photos, videos, and messages
- **Themed Collections**: Holiday, seasonal, or fantasy-themed bundles
- **Fan Favorite Compilations**: Best-of collections from past content
- **Progressive Reveals**: Multi-part stories that build anticipation

## Upselling and Cross-selling

### Natural Upsell Opportunities
- After subscription renewal: Offer premium add-ons
- During high-engagement conversations: Suggest custom content
- Following PPV purchases: Recommend similar content
- Before special events: Present exclusive packages

### Cross-selling Techniques
- **Product Recommendations**: Suggest related content or merchandise
- **Experience Upgrades**: Convert message interactions to video calls
- **Seasonal Promotions**: Holiday-themed content and packages
- **Fan Request Fulfillment**: Turn suggestions into purchasable content

## Revenue Optimization Strategies

### Demand-Based Pricing
- Monitor which content types sell best at different price points
- Adjust prices based on fan feedback and purchase patterns
- Create premium pricing for highly requested content
- Implement dynamic pricing for limited-time offers

### Fan Spending Analysis
- **High Spenders (Top 10%)**: Focus on premium custom content
- **Regular Supporters (Next 30%)**: Offer mid-tier packages and bundles
- **Casual Fans (Remaining 60%)**: Provide accessible entry-level content

### Revenue Tracking Metrics
- **Average Revenue Per User (ARPU)**: Total revenue ÷ number of subscribers
- **Customer Lifetime Value (CLV)**: Average total spending per fan
- **Conversion Rates**: Percentage of interactions that result in sales
- **Revenue Growth Rate**: Month-over-month revenue increase

## Advanced Monetization Techniques

### Scarcity and Exclusivity
- Limited edition content (only 50 copies available)
- Time-sensitive offers (24-hour availability)
- Exclusive access for top-tier subscribers
- Numbered or signed digital content

### Gamification Elements
- Loyalty points system for frequent purchasers
- Achievement badges for different spending levels
- Exclusive content unlocked through engagement
- Special recognition for long-term supporters

### Partnership Opportunities
- Collaborate with other creators for cross-promotion
- Brand partnerships for sponsored content
- Affiliate marketing for related products
- Joint content creation with revenue sharing`
      },
      { 
        id: 3, 
        title: "Subscription Management Best Practices", 
        category: "Subscription Management", 
        views: 645, 
        lastUpdated: "2024-12-13",
        content: `# Subscription Management Best Practices

## Subscriber Onboarding Excellence

### Welcome Sequence (First 24 Hours)
1. **Immediate Welcome Message**: Personalized greeting within 5 minutes
2. **Content Preview**: Send 2-3 exclusive items as welcome gifts
3. **Expectation Setting**: Explain content schedule and interaction style
4. **Preference Survey**: Ask about favorite content types and interests
5. **Community Introduction**: Explain platform features and community rules

### First Week Strategy
- Daily check-ins to ensure satisfaction
- Share mix of free and premium content
- Respond quickly to all messages and comments
- Ask for feedback on initial content
- Offer first-time subscriber bonus content

## Retention Optimization

### Monthly Retention Tactics
- **Week 1**: High-engagement welcome period
- **Week 2**: Establish regular posting rhythm
- **Week 3**: Introduce premium content options
- **Week 4**: Renewal preparation and loyalty rewards

### Long-term Retention Strategies
- **Anniversary Celebrations**: Special content for subscription milestones
- **Loyalty Programs**: Increasing benefits for longer subscriptions
- **Exclusive Events**: Subscriber-only live streams or Q&As
- **Personal Touch**: Remember personal details and reference past conversations

## Churn Prevention

### Early Warning Signs
- Decreased interaction with content (likes, comments)
- Reduced message frequency or shorter responses
- No PPV purchases in the last 30 days
- Missed responses to direct messages
- Complaints about content frequency or quality

### Retention Interventions
1. **Personal Outreach**: Send caring, non-sales focused message
2. **Content Audit**: Ask what they'd like to see more/less of
3. **Special Offer**: Provide bonus content or discount
4. **Problem Resolution**: Address any specific concerns
5. **Win-back Campaign**: Exclusive content to re-engage

## Renewal Management

### Pre-Renewal Strategy (5-7 days before)
- Send personalized renewal reminder
- Highlight value received during subscription period
- Preview upcoming content and special events
- Offer early renewal incentives or bonuses
- Address any outstanding concerns or feedback

### Renewal Day Excellence
- Thank fans for their continued support
- Deliver promised bonus content immediately
- Set expectations for the upcoming month
- Ask for testimonials or feedback to share

### Post-Renewal Follow-up
- Confirmation message with appreciation
- Deliver any promised renewal bonuses
- Update fan status in your tracking system
- Plan special content for long-term subscribers

## Subscriber Segmentation

### Fan Categories
1. **New Subscribers (0-30 days)**: Focus on onboarding and first impressions
2. **Regular Supporters (1-6 months)**: Build deeper relationship and increase engagement
3. **Loyal Fans (6-12 months)**: Offer premium experiences and exclusive access
4. **VIP Members (12+ months)**: Provide highest level of personal attention

### Communication Strategies by Segment
- **New**: Educational, welcoming, high-frequency contact
- **Regular**: Consistent, entertaining, moderate upselling
- **Loyal**: Personal, exclusive, premium offerings
- **VIP**: Intimate, custom, highest-value experiences

## Performance Metrics

### Key Subscription Metrics
- **Monthly Recurring Revenue (MRR)**: Predictable monthly income
- **Churn Rate**: Percentage of subscribers who cancel each month
- **Average Customer Lifespan**: How long fans typically stay subscribed
- **Net Revenue Retention**: Revenue growth from existing subscribers

### Subscriber Health Score
Calculate based on:
- Message response rate (25%)
- Content engagement level (25%)
- Purchase history (25%)
- Subscription length (25%)

## Advanced Subscription Features

### Tiered Subscription Model
- **Starter ($9.99)**: Basic access and monthly content
- **Premium ($19.99)**: Weekly exclusive content + messaging priority
- **VIP ($39.99)**: Daily content + custom requests + video calls
- **Ultimate ($79.99)**: Everything + physical merchandise + personal number

### Auto-Renewal Optimization
- Enable by default with clear terms
- Send renewal reminders well in advance
- Provide easy management options
- Offer pause instead of cancellation
- Exit surveys to understand cancellation reasons`
      },
      { 
        id: 4, 
        title: "Platform Policies and Compliance Guide", 
        category: "Platform Policies", 
        views: 523, 
        lastUpdated: "2024-12-12",
        content: `# Platform Policies and Compliance Guide

## Content Guidelines and Restrictions

### Acceptable Content Standards
- **Age Verification**: All participants must be 18+ with verified identification
- **Consent Documentation**: Maintain records of consent for all content
- **Content Ownership**: Only upload original content you have rights to use
- **Quality Standards**: Professional lighting, clear audio, high resolution
- **Authenticity**: No misleading representations or false advertising

### Prohibited Content
- **Illegal Activities**: No content depicting illegal acts
- **Non-Consensual**: All content must be created with full consent
- **Harmful Behavior**: No content promoting self-harm or dangerous activities
- **Harassment**: No bullying, doxxing, or targeted harassment
- **Spam Content**: No repetitive or low-effort mass-produced content

## Financial Compliance

### Tax Obligations
- **Income Reporting**: Report all earnings to tax authorities
- **Record Keeping**: Maintain detailed records of all transactions
- **Quarterly Payments**: Set aside 25-30% of earnings for taxes
- **Business Expenses**: Track deductible expenses (equipment, marketing)
- **Professional Advice**: Consult with tax professional for complex situations

### Payment Processing
- **Identity Verification**: Complete KYC (Know Your Customer) requirements
- **Banking Information**: Provide accurate bank details for payouts
- **Minimum Thresholds**: Understand minimum payout amounts
- **Processing Times**: Know typical payout schedules and delays
- **Fee Structures**: Understand platform fees and transaction costs

## Privacy and Data Protection

### Personal Information Security
- **Real Name Protection**: Never share your legal name publicly
- **Location Privacy**: Avoid revealing specific location details
- **Contact Information**: Keep personal phone/email addresses private
- **Social Media Separation**: Maintain separate personal and professional accounts
- **Family Protection**: Never involve family members without consent

### Fan Data Management
- **Data Collection**: Only collect necessary information from fans
- **Storage Security**: Use secure methods to store fan information
- **Information Sharing**: Never share fan data with third parties
- **Retention Policies**: Delete old data according to platform requirements
- **Access Rights**: Honor fan requests to access or delete their data

## Copyright and Intellectual Property

### Protecting Your Content
- **Watermarking**: Add subtle watermarks to photos and videos
- **DMCA Registration**: Register for DMCA protection services
- **Content Monitoring**: Regularly search for unauthorized use of your content
- **Takedown Notices**: File DMCA takedown requests for stolen content
- **Legal Documentation**: Keep records of content creation dates and ownership

### Using Third-Party Content
- **Music Licensing**: Only use royalty-free or licensed music
- **Image Rights**: Ensure you have rights to use any images or graphics
- **Brand References**: Avoid using trademarked names or logos
- **Location Permissions**: Get permission for filming in private locations
- **Model Releases**: Obtain signed releases from anyone appearing in content

## Communication Compliance

### Professional Boundaries
- **Personal Information**: Don't share personal details like address or real name
- **Meeting Arrangements**: Never agree to in-person meetings with fans
- **Alternative Platforms**: Keep all communication within platform ecosystem
- **Emergency Contacts**: Don't provide personal phone numbers for "emergencies"
- **Financial Information**: Never share banking or credit card details

### Harassment Prevention
- **Clear Boundaries**: Establish and communicate your limits clearly
- **Blocking Tools**: Use platform blocking features for problematic users
- **Reporting System**: Report harassment or abuse to platform administrators
- **Evidence Collection**: Screenshot and document any harassment incidents
- **Support Networks**: Connect with other creators for advice and support

## Safety and Security Measures

### Online Safety Protocols
- **VPN Usage**: Use VPN to protect your IP address and location
- **Secure Passwords**: Use strong, unique passwords for all accounts
- **Two-Factor Authentication**: Enable 2FA on all platform and financial accounts
- **Regular Updates**: Keep all software and apps updated with latest security patches
- **Backup Systems**: Maintain secure backups of all content and important data

### Physical Safety Considerations
- **Location Concealment**: Remove identifying background elements from content
- **Schedule Privacy**: Don't share real-time location or schedule information
- **Delivery Addresses**: Use PO boxes or mail services for fan mail
- **Emergency Plans**: Have safety plans for various scenarios
- **Support System**: Maintain relationships with trusted friends or family

## Platform-Specific Guidelines

### OnlyFans Compliance
- **Verification Requirements**: Complete all identity and tax verification
- **Content Standards**: Follow community guidelines for acceptable content
- **Promotional Rules**: Understand restrictions on external promotion
- **Payout Policies**: Know minimum amounts and payout schedules
- **Account Security**: Use recommended security settings and practices

### Multi-Platform Strategy
- **Cross-Promotion Rules**: Understand each platform's promotion policies
- **Content Adaptation**: Modify content to meet different platform requirements
- **Audience Segmentation**: Tailor content strategy for each platform's audience
- **Revenue Tracking**: Monitor earnings across all platforms
- **Compliance Management**: Stay updated on policy changes across platforms`
      },
      { 
        id: 5, 
        title: "Advanced Creator Tools and Analytics", 
        category: "Creator Tools", 
        views: 389, 
        lastUpdated: "2024-12-11",
        content: `# Advanced Creator Tools and Analytics

## Essential Creator Software Stack

### Content Creation Tools
- **Photo Editing**: Adobe Photoshop, Lightroom, or free alternatives like GIMP
- **Video Editing**: Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve
- **Design Software**: Canva, Adobe Illustrator for graphics and thumbnails
- **Camera Apps**: VSCO, Camera+ for enhanced mobile photography
- **Screen Recording**: OBS Studio for live streaming and screen capture

### Business Management Tools
- **Scheduling**: Later, Buffer, or Hootsuite for content scheduling
- **Analytics**: Google Analytics, platform-native analytics tools
- **Customer Relationship Management (CRM)**: Notion, Airtable, or dedicated fan management systems
- **Financial Tracking**: QuickBooks, Wave, or Excel/Google Sheets
- **Communication**: Discord, Telegram for fan community management

## Analytics and Performance Tracking

### Key Performance Indicators (KPIs)
1. **Revenue Metrics**
   - Monthly Recurring Revenue (MRR)
   - Average Revenue Per User (ARPU)
   - Customer Lifetime Value (CLV)
   - Revenue growth rate month-over-month

2. **Engagement Metrics**
   - Post engagement rate (likes, comments, shares)
   - Message response rate and time
   - Content view-to-purchase conversion rate
   - Fan retention rate by month

3. **Content Performance**
   - Most popular content types and themes
   - Optimal posting times and frequency
   - PPV content conversion rates
   - Custom request fulfillment rate

### Analytics Dashboard Creation
- **Revenue Tracking**: Daily, weekly, and monthly income reports
- **Fan Behavior**: Interaction patterns and preferences
- **Content Performance**: Most successful posts and formats
- **Growth Metrics**: Subscriber acquisition and retention rates
- **Goal Progress**: Track progress toward monthly and yearly targets

## Automation and Workflow Optimization

### Automated Messaging Systems
- **Welcome Sequences**: Automated onboarding for new subscribers
- **Birthday Messages**: Automated happy birthday messages to fans
- **Renewal Reminders**: Scheduled reminders before subscription expiration
- **Thank You Messages**: Automatic responses to tips and purchases
- **Inactive Fan Re-engagement**: Automated campaigns for inactive subscribers

### Content Scheduling Strategies
- **Batch Creation**: Create multiple pieces of content in single sessions
- **Content Calendar**: Plan content themes and posting schedule in advance
- **Seasonal Planning**: Prepare holiday and special event content early
- **Repurposing Systems**: Turn long-form content into multiple shorter pieces
- **Cross-Platform Distribution**: Adapt content for different platforms simultaneously

## Advanced Fan Management

### Customer Segmentation Tools
- **Spending Tiers**: Categorize fans by monthly spending amount
- **Engagement Levels**: Group fans by interaction frequency and quality
- **Content Preferences**: Segment based on favorite content types
- **Subscription Length**: Organize by how long fans have been subscribed
- **Geographic Location**: Consider time zones for optimal communication

### Personalization at Scale
- **Template Messages**: Create templates for common situations
- **Fan Profile System**: Maintain detailed profiles with preferences and history
- **Automated Tags**: Use systems to tag fans with relevant characteristics
- **Personalized Recommendations**: Suggest content based on past purchases
- **Custom Content Tracking**: Monitor custom request fulfillment and satisfaction

## Revenue Optimization Tools

### Pricing Strategy Software
- **A/B Testing Tools**: Test different price points for PPV content
- **Dynamic Pricing**: Adjust prices based on demand and fan behavior
- **Bundle Optimization**: Find the most profitable content combinations
- **Seasonal Pricing**: Implement holiday and special event pricing strategies
- **Competition Analysis**: Monitor competitor pricing and adjust accordingly

### Conversion Rate Optimization
- **Landing Page Builders**: Create compelling subscription and purchase pages
- **Email Marketing**: Maintain email lists for fan communication
- **Retargeting Systems**: Re-engage fans who didn't complete purchases
- **Social Proof Tools**: Display testimonials and subscriber counts
- **Scarcity Timers**: Add urgency to limited-time offers

## Security and Privacy Tools

### Content Protection
- **Watermarking Software**: Automatically add watermarks to all content
- **DRM Solutions**: Digital rights management for premium content
- **Reverse Image Search**: Monitor for unauthorized use of your content
- **Legal Templates**: Contracts and terms of service for custom content
- **DMCA Services**: Professional takedown and copyright protection

### Personal Security
- **VPN Services**: Protect your location and online activity
- **Password Managers**: Securely store and generate strong passwords
- **Two-Factor Authentication**: Enable 2FA on all accounts
- **Secure Communication**: Encrypted messaging for sensitive conversations
- **Identity Monitoring**: Services that alert you to potential identity theft

## Growth and Marketing Tools

### Social Media Management
- **Multi-Platform Posting**: Share content across multiple social platforms
- **Hashtag Research**: Find the most effective hashtags for discovery
- **Influencer Collaboration**: Tools for finding and managing collaborations
- **Community Building**: Discord, Reddit community management
- **Cross-Promotion Networks**: Connect with other creators for mutual promotion

### SEO and Discovery Optimization
- **Keyword Research**: Find the terms your potential fans are searching for
- **Profile Optimization**: Optimize bio and profile information for discovery
- **Content Tags**: Use relevant tags to improve content discoverability
- **Link Building**: Create backlinks to your profiles from other websites
- **Analytics Integration**: Connect Google Analytics to track traffic sources`
      }
    ],
    documents: 245,
    accuracy: 98.7
  }
};

const mockChatHistory: any[] = [];

export default function AiAgentDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [chatMessages, setChatMessages] = useState(mockChatHistory);
  const [userInput, setUserInput] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Knowledge Base hooks
  const [articles, setArticles] = useState([]);
  const [kbLoading, setKbLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Voice Tone hooks
  const [voiceTone, setVoiceTone] = useState({
    preset: 'friendly',
    customPrompt: '',
    isCustom: false
  });
  const [voiceTonePresets, setVoiceTonePresets] = useState<any>({});
  const [voiceToneLoading, setVoiceToneLoading] = useState(false);
  
  // Voice Agent hooks
  const [voiceMessages, setVoiceMessages] = useState<any[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [voiceLoading, setVoiceLoading] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<any[]>([]);
  const [selectedVoice, setSelectedVoice] = useState('EXAVITQu4vr4xnSDxMaL');
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);

  // Knowledge Base Management hooks
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewingArticle, setViewingArticle] = useState<any>(null);
  const [editForm, setEditForm] = useState({ title: '', category: '', content: '' });
  const [operationLoading, setOperationLoading] = useState(false);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);
  
  // Knowledge Base effects
  useEffect(() => {
    if (activeTab === 'knowledge') {
      fetchArticles();
    }
  }, [selectedCategory, searchTerm, activeTab]);
  
  // Voice Tone effects
  useEffect(() => {
    if (activeTab === 'settings') {
      fetchVoiceToneConfig();
    }
  }, [activeTab]);
  
  // Voice Agent effects
  useEffect(() => {
    if (activeTab === 'voice-agent') {
      fetchAvailableVoices();
    }
  }, [activeTab]);
  
  // Helper functions
  const fetchArticles = async () => {
    setKbLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedCategory !== 'all') params.append('category', selectedCategory);
      if (searchTerm) params.append('search', searchTerm);
      
      const response = await fetch(`/api/ai-agent/knowledge-base?${params}`);
      const data = await response.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setKbLoading(false);
    }
  };
  
  const fetchVoiceToneConfig = async () => {
    try {
      const response = await fetch('/api/ai-agent/voice-tone');
      const data = await response.json();
      if (data.success) {
        setVoiceTone(data.currentTone);
        setVoiceTonePresets(data.availablePresets);
      }
    } catch (error) {
      console.error('Error fetching voice tone config:', error);
    }
  };
  
  const updateVoiceTone = async () => {
    setVoiceToneLoading(true);
    try {
      const response = await fetch('/api/ai-agent/voice-tone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(voiceTone)
      });
      const data = await response.json();
      if (data.success) {
        console.log('Voice tone updated successfully');
      }
    } catch (error) {
      console.error('Error updating voice tone:', error);
    } finally {
      setVoiceToneLoading(false);
    }
  };

  // Voice Agent functions
  const fetchAvailableVoices = async () => {
    try {
      const response = await fetch('/api/ai-agent/voice-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'get-voices' })
      });
      const data = await response.json();
      if (data.success) {
        setAvailableVoices(data.voices);
      }
    } catch (error) {
      console.error('Error fetching voices:', error);
    }
  };

  const startVoiceRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: Blob[] = [];
      
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };
      
      recorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: 'audio/wav' });
        handleVoiceMessage(audioBlob);
        setAudioChunks([]);
      };
      
      setMediaRecorder(recorder);
      setAudioChunks(chunks);
      recorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting voice recording:', error);
      alert('No se pudo acceder al micrófono. Por favor, verifica los permisos.');
    }
  };

  const stopVoiceRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
      mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
  };

  const handleVoiceMessage = async (audioBlob: Blob) => {
    setVoiceLoading(true);
    
    // Add user message to voice messages
    const userMessage = {
      id: voiceMessages.length + 1,
      sender: 'user',
      type: 'audio',
      audioBlob,
      timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    };
    
    setVoiceMessages(prev => [...prev, userMessage]);
    
    try {
      // Convert audio to text (you would implement speech-to-text here)
      // For now, we'll simulate with a text message
      const textMessage = "Hey gorgeous, I want to hear your voice...";
      
      const response = await fetch('/api/ai-agent/voice-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generate-response',
          message: textMessage,
          conversationHistory: voiceMessages
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        let botMessage;
        
        if (data.audioResponse && !data.fallbackMode) {
          // Full voice response available
          const audioBuffer = Uint8Array.from(atob(data.audioResponse), c => c.charCodeAt(0));
          const audioBlob = new Blob([audioBuffer], { type: 'audio/mpeg' });
          const audioUrl = URL.createObjectURL(audioBlob);
          
          botMessage = {
            id: voiceMessages.length + 2,
            sender: 'bot',
            type: 'voice',
            text: data.textResponse,
            audioUrl,
            timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
          };
        } else {
          // Fallback to text-only response
          botMessage = {
            id: voiceMessages.length + 2,
            sender: 'bot',
            type: 'text',
            text: data.textResponse + (data.fallbackMode ? ' (Voice unavailable)' : ''),
            timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
          };
        }
        
        setVoiceMessages(prev => [...prev, botMessage]);
      }
    } catch (error) {
      console.error('Error processing voice message:', error);
      const errorMessage = {
        id: voiceMessages.length + 2,
        sender: 'bot',
        type: 'text',
        text: "Hey baby, I'm having some trouble hearing you right now. Can you try again for me?",
        timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
      };
      setVoiceMessages(prev => [...prev, errorMessage]);
    } finally {
      setVoiceLoading(false);
    }
  };

  const playVoiceMessage = (audioUrl: string) => {
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
      setIsPlaying(false);
    }
    
    const audio = new Audio(audioUrl);
    audio.onended = () => {
      setIsPlaying(false);
      setCurrentAudio(null);
    };
    
    audio.play();
    setCurrentAudio(audio);
    setIsPlaying(true);
  };

  const stopVoicePlayback = () => {
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
      setIsPlaying(false);
    }
  };

  const sendTextToVoice = async (text: string) => {
    if (!text.trim()) return;
    
    setVoiceLoading(true);
    
    // Add user text message
    const userMessage = {
      id: voiceMessages.length + 1,
      sender: 'user',
      type: 'text',
      text,
      timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    };
    
    setVoiceMessages(prev => [...prev, userMessage]);
    
    try {
      const response = await fetch('/api/ai-agent/voice-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generate-response',
          message: text,
          conversationHistory: voiceMessages
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        let botMessage;
        let shouldAutoPlay = false;
        
        if (data.audioResponse && !data.fallbackMode) {
          // Full voice response available
          const audioBuffer = Uint8Array.from(atob(data.audioResponse), c => c.charCodeAt(0));
          const audioBlob = new Blob([audioBuffer], { type: 'audio/mpeg' });
          const audioUrl = URL.createObjectURL(audioBlob);
          
          botMessage = {
            id: voiceMessages.length + 2,
            sender: 'bot',
            type: 'voice',
            text: data.textResponse,
            audioUrl,
            timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
          };
          
          shouldAutoPlay = true;
        } else {
          // Fallback to text-only response
          botMessage = {
            id: voiceMessages.length + 2,
            sender: 'bot',
            type: 'text',
            text: data.textResponse + (data.fallbackMode ? ' 💬' : ''),
            timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
          };
        }
        
        setVoiceMessages(prev => [...prev, botMessage]);
        
        // Auto-play the response if voice is available
        if (shouldAutoPlay && botMessage.audioUrl) {
          setTimeout(() => {
            if (botMessage.audioUrl) {
              playVoiceMessage(botMessage.audioUrl);
            }
          }, 500);
        }
      }
    } catch (error) {
      console.error('Error sending text to voice:', error);
    } finally {
      setVoiceLoading(false);
    }
  };

  // Knowledge Base Management functions
  const handleEditArticle = (article: any) => {
    setSelectedArticle(article);
    setEditForm({
      title: article.title,
      category: article.category,
      content: article.content || ''
    });
    setShowEditModal(true);
  };

  const handleDeleteArticle = (article: any) => {
    setSelectedArticle(article);
    setShowDeleteModal(true);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadFile(file);
    }
  };

  const uploadDocument = async () => {
    if (!uploadFile) return;
    
    setOperationLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', uploadFile);
      
      const response = await fetch('/api/ai-agent/knowledge-base/upload', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      if (data.success) {
        setShowUploadModal(false);
        setUploadFile(null);
        fetchArticles(); // Refresh the list
        alert('Documento subido exitosamente');
      } else {
        alert('Error al subir el documento: ' + data.message);
      }
    } catch (error) {
      console.error('Error uploading document:', error);
      alert('Error al subir el documento');
    } finally {
      setOperationLoading(false);
    }
  };

  const updateArticle = async () => {
    setOperationLoading(true);
    try {
      const response = await fetch(`/api/ai-agent/knowledge-base/${selectedArticle.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm)
      });
      
      const data = await response.json();
      if (data.success) {
        setShowEditModal(false);
        setSelectedArticle(null);
        fetchArticles(); // Refresh the list
        alert('Artículo actualizado exitosamente');
      } else {
        alert('Error al actualizar el artículo: ' + data.message);
      }
    } catch (error) {
      console.error('Error updating article:', error);
      alert('Error al actualizar el artículo');
    } finally {
      setOperationLoading(false);
    }
  };

  const deleteArticle = async () => {
    setOperationLoading(true);
    try {
      const response = await fetch(`/api/ai-agent/knowledge-base/${selectedArticle.id}`, {
        method: 'DELETE'
      });
      
      const data = await response.json();
      if (data.success) {
        setShowDeleteModal(false);
        setSelectedArticle(null);
        fetchArticles(); // Refresh the list
        alert('Artículo eliminado exitosamente');
      } else {
        alert('Error al eliminar el artículo: ' + data.message);
      }
    } catch (error) {
      console.error('Error deleting article:', error);
      alert('Error al eliminar el artículo');
    } finally {
      setOperationLoading(false);
    }
  };

  const createNewArticle = () => {
    setSelectedArticle(null);
    setEditForm({ title: '', category: 'Fan Engagement', content: '' });
    setShowEditModal(true);
  };

  const handleViewArticle = async (article: any) => {
    setViewingArticle({ ...article, content: 'Cargando contenido...' });
    setShowViewModal(true);
    
    try {
      // Buscar el contenido completo del artículo
      const response = await fetch('/api/ai-agent/knowledge-base', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: article.title, maxResults: 1 })
      });
      
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setViewingArticle({ 
          ...article, 
          content: data.results[0].content || 'Contenido no disponible' 
        });
      } else {
        setViewingArticle({ 
          ...article, 
          content: 'Contenido no encontrado' 
        });
      }
    } catch (error) {
      console.error('Error fetching article content:', error);
      setViewingArticle({ 
        ...article, 
        content: 'Error al cargar el contenido' 
      });
    }
  };

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    const newUserMessage = {
      id: chatMessages.length + 1,
      sender: "user",
      text: userInput,
      timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages([...chatMessages, newUserMessage]);
    const currentInput = userInput;
    setUserInput("");

    // Mostrar indicador de typing
    const typingMessage = {
      id: chatMessages.length + 2,
      sender: "bot",
      text: "Escribiendo...",
      timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
      isTyping: true
    };

    setChatMessages(prevMessages => [...prevMessages, typingMessage]);

    // Llamar a la API de Gemini
    fetch('/api/ai-agent/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: currentInput,
        conversationHistory: chatMessages
      }),
    })
    .then(response => response.json())
    .then(data => {
      setChatMessages(prevMessages => 
        prevMessages.map(msg => 
          msg.isTyping 
            ? { 
                ...msg, 
                text: data.message || "Lo siento, no pude procesar tu consulta en este momento.", 
                isTyping: false 
              } 
            : msg
        )
      );
    })
    .catch(error => {
      console.error('Error calling AI API:', error);
      setChatMessages(prevMessages => 
        prevMessages.map(msg => 
          msg.isTyping 
            ? { 
                ...msg, 
                text: "Lo siento, estoy experimentando dificultades técnicas. Por favor, intenta nuevamente o contacta con nuestro equipo de soporte.", 
                isTyping: false 
              } 
            : msg
        )
      );
    });
  };

  const StatCard = ({ title, value, icon: Icon, trend = null }: any) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {trend && (
            <div className="flex items-center mt-2">
              <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-sm font-medium text-green-600">{trend}</span>
            </div>
          )}
        </div>
        <div className="p-3 rounded-lg bg-fuchsia-100">
          <Icon className="h-6 w-6 text-fuchsia-600" />
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <StatCard title="Conversaciones Hoy" value={mockAiData.stats.conversationsToday} icon={MessageSquare} trend="+12%" />
        <StatCard title="Resolución Promedio" value={mockAiData.stats.avgResolutionTime} icon={Clock} />
        <StatCard title="Satisfacción" value={`${mockAiData.stats.satisfactionRate}%`} icon={ThumbsUp} />
        <StatCard title="Escalaciones" value={mockAiData.stats.escalations} icon={User} />
        <StatCard title="Resueltas por IA" value={`${mockAiData.performance.resolutionRate}%`} icon={CheckCircle} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Conversations */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Conversaciones Recientes</h3>
            <button className="text-fuchsia-600 hover:text-fuchsia-700 text-sm font-medium">Ver todas</button>
          </div>
          <div className="space-y-4">
            {mockAiData.recentConversations.map(convo => (
              <div key={convo.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{convo.topic}</h4>
                    <p className="text-sm text-gray-500">con {convo.user}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    convo.status === 'resolved' ? 'bg-green-100 text-green-800' :
                    convo.status === 'escalated' ? 'bg-red-100 text-red-800' :
                    'bg-fuchsia-100 text-fuchsia-800'
                  }`}>{convo.status}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{convo.summary}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{convo.agent}</span>
                  <span>{convo.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Temas Comunes</h3>
          <div className="space-y-3">
            {mockAiData.performance.commonTopics.map(topic => (
              <div key={topic.topic}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">{topic.topic}</span>
                  <span className="text-gray-500">{topic.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-fuchsia-500 to-purple-600 h-2 rounded-full"
                    style={{ width: `${topic.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPlayground = () => (
    <div className="h-[75vh] flex space-x-6">
      {/* Chat Interface */}
      <div className="flex-1 flex flex-col bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white">
              <Heart className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Bella - AI Companion</h3>
              <p className="text-sm text-gray-500">Your seductive AI assistant ready to help maximize revenue</p>
            </div>
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors" onClick={() => setChatMessages([])}>
            <RotateCw className="h-4 w-4" />
          </button>
        </div>
        <div ref={chatContainerRef} className="flex-1 p-6 overflow-y-auto space-y-6">
          {chatMessages.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <p className="text-gray-500 mb-2">Hey gorgeous! I'm Bella, your AI companion 💋</p>
              <p className="text-sm text-gray-400">Ask me anything about maximizing your revenue and engaging with fans...</p>
            </div>
          )}
          
          {chatMessages.map(msg => (
            <div key={msg.id} className={`flex items-start space-x-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white">
                  <Heart className="h-5 w-5" />
                </div>
              )}
              <div className={`max-w-md p-3 rounded-lg ${
                msg.sender === 'user' ? 'bg-gray-200 text-gray-900' : 'bg-gradient-to-r from-pink-100 to-red-100 text-pink-900'
              }`}>
                <p>{msg.text}</p>
                <p className={`text-xs mt-1 ${
                  msg.sender === 'user' ? 'text-gray-500 text-right' : 'text-pink-500'
                }`}>{msg.timestamp}</p>
              </div>
              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white">
                  <User className="h-5 w-5" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-200 flex items-center space-x-3">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors"><Paperclip className="h-5 w-5" /></button>
          <input 
            type="text"
            placeholder="Tell me what you want to know, baby... 💋"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors"><Mic className="h-5 w-5" /></button>
          <button 
            onClick={handleSendMessage}
            className="p-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full hover:from-pink-600 hover:to-red-600 transition-all"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Context Panel */}
      <div className="w-1/3 bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Fan Context</h3>
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-3">
            <User className="h-5 w-5 text-gray-500" />
            <span className="font-medium text-gray-900">VIP_Fan_2024</span>
          </div>
          <div className="flex items-center space-x-3">
            <Heart className="h-5 w-5 text-pink-500" />
            <span className="font-medium text-gray-900">Subscriber for 6 months</span>
          </div>
          <div className="flex items-center space-x-3">
            <DollarSign className="h-5 w-5 text-green-500" />
            <span className="font-medium text-gray-900">$850 Total Spent</span>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-gray-500" />
            <span className="font-medium text-gray-900">Last Active: Today</span>
          </div>
          <div className="border-t pt-4">
            <h4 className="font-medium text-gray-900 mb-2">Recent Purchases</h4>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li><span className="text-green-600">Custom Video ($150)</span></li>
              <li><span className="text-purple-600">PPV Bundle ($75)</span></li>
              <li><span className="text-pink-600">Tip ($25)</span></li>
            </ul>
          </div>
          <div className="border-t pt-4">
            <h4 className="font-medium text-gray-900 mb-2">Preferences</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">Custom Content</span>
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">High Spender</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Loyal Fan</span>
            </div>
          </div>
          <div className="border-t pt-4">
            <h4 className="font-medium text-gray-900 mb-3">Quick Actions</h4>
            <div className="space-y-2">
              <button 
                onClick={() => {
                  const input = "How can I increase my PPV sales?";
                  setUserInput(input);
                  handleSendMessage();
                  setUserInput("");
                }}
                className="w-full px-3 py-2 text-left text-sm bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors"
              >
                💰 PPV Revenue Tips
              </button>
              <button 
                onClick={() => {
                  const input = "What's the best way to retain subscribers?";
                  setUserInput(input);
                  handleSendMessage();
                  setUserInput("");
                }}
                className="w-full px-3 py-2 text-left text-sm bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
              >
                💕 Fan Retention
              </button>
              <button 
                onClick={() => {
                  const input = "How should I price custom content?";
                  setUserInput(input);
                  handleSendMessage();
                  setUserInput("");
                }}
                className="w-full px-3 py-2 text-left text-sm bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
              >
                💎 Custom Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderKnowledgeBase = () => {
    const categories = ['all', 'Fan Engagement', 'Content Monetization', 'Subscription Management', 'Platform Policies', 'Creator Tools'];
    
    return (
      <div className="space-y-6">
        {/* Knowledge Base Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-fuchsia-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{articles.length || mockAiData.knowledgeBase.documents}</p>
                <p className="text-sm text-gray-600">Creator Guides</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{mockAiData.knowledgeBase.accuracy}%</p>
                <p className="text-sm text-gray-600">Fan Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <Search className="h-8 w-8 text-fuchsia-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
                <p className="text-sm text-gray-600">Daily Interactions</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <Layers className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{categories.length - 1}</p>
                <p className="text-sm text-gray-600">Content Categories</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search and Filter Controls */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search creator guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>
            <button 
              onClick={fetchArticles}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white rounded-lg hover:from-fuchsia-600 hover:to-purple-700 transition-all"
            >
              <RotateCw className="h-4 w-4 mr-2" />
              Refresh
            </button>
          </div>
        </div>

      {/* Articles Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Creator Knowledge Base</h3>
            <div className="flex space-x-2">
              <button 
                onClick={() => setShowUploadModal(true)}
                className="flex items-center px-3 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white rounded-lg hover:from-fuchsia-600 hover:to-purple-700 transition-all text-sm"
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload Guide
              </button>
              <button 
                onClick={createNewArticle}
                className="flex items-center px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Create Guide
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          {kbLoading ? (
            <div className="flex justify-center items-center p-8">
              <RotateCw className="h-6 w-6 animate-spin text-blue-600" />
              <span className="ml-2 text-gray-600">Loading guides...</span>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guide Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {articles.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      No creator guides found
                    </td>
                  </tr>
                ) : (
                  articles.map((article: any) => (
                    <tr key={article.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <BookOpen className="h-5 w-5 text-gray-400 mr-3" />
                          <span className="font-medium text-gray-900">{article.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-fuchsia-100 text-fuchsia-800 text-xs font-medium rounded">{article.category}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{article.views}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(article.lastUpdated).toLocaleDateString('es-ES')}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button 
                          onClick={() => handleViewArticle(article)}
                          className="text-green-600 hover:text-green-900"
                        >
                          View
                        </button>
                        <button 
                          onClick={() => handleEditArticle(article)}
                          className="text-fuchsia-600 hover:text-fuchsia-900"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteArticle(article)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );}

  const renderVoiceAgent = () => (
    <div className="h-[75vh] flex space-x-6">
      {/* Real-time Voice Chat */}
      <div className="flex-1">
        <RealTimeVoiceChat />
      </div>

      {/* Voice Settings Panel */}
      <div className="w-1/3 bg-white rounded-lg border border-gray-200 p-6 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Bella's Profile</h3>
        
        <div className="flex-1 space-y-4">
          {/* AI Personality */}
          <div className="p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <Heart className="h-5 w-5 text-pink-500" />
              <span className="font-medium text-gray-900">Real-Time Conversational AI</span>
            </div>
            <p className="text-sm text-gray-600">Experience Bella's sultry voice in real-time - no delays, just natural conversation like talking to a real person.</p>
          </div>
          
          {/* Voice Technology */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Voice Technology</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Engine:</span>
                <span className="font-medium text-green-600">ElevenLabs Conversational AI</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Latency:</span>
                <span className="font-medium text-green-600">&lt; 500ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Quality:</span>
                <span className="font-medium text-green-600">Studio Quality</span>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="border-t pt-4">
            <h4 className="font-medium text-gray-900 mb-2">Features</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-gray-700">Voice-to-voice real-time chat</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-gray-700">Natural conversation flow</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-gray-700">Interrupt and respond naturally</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-gray-700">Flirty, seductive personality</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-gray-700">Revenue optimization guidance</span>
              </div>
            </div>
          </div>
          
          {/* How It Works */}
          <div className="border-t pt-4">
            <h4 className="font-medium text-gray-900 mb-2">How It Works</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-5 h-5 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-xs font-medium">1</span>
                <span>Click the microphone to connect to Bella</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-5 h-5 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-xs font-medium">2</span>
                <span>Start talking naturally - no need to wait</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-5 h-5 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-xs font-medium">3</span>
                <span>Hear Bella's sultry voice respond in real-time</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="flex-shrink-0 w-5 h-5 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-xs font-medium">4</span>
                <span>Build intimate connections through voice</span>
              </div>
            </div>
          </div>
          
          {/* Tips */}
          <div className="border-t pt-4">
            <h4 className="font-medium text-gray-900 mb-2">💡 Tips</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Use headphones for better audio quality</p>
              <p>• Speak clearly and naturally</p>
              <p>• Let Bella finish speaking before responding</p>
              <p>• Ask about revenue strategies and fan engagement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => {
    
    return (
    <div className="space-y-6">
      {/* AI Configuration */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">CreatorAI Configuration</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">AI Model</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>GPT-4 Turbo</option>
                <option>GPT-3.5 Turbo</option>
                <option>Claude 3.5 Sonnet</option>
                <option>Llama 3.1</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Token Limit</label>
              <input type="number" defaultValue="4000" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Temperature (Creativity)</label>
              <input type="range" min="0" max="1" step="0.1" defaultValue="0.7" className="w-full" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Conservative</span>
                <span>Balanced</span>
                <span>Creative</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Supported Languages</label>
              <div className="space-y-2">
                {['English', 'Spanish', 'French', 'Portuguese', 'German', 'Italian'].map(lang => (
                  <label key={lang} className="flex items-center">
                    <input type="checkbox" defaultChecked={lang === 'English' || lang === 'Spanish'} className="mr-2" />
                    <span className="text-sm text-gray-900">{lang}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Auto-Escalation</label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-2" />
                <span className="text-sm text-gray-900">Escalate to human agent if confidence is below 70%</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Response Time</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Instant (&lt; 2s)</option>
                <option>Fast (2-5s)</option>
                <option>Standard (5-10s)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Training Data */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Creator Training Data</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Data Sources</h4>
            <div className="space-y-3">
              {[
                { source: 'Fan Engagement Strategies', status: 'active', docs: 245 },
                { source: 'Content Monetization Guides', status: 'active', docs: 189 },
                { source: 'Fan Conversation History', status: 'active', docs: 1247 },
                { source: 'Creator Platform Policies', status: 'active', docs: 156 },
                { source: 'Subscription Management', status: 'active', docs: 98 },
                { source: 'Custom Content Pricing', status: 'active', docs: 67 }
              ].map((source, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      source.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                    <span className="font-medium text-gray-900">{source.source}</span>
                  </div>
                  <span className="text-sm text-gray-500">{source.docs} docs</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Training Metrics</h4>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">Model Accuracy</span>
                  <span className="text-sm font-bold text-green-600">98.7%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '98.7%' }} />
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">Topic Coverage</span>
                  <span className="text-sm font-bold text-blue-600">94.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '94.2%' }} />
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">Average Confidence</span>
                  <span className="text-sm font-bold text-purple-600">89.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '89.3%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Settings */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Advanced Creator Settings</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Platform Integrations</h4>
            <div className="space-y-2">
              {[
                { name: 'OnlyFans API', status: true },
                { name: 'Instagram Direct', status: true },
                { name: 'Twitter DMs', status: false },
                { name: 'Telegram Notifications', status: true },
                { name: 'Discord Integration', status: true },
                { name: 'Snapchat Premium', status: false }
              ].map((integration, index) => (
                <label key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <span className="text-sm font-medium text-gray-900">{integration.name}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={integration.status} className="sr-only peer" readOnly />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-fuchsia-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-fuchsia-500 peer-checked:to-purple-600"></div>
                  </label>
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Revenue & Performance Alerts</h4>
            <div className="space-y-3">
              <div className="p-3 border border-gray-200 rounded-lg">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  <span className="text-sm text-gray-900">Low conversion rate alerts</span>
                </label>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  <span className="text-sm text-gray-900">High-value fan interaction alerts</span>
                </label>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-900">Daily revenue reports</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Tone Configuration */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Creator AI Personality</h3>
        
        <div className="space-y-6">
          {/* Preset Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Pre-built Creator Personalities</label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(voiceTonePresets).map(([key, preset]: [string, any]) => (
                <div 
                  key={key}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    voiceTone.preset === key && !voiceTone.isCustom
                      ? 'border-fuchsia-500 bg-fuchsia-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setVoiceTone({ ...voiceTone, preset: key, isCustom: false })}
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{preset.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{preset.description}</p>
                  <div className="text-xs text-gray-500">
                    <strong>Ejemplo:</strong> "{preset.examples?.[0]}"
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Custom Tone */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <input
                type="checkbox"
                id="customTone"
                checked={voiceTone.isCustom}
                onChange={(e) => setVoiceTone({ ...voiceTone, isCustom: e.target.checked })}
                className="rounded border-gray-300"
              />
              <label htmlFor="customTone" className="text-sm font-medium text-gray-700">
                Use custom personality
              </label>
            </div>
            
            {voiceTone.isCustom && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom personality instructions
                </label>
                <textarea
                  value={voiceTone.customPrompt}
                  onChange={(e) => setVoiceTone({ ...voiceTone, customPrompt: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Example: Be flirty and engaging while maintaining boundaries. Focus on building emotional connection and driving sales. Always suggest premium content when appropriate..."
                />
                <p className="text-xs text-gray-500 mt-1">
                  Describe how you want the AI to behave with your fans. These instructions will apply to all conversations.
                </p>
              </div>
            )}
          </div>
          
          {/* Preview */}
          {!voiceTone.isCustom && voiceTone.preset && voiceTonePresets[voiceTone.preset] && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Selected personality preview</h4>
              <div className="space-y-2">
                {voiceTonePresets[voiceTone.preset]?.examples?.map((example: string, index: number) => (
                  <div key={index} className="text-sm text-gray-600 italic">
                    "{example}"
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Update Button */}
          <div className="flex justify-end">
            <button
              onClick={updateVoiceTone}
              disabled={voiceToneLoading}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white rounded-lg hover:from-fuchsia-600 hover:to-purple-700 transition-all disabled:opacity-50"
            >
              {voiceToneLoading ? (
                <RotateCw className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Save className="h-4 w-4 mr-2" />
              )}
              {voiceToneLoading ? 'Updating...' : 'Update AI Personality'}
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end space-x-3">
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button className="flex items-center px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white rounded-lg hover:from-fuchsia-600 hover:to-purple-700 transition-all">
          <Save className="h-4 w-4 mr-2" />
          Save Configuration
        </button>
      </div>
    </div>
  );}

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: BarChart2 },
    { id: "playground", label: "Playground", icon: PlayCircle },
    { id: "voice-agent", label: "Voice Agent", icon: Phone },
    { id: "knowledge", label: "Conocimiento", icon: BookOpen },
    { id: "settings", label: "Configuración", icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/ice-dashboard"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </Link>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-fuchsia-50 to-purple-50 rounded-lg">
                  <Cpu className="h-6 w-6 text-fuchsia-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">CreatorAI Assistant</h1>
                  <p className="text-sm text-gray-500">Turn Your Fans into Lifetime Customers with AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 px-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-3 space-x-2 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-fuchsia-600 border-b-2 border-fuchsia-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {activeTab === "dashboard" && renderDashboard()}
        {activeTab === "playground" && renderPlayground()}
        {activeTab === "voice-agent" && renderVoiceAgent()}
        {activeTab === "knowledge" && renderKnowledgeBase()}
        {activeTab === "settings" && renderSettings()}
      </div>

      {/* Upload Document Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Subir Documento</h3>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setUploadFile(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seleccionar archivo
                </label>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx,.txt,.md"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Formatos soportados: PDF, DOC, DOCX, TXT, MD
                </p>
              </div>
              
              {uploadFile && (
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Paperclip className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-900">{uploadFile.name}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Tamaño: {(uploadFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              )}
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setUploadFile(null);
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={uploadDocument}
                disabled={!uploadFile || operationLoading}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {operationLoading ? 'Subiendo...' : 'Subir'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Article Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {selectedArticle ? 'Editar Artículo' : 'Crear Artículo'}
              </h3>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setSelectedArticle(null);
                  setEditForm({ title: '', category: '', content: '' });
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título del artículo
                </label>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ingresa el título del artículo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoría
                </label>
                <select
                  value={editForm.category}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Visas">Visas</option>
                  <option value="Alojamiento">Alojamiento</option>
                  <option value="Programas Académicos">Programas Académicos</option>
                  <option value="Seguros">Seguros</option>
                  <option value="Finanzas">Finanzas</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contenido
                </label>
                <textarea
                  value={editForm.content}
                  onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Escribe el contenido del artículo aquí..."
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setSelectedArticle(null);
                  setEditForm({ title: '', category: '', content: '' });
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={selectedArticle ? updateArticle : async () => {
                  setOperationLoading(true);
                  try {
                    const response = await fetch('/api/ai-agent/knowledge-base', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(editForm)
                    });
                    
                    const data = await response.json();
                    if (data.success) {
                      setShowEditModal(false);
                      setEditForm({ title: '', category: '', content: '' });
                      fetchArticles(); // Refresh the list
                      alert('Artículo creado exitosamente');
                    } else {
                      alert('Error al crear el artículo: ' + data.message);
                    }
                  } catch (error) {
                    console.error('Error creating article:', error);
                    alert('Error al crear el artículo');
                  } finally {
                    setOperationLoading(false);
                  }
                }}
                disabled={!editForm.title || !editForm.content || operationLoading}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {operationLoading ? 'Guardando...' : (selectedArticle ? 'Actualizar' : 'Crear')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Eliminar Artículo</h3>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedArticle(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="h-8 w-8 text-red-500" />
                <div>
                  <p className="text-gray-900 font-medium">
                    ¿Estás seguro de que quieres eliminar este artículo?
                  </p>
                  <p className="text-sm text-gray-500">
                    Esta acción no se puede deshacer.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-medium text-gray-900">{selectedArticle.title}</p>
                <p className="text-sm text-gray-500">Categoría: {selectedArticle.category}</p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedArticle(null);
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={deleteArticle}
                disabled={operationLoading}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {operationLoading ? 'Eliminando...' : 'Eliminar'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Document Modal */}
      {showViewModal && viewingArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Eye className="h-5 w-5 text-gray-500" />
                <h3 className="text-lg font-semibold text-gray-900">Ver Documento</h3>
              </div>
              <button
                onClick={() => {
                  setShowViewModal(false);
                  setViewingArticle(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Document Header */}
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{viewingArticle.title}</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                  {viewingArticle.category}
                </span>
                <span>Vistas: {viewingArticle.views}</span>
                <span>Última actualización: {new Date(viewingArticle.lastUpdated).toLocaleDateString('es-ES')}</span>
              </div>
            </div>
            
            {/* Document Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-gray-900 leading-relaxed">
                  {viewingArticle.content}
                </pre>
              </div>
            </div>
            
            {/* Footer Actions */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-4">
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setShowViewModal(false);
                    handleEditArticle(viewingArticle);
                  }}
                  className="flex items-center px-3 py-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-sm"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Editar
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(viewingArticle.content);
                    alert('Contenido copiado al portapapeles');
                  }}
                  className="flex items-center px-3 py-2 text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                >
                  <Paperclip className="h-4 w-4 mr-2" />
                  Copiar
                </button>
              </div>
              <button
                onClick={() => {
                  setShowViewModal(false);
                  setViewingArticle(null);
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

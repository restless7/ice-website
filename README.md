# ICE Colombia Website

🚀 **Modern Next.js application for ICE Colombia - Visa and Immigration Services**

A comprehensive website for visa and immigration services built with Next.js 15, TypeScript, TailwindCSS, and modern authentication.

## ✨ Features

- **🎨 Modern UI/UX**: Built with TailwindCSS v3 and Radix UI components
- **🔐 Authentication**: Role-based access control with NextAuth.js
- **📱 Responsive Design**: Mobile-first approach with modern design patterns
- **🌐 Internationalization**: Multi-language support with react-i18next
- **📊 Dashboard**: Interactive dashboards for different user roles
- **🎯 Role Management**: Support for Students, Agents, Admins, and Super Admins
- **⚡ Performance**: Optimized for speed with Next.js App Router
- **🛠️ TypeScript**: Full type safety throughout the application

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/restless7/ice-website.git
cd ice-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3004](http://localhost:3004) to view the application.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🏗️ Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript 5.8.3
- **Styling**: TailwindCSS v3.3.5
- **UI Components**: Radix UI, Lucide React
- **Authentication**: NextAuth.js
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Forms**: React Hook Form + Zod validation
- **Drag & Drop**: @dnd-kit
- **Internationalization**: react-i18next

## 📁 Project Structure

```
ice-website/
├── app/                    # Next.js App Router
│   ├── components/        # Reusable UI components
│   │   ├── shared/       # Shared components
│   │   ├── ui/           # Base UI components
│   │   └── ice/          # ICE-specific components
│   ├── lib/              # Utility functions
│   ├── dashboard/        # Dashboard pages
│   └── page.tsx          # Home page
├── hooks/                 # Custom React hooks
├── types/                # TypeScript type definitions
├── public/               # Static assets
└── tailwind.config.js    # TailwindCSS configuration
```

## 🔐 User Roles & Features

### 🎓 Students
- View personal documents and progress
- Track visa application status
- Access payment information
- Message support

### 👥 Agents
- Manage student applications
- View leads and commissions
- Access training materials
- Performance analytics

### 🛠️ Admins
- User management
- System analytics
- Program management
- Audit logs

### 🔧 Super Admins
- Full system access
- Configuration management
- Backup and restore
- Advanced settings

## 🌍 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Manual Deployment

```bash
# Build the application
npm run build

# The built files will be in the .next folder
# Deploy to your hosting provider
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3004
NEXTAUTH_SECRET=your-secret-key

# Database (if applicable)
DATABASE_URL=your-database-url

# Other service APIs
# Add your API keys here
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is proprietary and confidential.

## 🆘 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for ICE Colombia**
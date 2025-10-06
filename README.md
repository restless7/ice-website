# ICE Website - Instituto Cultural de Educación

A standalone Next.js website for the Instituto Cultural de Educación (ICE), extracted from the apex-website monorepo package for independent deployment and management.

## 🚀 Features

- **Modern Stack**: Next.js 15, TypeScript, TailwindCSS v3
- **International Education Focus**: Tailored for study abroad and cultural exchange programs
- **Responsive Design**: Mobile-first approach with modern UI components
- **Multi-page Application**: Complete website with navigation, content pages, and dashboard
- **Dashboard System**: Comprehensive admin panel for leads, students, and agent management
- **Cybersecurity Integration**: Specialized cybersecurity proposal and consultation pages

## 📁 Project Structure

```
packages/ice-website/
├── app/                          # Next.js App Router
│   ├── components/              # Reusable components
│   │   ├── ice/                # ICE-specific components
│   │   ├── ui/                 # UI components (buttons, cards, etc.)
│   │   └── ...                 
│   ├── lib/                    # Utility functions and configurations
│   ├── (pages)/               # Route pages
│   │   ├── nosotros/          # About page
│   │   ├── portafolio/        # Portfolio page
│   │   ├── experiences/       # ICExperiences page
│   │   ├── news/              # ICE News page
│   │   ├── contacto/          # Contact page
│   │   ├── portal/            # Portal access
│   │   └── dashboard/         # Admin dashboard
│   └── globals.css            # Global styles
├── public/                     # Static assets
├── types/                      # TypeScript type definitions
└── hooks/                      # Custom React hooks
```

## 🛠 Development

### Prerequisites
- Node.js 18+ 
- npm 9+

### Getting Started

1. **Install dependencies:**
   ```bash
   cd packages/ice-website
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   
   The application will be available at http://localhost:3004

3. **Build for production:**
   ```bash
   npm run build
   ```

### Monorepo Commands

From the root of planmaestro-ecosystem:

```bash
# Start ICE website
npm run dev:ice-website

# Or using workspace
npm run dev --workspace=@ice/website
```

## 🏗 Architecture

### Key Design Decisions

1. **App Router**: Using Next.js App Router for improved performance and developer experience
2. **Component Co-location**: All components are placed inside `app/components/` following the new structure
3. **Path Aliases**: Using `@/*` alias pointing to the root, with `@/app/*` for app directory access
4. **TailwindCSS v3**: Stable version with custom ICE color palette and animations
5. **TypeScript**: Full type safety with custom type definitions

### Import Paths

```typescript
// Components
import Component from "@/app/components/ComponentName"

// Utilities  
import { cn } from "@/app/lib/utils"

// UI Components
import { Button } from "@/app/components/ui/button"
```

## 🎨 Styling

The project uses TailwindCSS with custom ICE branding:

- **Primary Colors**: Ice blue palette (ice-50 to ice-900)
- **Secondary Colors**: Education purple palette (education-50 to education-900)
- **Fonts**: Geist Sans and Geist Mono
- **Animations**: Custom animations for educational experiences

### Custom CSS Classes

```css
.ice-gradient          /* ICE brand gradient background */
.ice-text-gradient     /* ICE brand gradient text */
.ice-card-hover        /* Interactive card hover effects */
```

## 📄 Available Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, programs, and experiences |
| `/nosotros` | About ICE page |
| `/portafolio` | ICE portfolio showcase |
| `/experiences` | ICExperiences stories and testimonials |
| `/news` | ICE News and updates |
| `/contacto` | Contact form and information |
| `/portal` | Portal access point |
| `/dashboard` | Admin dashboard (with subpages) |
| `/ciberseguridad-colombia` | Cybersecurity services for Colombia |
| `/cybersecurity-proposal` | Cybersecurity proposal generator |

## 🔧 Configuration

### Environment Variables
No environment variables are currently required for basic functionality.

### Next.js Configuration
- Image domains configured for unsplash.com
- App Router enabled
- Custom webpack optimizations

### TailwindCSS Configuration
- Custom ICE color palette
- Educational-themed animations
- Responsive design utilities

## 🚢 Deployment

The ICE website can be deployed independently:

1. **Vercel** (Recommended):
   ```bash
   npm run build
   # Deploy using Vercel CLI or dashboard
   ```

2. **Other platforms**: Standard Next.js deployment process

## 🔮 Future Enhancements

- [ ] Implement proper i18n (internationalization)
- [ ] Add database integration for dynamic content
- [ ] Optimize build for production (reduce bundle size)
- [ ] Add comprehensive testing suite
- [ ] Implement proper error boundaries
- [ ] Add SEO meta tags and structured data
- [ ] Connect to ICE CRM/database systems

## 🤝 Contributing

1. Follow the established folder structure
2. Use TypeScript for all new components
3. Follow the existing import path conventions
4. Test components in isolation when possible
5. Update this README when adding new features

## 📝 Notes

- This package was extracted from apex-website to enable independent deployment
- Some components may still reference apex-specific utilities - these should be cleaned up over time
- The build process currently has some linting warnings that are disabled - these should be addressed in future iterations
- Image assets are shared from the original apex-website public folder

---

Built with ❤️ for Instituto Cultural de Educación

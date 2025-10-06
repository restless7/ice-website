'use client';

import IceLayoutWrapper from '@/app/components/ice/ice-layout-wrapper';
import { Button, Card, CardHeader, CardTitle, CardContent, CardFooter, IceDotPattern } from '@/app/components/shared';

export default function TestUnifiedPage() {
  return (
    <IceLayoutWrapper>
      <div className="relative min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-black">
        {/* Background Pattern */}
        <IceDotPattern className="absolute inset-0 opacity-30" />
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">
              Unified Design System Test
            </h1>
            <p className="text-emerald-200 text-center mb-12">
              Testing the integrated components from the unified design system
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Primary Theme Card */}
              <Card theme="ice-colombia" variant="elevated">
                <CardHeader>
                  <CardTitle>ICE Colombia Theme</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    This card is using the ICE Colombia theme with emerald colors and elevated styling.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Button theme="ice-colombia" variant="primary" size="sm">
                      Primary
                    </Button>
                    <Button theme="ice-colombia" variant="secondary" size="sm">
                      Secondary
                    </Button>
                    <Button theme="ice-colombia" variant="outline" size="sm">
                      Outline
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Glass Theme Card */}
              <Card theme="ice-colombia" variant="glass">
                <CardHeader>
                  <CardTitle>Glass Effect Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/80 mb-4">
                    This card demonstrates the glass morphism effect with backdrop blur and transparency.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Button theme="ice-colombia" variant="ghost" size="sm">
                      Ghost
                    </Button>
                    <Button theme="ice-colombia" variant="success" size="sm">
                      Success
                    </Button>
                    <Button theme="ice-colombia" variant="warning" size="sm">
                      Warning
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Card */}
              <Card theme="ice-colombia" variant="outlined" interactive="hover">
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    This card has hover effects and interactive styling. Try hovering over it!
                  </p>
                </CardContent>
                <CardFooter>
                  <Button theme="ice-colombia" variant="primary" className="w-full">
                    Full Width Button
                  </Button>
                </CardFooter>
              </Card>

              {/* Loading States */}
              <Card theme="ice-colombia" variant="elevated">
                <CardHeader>
                  <CardTitle>Button States</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">
                    Different button sizes and loading states:
                  </p>
                  <div className="space-y-2">
                    <Button theme="ice-colombia" variant="primary" size="xs">
                      Extra Small
                    </Button>
                    <Button theme="ice-colombia" variant="primary" size="sm">
                      Small
                    </Button>
                    <Button theme="ice-colombia" variant="primary" size="default">
                      Default
                    </Button>
                    <Button theme="ice-colombia" variant="primary" size="lg">
                      Large
                    </Button>
                    <Button theme="ice-colombia" variant="primary" loading>
                      Loading...
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Theme Showcase */}
            <Card theme="ice-colombia" variant="glass" className="mb-8">
              <CardHeader>
                <CardTitle className="text-white">Theme Colors Showcase</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-500 rounded-lg mx-auto mb-2"></div>
                    <p className="text-xs text-white/80">Primary</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-lime-500 rounded-lg mx-auto mb-2"></div>
                    <p className="text-xs text-white/80">Secondary</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-2"></div>
                    <p className="text-xs text-white/80">Accent</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-800 rounded-lg mx-auto mb-2"></div>
                    <p className="text-xs text-white/80">Muted</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button theme="ice-colombia" variant="primary" size="lg">
                ✅ All Components Working!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </IceLayoutWrapper>
  );
}
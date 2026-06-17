"use client";

import IceLayoutWrapper from "@/app/components/ice/ice-layout-wrapper";
import IceSchedulingWidget from "@/app/components/ice/ice-scheduling-widget";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function AgendarContent({ programs }: { programs: any[] }) {
  const searchParams = useSearchParams();
  const programIdParam = searchParams.get("programId");
  
  // Find the selected program name if it exists
  const selectedProgram = programs.find(p => p.id === programIdParam || p.slug === programIdParam);
  const displayTitle = selectedProgram 
    ? `Agendar tu Asesoría para ${selectedProgram.name}`
    : "Agendar Reunión";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {selectedProgram ? (
            <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">
              {displayTitle}
            </span>
          ) : (
            <>Agendar <span className="bg-gradient-to-r from-brand-gold to-brand-orange bg-clip-text text-transparent">Reunión</span></>
          )}
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Selecciona el horario que mejor se adapte a ti para recibir una asesoría personalizada.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <IceSchedulingWidget 
          sourceCTA="Main Scheduling Page" 
          programs={programs} 
          preselectedProgramId={programIdParam || undefined}
          lockProgram={!!programIdParam}
        />
      </motion.div>
    </>
  );
}

export function AgendarClientView({ programs }: { programs: any[] }) {
  return (
    <IceLayoutWrapper>
      <div className="relative w-full bg-gradient-to-br from-gray-900 via-brand-dark to-black min-h-screen pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="text-white text-center py-20">Cargando...</div>}>
            <AgendarContent programs={programs} />
          </Suspense>
        </div>
      </div>
    </IceLayoutWrapper>
  );
}

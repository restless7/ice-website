"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: string;
  id: number;
  author: string;
}

export function TestimonialCard ({ handleShuffle, testimonial, position, id, author }: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";
  
  // Map testimonial IDs to appropriate image names
  const getTestimonialImage = (id: number): string => {
    const imageMap: { [key: number]: string } = {
      1: '/images/testimonials/sarah-onlyfans-creator.jpg',
      2: '/images/testimonials/jessica-fansly-creator.jpg', 
      3: '/images/testimonials/emma-multiplatform-creator.jpg',
      4: '/images/testimonials/maya-chaturbate-creator.jpg',
      5: '/images/testimonials/sophie-premium-creator.jpg',
      6: '/images/testimonials/alexis-cam-model.jpg'
    };
    
    // Return mapped image or fallback to a default
    return imageMap[id] || '/images/testimonials/default-creator.jpg';
  };

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e, info) => {
        dragRef.current = info.point.x;
      }}
      onDragEnd={(e, info) => {
        if (dragRef.current - info.point.x > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div className="relative mx-auto h-32 w-32 pointer-events-none">
        <Image
          src={getTestimonialImage(id)}
          alt={`Avatar of ${author}`}
          fill
          className="rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
          sizes="128px"
        />
      </div>
      <span className="text-center text-lg italic text-slate-400">"{testimonial}"</span>
      <span className="text-center text-sm font-medium text-indigo-400">{author}</span>
    </motion.div>
  );
};
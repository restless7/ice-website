// components/ui/streak-flame.tsx
'use client';

import React from 'react';
import { cn } from '@/app/lib/utils';

interface StreakFlameProps {
  level: 'none' | 'spark' | 'flame' | 'fire' | 'blaze' | 'inferno' | 'phoenix';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}

export function StreakFlame({ level, size = 'md', animated = true, className }: StreakFlameProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const getFlameConfig = (level: StreakFlameProps['level']) => {
    switch (level) {
      case 'none':
        return {
          colors: 'text-gray-400',
          glow: '',
          icon: '○',
          animation: ''
        };
      case 'spark':
        return {
          colors: 'text-yellow-400',
          glow: 'drop-shadow-sm',
          icon: '✦',
          animation: animated ? 'animate-pulse' : ''
        };
      case 'flame':
        return {
          colors: 'text-orange-400',
          glow: 'drop-shadow-md filter',
          icon: '🔥',
          animation: animated ? 'animate-bounce' : ''
        };
      case 'fire':
        return {
          colors: 'text-red-500',
          glow: 'drop-shadow-lg filter',
          icon: '🔥',
          animation: animated ? 'animate-pulse' : ''
        };
      case 'blaze':
        return {
          colors: 'text-red-600',
          glow: 'drop-shadow-xl filter',
          icon: '🔥',
          animation: animated ? 'animate-bounce' : ''
        };
      case 'inferno':
        return {
          colors: 'text-purple-500',
          glow: 'drop-shadow-2xl filter',
          icon: '🔥',
          animation: animated ? 'animate-pulse' : ''
        };
      case 'phoenix':
        return {
          colors: 'text-cyan-400',
          glow: 'drop-shadow-2xl filter blur-[0.5px]',
          icon: '🔥',
          animation: animated ? 'animate-bounce' : ''
        };
      default:
        return {
          colors: 'text-gray-400',
          glow: '',
          icon: '○',
          animation: ''
        };
    }
  };

  const config = getFlameConfig(level);

  if (level === 'none') {
    return (
      <div className={cn(
        sizeClasses[size],
        'flex items-center justify-center',
        config.colors,
        className
      )}>
        <span className="text-xs">○</span>
      </div>
    );
  }

  return (
    <div className={cn(
      sizeClasses[size],
      'flex items-center justify-center relative',
      config.animation,
      className
    )}>
      <span 
        className={cn(
          'text-lg',
          config.colors,
          config.glow,
          size === 'xl' ? 'text-2xl' : size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-sm' : 'text-lg'
        )}
        style={{
          textShadow: level === 'phoenix' 
            ? '0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor'
            : level === 'inferno'
            ? '0 0 8px currentColor, 0 0 16px currentColor'
            : level === 'blaze'
            ? '0 0 6px currentColor'
            : level === 'fire'
            ? '0 0 4px currentColor'
            : undefined
        }}
      >
        {config.icon}
      </span>
      
      {/* Extra effects for high-level streaks */}
      {level === 'phoenix' && animated && (
        <div className="absolute inset-0 animate-ping">
          <span className="text-cyan-200 opacity-50 text-lg">🔥</span>
        </div>
      )}
    </div>
  );
}

interface StreakDisplayProps {
  streakInfo: {
    currentStreak: number;
    streakLevel: 'none' | 'spark' | 'flame' | 'fire' | 'blaze' | 'inferno' | 'phoenix';
    streakMultiplier: number;
    nextMilestone: number;
    daysUntilMilestone: number;
    isInGracePeriod?: boolean;
  };
  size?: 'sm' | 'md' | 'lg';
  showDetails?: boolean;
  className?: string;
}

export function StreakDisplay({ streakInfo, size = 'md', showDetails = true, className }: StreakDisplayProps) {
  const getStreakTitle = (level: string) => {
    switch (level) {
      case 'none': return 'No Streak';
      case 'spark': return 'Getting Started';
      case 'flame': return 'Building Momentum';
      case 'fire': return 'On Fire';
      case 'blaze': return 'Blazing Trail';
      case 'inferno': return 'Inferno Master';
      case 'phoenix': return 'Phoenix Rising';
      default: return 'Streak';
    }
  };

  const getMultiplierColor = (multiplier: number) => {
    if (multiplier >= 3) return 'text-purple-400';
    if (multiplier >= 2) return 'text-red-400';
    if (multiplier >= 1.5) return 'text-orange-400';
    if (multiplier > 1) return 'text-yellow-400';
    return 'text-gray-400';
  };

  return (
    <div className={cn(
      'flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-slate-800/50 to-slate-700/30 border border-slate-600/50',
      className
    )}>
      <StreakFlame level={streakInfo.streakLevel} size={size} />
      
      {showDetails && (
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-200">
              {streakInfo.currentStreak} Day{streakInfo.currentStreak !== 1 ? 's' : ''}
            </span>
            {streakInfo.streakMultiplier > 1 && (
              <span className={cn('text-xs font-bold px-1.5 py-0.5 rounded', getMultiplierColor(streakInfo.streakMultiplier))}>
                {streakInfo.streakMultiplier}x
              </span>
            )}
            {streakInfo.isInGracePeriod && (
              <span className="text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded">
                Grace Period
              </span>
            )}
          </div>
          
          <div className="text-xs text-slate-400">
            {getStreakTitle(streakInfo.streakLevel)}
            {streakInfo.daysUntilMilestone > 0 && (
              <span className="ml-2">• {streakInfo.daysUntilMilestone} to next milestone</span>
            )}
          </div>
          
          {/* Progress bar to next milestone */}
          {streakInfo.daysUntilMilestone > 0 && streakInfo.nextMilestone > 0 && (
            <div className="mt-2 w-full bg-slate-700 rounded-full h-1">
              <div 
                className={cn(
                  'h-1 rounded-full transition-all duration-500',
                  streakInfo.streakLevel === 'phoenix' ? 'bg-cyan-400' :
                  streakInfo.streakLevel === 'inferno' ? 'bg-purple-400' :
                  streakInfo.streakLevel === 'blaze' ? 'bg-red-400' :
                  streakInfo.streakLevel === 'fire' ? 'bg-orange-400' :
                  'bg-yellow-400'
                )}
                style={{
                  width: `${Math.max(0, Math.min(100, ((streakInfo.currentStreak % streakInfo.nextMilestone) / streakInfo.nextMilestone) * 100))}%`
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

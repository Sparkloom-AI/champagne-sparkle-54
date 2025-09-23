'use client'

import React from 'react'

interface SplineSceneProps {
  scene: string
  className?: string
}

// Pure CSS 3D-style placeholder that never loads heavy Spline library
export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <div className={`${className} bg-gradient-to-br from-sl-obsidian via-sl-slate-800 to-sl-obsidian relative overflow-hidden`}>
      {/* Professional geometric pattern with CSS-only animations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-sl-auric-700/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-sl-auric-500/20 rounded-lg rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-20 h-20 border border-sl-pearl-100/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-2 border-sl-auric-700/40 rounded-full mx-auto relative">
            <div className="absolute inset-2 border border-sl-auric-500/30 rounded-full"></div>
          </div>
          <p className="text-sm text-muted-foreground">Interactive 3D Experience</p>
          <p className="text-xs text-muted-foreground opacity-70">Loading optimized for performance</p>
        </div>
      </div>
    </div>
  );
}
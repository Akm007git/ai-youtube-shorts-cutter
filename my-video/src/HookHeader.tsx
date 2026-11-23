import React from 'react';
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

type HookHeaderProps = {
  badgeText: string;
};

export const HookHeader: React.FC<HookHeaderProps> = ({ badgeText }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance animation: Pop in smoothly during first 15 frames
  const entranceProgress = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: 140,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 80,
        paddingRight: 80,
        zIndex: 20,
        opacity: entranceProgress,
        scale: interpolate(entranceProgress, [0, 1], [0.85, 1], {
          output: 'perceptual-scale',
        }),
      }}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(20, 20, 25, 0.92) 0%, rgba(35, 35, 45, 0.88) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '2px solid rgba(255, 215, 0, 0.4)',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.7), 0 0 24px rgba(255, 215, 0, 0.2)',
          borderRadius: 28,
          padding: '20px 36px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          maxWidth: '100%',
        }}
      >
        <span
          style={{
            color: '#FFD700',
            fontSize: 48,
            fontWeight: 900,
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            textAlign: 'center',
            lineHeight: 1.25,
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
          }}
        >
          {badgeText}
        </span>
      </div>
    </div>
  );
};


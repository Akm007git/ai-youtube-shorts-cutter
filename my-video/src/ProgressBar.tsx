import React from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';

export const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progressPercent = Math.min(100, Math.max(0, (frame / durationInFrames) * 100));

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 10,
        background: 'rgba(255, 255, 255, 0.15)',
        zIndex: 30,
      }}
    >
      <div
        style={{
          width: `${progressPercent}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #FF4500, #FFD700)',
          boxShadow: '0 0 12px rgba(255, 215, 0, 0.8)',
        }}
      />
    </div>
  );
};


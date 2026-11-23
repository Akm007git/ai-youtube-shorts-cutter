/* eslint-disable @remotion/no-object-fit-on-media-video */
import React from 'react';
import { staticFile, Video } from 'remotion';
import { CaptionsOverlay } from './CaptionsOverlay';
import { HookHeader } from './HookHeader';
import { ProgressBar } from './ProgressBar';
import { ShortClip } from './types';

type ShortVideoProps = {
  clip: ShortClip;
};

export const ShortVideo: React.FC<ShortVideoProps> = ({ clip }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: 1080,
        height: 1920,
        backgroundColor: '#0a0a0c',
        overflow: 'hidden',
      }}
    >
      {/* Background: Blurred ambient fill */}
      <Video
        src={staticFile(clip.srcFile)}
        startFrom={0}
        muted
        style={{
          position: 'absolute',
          top: -60,
          left: -60,
          width: 1200,
          height: 2040,
          objectFit: 'cover',
          filter: 'blur(35px) brightness(0.32) saturate(1.2)',
          zIndex: 1,
        }}
      />

      {/* Subtle vignette gradient overlays */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 380,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
          zIndex: 5,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 520,
          background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)',
          zIndex: 5,
        }}
      />

      {/* Top Hook Banner */}
      <HookHeader badgeText={clip.hookBadge} />

      {/* Main Foreground Video (Centered & Framed) */}
      <div
        style={{
          position: 'absolute',
          top: 500,
          left: 40,
          right: 40,
          height: 580,
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0,0,0,0.85), 0 0 0 2px rgba(255,255,255,0.12)',
          zIndex: 10,
          backgroundColor: '#000000',
        }}
      >
        <Video
          src={staticFile(clip.srcFile)}
          startFrom={0}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Dynamic Animated Captions (Lower-Third Safe Zone) */}
      <CaptionsOverlay lines={clip.lines} words={clip.words} />

      {/* Bottom Progress Bar */}
      <ProgressBar />
    </div>
  );
};

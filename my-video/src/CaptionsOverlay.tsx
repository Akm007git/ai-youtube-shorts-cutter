import React from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import { CaptionLine, WordToken } from './types';

type CaptionsOverlayProps = {
  lines: CaptionLine[];
  words: WordToken[];
};

export const CaptionsOverlay: React.FC<CaptionsOverlayProps> = ({ lines, words }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const currentTimeSec = frame / fps;

  // Find active line
  const activeLineIndex = lines.findIndex(
    (l) => currentTimeSec >= l.startSec && currentTimeSec < l.endSec
  );

  // If between lines, keep previous line for up to 0.4s to avoid flickering
  let lineToDisplay: CaptionLine | undefined;
  if (activeLineIndex !== -1) {
    lineToDisplay = lines[activeLineIndex];
  } else {
    // Find latest line that ended within 0.4 seconds
    const recentLine = lines
      .filter((l) => currentTimeSec >= l.endSec && currentTimeSec - l.endSec < 0.4)
      .pop();
    lineToDisplay = recentLine;
  }

  if (!lineToDisplay) {
    return null;
  }

  // Get words that belong to this line
  const lineWords = words.filter(
    (w) => w.startSec >= lineToDisplay.startSec - 0.05 && w.endSec <= lineToDisplay.endSec + 0.05
  );

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 340,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 70,
        paddingRight: 70,
        zIndex: 25,
      }}
    >
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.72)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1.5px solid rgba(255, 255, 255, 0.15)',
          borderRadius: 24,
          padding: '24px 36px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px 16px',
          maxWidth: '100%',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.8)',
        }}
      >
        {lineWords.map((w, idx) => {
          const isActive = currentTimeSec >= w.startSec && currentTimeSec <= w.endSec;
          const isPast = currentTimeSec > w.endSec;

          return (
            <span
              key={`${w.word}-${idx}`}
              style={{
                fontFamily:
                  'Impact, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
                fontSize: 58,
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: isActive ? '#FFD700' : isPast ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)',
                textShadow: isActive
                  ? '0 0 20px rgba(255, 215, 0, 0.8), 0 4px 10px rgba(0,0,0,1)'
                  : '0 3px 8px rgba(0,0,0,0.95)',
                scale: isActive ? 1.12 : 1,
                display: 'inline-block',
              }}
            >
              {w.word}
            </span>
          );
        })}
      </div>
    </div>
  );
};

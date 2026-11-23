import React from 'react';
import { Composition } from 'remotion';
import { SHORTS } from './shortsData';
import { ShortVideo } from './ShortVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {SHORTS.map((clip) => {
        const fps = 30;
        const durationInFrames = Math.round(clip.durationSec * fps);

        return (
          <Composition
            key={clip.id}
            id={clip.id}
            component={ShortVideo}
            durationInFrames={durationInFrames}
            fps={fps}
            width={1080}
            height={1920}
            defaultProps={{
              clip,
            }}
          />
        );
      })}
    </>
  );
};

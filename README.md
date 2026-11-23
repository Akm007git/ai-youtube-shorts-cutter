# AI Video Cutter & Caption Generator

An autonomous multi-stage pipeline combining **Generative AI** and **Agentic AI** with **Remotion (React)** to transform long-form video content into vertical 9:16 short-form videos with word-by-word synchronized animated subtitles.

---

## Architecture Overview

This project uses React as a **headless programmatic video compiler**. Instead of manual editing in GUI video editors, video tracks, transitions, progress bars, and typography are defined in code and rendered frame-by-frame.

```
Long-Form Source Video
         │
         ▼
[ Stage 1: Narrative & Pacing Analysis ]
   • Semantic engagement evaluation
   • 3-second retention hook identification
   • Strict sub-40-second boundary clipping
         │
         ▼
[ Stage 2: Audio & Token Alignment ]
   • Word-level speech-to-text alignment
   • Precise microsecond boundary timestamps
   • Frame-index mathematical mapping
         │
         ▼
[ Stage 3: Programmatic Video Compilation (Remotion) ]
   • Responsive 9:16 vertical canvas (1080x1920)
   • Word-by-word highlighted active captions
   • Animated retention progress indicator
   • High-impact header badge
         │
         ▼
Rendered Output: Hardware-Accelerated MP4 Video
```

---

## Key Features

- **Word-Level Subtitle Synchronization:** Automatically highlights active spoken words in real time based on audio timestamps.
- **Vertical 9:16 Framing:** Scales and centers horizontal video into modern mobile formats with blur backdrops.
- **Retention Visuals:** Dynamic progress bar indicator and eye-catching top banner hooks designed for short-form platforms.
- **Headless Video Rendering:** Fully automated command-line rendering powered by Remotion, React 19, and Bun.

---

## Project Structure

```text
.
├── README.md                          # Project documentation
├── .gitignore                         # Excludes heavy binaries & node_modules
└── my-video/                          # Remotion video synthesis workspace
    ├── package.json                   # Dependencies (Remotion, React 19)
    ├── remotion.config.ts             # Compiler & bundle configuration
    ├── tsconfig.json                  # TypeScript configuration
    └── src/
        ├── Root.tsx                   # Composition registration & metadata
        ├── ShortVideo.tsx             # Main canvas layout & video composition
        ├── CaptionsOverlay.tsx        # Word-by-word subtitle highlight engine
        ├── HookHeader.tsx             # Top banner hook component
        ├── ProgressBar.tsx            # Animated progress indicator
        ├── shortsData.ts              # Timestamps, transcript lines & token stream
        └── types.ts                   # Core data models and TypeScript types
```

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 20+
- FFmpeg installed locally

### Installation

```bash
cd my-video
bun install
```

### Live Interactive Preview

Launch the Remotion Studio in your browser to inspect animations, scrub through frames, and test subtitle timings:

```bash
bun run dev
```

Open `http://localhost:3000` to preview available compositions.

---

## Exporting Videos

Render compositions directly into vertical MP4 files using the command line:

```bash
cd my-video

# Example render command:
bunx remotion render <CompositionId> out/video.mp4
```

---

## License

This project is open-source under the MIT License.

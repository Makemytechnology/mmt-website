"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, Film } from "lucide-react";

export function DemoVideo({
  src,
  label,
  pending,
  pendingMessage,
}: {
  src: string;
  label: string;
  pending?: boolean;
  pendingMessage?: string;
}) {
  if (pending) {
    return (
      <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-black/40 aspect-video flex flex-col items-center justify-center text-center px-6 py-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white mb-4">
          <Film size={26} aria-hidden />
        </div>
        <p className="font-display text-xl text-white font-semibold">Demo video coming soon</p>
        <p className="mt-2 text-sm text-skyLight/80 max-w-md">
          {pendingMessage ?? "Drop the .mp4 in /public and update this section to enable autoplay."}
        </p>
      </div>
    );
  }
  return <DemoVideoPlayer src={src} label={label} />;
}

function DemoVideoPlayer({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Hint showing "Tap to unmute" — fades out once the user actually interacts
  // with the page (or with the video controls).
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt to unmute on the first user gesture anywhere on the page so
    // audio comes on without forcing the user to find the volume control.
    const tryUnmute = () => {
      if (!video) return;
      video.muted = false;
      video.volume = 1;
      const p = video.play();
      if (p && typeof p.then === "function") {
        p.then(() => {
          setShowHint(false);
          removeListeners();
        }).catch(() => {
          // Browser still refused — re-mute and keep playing visuals.
          video.muted = true;
          video.play().catch(() => {});
        });
      } else {
        setShowHint(false);
        removeListeners();
      }
    };

    // If the user manipulates the native controls themselves, hide our hint
    // (they know how to use the player already).
    const onUserPlayed = () => setShowHint(false);
    const onVolumeChange = () => {
      if (!video.muted) setShowHint(false);
    };

    const removeListeners = () => {
      window.removeEventListener("pointerdown", tryUnmute);
      window.removeEventListener("keydown", tryUnmute);
      window.removeEventListener("touchstart", tryUnmute);
      window.removeEventListener("scroll", tryUnmute);
      video.removeEventListener("play", onUserPlayed);
      video.removeEventListener("volumechange", onVolumeChange);
    };

    window.addEventListener("pointerdown", tryUnmute, { once: false });
    window.addEventListener("keydown", tryUnmute, { once: false });
    window.addEventListener("touchstart", tryUnmute, { once: false });
    window.addEventListener("scroll", tryUnmute, { once: false, passive: true });
    video.addEventListener("play", onUserPlayed);
    video.addEventListener("volumechange", onVolumeChange);

    return removeListeners;
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-black">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto block"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls
        controlsList="nodownload"
        aria-label={label}
      />

      {/* Subtle "Tap to unmute" hint — shown until the user interacts. The
          native controls already have a volume slider; this just nudges
          first-time viewers to bring up the sound. */}
      {showHint ? (
        <div
          aria-hidden
          className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-black/70 backdrop-blur px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/20 shadow-lg animate-pulse"
        >
          <Volume2 size={14} aria-hidden />
          Tap anywhere for sound
        </div>
      ) : null}
    </div>
  );
}

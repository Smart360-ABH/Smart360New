import { sendEvent } from '@/lib/analytics';

import { useEffect, useRef, useState } from 'react';

interface VirtualTourFrameProps {
  src: string;
  title: string;
  location?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  lazy?: boolean;
  poster?: string;
}

const VirtualTourFrame = ({
  src,
  title,
  location,
  width = "100%",
  height = 500,
  className = "",
  lazy = true,
  poster = "/placeholder.svg",
}: VirtualTourFrameProps) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [loaded, setLoaded] = useState(!lazy);

  useEffect(() => {
    // If not lazy, nothing to do
  }, [lazy]);

  const onActivate = () => {
    try { sendEvent('StartTour', { title }); } catch(e) {}
    setLoaded(true);
    // accessibility: focus iframe after load
    setTimeout(() => {
      iframeRef.current?.focus();
    }, 300);
  };

  return (
    <div className={`virtual-tour-frame ${className} relative`} style={{ width: typeof width === 'number' ? `${width}px` : width }}>
      {!loaded ? (
        <div className="relative w-full" style={{ height }}>
          <img src={poster} alt={title || 'Виртуальный тур'} className="w-full h-full object-cover rounded" />
          <button
            onClick={onActivate}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onActivate(); } }}
            aria-label={`Запустить виртуальный тур: ${title}`}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white/100 rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            <svg className="w-8 h-8 text-blue-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="sr-only">Запустить виртуальный тур</span>
          </button>
          <div className="absolute left-4 bottom-4 bg-white/80 text-sm rounded px-3 py-1 shadow">{location || title}</div>
        </div>
      ) : (
        <div style={{ height }}>
          <iframe
            ref={iframeRef}
            src={src}
            title={title}
            width={width}
            height={height}
            frameBorder="0"
            allowFullScreen={true}
            loading="lazy"
            className="w-full rounded"
            tabIndex={0}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VirtualTourFrame;

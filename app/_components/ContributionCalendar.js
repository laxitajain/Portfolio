"use client";

import { useCallback, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function ContributionCalendar() {
  const [ready, setReady] = useState(false);

  // GitHubCalendar only attaches its ref once real data has rendered, so a
  // callback ref tells us when to swap the spinner out.
  const markReady = useCallback((node) => {
    if (node) setReady(true);
  }, []);

  return (
    <div className="relative min-h-[180px]">
      {!ready && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="spinner-purple" role="status" aria-label="Loading contributions" />
          <p className="font-yesteryear text-2xl tracking-wider text-secondary-20 animate-pulse">
            fetching commits...
          </p>
        </div>
      )}
      <div className={`transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}>
        <GitHubCalendar
          ref={markReady}
          username="laxitajain"
          blockSize={12}
          blockMargin={4}
          colorScheme="dark"
          theme={{
            dark: ['#E2E8F0', '#6F3F9A', '#A05ADC', '#B178E2', '#C397EA']
          }}
          fontSize={14}
          errorMessage={<span ref={markReady}>Couldn&apos;t load contributions right now.</span>}
        />
      </div>
    </div>
  );
}

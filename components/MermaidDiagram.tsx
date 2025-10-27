'use client';

import { useEffect, useRef, useState } from 'react';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

declare global {
  interface Window {
    mermaid?: any;
  }
}

export default function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadAndRender = async () => {
      try {
        // Load Mermaid from CDN if not already loaded
        if (!window.mermaid) {
          await loadMermaidScript();
        }

        if (cancelled) return;

        // Wait a bit for mermaid to be fully initialized
        await new Promise(resolve => setTimeout(resolve, 200));

        if (cancelled || !window.mermaid) {
          throw new Error('Mermaid not loaded');
        }

        // Initialize Mermaid
        window.mermaid.initialize({
          startOnLoad: false,
          theme: 'default',
          themeVariables: {
            primaryColor: '#3b82f6',
            primaryTextColor: '#1f2937',
            primaryBorderColor: '#2563eb',
            lineColor: '#6b7280',
            secondaryColor: '#f3f4f6',
            tertiaryColor: '#fef3c7',
          },
          flowchart: {
            htmlLabels: true,
            curve: 'basis',
          },
        });

        // Render the diagram
        const id = `mermaid-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
        const { svg: renderedSvg } = await window.mermaid.render(id, chart);

        if (!cancelled) {
          setSvg(renderedSvg);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        if (!cancelled) {
          setError(true);
          setIsLoading(false);
        }
      }
    };

    const loadMermaidScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        const existingScript = document.querySelector('script[src*="mermaid"]');
        if (existingScript) {
          // Wait for it to load
          const checkInterval = setInterval(() => {
            if (window.mermaid) {
              clearInterval(checkInterval);
              resolve();
            }
          }, 100);

          setTimeout(() => {
            clearInterval(checkInterval);
            if (window.mermaid) {
              resolve();
            } else {
              reject(new Error('Timeout waiting for existing mermaid script'));
            }
          }, 10000);
          return;
        }

        // Create and load new script
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10.6.1/dist/mermaid.min.js';
        script.async = true;

        script.onload = () => {
          // Poll for window.mermaid to be available
          const checkInterval = setInterval(() => {
            if (window.mermaid) {
              clearInterval(checkInterval);
              resolve();
            }
          }, 50);

          // Timeout after 5 seconds
          setTimeout(() => {
            clearInterval(checkInterval);
            if (window.mermaid) {
              resolve();
            } else {
              reject(new Error('Mermaid failed to initialize'));
            }
          }, 5000);
        };

        script.onerror = () => reject(new Error('Failed to load Mermaid script'));

        document.head.appendChild(script);
      });
    };

    loadAndRender();

    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) {
    return (
      <div className={`bg-gray-50 border border-gray-200 rounded-lg p-4 ${className}`}>
        <p className="text-sm text-gray-600 mb-2">Diagram code:</p>
        <pre className="text-xs text-gray-600 whitespace-pre-wrap font-mono overflow-auto">
          {chart}
        </pre>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center p-8 bg-gray-50 rounded-lg ${className}`}>
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          <div className="text-sm text-gray-500">Rendering diagram...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`mermaid-diagram flex justify-center items-center p-4 overflow-x-auto ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

import React, { useState, useEffect } from 'react';

interface CertificatePreviewProps {
  url: string;
  fallbackImage: string;
}

const CertificatePreview: React.FC<CertificatePreviewProps> = ({ url, fallbackImage }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchCertificateImage = async () => {
      // The proxy may not work for non-standard pages like Google Drive, so we use the fallback directly.
      if (url.includes('drive.google.com')) {
        if (isMounted) {
          setImageUrl(fallbackImage);
          setIsLoading(false);
        }
        return;
      }

      setIsLoading(true);
      setError(false);
      try {
        const aiWindow = window as any;
        // Check if the AI Studio proxy function exists before calling it to prevent runtime errors.
        if (aiWindow.ai && aiWindow.ai.image && typeof aiWindow.ai.image.fetchProxyImage === 'function') {
            const fetchedUrl = await aiWindow.ai.image.fetchProxyImage(url);
            if (isMounted) {
              setImageUrl(fetchedUrl);
            }
        } else {
            // Fallback if the proxy function is not available in the environment.
            console.warn('AI Studio proxy function not found. Using fallback image.');
            if (isMounted) {
                setImageUrl(fallbackImage);
            }
        }
      } catch (e) {
        console.error('Failed to fetch certificate image:', e);
        if (isMounted) {
          setError(true);
          setImageUrl(fallbackImage); // Use fallback on error
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchCertificateImage();

    return () => {
      isMounted = false;
    };
  }, [url, fallbackImage]);

  const displayImage = error || !imageUrl ? fallbackImage : imageUrl;

  return (
    <div className="w-24 h-24 relative flex-shrink-0">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary rounded-sm">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
        </div>
      )}
      <img
        src={displayImage}
        alt="Certificate preview"
        className={`w-full h-full object-contain rounded-sm bg-light-slate p-2 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onError={() => {
          // Handle cases where even the fetched or fallback image fails to load
          setError(true);
          setImageUrl(fallbackImage);
        }}
      />
    </div>
  );
};

export default CertificatePreview;
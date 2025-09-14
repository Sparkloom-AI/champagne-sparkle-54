import { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import nilsOriginal from '@/assets/nils-original.png';

const BackgroundRemovalProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processImage = async () => {
    try {
      setIsProcessing(true);
      setError(null);
      
      // Fetch the original image
      const response = await fetch(nilsOriginal);
      const blob = await response.blob();
      
      // Load as HTMLImageElement
      const imageElement = await loadImage(blob);
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      
      // Create URL for the processed image
      const url = URL.createObjectURL(processedBlob);
      setProcessedImageUrl(url);
      
      // Download the processed image
      const link = document.createElement('a');
      link.href = url;
      link.download = 'nils-effmert-no-bg.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (err) {
      console.error('Error processing image:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="p-6 bg-gradient-surface rounded-lg border border-border-accent">
      <h3 className="text-xl font-bold text-foreground mb-4">Background Removal Tool</h3>
      
      <div className="space-y-4">
        <button
          onClick={processImage}
          disabled={isProcessing}
          className="bg-gradient-neon text-sl-obsidian px-6 py-3 rounded-lg font-bold hover:shadow-neon-strong hover:scale-105 transition-all duration-300 disabled:opacity-50"
        >
          {isProcessing ? 'Processing...' : 'Remove Background from Nils Photo'}
        </button>
        
        {error && (
          <div className="text-red-500 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
            Error: {error}
          </div>
        )}
        
        {processedImageUrl && (
          <div className="space-y-2">
            <p className="text-text-muted">Processed image (will auto-download):</p>
            <img 
              src={processedImageUrl} 
              alt="Nils without background" 
              className="max-w-xs rounded-lg border border-border-accent"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundRemovalProcessor;
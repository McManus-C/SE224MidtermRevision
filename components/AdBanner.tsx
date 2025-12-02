import React, { useEffect } from 'react';

export const AdBanner: React.FC = () => {
  useEffect(() => {
    try {
      // Attempt to load the ad
      // We use (window as any) because adsbygoogle is added by the external script
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) {
      console.error("AdSense error (normal if running locally or blocked by adblock):", e);
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-8 print:hidden">
      {/* 
         TO MAKE THIS WORK:
         1. Replace data-ad-client with your Publisher ID (ca-pub-...)
         2. Replace data-ad-slot with your Ad Unit ID from AdSense dashboard
      */}
      <div className="w-full bg-slate-100 border border-slate-200 rounded-lg p-4 flex flex-col items-center justify-center min-h-[120px] text-center overflow-hidden relative">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2 z-10">Advertisement</p>
        
        {/* AdSense Unit */}
        <ins className="adsbygoogle"
             style={{ display: 'block', width: '100%', height: '100px' }} // Height ensures visibility during dev
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" 
             data-ad-slot="1234567890" 
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
             
        {/* Visual Placeholder for Dev (Only shows if ad is empty/blocked) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 pointer-events-none">
          <span className="text-xs">Google AdSense Space</span>
          <span className="text-[10px] opacity-70">(Ads appear here when live)</span>
        </div>
      </div>
    </div>
  );
};
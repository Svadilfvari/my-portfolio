export default function SpoildPage() {
    return (
      <main className="min-h-screen bg-black text-gray-200 px-6 py-12 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-4">🥗 Spoild Pitch Deck</h1>
        <p className="text-gray-300 mb-6">
          This interactive pitch deck includes animations and GIFs used during CEO presentations.
        </p>
  
        {/* Responsive Google Slides Embed */}
        <div className="relative w-full max-w-5xl pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg border border-gray-700">
          <iframe 
            src="https://docs.google.com/presentation/d/e/2PACX-1vQHN5WhLDCXFDuDxOg_QYIaFYQZKfpncNYAF3tcMsU3UAugtOo2vPLFxrwy4db-OIt-uIJAc-HIhYhc/pubembed?start=true&loop=false&delayms=3000"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
  
        {/* Back to Startups */}
        <a href="/#startups" className="mt-6 text-blue-400 hover:underline">
          ← Back to Startups
        </a>
      </main>
    );
  }
  
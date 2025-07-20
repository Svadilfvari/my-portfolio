import Image from "next/image";

export default function Research() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-white">
        🔬 <span className="text-blue-400">Research</span> & Innovation Highlights
      </h1>

      {/* NeuroPulse Analyzer EPFL Internship */}
      <section className="border rounded-lg shadow-lg p-6 bg-white mb-8">
      <h2 className="text-2xl font-bold">
  🧠 <span className="text-blue-600">NeuroPulse Analyzer</span>
  <span className="text-gray-800"> – Spinal Neuromodulation Optimization  
     
     @ EPFL</span>
</h2>

        <p className="text-gray-600 mb-4">
          During my internship at the <b>Swiss Federal Institute of Technology (EPFL)</b>, I developed
          <b> NeuroPulse Analyzer</b> to optimize transcutaneous Spinal Cord Stimulation (tSCS)
          using advanced machine learning techniques (Multi-Task Gaussian Processes & Bayesian Optimization).
        </p>
        {/* Key Achievements */}
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Developed <b>NeuroPulse Analyzer</b> for real-time EMG signal analysis (~10 ms latency)</li>
          <li>Implemented Multi-Task Gaussian Processes (MTGP) for optimal neurostimulation control</li>
          <li>Reduced parameter selection time for tSCS from minutes to <b>10ms</b></li>
          <li><b>Won 1st Prize</b> at Sorbonne University Robotics Master’s research showcase among 80+ projects</li>
        </ul>
        {/* Poster Image */}
  {/* ✅ Poster BELOW */}
  <div className="flex justify-center mt-6">
    <a href="/research/epfl-poster.png" target="_blank" rel="noopener noreferrer">
    <Image 
        src="/research/epfl-poster.png"
        alt="EPFL Internship Poster"
        className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform"
      />
    </a>
  </div>


      </section>
    </main>
  );
}

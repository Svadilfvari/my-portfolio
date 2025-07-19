import Image from "next/image";

export default function Research() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        🔬 Research & Innovation Highlights
      </h1>

      {/* NeuroPulse Analyzer EPFL Internship */}
      <section className="border rounded-lg shadow-lg p-6 bg-white mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          🧠 NeuroPulse Analyzer – Spinal Neuromodulation Optimization @ EPFL
        </h2>
        <p className="text-gray-600 mb-4">
          During my internship at the <b>Swiss Federal Institute of Technology (EPFL)</b>, I developed
          <b> NeuroPulse Analyzer</b> to optimize transcutaneous Spinal Cord Stimulation (tSCS)
          using advanced machine learning techniques (Multi-Task Gaussian Processes & Bayesian Optimization).
        </p>

        {/* Poster Image */}
        <div className="flex justify-center mb-4">
          <a href="/research/epfl-poster.png" target="_blank" rel="noopener noreferrer">
            <Image
              src="/epfl-poster.png"
              alt="EPFL Internship Poster"
              width={800}
              height={1000}
              className="rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          </a>
        </div>

        {/* Key Achievements */}
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Developed <b>NeuroPulse Analyzer</b> for real-time EMG signal analysis (~10 ms latency)</li>
          <li>Implemented Multi-Task Gaussian Processes (MTGP) for optimal neurostimulation control</li>
          <li>Reduced parameter selection time for tSCS from minutes to <b>10ms</b></li>
          <li><b>Won 1st Prize</b> at Sorbonne University Robotics Master’s research showcase among 80+ projects</li>
        </ul>
      </section>
    </main>
  );
}

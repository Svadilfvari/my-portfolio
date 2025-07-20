import Image from "next/image";

export default function HepatoTrack() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-center text-gray-300">
      
      {/* Logo + Intro */}
      <div className="flex flex-col items-center">
        <Image
          src="/hepatotrack-logo.png" // Placeholder logo
          alt="HepatoTrack Logo"
          width={300}
          height={300}
          className="mb-4"
        />
        <h1 className="text-4xl font-bold text-blue-400">🧪 HepatoTrack</h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl">
          <strong>HepatoTrack</strong> is a patent-pending liver health platform developed during my research at the <strong>University of Tokyo</strong>.  
          It integrates multiple AI-powered modules to assist clinicians in <strong>liver disease diagnosis, simulation, and optimization</strong>.
        </p>
      </div>

      {/* Divider */}
      <div className="w-24 h-1 bg-gray-700 my-8 mx-auto"></div>

      {/* KanzoTwin Section */}
      <section className="mt-12">
      <Image 
          src="/kanzoTwin-logo.png" 
          alt="KanzoTwin Logo" 
          width={300} 
          height={300} 
          className="mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold text-blue-400">KanzoTwin – Biophysical Liver Twin</h2>
        <p className="mt-2 text-gray-400">
          A high-performance <strong>biophysical liver simulator</strong> written in CUDA.  
          It models liver function using <strong>biophysical equations</strong> to predict disease progression and treatment outcomes.  
          KanzoTwin provides <strong>3D liver visualization</strong> and simulation outputs for clinicians.
        </p>

      </section>
      {/* KanzoOptimizer Section */}
<section className="mt-12">
  <Image 
    src="/kanzoOptimizer-logo.png" // Placeholder logo
    alt="KanzoOptimizer Logo" 
    width={300} 
    height={300} 
    className="mx-auto mb-4"
  />
  <h2 className="text-3xl font-bold text-blue-400">KanzoOptimizer – Parameter Optimization Engine</h2>
  <p className="mt-2 text-gray-400">
    <strong>KanzoOptimizer</strong> refines the <strong>biophysical parameters</strong> used in <strong>KanzoTwin </strong>  
      by <strong>comparing simulation results with experimental data</strong>.  
    It leverages advanced optimization techniques to improve the accuracy of liver simulations,  
    ensuring <strong>realistic physiological responses</strong> aligned with patient-specific data.
  </p>
</section>

      {/* KanzoNet Section */}
      <section className="mt-12">
      <Image 
          src="/kanzoNet-logo.png" 
          alt="KanzoNet Logo" 
          width={300} 
          height={300} 
          className="mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold text-blue-400">KanzoNet – Histology Image Analysis</h2>
        <p className="mt-2 text-gray-400">
          <strong>KanzoNet</strong> processes <strong>histology images</strong> by converting them into a standard stain format,  
          running <strong>deep learning analysis</strong>, and generating <strong>diagnostic metrics</strong>.  
          Results from KanzoNet are fed into <strong>KanzoTwin</strong> for improved simulation accuracy.
        </p>

      </section>

      {/* Patient Classifier */}
      <section className="mt-12">
      <Image
          src="/patient-classifier.png" // Put your classifier visualization here
          alt="Patient Classifier"
          width={300}
          height={300}
          className="mx-auto mt-4 rounded-lg shadow-md"
        />
        <h2 className="text-3xl font-bold text-blue-400">Patient Classifier</h2>
        <p className="mt-2 text-gray-400">
          A <strong>Random Forest classifier</strong> predicts patient categories based on biomarkers like insulin levels,  
          enabling <strong>early detection of probable liver conditions</strong>. It also generates <strong>synthetic patient data </strong>  
          to improve classifier robustness.
        </p>
 
      </section>

      {/* KanzoAssistant */}
      <section className="mt-12">
      <Image 
          src="/kanzoAssistant-avatar.png" 
          alt="KanzoAssistant Avatar" 
          width={300} 
          height={300} 
          className="mx-auto mb-4 rounded-full"
        />
        <h2 className="text-3xl font-bold text-blue-400">KanzoAssistant – LLM Simulation Agent</h2>
        <p className="mt-2 text-gray-400">
          <strong>KanzoAssistant</strong> is an LLM-powered agent that interacts with clinicians,  
          explaining simulation results, providing diagnostic insights, and suggesting possible treatment optimizations.
        </p>

      </section>

      {/* Integration */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-400">How It All Connects</h2>
        <p className="mt-2 text-gray-400">
          <strong>HepatoTrack</strong> integrates <strong>KanzoTwin</strong>, <strong>KanzoNet</strong>,  
          <strong>Patient Classifier</strong>, and <strong>KanzoAssistant</strong> into a unified platform.  
          It enables clinicians to view <strong>simulation plots</strong>, interact with a <strong>3D liver model</strong>,  
          and get <strong>AI-assisted insights</strong> for patient care.
        </p>
      </section>

      {/* BioTrack Section */}
      <section className="mt-12">
        <Image 
          src="/biotrack-logo.png" // Placeholder logo for BioTrack
          alt="BioTrack Logo" 
          width={300} 
          height={300} 
          className="mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold text-blue-400">BioTrack – Personalized Drug Tracking</h2>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
          <strong>BioTrack</strong> is a <strong>consumer-friendly app</strong> that estimates <strong>drug metabolism and biophysical behavior</strong> in real time. 
          Users enter simple health data, and the app predicts <strong>drug distribution in blood, liver, fat, and muscle</strong>. 
          It serves as a <strong>miniaturized companion to HepatoTrack</strong>, offering personalized insights for everyday users.
        </p>

        {/* Showcase Poster */}
        <div className="mt-6 flex justify-center">
          <Image
            src="/BioTrackerPipeline-2.png" // The poster you provided
            alt="BioTrack Poster"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Future Integration */}
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          In the future, <strong>BioTrack</strong> will integrate with <strong>HepatoTrack</strong> to enable a seamless flow from <strong>consumer health tracking</strong> 
          to <strong>clinical-grade liver simulations</strong>. This synergy will empower both individuals and clinicians with more accurate, 
          AI-driven health insights.
        </p>
      </section>

      {/* Patent Info */}
      <section className="mt-12 text-gray-500 text-sm italic">
        <p>🔒 This software is currently <strong>patent-pending</strong>.  
        For collaboration or research inquiries, please contact me directly.</p>
      </section>
    </main>
  );
}

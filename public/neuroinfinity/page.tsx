import Image from "next/image";

export default function NeuroInfinity() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Logo + Intro */}
      <div className="flex flex-col items-center">
        <Image
          src="/neuroinfinity-logo.png"
          alt="NeuroInfinity Logo"
          width={180}
          height={180}
        />
        <h1 className="text-4xl font-bold mt-4">NeuroInfinity</h1>
        <p className="text-gray-600 mt-2 text-center">
          A Brain-Computer Interface (BCI) for controlling a robotic arm in a VR environment.
        </p>
      </div>

      {/* Pipeline Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4">🧠 Prototype Pipeline</h2>
        <Image
          src="/pipeline.png"
          alt="NeuroInfinity Pipeline"
          width={1200}
          height={600}
          className="rounded-lg shadow-md"
        />
        <p className="mt-4 text-gray-700">
          EEG signals are cleaned using artifact removal, preprocessed for feature extraction,
          classified using deep learning, and translated into robotic arm commands in VR.
        </p>
      </section>

      {/* Demo GIFs */}
      <section className="mt-12 grid md:grid-cols-3 gap-4">
        <div className="text-center">
          <Image src="/gif-artifact-removal.gif" alt="Artifact Removal Demo" width={300} height={200} />
          <p className="mt-2 text-sm text-gray-600">Artifact Removal in EEG</p>
        </div>
        <div className="text-center">
          <Image src="/gif-head-orientation.gif" alt="Head Orientation Demo" width={300} height={200} />
          <p className="mt-2 text-sm text-gray-600">Head Orientation Estimation</p>
        </div>
        <div className="text-center">
          <Image src="/gif-infinityworld.gif" alt="InfinityWorld VR Demo" width={300} height={200} />
          <p className="mt-2 text-sm text-gray-600">InfinityWorld VR Interaction</p>
        </div>
      </section>

      {/* Video Demo */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4">🎥 Live Demo</h2>
        <video controls className="w-full rounded-lg shadow-lg">
          <source src="/demo-neuroinfinity.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Key Metrics */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4">📊 Key Achievements</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>EEG Classification Accuracy: <b>92%</b></li>
          <li>VR Robotic Arm Control Latency: <b>~150ms</b></li>
          <li>Integrated artifact removal for clean real-time signals</li>
          <li>Built by a team of <b>6 engineers</b> and <b>1 graphic designer</b></li>
        </ul>
      </section>
    </main>
  );
}

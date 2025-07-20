"use client";

import { useState } from "react";
import Image from "next/image";

export default function NeuroInfinity() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const demoImages = [
    {
      src: "/gif-artifact-removal.png",
      title: "Artifact Removal in EEG",
    },
    {
      src: "/gif-head-orientation.gif",
      title: "Head Orientation Estimation",
    },
    {
      src: "/gif-infinityworld.gif",
      title: "InfinityWorld VR Interaction",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Logo + Intro */}
      <div className="flex flex-col items-center">
        <Image
          src="/NeuroInfinity_Logo.png"
          alt="NeuroInfinity Logo"
          width={350}
          height={350}
        />
        <h1 className="text-4xl font-bold mt-4 text-white">NeuroInfinity</h1>
        <p className="text-gray-400 mt-2 text-center">
          A Brain-Computer Interface (BCI) for controlling a robotic arm in a VR environment.
        </p>
      </div>

      {/* Pipeline Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-white">🧠 Prototype Pipeline</h2>
        <Image
          src="/pipeline.png"
          alt="NeuroInfinity Pipeline"
          width={1200}
          height={600}
          className="rounded-lg shadow-md cursor-pointer hover:opacity-80 transition"
          onClick={() => setSelectedImage("/pipeline.png")}
        />
        <p className="mt-4 text-gray-300">
          EEG signals are cleaned using artifact removal, preprocessed for feature extraction,
          classified using deep learning, and translated into robotic arm commands in VR.
        </p>
      </section>

      {/* Demo GIFs with Click-to-Expand */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-white">✨ Key Demos</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {demoImages.map((demo) => (
            <div key={demo.src} className="text-center">
              <Image
                src={demo.src}
                alt={demo.title}
                width={300}
                height={200}
                className="cursor-pointer rounded-md hover:opacity-80 transition"
                onClick={() => setSelectedImage(demo.src)}
              />
              <p className="mt-2 text-sm text-gray-400">{demo.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Demo */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-white">🎥 Live Demo</h2>
        <video controls preload="none" poster="/seven-languages-thumbnail.jpg" width="640">
  <source 
    src="https://github.com/Svadilfvari/my-portfolio/releases/tag/V1.0/demo-neuroinfinity-fixed.mp4" 
    type="video/mp4" 
  />
  
</video>
      </section>

      {/* Key Metrics */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-white">📊 Key Achievements</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>EEG Classification Accuracy: <b className="text-white">65%</b></li>
          <li>VR Robotic Arm Control Latency: <b className="text-white">~150ms</b></li>
          <li>Integrated artifact removal for clean real-time signals</li>
          <li>Built by a team of <b className="text-white">6 engineers</b> and <b className="text-white">1 graphic designer</b></li>
        </ul>
      </section>

      {/* 🏆 Award Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">🏆 National Recognition</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          NeuroInfinity won the <b className="text-white">2nd Prize</b> at the 
          <i> &quot;My Project in 5 Minutes&quot; </i> national pitch competition, 
          showcasing innovative student-led projects across France.
        </p>
        <div className="flex justify-center">
          <Image
            src="/award-ceremony-neuroinfinity.jpg"
            alt="Award Ceremony - Receiving the Prize"
            width={600}
            height={400}
            className="rounded-lg shadow-lg hover:opacity-90 transition cursor-pointer"
            onClick={() => setSelectedImage("/award-ceremony-neuroinfinity.jpg")}
          />
        </div>
        <p className="mt-4 text-gray-400 text-sm">
          📸 Moment of receiving the award at the national competition.
        </p>
      </section>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="Fullscreen Demo"
            width={1000}
            height={700}
            className="rounded shadow-lg"
          />
          <button
            className="absolute top-6 right-6 text-white text-2xl hover:text-red-400"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </main>
  );
}

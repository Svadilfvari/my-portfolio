export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-black text-gray-200">
{/* Hero Section */}
<section className="flex flex-col items-center text-center">
  {/* Profile Photo */}
  <img 
  src="/me.png" 
  alt="Edouard David" 
  className="w-56 h-56 rounded-full border-4 border-gray-800 shadow-xl mb-6 object-cover"
/>

  <h1 className="text-5xl font-bold text-white">
    👋 Hi, I'm <span className="text-blue-400">Edouard David</span>
  </h1>
  <p className="mt-4 text-lg text-gray-300">
    <b>Robotics & AI Engineer</b> • <b>ML Researcher</b> • <b>Founder & Inventor</b>
  </p>

  {/* Contact Links */}
  <div className="mt-4 flex flex-wrap justify-center gap-4 text-gray-400">
    <span>🇫🇷 Paris</span> |
    <a href="mailto:edouardkdavid@gmail.com" className="text-blue-400 hover:underline">📫 Email</a> |
    <a href="https://www.linkedin.com/in/edouard-david-6b2594197/" className="text-blue-400 hover:underline">🌐 LinkedIn</a> |
    <a href="https://github.com/Svadilfvari" className="text-blue-400 hover:underline">🧠 GitHub</a>
  </div>
</section>
      {/* Divider */}
      <div className="w-24 h-1 bg-gray-700 my-8"></div>

      {/* About Me */}
      <section className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white mb-4">🤓 About Me</h2>
        <p className="mb-2 text-gray-300">🧠 Master's student in <b className="text-white">Automation & Robotics</b> @ Sorbonne Université</p>
        <p className="mb-2 text-gray-300">🔬 Research experience @ <b className="text-white">University of Tokyo</b>, <b className="text-white">EPFL</b>, <b className="text-white">CentraleSupélec</b></p>
        <p className="mb-2 text-gray-300">🤖 Creator of <b className="text-blue-400">NeuroInfinity</b> – BCI robotic arm for virtual reality</p>
        <p className="text-gray-300">🚀 Passionate about <b className="text-white">embedded AI</b>, <b className="text-white">GPU acceleration</b>, and <b className="text-white">AI for healthcare</b></p>
      </section>
{/* Education */}
<section className="mt-12 max-w-3xl text-center">
  <h2 className="text-3xl font-bold mb-6 text-white">🎓 Education</h2>

  {/* Master's Degree */}
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-blue-400">
      Master's in Automation & Robotics – <span className="text-white">Intelligent Systems Engineering (ISE)</span>
    </h3>
    <p className="text-gray-300">
      2022 – 2025 • Sorbonne Université | Paris, France
    </p>
    <p className="text-gray-400 text-sm">
      Ranked <strong>Top 10 of cohort (8th/41)</strong> with minimal grade variance among top students.
    </p>
    <a
      href="https://sciences.sorbonne-universite.fr/en/masters/masters-degree-automation-and-robotics/intelligent-systems-engineering-isi-course" 
      target="_blank"
      className="text-blue-400 hover:underline text-sm mt-1 inline-block"
    >
      🌐 View Master’s Program
    </a>
  </div>

  {/* Bachelor's Degree */}
  <div>
    <h3 className="text-xl font-semibold text-blue-400">
      Bachelor's in Electronics, Electrical Energy & Automation
    </h3>
    <p className="text-gray-300">
      2020 – 2022 • Sorbonne Université | Paris, France
    </p>
    <p className="text-gray-400 text-sm">
      Graduated in the <strong>Top 10% of cohort</strong> within the selective CMI Engineering Track.
    </p>
    <a
      href="https://sciences.sorbonne-universite.fr/formation-sciences/offre-de-formation/licences-0/licence-discipline/les-l2-l3-nos-huit-3" 
      target="_blank"
      className="text-blue-400 hover:underline text-sm mt-1 inline-block"
    >
      🌐 View Bachelor’s Program
    </a>
  </div>
</section>
      {/* Tech Stack */}
      <section className="mt-12 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">🛠️ Tech Stack</h2>
        <p><b className="text-blue-400">Languages:</b> Python, C++, Java, Swift, R</p>
        <p><b className="text-blue-400">Frameworks:</b> PyTorch, TensorFlow, ROS, CUDA</p>
        <p><b className="text-blue-400">Systems:</b> STM32, Embedded C, GPU computing, EMG interfaces</p>
        <p><b className="text-blue-400">Tools:</b> Linux, Git, Docker, OpenCV, MATLAB, GitHub Actions</p>
      </section>

      {/* Projects */}
<section className="mt-12 max-w-4xl">
  <h2 className="text-3xl font-bold text-center mb-8 text-white">📌 Featured Projects</h2>

  <div className="space-y-6">
        {/* AlphaMind BTC/USDT Prediction */}
        <div className="p-6 border border-gray-700 rounded-lg shadow bg-gray-900">
      <h3 className="text-xl font-semibold text-blue-400">🤖 AlphaMind: Transformer BTC/USDT Predictive Model</h3>
      <p className="text-gray-300 mt-2">
      A <strong>Transformer sequence model</strong> that predicts BTC/USDT returns using <strong>RSI, MACD, Bollinger Bands</strong> 
      and achieves <strong>68% directional accuracy</strong> for profitable trading signals.
      </p>
      <a 
        href="https://github.com/Svadilfvari/AlphaMind-Transformer-Based-BTC-USDT-Predictive-Model/tree/main" 
        className="mt-2 inline-block text-blue-400 hover:underline"
      >
        🔗 View on GitHub
      </a>
    </div>


    {/* Autonomous Rescue Robot */}
    <div className="p-6 border border-gray-700 rounded-lg shadow bg-gray-900">
      <h3 className="text-xl font-semibold text-blue-400">🚨 Autonomous Rescue Robot – ROS Multi-Sensor Navigation</h3>
      <p className="text-gray-300 mt-2">
        ROS-based <strong>autonomous TurtleBot3</strong>
        fusing camera, LiDAR, and IMU for  
        <strong>lane following, obstacle avoidance, and tunnel traversal</strong> with 100% success rate.
      </p>
      <a 
        href="https://github.com/Svadilfvari/Self-Driving-robot-/tree/main" 
        className="mt-2 inline-block text-blue-400 hover:underline"
      >
        🔗 View on GitHub
      </a>
    </div>
    {/* STM32 Embedded Games */}
    <div className="p-6 border border-gray-700 rounded-lg shadow bg-gray-900">
      <h3 className="text-xl font-semibold text-blue-400">🎮 STM32 Embedded Games & Utilities</h3>
      <p className="text-gray-300 mt-2">
        A suite of <strong>mini-games & utilities</strong> on STM32 using <strong>timers, ADC, UART, ultrasonic sensors, and IR remote</strong>  
        Includes a reaction time game, countdown challenge, and text-based 2D adventure.
      </p>
      <a 
        href="https://github.com/Svadilfvari/MicrocontrollerProjectSTM32/tree/main" 
        className="mt-2 inline-block text-blue-400 hover:underline"
      >
        🔗 View on GitHub
      </a>
    </div>



  </div>
</section>
<section className="mt-16 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-10 text-white">
    🔬 Research & Innovation Highlights
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    
    {/* EPFL Internship */}
    <div className="border border-gray-700 rounded-lg p-6 bg-gray-900 text-center shadow-md">
      <h3 className="text-xl font-semibold text-blue-400">⚡ NeuroPulse Analyzer (EPFL)</h3>
      <img src="/neuropulse-logo.png" alt="NeuroPulse Analyzer Logo"   className="mx-auto h-50 w-auto mb-20 rounded"
      />
      <p className="text-gray-300 text-sm">
        Developed <strong>NeuroPulse Analyzer</strong>, a <strong>10ms latency EMG signal analyzer</strong> for spinal neuromodulation. 
        Presented at Sorbonne Robotics showcase, winning <strong>1st Prize among 80+ projects</strong>.
      </p>
      <a href="/research" className="mt-3 inline-block text-blue-400 hover:underline">
        📄 View Poster & Details
      </a>
    </div>

    {/* HepatoTrack - University of Tokyo */}
    <div className="border border-gray-700 rounded-lg p-6 bg-gray-900 text-center shadow-md">
      <h3 className="text-xl font-semibold text-blue-400">🧪 HepatoTrack (University of Tokyo)</h3>
      <img src="/hepatotrack-logo.png" alt="HepatoTrack Logo" className="mx-auto h-50 w-auto mb-20 rounded" />
      <p className="text-gray-300 text-sm">
        <strong>Patent-pending liver health platform</strong> integrating <strong>KanzoTwin</strong> (CUDA biophysical liver twin), 
        <strong>KanzoNet</strong> (histology AI), <strong>Random Forest patient classifier</strong>, and 
        <strong>KanzoAssistant</strong> (LLM insights).
      </p>
      <a href="/hepatotrack" className="mt-3 inline-block text-blue-400 hover:underline">
  🔗 Learn More
</a>

    </div>

    {/* CNRS LIF Neuron Simulation */}
    <div className="border border-gray-700 rounded-lg p-6 bg-gray-900 text-center shadow-md">
      <h3 className="text-xl font-semibold text-blue-400">🧠 Biological Neuron Simulation (CNRS)</h3>
      <img src="/lif-neuron-illustration.png" alt="LIF Neuron Simulation" className="mx-auto h-50 w-auto mb-20 rounded"/>
      <p className="text-gray-300 text-sm">
        <strong>MATLAB-based Leaky Integrate-and-Fire neuron simulation</strong>, 
        reducing simulation time <strong>from 24h (Cadence) to minutes</strong> 
        with only <strong>9.2% RMSPE error</strong>, enabling faster neuromorphic analysis.
      </p>
      <a href="https://github.com/Svadilfvari/ArtificialNeuroneLaboratoryInternship" className="mt-3 inline-block text-blue-400 hover:underline">
        🔗 View GitHub
      </a>
    </div>

  </div>
</section>


      {/* Startups & Entrepreneurship */}
      <section className="mt-12 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">🚀 Startups & Entrepreneurial Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Spoild */}
          <div className="border border-gray-700 rounded-lg shadow bg-gray-900 p-6 flex flex-col items-center text-center">
            <img src="/spoild-logo.png" alt="Spoild Logo" className="h-20 mb-4" />
            <h3 className="text-xl font-semibold text-blue-400">🥗 Spoild – Reduce Food Waste</h3>
            <p className="text-gray-400 mt-2">Founder & Product Lead</p>
            <ul className="mt-4 list-disc text-left pl-5 text-gray-300 text-sm">
              <li>Built prototype & presented to CEOs</li>
              <li>Features: Expiry Alerts, Expense Tracking, Eco-Impact</li>
              <li>🏆 National Student Entrepreneur Title</li>
            </ul>
            <a 
  href="/spoild" 
  className="mt-4 text-blue-400 hover:underline"
>
  📄 View Pitch Deck
</a>
          </div>

          {/* Neatly */}
          <div className="border border-gray-700 rounded-lg shadow bg-gray-900 p-6 flex flex-col items-center text-center">
            <img src="/neatly-logo.png" alt="Neatly Logo" className="h-20 mb-4" />
            <h3 className="text-xl font-semibold text-blue-400">📊 Neatly – Financial Optimization</h3>
            <p className="text-gray-400 mt-2">Founder</p>
            <ul className="mt-4 list-disc text-left pl-5 text-gray-300 text-sm">
              <li>Custom Excel dashboard for expense tracking</li>
              <li>Reduced fixed costs via targeted actions</li>
              <li>Secured invoice factoring for cash flow</li>
            </ul>
          </div>

          {/* NeuroInfinity */}
          <div className="border border-gray-700 rounded-lg shadow bg-gray-900 p-6 flex flex-col items-center text-center">
            <img src="/NeuroInfinity_Logo.png" alt="NeuroInfinity Logo" className="h-20 mb-4" />
            <h3 className="text-xl font-semibold text-blue-400">🧠 NeuroInfinity – BCI for VR</h3>
            <p className="text-gray-400 mt-2">Founder & Team Lead</p>
            <p className="mt-2 text-gray-300 text-sm">
              Brain-computer interface enabling robotic arm control in virtual reality.
            </p>
            <a href="/neuroinfinity" className="text-blue-400 hover:underline mt-3 inline-block">🔗 View Details</a>
          </div>
        </div>
      </section>

      {/* Projects */}
      {/* (KEEP your existing Featured Projects & Research Highlights here without changes) */}

      {/* Policy & Innovation Analysis */}
      <section className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">📊 Policy & Innovation Analysis</h2>
        <div className="grid md:grid-cols-2 gap-8">

          {/* Germany Innovation System */}
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-900 shadow-md">
            <h3 className="text-xl font-semibold text-blue-400">🇩🇪 Germany’s Innovation System</h3>
            <p className="text-gray-300 text-sm mt-2">
              Analyzed Germany’s <strong>innovation ecosystem</strong> and recommended policies based on the <strong>2022 OECD report</strong>.
            </p>
            <a href="/reports/germany-oecd" className="text-blue-400 hover:underline mt-3 inline-block">
              📄 View Full Report
            </a>
          </div>

          {/* Combined France Policy Slides */}
          <div className="border border-gray-700 rounded-lg p-6 bg-gray-900 shadow-md">
            <h3 className="text-xl font-semibold text-blue-400">🇫🇷 France & Innovation Policy</h3>
            <p className="text-gray-300 text-sm mt-2">
              Combined presentation analyzing <strong>Suzanne Berger’s MIT report</strong> (commissioned by <strong>Emmanuel Macron</strong>, 2015)
              and <strong>Indirect R&D Support (CIR)</strong> – a €6B/year policy supporting French innovation.
            </p>
            <a href="/reports/france-innovation-policy" className="text-blue-400 hover:underline mt-3 inline-block">
              🎥 View Google Slides
            </a>
          </div>

        </div>
      </section>
      /* Beyond Engineering */
<section className="mt-20 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-8 text-white">
    🎭 Beyond Robotics & AI
  </h2>

  <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
    Beyond my work in robotics and AI, I embrace disciplines that build <strong>mental strategy, physical focus, and creative depth</strong>. From <strong>MMA training</strong> and <strong>chess</strong> to <strong>martial arts in Japan</strong>, and storytelling through <strong>novels & public speaking</strong>, I believe in challenging both the mind and body.
  </p>

  <div className="grid md:grid-cols-2 gap-10 justify-center text-center place-items-center">
  {/* Katana & Martial Arts Video */}
  <div className="border border-gray-700 rounded-lg bg-gray-900 shadow-md p-6">
    <h3 className="text-xl font-semibold text-blue-400">⚔️ Katana Training in Tokyo</h3>
    <video controls className="mt-4 rounded shadow">
      <source src="/katanas.mp4" type="video/mp4" />
    </video>
    <p className="mt-4 text-gray-300 text-sm">
      Practicing precision and discipline with traditional katana cutting techniques  
      at a <strong>dojo near the Imperial Palace in Tokyo</strong>.
    </p>
  </div>

  {/* Multilingual Public Speaking */}
  <div className="border border-gray-700 rounded-lg bg-gray-900 shadow-md p-6">
    <h3 className="text-xl font-semibold text-blue-400">🌍 Multilingual Public Speaking</h3>
    <video controls className="mt-4 rounded shadow">
      <source src="/seven-languages-speech.mp4" type="video/mp4" />
    </video>
    <p className="mt-4 text-gray-300 text-sm">
      Delivered a speech on <strong>freedom</strong> in <strong>7 languages</strong>:  
      French, English, Arabic, German, Spanish, Japanese, and Russian.
    </p>
    <a 
  href="/seven-languages.pdf" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-blue-400 hover:underline mt-2 inline-block"
>
  📝 Read the Speech Transcript (PDF)
</a>

  </div>
</div>


  {/* Creative Writing */}
  <div className="mt-16">
    <h3 className="text-2xl font-bold text-center mb-8 text-white">📖 Creative Writing</h3>
    <p className="text-center text-gray-400 mb-10">
      I write stories that explore <strong>technology, morality, and the human spirit</strong>.
    </p>

    <div className="grid md:grid-cols-2 gap-10">
      {/* First Novel - Jon Kallen */}
      <div className="border border-gray-700 rounded-lg bg-gray-900 shadow-md p-6 text-center">
        <img 
          src="/jon-kallen-cover.png" 
          alt="Jon Kallen: A Devil Turned Angel" 
          className="mx-auto rounded shadow-lg mb-4" 
        />
        <h4 className="text-lg font-semibold text-blue-300">🔥 Jon Kallen: A Devil Turned Angel</h4>
        <p className="text-gray-400 text-sm italic mt-2">
        He became a god… but chose to be more.
        </p>
        <p className="text-gray-300 text-sm mt-2">
          A dark fantasy & sci-fi saga where rage becomes redemption. <em>What does it mean to be a god—to punish, or to forgive?</em>
        </p>
        <a href="/novels/jon-kallen-sample.pdf" className="text-blue-400 hover:underline mt-3 inline-block">
          📄 Read Sample Chapter
        </a>
      </div>

      {/* Second Novel - Legion of the Six */}
      <div className="border border-gray-700 rounded-lg bg-gray-900 shadow-md p-6 text-center">
        <img 
          src="/legion-of-the-six-cover.png" 
          alt="Legion of the Six" 
          className="mx-auto rounded shadow-lg mb-4" 
        />
        <h4 className="text-lg font-semibold text-blue-300">🌌 Legion of the Six (Upcoming)</h4>
        <p className="text-gray-400 text-sm italic mt-2">
          They didn’t conquer the world—they convinced it to surrender.
        </p>
        <p className="text-gray-300 text-sm mt-2">
          Six students sought to heal the world, but salvation turned into quiet tyranny. A saga of <strong>technology, philosophy, and the price of utopia</strong>.
        </p>
        <p className="mt-3 text-gray-500 text-xs">📖 Currently in progress</p>
      </div>
    </div>
  </div>
</section>


      {/* Certifications */}
      <section className="mt-12 max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">📚 Certifications</h2>
        <p>📈 <a href="https://coursera.org/verify/94UZGQ8MR7XL" className="text-blue-400 hover:underline">Financial Markets – Yale (Coursera)</a></p>
        <p>📊 <a href="https://ude.my/UC-229c0a69-0468-4a0d-b2e6-63cff6b69943" className="text-blue-400 hover:underline">Programmer en R pour la Data Science – Udemy</a></p>
        <p className="text-gray-300">🌍 Erasmus Scholar @ TUM (Germany) & UC3M (Spain)</p>
      </section>

      {/* Languages */}
      <section className="mt-12 max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">🌍 Spoken Languages</h2>
        <p className="text-gray-300">🇫🇷 French (Native) • 🇬🇧 English (C2) • 🇦🇪 Arabic (C2) • 🇩🇪 German (B2) • 🇪🇸 Spanish (B2) • 🇯🇵 Japanese (JLPT N5) • 🇷🇺 Russian (A1)</p>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500">
        <p className="italic">"Invent boldly. Build fast. Think deeply."</p>
        <p className="mt-2">📧 <a href="mailto:edouardkdavid@gmail.com" className="hover:underline">edouardkdavid@gmail.com</a></p>
      </footer>
    </main>
  );
}

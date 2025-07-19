import Link from "next/link";

export default function FranceInnovationPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-center text-gray-300">
      <h1 className="text-4xl font-bold text-blue-400">🇫🇷 France & Innovation Policy Analysis</h1>
      <p className="mt-4 text-gray-400">
        This Google Slides presentation covers two key topics:  
        <br />✅ <strong>Suzanne Berger’s MIT report</strong> on France, globalization & innovation (commissioned by Emmanuel Macron, 2015)  
        <br />✅ <strong>Indirect R&D Support (CIR)</strong> – €6B/year policy for fostering innovation in France  
      </p>

      {/* Embed Google Slides */}
      <div className="mt-8 aspect-w-16 aspect-h-9">
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ1M6ysxuZNLG_HMLylOE8zNvkjiYwQgRVlg-R-gY6nkkR94Xmh7_LRYiWwr6L3KzmGzrc2ijFpM4DO/pubembed?start=true&loop=false&delayms=3000"  
      width="960" height="569" ></iframe>
      </div>

      {/* Back link */}
      <Link href="/" className="mt-6 inline-block text-blue-400 hover:underline">
        ⬅ Back to Home
      </Link>
    </main>
  );
}

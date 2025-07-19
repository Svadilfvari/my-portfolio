import Link from "next/link";

export default function GermanyOECDReport() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-center text-gray-300">
      <h1 className="text-4xl font-bold text-blue-400">🇩🇪 Germany’s Innovation System – OECD Report Analysis</h1>
      <p className="mt-4 text-gray-400">
        This report analyzes Germany’s innovation ecosystem and policy recommendations based on the <strong>2022 OECD Innovation Report</strong>.
      </p>

      {/* Embed PDF */}
      <div className="mt-8">
        <iframe 
          src="/germany-innovation.pdf" 
          className="w-full h-[800px] border border-gray-700 rounded-lg"
        ></iframe>
      </div>

      {/* Back link */}
      <Link href="/" className="mt-6 inline-block text-blue-400 hover:underline">
        ⬅ Back to Home
      </Link>
    </main>
  );
}

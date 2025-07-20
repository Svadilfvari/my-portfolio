export default function ContactPage() {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-blue-400">📫 Contact Me</h1>
        <p className="mt-4 text-gray-300">
          You can reach me at:
        </p>
        <a
          href="mailto:edouardkdavid@gmail.com"
          className="text-blue-400 hover:underline mt-2 inline-block"
        >
          edouardkdavid@gmail.com
        </a>
      </main>
    );
}
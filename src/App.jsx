import React from "react";

export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-white p-6">
      <div className="max-w-3xl w-full bg-white/90 rounded-3xl shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-2">Wanderwise</h1>
        <p className="text-gray-700 mb-6">
          Your travel planning core — Excel + Login. Scalable, modular, ready for AI.
        </p>

        <div className="flex gap-3">
          <a className="px-4 py-2 rounded-md bg-indigo-600 text-white font-medium" href="#">
            Sign in
          </a>
          <a className="px-4 py-2 rounded-md border border-indigo-600 text-indigo-600 font-medium" href="#">
            Learn more
          </a>
        </div>

        <footer className="mt-6 text-sm text-gray-500">
          Built with Vite + React + Tailwind. Deployed on GitHub Pages.
        </footer>
      </div>
    </main>
  );
}

import { useState } from "react";

function QuizConfig({ onStart, loading }) {
  const [settings, setSettings] = useState({ amount: 10, difficulty: "easy" });

  return (
    <div className="min-h-screen bg-[#f5f4f7] px-4 py-6">
      <div className="mx-auto max-w-sm rounded-3xl bg-white p-5 shadow-md">
        <h2 className="mb-5 text-xl font-bold text-slate-800">
          Configurer le quiz
        </h2>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              Nombre de questions
            </label>
            <input
              type="number"
              value={settings.amount}
              onChange={(e) =>
                setSettings({ ...settings, amount: Number(e.target.value) })
              }
              className="w-full rounded-2xl bg-[#f1edf3] px-4 py-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              Difficulté
            </label>
            <select
              value={settings.difficulty}
              onChange={(e) =>
                setSettings({ ...settings, difficulty: e.target.value })
              }
              className="w-full rounded-2xl bg-[#f1edf3] px-4 py-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="easy">Facile</option>
              <option value="medium">Moyen</option>
              <option value="hard">Difficile</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => onStart(settings)}
          disabled={loading}
          className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#2d0ea8] to-[#6d2cf3] px-4 py-3 font-semibold text-white shadow-md transition active:scale-[0.98]"
        >
          {loading ? "Chargement..." : "Commencer"}
        </button>
      </div>
    </div>
  );
}

export default QuizConfig;

function QuizConfig({ settings, setSettings, onStart, loading }) {
  return (
    <div className="min-h-screen bg-[#f5f4f7] px-4 py-6">
      <div className="mx-auto max-w-sm rounded-3xl bg-white p-5 shadow-md">
        <h2 className="mb-5 text-xl font-bold text-slate-800">
          Configurer le quiz
        </h2>

        <div className="space-y-4">
          <input
            type="number"
            value={settings.amount}
            onChange={(e) =>
              setSettings({ ...settings, amount: Number(e.target.value) })
            }
            className="w-full rounded-2xl bg-[#f1edf3] px-4 py-3"
          />

          <select
            value={settings.difficulty}
            onChange={(e) =>
              setSettings({ ...settings, difficulty: e.target.value })
            }
            className="w-full rounded-2xl bg-[#f1edf3] px-4 py-3"
          >
            <option value="easy">Facile</option>
            <option value="medium">Moyen</option>
            <option value="hard">Difficile</option>
          </select>
        </div>

        <button
          onClick={onStart}
          disabled={loading}
          className="mt-6 w-full bg-purple-600 text-white py-3 rounded-2xl"
        >
          {loading ? "Chargement..." : "Commencer"}
        </button>
      </div>
    </div>
  );
}

export default QuizConfig;
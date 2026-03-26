function ErrorMessage({ error, onRetry, onBack }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-bold text-red-500">Erreur</h2>

      <p className="text-gray-600">{error}</p>

      <button
        onClick={onRetry}
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Réessayer
      </button>

      <button onClick={onBack} className="rounded bg-gray-300 px-4 py-2">
        Retour
      </button>
    </div>
  );
}

export default ErrorMessage;

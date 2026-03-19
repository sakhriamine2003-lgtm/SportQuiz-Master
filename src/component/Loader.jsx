import React from "react";

function Loader() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

      <p className="animate-pulse text-lg font-medium text-gray-600">
        Loading...
      </p>
    </div>
  );
}

export default Loader;

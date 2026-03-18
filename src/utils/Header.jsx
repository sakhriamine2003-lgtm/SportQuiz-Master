function Header({ title = "Hi, Kenzy" }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e9e2ea]">
          👤
        </div>
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-xs text-slate-400">Ready to play</p>
        </div>
      </div>

      {/* Right (points) */}
      <div className="flex items-center gap-1 rounded-full bg-[#f1edf3] px-3 py-1 text-xs font-semibold text-purple-600">
        💎 200
      </div>
    </div>
  );
}

export default Header;

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="fixed bottom-4 left-0 right-0 mx-auto max-w-sm px-4">
      <div className="flex items-center justify-between rounded-2xl bg-white px-6 py-3 shadow-lg">
        <Link to="/" className="text-slate-400 transition hover:text-[#4f1fd6]">
          <i className="fa-solid fa-house text-lg"></i>
        </Link>

        <Link
          to="/quiz"
          className="text-slate-400 transition hover:text-[#4f1fd6]"
        >
          <i className="fa-solid fa-heart text-lg"></i>
        </Link>

        <Link
          to="/profile"
          className="text-slate-400 transition hover:text-[#4f1fd6]"
        >
          <i className="fa-solid fa-user text-lg"></i>
        </Link>
      </div>
    </div>
  );
}

export default Footer;

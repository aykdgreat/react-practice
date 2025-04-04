import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="bg-blue-900 text-white  px-10 py-4 sm:py-2 sm:text-2xl font-bold flex flex-col sm:flex-row items-center gap-4">
        <Link to="/" className="hover:text-white/80">
          Home
        </Link>
        <Link to="/counter" className="hover:text-white/80">
          Counter
        </Link>
        <Link to="/crowdfunding" className="hover:text-white/80">
          Crowdfunding
        </Link>
        <Link to="/budget-tracker" className="hover:text-white/80">
          Budget Tracker
        </Link>
        <Link to="/excuse-generator" className="hover:text-white/80">
          Excuse Generator API
        </Link>
      </nav>
    </>
  );
}

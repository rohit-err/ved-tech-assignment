import toast from "react-hot-toast";
import useStore from "../store/useStore";

function Header() {
  const { logout } = useStore();

  const handleLogout = async () => {
    sessionStorage.removeItem('selectedSubmissionId');
    await logout();
    toast.success("Logged out successfully!");
  };

  return (
    <header className="bg-white border-b border-outline-variant">
      <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="font-display text-xl font-bold text-on-background">
            Ved Tech Services
          </h1>
          <span className="text-sm text-on-surface-variant">Admin Panel</span>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-on-surface-variant hover:text-error hover:bg-error/5 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-lg">logout</span>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;

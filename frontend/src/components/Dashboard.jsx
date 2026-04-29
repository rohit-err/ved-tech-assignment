import { useEffect } from "react";
import toast from "react-hot-toast";
import useStore from "../store/useStore";
import Header from "./Header";
import SubmissionsTable from "./SubmissionsTable";
import ViewSubmission from "./ViewSubmission";

const SESSION_KEY = "selectedSubmissionId";

function Dashboard() {
  const {
    submissions,
    selectedSubmission,
    setSelectedSubmission,
    getSubmissions,
  } = useStore();

  useEffect(() => {
    const fetchSubmissions = async () => {
      const result = await getSubmissions();
      if (!result.success) {
        toast.error(result.message || "Failed to load submissions");
        return;
      }

      // Restore selected submission from sessionStorage after refresh
      const savedId = sessionStorage.getItem(SESSION_KEY);
      if (savedId) {
        const found = result.submissions?.find((s) => s._id === savedId);
        if (found) setSelectedSubmission(found);
        else sessionStorage.removeItem(SESSION_KEY);
      }
    };
    fetchSubmissions();
  }, [getSubmissions, setSelectedSubmission]);

  const handleViewSubmission = (submission) => {
    sessionStorage.setItem(SESSION_KEY, submission._id);
    setSelectedSubmission(submission);
  };

  const handleBackToList = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setSelectedSubmission(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-[1280px] mx-auto px-6 py-8">
        {selectedSubmission ? (
          <ViewSubmission
            submission={selectedSubmission}
            onBack={handleBackToList}
          />
        ) : (
          <SubmissionsTable onViewSubmission={handleViewSubmission} />
        )}
      </main>
    </div>
  );
}

export default Dashboard;

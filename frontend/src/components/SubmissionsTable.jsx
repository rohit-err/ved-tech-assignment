import useStore from "../store/useStore";

// Fixed column widths shared between header and body tables
const colWidths = ["w-[18%]", "w-[22%]", "w-[30%]", "w-[20%]", "w-[10%]"];

function SubmissionsTable({ onViewSubmission }) {
  const { submissions, isLoadingSubmissions } = useStore();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const truncateMessage = (message, maxLength = 60) => {
    if (!message) return "-";
    if (message.length <= maxLength) return message;
    return message.substring(0, maxLength) + "...";
  };

  const loader = (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="inline-block w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-3"></div>
        <p className="text-sm text-on-surface-variant">Loading submissions...</p>
      </div>
    </div>
  );

  return (
    <div>
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-on-background mb-2">Contact Submissions</h2>
        <p className="text-sm text-on-surface-variant">
          Total submissions: <span className="font-semibold">{submissions.length}</span>
        </p>
      </div>

      {/* Mobile: Card Layout */}
      <div className="md:hidden flex flex-col gap-3">
        {isLoadingSubmissions ? (
          <div className="flex items-center justify-center py-16">{loader}</div>
        ) : submissions.length === 0 ? (
          <div className="bg-white rounded-xl border border-outline-variant p-8 text-center text-on-surface-variant">
            No submissions found
          </div>
        ) : (
          submissions.map((submission) => (
            <div
              key={submission._id}
              className="bg-white rounded-xl border border-outline-variant p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="font-semibold text-on-background">{submission.name}</div>
                  <div className="text-sm text-on-surface-variant">{submission.email}</div>
                </div>
                <button
                  onClick={() => onViewSubmission(submission)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-semibold text-primary hover:bg-primary/5 rounded-lg transition-colors flex-shrink-0"
                >
                  <span className="material-symbols-outlined text-lg">visibility</span>
                  View
                </button>
              </div>
              <div className="text-sm text-on-surface-variant mb-2">
                {truncateMessage(submission.message)}
              </div>
              <div className="text-xs text-on-surface-variant">
                {formatDate(submission.createdAt)}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Desktop: Table Layout */}
      <div
        className="hidden md:flex bg-white rounded-xl border border-outline-variant shadow-sm flex-col overflow-hidden"
        style={{ height: "calc(100vh - 220px)" }}
      >
        {/* Table Header - Fixed */}
        <div className="border-b border-outline-variant">
          <table className="w-full table-fixed">
            <colgroup>
              {colWidths.map((w, i) => <col key={i} className={w} />)}
            </colgroup>
            <thead>
              <tr className="bg-surface-container-low">
                <th className="text-left px-6 py-4 text-sm font-semibold text-on-surface-variant">Name</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-on-surface-variant">Email</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-on-surface-variant">Message</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-on-surface-variant">Date</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-on-surface-variant">Action</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Table Body - Scrollable */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {isLoadingSubmissions ? loader : (
            <table className="w-full table-fixed">
              <colgroup>
                {colWidths.map((w, i) => <col key={i} className={w} />)}
              </colgroup>
              <tbody>
                {submissions.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-on-surface-variant">
                      No submissions found
                    </td>
                  </tr>
                ) : (
                  submissions.map((submission) => (
                    <tr
                      key={submission._id}
                      className="border-b border-outline-variant last:border-b-0 hover:bg-surface-container-low transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="font-semibold text-on-background truncate">{submission.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-on-surface-variant truncate">{submission.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-on-surface-variant truncate">{truncateMessage(submission.message)}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-on-surface-variant whitespace-nowrap">{formatDate(submission.createdAt)}</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => onViewSubmission(submission)}
                          className="inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5 rounded-lg transition-colors"
                        >
                          <span className="material-symbols-outlined text-lg">visibility</span>
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubmissionsTable;

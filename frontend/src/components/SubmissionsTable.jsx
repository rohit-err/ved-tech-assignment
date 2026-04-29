import useStore from "../store/useStore";

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

  return (
    <div>
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-on-background mb-2">
          Contact Submissions
        </h2>
        <p className="text-sm text-on-surface-variant">
          Total submissions:{" "}
          <span className="font-semibold">{submissions.length}</span>
        </p>
      </div>

      {/* Table Card */}
      <div
        className="bg-white rounded-xl border border-outline-variant shadow-sm flex flex-col overflow-hidden"
        style={{ height: "calc(100vh - 220px)" }}
      >
        {/* Table Header - Fixed */}
        <div className="border-b border-outline-variant">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="text-left px-6 py-4 text-sm font-semibold text-on-surface-variant">
                  Name
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-on-surface-variant">
                  Email
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-on-surface-variant">
                  Message
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-on-surface-variant">
                  Date
                </th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-on-surface-variant">
                  Action
                </th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Table Body - Scrollable */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {isLoadingSubmissions ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="inline-block w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-3"></div>
                <p className="text-sm text-on-surface-variant">
                  Loading submissions...
                </p>
              </div>
            </div>
          ) : (
            <table className="w-full">
              <tbody>
                {submissions.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-12 text-center text-on-surface-variant"
                    >
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
                        <div className="font-semibold text-on-background">
                          {submission.name}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-on-surface-variant">
                          {submission.email}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-on-surface-variant max-w-md">
                          {truncateMessage(submission.message)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-on-surface-variant whitespace-nowrap">
                          {formatDate(submission.createdAt)}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => onViewSubmission(submission)}
                          className="inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5 rounded-lg transition-colors"
                        >
                          <span className="material-symbols-outlined text-lg">
                            visibility
                          </span>
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

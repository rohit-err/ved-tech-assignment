function ViewSubmission({ submission, onBack }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 mb-6 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
      >
        <span className="material-symbols-outlined text-lg">arrow_back</span>
        Back to Submissions
      </button>

      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-on-background mb-2">
          Submission Details
        </h2>
        <p className="text-sm text-on-surface-variant">
          Submitted on {formatDate(submission.createdAt)}
        </p>
      </div>

      {/* Details Card */}
      <div className="bg-white rounded-xl border border-outline-variant p-8 shadow-sm space-y-6">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold tracking-wider text-on-surface-variant mb-2">
            FULL NAME
          </label>
          <div className="text-lg font-semibold text-on-background">
            {submission.name}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold tracking-wider text-on-surface-variant mb-2">
            EMAIL ADDRESS
          </label>
          <div className="text-lg text-on-background">
            <a
              href={`mailto:${submission.email}`}
              className="text-primary hover:underline"
            >
              {submission.email}
            </a>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold tracking-wider text-on-surface-variant mb-2">
            MESSAGE
          </label>
          <div className="text-base text-on-background leading-relaxed bg-surface-container-low p-4 rounded-lg">
            {submission.message || "No message provided"}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-primary text-on-primary rounded-lg font-semibold hover:bg-primary-container transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewSubmission;

function match(candidate, job) {
  // is this job a valid match for the candidate?
  if (!candidate.minSalary || !job.maxSalary) throw new Error("This is an error message");
  if (candidate.minSalary > job.maxSalary && candidate.minSalary - candidate.minSalary * 0.1 <= job.maxSalary) return true;
  if (candidate.minSalary > job.maxSalary) return false;
  if (candidate.minSalary <= job.maxSalary) return true;
}

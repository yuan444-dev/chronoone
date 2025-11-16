document.addEventListener("DOMContentLoaded", () => {
  const jobContainer = document.getElementById("jobContainer");

  const jobs = [
    {
      title: "Drivers (trailer, heavy & light)",
      description: "Responsible for transporting goods safely using heavy and light trucks.",
      responsibilities: ["Maintain vehicle", "Follow routes", "Ensure safety"],
      qualifications: ["Valid driver’s license", "Good communication skills"]
    },
    {
      title: "Truck Driver",
      description: "Transport goods across designated routes safely and efficiently.",
      responsibilities: ["Load/unload cargo", "Maintain truck", "Follow schedules"],
      qualifications: ["Truck driving license", "Experience preferred"]
    }
  ];

  // Render jobs immediately
  jobs.forEach(job => {
    const jobItem = document.createElement("div");
    jobItem.classList.add("job-item");
    jobItem.innerHTML = `
      <div class="job-header">
        <h3>${job.title}</h3>
        <button class="btn-toggle">View Details</button>
      </div>
      <div class="job-details">
        <div class="job-section">
          <h4>Description:</h4>
          <p>${job.description}</p>
        </div>
        <div class="job-section">
          <h4>Responsibilities:</h4>
          <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join("")}</ul>
        </div>
        <div class="job-section">
          <h4>Qualifications:</h4>
          <ul>${job.qualifications.map(q => `<li>${q}</li>`).join("")}</ul>
        </div>
      </div>
    `;
    jobContainer.appendChild(jobItem);

    // Toggle job details
    const toggleBtn = jobItem.querySelector(".btn-toggle");
    const detailsDiv = jobItem.querySelector(".job-details");
    toggleBtn.addEventListener("click", () => {
      if(detailsDiv.style.display === "block"){
        detailsDiv.style.display = "none";
        toggleBtn.textContent = "View Details";
      } else {
        detailsDiv.style.display = "block";
        toggleBtn.textContent = "Hide Details";
      }
    });
  });
});

const projects = [
  {
    title: "Project 1",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/project1",
  },
  {
    title: "Project 2",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/project2",
  },
  {
    title: "Project 3",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/project3",
  },
];

const portfolioContainer = document.getElementById("portfolio");

projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("portfolio-item");

  projectElement.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <div class="content">
                    <h3>${project.title}</h3>
                    <a href="${project.link}" target="_blank">View Project</a>
                </div>
            `;

  portfolioContainer.appendChild(projectElement);
});

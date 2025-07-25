// Sample portfolio data
const portfolioItems = [
  {
    title: "The Art of Storytelling",
    description: "An in-depth article exploring narrative techniques in modern writing.",
    link: "#"
  },
  {
    title: "SEO Strategies for 2025",
    description: "A comprehensive guide on optimizing content for search engines.",
    link: "#"
  },
  {
    title: "Travel Blogging Tips",
    description: "Insights and advice for aspiring travel bloggers.",
    link: "#"
  },
  {
    title: "Tech Trends Analysis",
    description: "An analytical piece on emerging technologies and their impact.",
    link: "#"
  },
  {
    title: "Health & Wellness Writing",
    description: "Crafting content that promotes healthy living.",
    link: "#"
  }
];

// Function to display portfolio items
function displayPortfolio() {
  const portfolioGrid = document.querySelector('.portfolio-grid');
  portfolioItems.forEach(item => {
    const portfolioDiv = document.createElement('div');
    portfolioDiv.classList.add('portfolio-item');
    portfolioDiv.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank">Read More</a>
    `;
    portfolioGrid.appendChild(portfolioDiv);
  });
}

// Contact form submission
document.addEventListener('DOMContentLoaded', () => {
  displayPortfolio();

  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      alert('Thank you for your message!');
      contactForm.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
});

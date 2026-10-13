
const pages = [
  ["index.html", "Home"],
  ["about.html", "About Us"],
  ["membership.html", "Membership"],
  ["inputs.html", "Inputs"],
  ["products.html", "Products"],
  ["farming-tips.html", "Farming Tips"],
  ["news-events.html", "News & Events"],
  ["contact.html", "Contact Us"]
];

const currentPage =
  window.location.pathname.split("/").pop() || "index.html";

const navLinks = pages.map(([file, name]) => {
  const active = file === currentPage;
  return `<li><a href="${file}"
    ${active ? 'class="active" aria-current="page"' : ""}>
    ${name}</a></li>`;
}).join("");

document.getElementById("site-header").innerHTML = `
  <header class="site-header">
    <h1>FARMLINK</h1>
    <p>Growing Together, Farming Stronger</p>
  </header>

  <nav class="nav-bar" aria-label="Main navigation">
    <ul>${navLinks}</ul>
  </nav>
`;

document.getElementById("site-footer").innerHTML = `
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>FarmLink Cooperative</h3>
        <p>Working together to support farmers,
        improve agricultural production and
        connect communities.</p>
      </div>

      <div class="footer-section">
        <h3>Quick Links</h3>
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="membership.html">Membership</a>
        <a href="products.html">Products</a>
        <a href="contact.html">Contact Us</a>
      </div>

      <div class="footer-section">
        <h3>Our Services</h3>
        <a href="inputs.html">Farm Inputs</a>
        <a href="products.html">Farm Products</a>
        <a href="farming-tips.html">Farming Tips</a>
        <a href="news-events.html">News & Events</a>
      </div>

      <div class="footer-section">
        <h3>Contact Us</h3>
        <p>Zambia</p>
        <p>Phone: To be added</p>
        <p>Email: To be added</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 FarmLink Cooperative.
      All Rights Reserved.</p>
    </div>
  </footer>
`;

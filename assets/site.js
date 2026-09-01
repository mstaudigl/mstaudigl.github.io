const root = document.body.dataset.root || "";
const current = document.body.dataset.page || "home";
const pages = [
  ["home", "Home", ""], ["news", "News", "news/"], ["seminar", "Seminar", "seminar/"],
  ["teaching", "Teaching", "teaching/"], ["research", "Research", "research/"],
  ["people", "People", "people/"]
];

const nav = pages.map(([id, label, href]) =>
  `<a href="${root}${href}"${id === current ? ' aria-current="page"' : ""}>${label}</a>`
).join("");

document.querySelector("[data-site-header]").innerHTML = `
  <div class="topbar">
    <a class="brand" href="${root}" aria-label="Chair in Mathematical Optimization, home">
      <span class="brand-mark">M<span>O</span></span>
      <span><strong>Mathematical Optimization</strong><small>Vienna Universit Economics and Business </small></span>
    </a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav id="site-nav" aria-label="Main navigation">${nav}</nav>
  </div>`;

document.querySelector("[data-site-footer]").innerHTML = `
  <div class="footer-grid">
    <div><strong>Chair in Mathematical Optimization</strong><p>Vienna Universit of Economics and Business<br>Department of Business Analytics and Decisiion Sciences (BADS)<br>B6 · 68159 Mannheim · Germany</p></div>
    <div><strong>Contact</strong><p><a href="mailto:mstaudigl@wu-wien.ac.at">mstaudigl@wu-wien.ac.at</a><br><a href="https://orcid.org/0000-0003-2481-0019">ORCID 0000-0003-2481-0019</a></p></div>
    <div><strong>University</strong><p><a href="https://www.wu.ac.at">Vienna Universit of Economics and Business</a><br><a href="https://www.wu.ac.at">School website</a></p></div>
  </div>
  <div class="footer-bottom"><span>© ${new Date().getFullYear()} Mathias Staudigl</span><span>Mathematics · Optimization · Decisions</span></div>`;

const button = document.querySelector(".menu-button");
const menu = document.querySelector("#site-nav");
button.addEventListener("click", () => {
  const open = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!open));
  menu.classList.toggle("is-open", !open);
});

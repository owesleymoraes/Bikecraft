const links = document.querySelectorAll(".header-menu a");

function activeLink(link) {
  const url = window.location.href;
  const hrefMenuClicked = link.href;

  if (url.includes(hrefMenuClicked)) {
    link.classList.add("active");
  }
}

links.forEach(activeLink);

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("expModal");
  const closeBtn = modal.querySelector(".modal-close");
  const titleEl = document.getElementById("modal-title");
  const descEl = document.getElementById("modal-description");
  const imgEl   = document.getElementById("carousel-image");
  const prevBtn = modal.querySelector(".prev");
  const nextBtn = modal.querySelector(".next");
  
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');


  // Listener para el desplegable del menú en móvil
  hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
  });

  let images = [];
  let currentIndex = 0;

  function showImage(index) {
    imgEl.src = images[index];
  }

  document.querySelectorAll(".experience-card").forEach(card => {
    card.addEventListener("click", () => {
      // Rellena datos
      titleEl.textContent = card.dataset.title;
      descEl.innerHTML  = card.dataset.description;
      images = JSON.parse(card.dataset.images);
      currentIndex = 0;
      showImage(currentIndex);

      modal.style.display = "block";
    });
  });

  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  };
  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  };

  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("expModal");
  const closeBtn = modal.querySelector(".modal-close");
  const title = document.getElementById("modal-title");
  const desc = document.getElementById("modal-description");
  const img   = document.getElementById("carousel-image");
  const prevBtn = modal.querySelector(".prev");
  const nextBtn = modal.querySelector(".next");
  
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');


  // Listener para el desplegable del menú en móvil

  hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
  });

  // Parte de la ventana emergente de los experience-card

  let images = [];
  let currentIndex = 0;

  function showImage(index) {
    img.src = images[index];
  }

  document.querySelectorAll(".experience-card, .project-card, .education-item").forEach(card => {
    card.addEventListener("click", () => {

      if (card.dataset.title === 'i2Planet Course') {
        document.querySelector(".modal-content").style.margin = "1% auto";
      } else {
        document.querySelector(".modal-content").style.margin = "5% auto";
      }

      if (images.length === 0) {
        img.style.display = "none";
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
      } else {
        img.style.display = "block";
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
      }

      title.textContent = card.dataset.title;
      desc.innerHTML  = card.dataset.description;
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
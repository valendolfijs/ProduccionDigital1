function updateCountdown() {
  const targetDate = new Date("2023-12-02T23:59:59Z");
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();

function showModal() {
  document.getElementById("compras-de-entrada").style.display = "block";
}

function closeModal() {
  document.getElementById("compras-de-entrada").style.display = "none";
}

function purchaseTicket() {
  var name = document.getElementById("name").value;
  var quantity = document.getElementById("ticket").value;
  var phone = document.getElementById("number").value;

  console.log(name, quantity, phone);

  if (name === "" || quantity === "" || phone === "") {
    alert("Por favor, completa los campos");
    return false;
  }

  closeModal();
  displayConfirmation();
}

function displayConfirmation() {
  let confirmacionDeCompra = document.getElementById("confirmacionDeCompra");

  confirmacionDeCompra.style.display = "block";
}

function cancelPurchase() {
  document.getElementById("confirmacionDeCompra").style.display = "none";
}

// if click out of div close modal
window.onclick = function (event) {
  var modal = document.getElementById("compras-de-entrada");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function showVideo() {
  document.getElementById("video").style.display = "block";
  document.getElementById("video").play();
}

// if click out of video close #video
window.onclick = function (event) {
  var modal = document.getElementById("video");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let slideIndex = 0; // Empieza en el primer slide
const slideInterval = 3000; // 3000 milisegundos = 3 segundos

function moveSlide(step) {
  const slides = document.querySelectorAll('.slider-item');
  slideIndex += step;

  // Verificar los límites
  if (slideIndex >= slides.length) {
      slideIndex = 0;
  } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
  }

  // Ocultar todos los slides y remover la clase 'show-slide'
  slides.forEach(slide => {
      slide.classList.remove('show-slide');
  });

  // Mostrar el slide actual agregando la clase 'show-slide'
  slides[slideIndex].classList.add('show-slide');
}

// Función para avanzar al próximo slide
function nextSlide() {
    moveSlide(1);
}

// Iniciar el slider y hacer que avance automáticamente
moveSlide(0);
setInterval(nextSlide, slideInterval);

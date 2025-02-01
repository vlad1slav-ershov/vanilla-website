AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

function updateCountdown() {
    const targetDate = new Date('2025-06-20T00:00:00');
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = 'Свадьба уже началась!';
        clearInterval(timerInterval);
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById('countdown').innerHTML =
        `${days} дней : ${hours} часов : ${minutes} минут : ${seconds} секунд`;
}
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();

const modal = document.getElementById("mapModal");
const btnOpenMap = document.getElementById("openMap");
const spanClose = document.querySelector(".modal-content .close");
const mapButtons = document.querySelectorAll(".map-btn");

btnOpenMap.addEventListener("click", () => { modal.style.display = "block"; });
spanClose.addEventListener("click", () => { modal.style.display = "none"; });
window.addEventListener("click", (event) => { if (event.target === modal) modal.style.display = "none"; });

mapButtons.forEach(button => {
    button.addEventListener("click", function () {
        const service = this.getAttribute("data-map");
        const address = encodeURIComponent("Тюмень, ул. Республики, д. 246а");
        let url = "";
        if (service === "google") {
            url = `https://www.google.com/maps/search/?api=1&query=${address}`;
        } else if (service === "yandex") {
            url = `https://yandex.ru/maps/?text=${address}`;
        } else if (service === "2gis") {
            url = `https://2gis.ru/search/${address}`;
        }
        window.open(url, "_blank");
    });
});

const weddingForm = document.getElementById("weddingForm");
weddingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Success. Testing form.");
    weddingForm.reset();
});
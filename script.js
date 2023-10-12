const nameInput = document.getElementById('name-input');
const numberInput = document.getElementById('number-input');
const cvcInput = document.getElementById('cvc-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const nameCard = document.getElementById('name-card');
const numberCard = document.getElementById('number-card');
const cvcCard = document.getElementById('cvc-card');
const dateCard = document.getElementById('date-card');
const cards = document.getElementById("card-preview-section");


nameInput.addEventListener("input", updateName);
numberInput.addEventListener("input", updateNumber);
cvcInput.addEventListener("input", updateCvc);
monthInput.addEventListener("input", updateDate)
yearInput.addEventListener("input", updateDate)

function updateName() {
    nameCard.innerText = nameInput.value;
}

function updateNumber() {
    numberCard.innerText = numberInput.value;
}

function updateCvc() {
    cvcCard.innerText = cvcInput.value;
}

function updateDate() {
    dateCard.innerText = `${monthInput.value} / ${yearInput.value}`;
}


document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("succes-card").style.display = "flex"
    document.getElementById("main-section").style.display = "none"
    cards.classList.add("cards")
})

document.getElementById("continue").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("succes-card").style.display = "none"
    document.getElementById("card").style.display = "flex"
    document.getElementById("main-section").style.display = "flex"
    cards.classList.remove("cards");
})


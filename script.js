const submitRatingCard = document.getElementById("vote");
const thanksCard = document.getElementById("thank-you");

const rateSelected = document.querySelectorAll(".rate");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");


submitButton.addEventListener("click", () => {
    submitRatingCard.classList.toggle("hidden");
    thanksCard.classList.toggle("hidden");
    
})

rateSelected.forEach((rate) => {
    rate.addEventListener("click"), () => {
        let counter = rate.innerHTML;
        rating.innerHTML = counter;
    }
})
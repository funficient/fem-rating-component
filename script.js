const submitRatingCard = document.getElementById("vote");
const thanksCard = document.getElementById("thank-you");

const rateSelected = document.querySelectorAll(".rate");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");


submitButton.addEventListener("click", () => {
    submitRatingCard.classList.toggle("hidden");
    thanksCard.classList.toggle("hidden");
    
})


rateSelected.forEach((rateSelected) => {
    rateSelected.addEventListener("click"), () => {
        let counter = rateSelected.innerHTML;
        console.log(counter);
        rating.innerHTML = counter;
    })


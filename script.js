const submitRatingCard = document.getElementById("vote");
const thanksCard = document.getElementById("thank-you");

const rateSelected = document.querySelectorAll(".rate");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");

rateSelected.forEach((rateSelected) => {
    rateSelected.addEventListener("click", () => {
        let counter = rateSelected.innerHTML;
        /*-- Figure out how to add a 0 to the counter if none of the buttons were selected --*/

        submitButton.addEventListener("click", () => {
            rating.innerHTML = counter;
            submitRatingCard.classList.toggle("hidden");
            thanksCard.classList.toggle("hidden");
        })
  
    })
})

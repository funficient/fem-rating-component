# Frontend Mentor - Interactive rating component

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![What the solution looks like](./images/fem-voting-component.gif)

### Links

- Solution source code URL: [Source code on GitHub](https://github.com/funficient/fem-rating-component)
- Live Site URL: [Live site URL](https://funficient.github.io/fem-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript

### What I learned

I learned that the crowd at FrontEndMentor is super helpful! I was stuck not able to get my voting widget updating with the value passed from the input screen and Matt Studdert pointed me in the right direction.

I also learned how easy it can be to toggle class values on the HTML in JavaScript using the `toggle` method:

```
  submitButton.addEventListener("click", () => {
    submitRatingCard.classList.toggle("hidden");
    thanksCard.classList.toggle("hidden");

})
```

### Continued development

I would like to include validations or adapting the button to include an initial disabled state to prevent users from submitting nothing, or at least give some user feedback when this happens.

I also want to figure out why the svg used in the top cuts off some of the corners when adding a background or whether there's a better way to handle backgrounds on svg's.

### Useful resources

- [Front-end Mentor sample solutions](https://www.frontendmentor.io/solutions) - As I'm new to JavaScript, looking at example code from the same project is super helpful!

## Author

- Website - [Funficient](https://www.funficient.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/funficient)
- Twitter - [@yourusername](https://www.twitter.com/funficient)

## Acknowledgments

A super big thank you to Matt Studdert for responding so quick and so helpful when I asked for help. It is a rare community that make newcomers feel so welcome and supported.

Thank you.

Thank you to @AdrianoEscarabote who helped improve my code.

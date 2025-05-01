// Declare your genre arrays here
let genre = [];
let hopeful = [
  "https://saportakinsta.s3.amazonaws.com/wp-content/uploads/2018/06/BeMyNeighbor_775x515.jpg",
  "https://i.ebayimg.com/images/g/WcsAAOSwiwZcLVV~/s-l400.jpg",
  "https://wallpapercat.com/w/full/b/e/8/321437-1800x2700-phone-hd-the-pursuit-of-happyness-wallpaper.jpg"
];
console.log(hopeful);

let horror = [
  "https://eartfilm.com/cdn/shop/products/u-s-one-sheet-27-x40-double-sided-midsommar-original-movie-poster-27-x40-2019-pagan-cult-horror-movie-poster-13828175167581.jpg?v=1625600860&width=1080",
  "https://image.tmdb.org/t/p/original/dtsR4CFDzK18YKsgLYpPmTDhQXk.jpg",
  "https://m.media-amazon.com/images/I/41Zk9wtKKbL._AC_UF894,1000_QL80_.jpg"
];
console.log(horror);

let selfreflection = [
  "https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/5X4AAOSwkqJixbsB/$_57.JPG?set_id=8800005007",
  "https://m.media-amazon.com/images/I/614munYpnSL._AC_UF894,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/51x9dIk11XL._AC_UF894,1000_QL80_.jpg"
];
console.log(selfreflection);
// Make sure to declare your HTML elements as variables!
let suggestButton = document.querySelector(".suggest");
let movies = document.querySelector(".movies");
let suggestInput = document.querySelector(".links");
let genreInput = document.querySelector(".genre");
// Submit Button
let submitButton = document.querySelector(".submit");

submitButton.onclick = function () {
  if (genreInput.value === "hopeful" || genreInput.value === "Hopeful") {
    for (let hope of hopeful) {
      movies.insertAdjacentHTML("afterbegin", "<img src=" + hope + ">");
    }
    submitButton.onclick = function () {
  if (genreInput.value === "horror" || genreInput.value === "Horror") {
    for (let hor of horror) {
      movies.insertAdjacentHTML("afterbegin", "<img src=" + hor + ">");
  }
    }
    submitButton.onclick = function () {
  if (genreInput.value === " selfreflection" || genreInput.value === " Selfreflection") {
    for (let sel of  selfreflection) {
      movies.insertAdjacentHTML("afterbegin", "<img src=" + sel + ">");
  } 
};
};
    }
  }
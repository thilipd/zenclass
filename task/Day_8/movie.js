"use strict";

let arr = [];

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }


    getPG(movie) {
        if (this.rating === 'PG') return movie;
    }


}
let movie1 = new Movie("The Shawshank Redemption", "Castle Rock Entertainment", "R");

let movie2 = new Movie("Lord of the Rings", " New Line Cinema");

let movie3 = new Movie("Casino Royale", "Eon Productions", "PG13");

let movie4 = new Movie("Mayakkam Enna", "Aum Productions")

console.log(movie1);
console.log(movie2);
console.log(movie3);
console.log(movie4)


let arrayMovie = [movie1, movie2, movie3, movie4];

arrayMovie.forEach((val) => {
    console.log(val);
    if (val.rating === "PG") arr.push(val.title);
});

console.log(arr);










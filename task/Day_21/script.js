'use strict';

const msg = document.querySelector('.container');

let count = 1;
let counter = 10;

function delay() {
    let x = counter;
    (count <= 10) ?
        setTimeout(() => msg.innerHTML = `<div class='num c1'>${x}<div>`, count * 1000) :
        setTimeout(() =>
            msg.innerHTML = `<span class=c1>Happy</span>  <span class=c2>Independence</span>  <span class=c3>Day</span>`, count * 1000);
    count++
    counter--;

}

let countDown = new Promise((resolve) => {
    resolve;
});

countDown
    .then(delay())
    .then(delay())
    .then(delay())
    .then(delay())
    .then(delay())
    .then(delay())
    .then(delay())
    .then(delay())
    .then(delay())
    .then(delay())
    .then(delay())















    // .then(() => delay())

// function Trail1(chr, strength) {
//     if (strength > 50) {
//         return chr + "🗡️";
//     } else {
//         throw Error(chr + "🐍");
//     }
// }

// function Trail2(chr, iq) {
//     if (iq > 90) {
//         return chr + "💰💍👑";
//     } else {
//         throw Error("💀");
//     }
// }

// const hero = (age, character) =>
//     new Promise((resolve, reject) => {
//         if (age > 18) {
//             resolve(character);
//         } else {
//             reject("👶 Try after few years");
//         }
//     });
// function dungeon() {
//     hero(32, '👨‍🎤')
//         .then(chr => Trail1(chr, 100))
//         .then(chr => Trail1(chr, 100))
//         .then(chr => Trail1(chr, 100))
//         .then(chr => Trail1(chr, 100))
//         .then(chr => Trail1(chr, 100))

//         .then(chrSword => Trail2(chrSword, 120))
//         .then(result => console.log(result))
//         .catch(err => console.log(err))

//     hero(12, '👨')
//         .then(chr => Trail1(chr, 100))
//         .then(chrSword => Trail2(chrSword, 120))
//         .then(chr => Trail1(chr, 80))
//         .then(result => console.log(result))
//         .catch(err => console.log(err))

//     hero(32, 'Thilip')
//         .then(chr => Trail1(chr, 100))
//         .then(chrSword => Trail2(chrSword, 120))
//         .then(chr => Trail1(chr, 80))
//         .then(result => console.log(result))
//         .catch(err => console.log(err))
// }

// dungeon();

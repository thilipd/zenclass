'use strict';

let price = {

    km: {
        hatchback: 10,
        sedan: 11,
        suv: 15
    },
    hr: {
        hatchback: 90,
        sedan: 100,
        suv: 150
    }

}

class UberPrice {
    constructor(car, type) {

        this.car = car;
        this.type = type;
    }

    rate() {

        if (this.type === 'KM') {
            if (this.car === 'hatchback') {
                return `Uber, Welcomes you!!!, We charge rs.${price.km.hatchback} /km for ${this.car}`
            } else if (this.car === 'sedan') {
                return `Uber, Welcomes you!!!, We charge rs.${price.km.sedan} /km for ${this.car}`
            } else if (this.car === 'suv') {
                return `Uber, Welcomes you!!!, We charge rs.${price.km.suv} /km for ${this.car}`
            }
        } else if (this.type === 'HR') {
            if (this.car === 'hatchback') {
                return `Uber, Welcomes you!!!, We charge rs.${price.hr.hatchback} /hr for ${this.car}`
            } else if (this.car === 'sedan') {
                return `Uber, Welcomes you!!!, We charge rs.${price.hr.sedan} /hr for ${this.car}`
            } else if (this.car === 'suv') {
                return `Uber, Welcomes you!!!, We charge rs.${price.hr.suv} /hr for ${this.car}`
            }

        }

    }

    calPrice() {
        let rate;
        let promptVal = prompt(`Please enter the ${this.type} `);
        if (this.type === 'KM') {


            // const aNumber = Number(window.prompt("Type a number", ""));
            if (this.car === 'hatchback') {
                rate = price.km.hatchback
            } else if (this.car === 'sedan') {
                rate = price.km.sedan
            } else if (this.car === 'suv') {
                rate = price.km.suv
            }

        } else if (this.type === 'HR') {

            // const aNumber = Number(window.prompt("Type a number", ""));
            if (this.car === 'hatchback') {
                rate = price.hr.hatchback
            } else if (this.car === 'sedan') {
                rate = price.hr.sedan
            } else if (this.car === 'suv') {
                rate = price.hr.suv
            }

        }
        return `Rs ${promptVal * rate} for ${promptVal} ${this.type} on ${this.car}`;
    }


}

const price1 = new UberPrice('hatchback', 'KM');
const price2 = new UberPrice('sedan', 'HR');

console.log(price1.rate());
console.log(price2.rate());
console.log(price1.calPrice())
console.log(price2.calPrice())
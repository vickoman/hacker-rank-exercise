import { expect } from "chai";
import "mocha";
import PaymentType from "./enums/PymentTypes";
import Order from "./order";
import Mastercard from "./types/Mastercard";
import Paypal from "./types/paypal";
import Visa from "./types/Visa";

let order1 = new Order(PaymentType.Visa, 100),
    order2 = new Order(PaymentType.Mastercard, 100),
    order3 = new Order(PaymentType.PayPal, 100);

order1.create();
order2.create();
order3.create();

describe("Order - Visa", () => {
    it("Order should be must pay by visa", () => {
        expect(true).to.equal(order1.paymentType instanceof Visa);
    });

    it("Order comission should be 3", () => {
        expect(3).to.equal(order1.comission);
    });
});

describe("Order - Mastercad", () => {
    it("Order should be must pay by Mastercard", () => {
        expect(true).to.equal(order2.paymentType instanceof Mastercard);
    });

    it("Order comission should be 4", () => {
        expect(4).to.equal(order2.comission);
    })
});

describe("Order - Paypal", () => {
    it("Order should be must pay by Paypal", () => {
        expect(true).to.equal(order3.paymentType instanceof Paypal);
    });

    it("Order comission should be 6", () => {
        expect(6).to.equal(order3.comission);
    });
});
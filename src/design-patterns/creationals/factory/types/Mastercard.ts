import IPymentMethod from "../interfaces/payment.interface";

class Mastercard implements IPymentMethod {
    get comission(): number {
        return 0.04;
    }
}

export default Mastercard;

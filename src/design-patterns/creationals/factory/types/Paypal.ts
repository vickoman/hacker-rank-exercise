import IPymentMethod from "../interfaces/payment.interface";

class Paypal implements IPymentMethod {
    get comission(): number {
        return 0.06;
    }
}

export default Paypal;

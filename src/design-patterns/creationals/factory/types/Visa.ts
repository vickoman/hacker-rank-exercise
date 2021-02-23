import IPymentMethod from "../interfaces/payment.interface";

class Visa implements IPymentMethod {
    get comission(): number {
        return 0.03;
    }
}

export default Visa;

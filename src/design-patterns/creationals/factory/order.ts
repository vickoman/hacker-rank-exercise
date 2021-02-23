import PaymentType from "./enums/PymentTypes";
import IPymentMethod from "./interfaces/payment.interface";
import PaymentMethodFactory from "./PaymentMethodFactory";
import Visa from "./types/Visa";

class Order {
    public paymentType?: IPymentMethod;
    public comission: number = 0;
    
    constructor(
        private type: PaymentType,
        public amount: number
    ){}

    public create(): void {
        this.paymentType = PaymentMethodFactory.createPayment(this.type);
        this.comission = this.paymentType.comission * this.amount;
    }
}

export default Order;
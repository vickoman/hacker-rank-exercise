import PaymentType from "./enums/PymentTypes";
import IPymentMethod from "./interfaces/payment.interface";
import Mastercard from "./types/Mastercard";
import Paypal from "./types/paypal";
import Visa from "./types/Visa";

class PaymentMethodFactory {
    public static createPayment(type: PaymentType): IPymentMethod {
        if (type === PaymentType.Mastercard) {
            return new Mastercard();
        };

        if (type === PaymentType.Visa) {
            return new Visa();
        };

        if (type === PaymentType.PayPal) {
            return new Paypal();
        };

        throw new Error("Invalid method of payment");

    }
};

export default PaymentMethodFactory;
import { CardElement, PaymentElement } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  return (
    <form className="bg-white p-4 mt-4">
      <CardElement />
      <PaymentElement />
    </form>
  );
}

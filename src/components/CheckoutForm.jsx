import { CardElement, PaymentElement } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  return (
    <form
      className="bg-white p-4 mt-4"
      action="/create-checkout-session"
      method="POST"
    >
      <CardElement />
      {/* <PaymentElement /> */}

      <button className="text-black" type="submit">
        Check Out
      </button>
    </form>
  );
}

import { useState } from "react";
import "./styles.css";
import axios from "axios";
// Stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, PaymentElement } from "@stripe/react-stripe-js";

// Components
import LandingForm from "./components/LandingForm";
import AnimatedText from "./components/AnimatedText";
import ModalTemplate from "./components/ModalTemplate";
import FarmersLandingInfo from "./components/FarmersLandingInfo";
import HostsLandingInfo from "./components/HostsLandingInfo";

const stripePromise = loadStripe("pk_test_yerwism8IftZNZFWr962rRam");

export default function App() {
  const [farmersModalOpen, setFarmersModalOpen] = useState(false);
  const [hostsModalOpen, setHostsModalOpen] = useState(false);

  const stripeSecret = async () => {
    try {
      //TODO Replace this placeholder url with the real one when it becomes available
      const secretData = await axios.get("/we-need-this-route", {
        "Content-Type": "application/json",
        Accept: "application/json",
      });

      return secretData.data;
    } catch (err) {
      //TODO Do some actual error handling?
      console.error(err);
    }
  };

  const stripeOptions = {
    //! The following line causes a break. We need that server route set up.
    // clientSecret: stripeSecret(),
  };

  return (
    <Elements stripe={stripePromise} options={stripeOptions}>
      <div className="text-slate-50 font-bold mx-auto">
        <h1 className="text-6xl mb-24">Ufarms</h1>
        <h2 className="text-4xl mb-6">
          Grow Your Own
          <br />
          <AnimatedText />
        </h2>
        <h3 className="text-xl mb-24 mt-10">
          Rent backyard farm plots in your Denver neighborhood
        </h3>
        <LandingForm />
        <h2 className="text-4xl mt-6 mb-6">Info:</h2>
        <div className="flex justify-center gap-10 text-xl">
          <button
            className="bg-white text-black px-6 py-4 rounded-xl"
            onClick={() => setFarmersModalOpen(true)}
          >
            For Farmers
          </button>
          <button
            className="bg-white text-black px-6 py-4 rounded-xl"
            onClick={() => setHostsModalOpen(true)}
          >
            For Yard Hosts
          </button>
        </div>

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

        {/* Modals */}
        <ModalTemplate
          modalIsOpen={farmersModalOpen}
          closeModal={() => setFarmersModalOpen(false)}
        >
          <FarmersLandingInfo quizUrl="#" />
        </ModalTemplate>
        <ModalTemplate
          modalIsOpen={hostsModalOpen}
          closeModal={() => setHostsModalOpen(false)}
        >
          <HostsLandingInfo quizUrl="#" />
        </ModalTemplate>
      </div>
    </Elements>
  );
}

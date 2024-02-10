import { useState } from "react";
import "./styles.css";
import LandingForm from "./components/LandingForm";
import AnimatedText from "./components/AnimatedText";
import ModalTemplate from "./components/ModalTemplate";

export default function App() {
  const [farmersModalOpen, setFarmersModalOpen] = useState(true);
  const [hostsModalOpen, setHostsModalOpen] = useState(false);

  return (
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

        <ModalTemplate
          modalOpen={farmersModalOpen}
          closeModal={() => setFarmersModalOpen(false)}
        >
          <h4 className="text-center font-bold text-lg">
            Find the Perfect Plot
          </h4>
          <p className="mb-4">
            Browse available plots in your community, review yard details and
            rules, and book the best plot for your seasonal farming needs and
            budget.
          </p>

          <h4 className="text-center font-bold text-lg">
            Know before you grow
          </h4>
          <p className="mb-4">
            Take our two-minute Farm Design Quiz to get your customized Farming
            Blueprint designed specifically for your plot.
          </p>

          <h4 className="text-center font-bold text-lg">Eat the rewards</h4>
          <p className="mb-4">Maintain and enjoy your harvest!</p>

          <h4 className="text-center font-bold text-lg">
            Build local community
          </h4>
          <p className="mb-4">
            Grow your own food while connecting with new friends.
          </p>
        </ModalTemplate>

        <ModalTemplate
          modalOpen={hostsModalOpen}
          closeModal={() => setHostsModalOpen(false)}
        >
          <h4 className="text-center font-bold text-lg">List your yard</h4>
          <p className="mb-4">
            Upload photos of the available farming area in your yard, set your
            monthly rate, and establish your yard rules.
          </p>

          <h4 className="text-center font-bold text-lg">Accept bookings</h4>
          <p className="mb-4">
            Review farming requests from urban farmers in your area.
          </p>

          <h4 className="text-center font-bold text-lg">Get paid!</h4>
          <p className="mb-4">
            Choose between secure payments, fresh produce, or BOTH
          </p>
        </ModalTemplate>
      </div>
    </div>
  );
}

import "./App.css";
import "../dist/output.css";
import LandingForm from "./components/LandingForm";

export default function App() {
  return (
    <div className="text-slate-50 font-bold">
      <h1 className="text-xl6 mb-24">Ufarms</h1>
      <h2 className="text-4xl mb-6">Grow Your Own [ ]</h2>
      <h2 className="text-4xl mb-24">
        Rent backyard farm plots in your Denver neighborhood
      </h2>

      <LandingForm />
    </div>
  );
}

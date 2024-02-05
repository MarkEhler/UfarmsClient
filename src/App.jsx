import "./styles.css";
import LandingForm from "./components/LandingForm";
import AnimatedText from "./components/AnimatedText";

export default function App() {
  return (
    <div className="text-slate-50 font-bold mx-auto">
      <h1 className="text-6xl mb-24">Ufarms</h1>
      <h2 className="text-4xl mb-6">
        Grow Your Own
        <br />
        <AnimatedText />
      </h2>
      <h3 className="text-xl mb-24 mt-24">
        Rent backyard farm plots in your Denver neighborhood
      </h3>

      <LandingForm />
    </div>
  );
}

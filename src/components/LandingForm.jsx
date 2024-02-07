import { useState } from "react";

export default function LandingForm() {
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [wantedProduce, setWantedProduce] = useState([]);
  const [otherExplanation, setOtherExplanation] = useState("");

  const bundledData = {
    zipCode,
    email,
    wantedProduce,
    otherExplanation,
    date: Date.now(),
  };

  /**
   * Adds and removes items in an array based on the checkboxes they tick and untick
   *
   * @param {Object} target the checkbox the user clicks
   */
  function handleProduceArray(target) {
    if (!target.checked) {
      setWantedProduce((prevProduce) =>
        prevProduce.filter((item) => item !== target.value)
      );
    } else {
      setWantedProduce((prevProduce) => [...prevProduce, target.value]);
    }
  }

  /**
   * Sends POST request to Ufarms server containing form data
   *
   * @param {Object} e The event object, accessed in order to prevent default action
   */
  function submitForm(e) {
    e.preventDefault();

    console.log(bundledData);

    // make 'POST' request to server with bundledData() as the payload:

    // axios({
    //   url: "/whatever",
    //   method: "post",
    //   data: bundledData,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // });
  }

  return (
    <form className="flex flex-col items-start">
      <div className="flex justify-between w-full">
        <label htmlFor="zipcode">Zip Code: </label>
        <input
          type="text"
          name="zipcode"
          id="zipcode"
          value={zipCode}
          placeholder="12345"
          onChange={(e) => setZipCode(e.target.value)}
        />
      </div>
      <div className="flex justify-between w-full">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="example@farm.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <h4 className="text-xl mt-6">I want to grow:</h4>
      <h4 className="mb-2">(Select all that apply)</h4>

      <label htmlFor="berries" className="ml-4 cursor-pointer">
        <input
          type="checkbox"
          name="berries"
          id="berries"
          value="Berries"
          onClick={(e) => handleProduceArray(e.target)}
        />{" "}
        Berries
      </label>
      <label htmlFor="greens" className="ml-4 cursor-pointer">
        <input
          type="checkbox"
          name="greens"
          id="greens"
          value="Greens"
          onClick={(e) => handleProduceArray(e.target)}
        />{" "}
        Greens
      </label>
      <label htmlFor="herbs" className="ml-4 cursor-pointer">
        <input
          type="checkbox"
          name="herbs"
          id="herbs"
          value="Herbs"
          onClick={(e) => handleProduceArray(e.target)}
        />{" "}
        Herbs
      </label>
      <label htmlFor="flowers" className="ml-4 cursor-pointer">
        <input
          type="checkbox"
          name="flowers"
          id="flowers"
          value="Flowers"
          onClick={(e) => handleProduceArray(e.target)}
        />{" "}
        Flowers
      </label>
      <label htmlFor="vegetables" className="ml-4 cursor-pointer">
        <input
          type="checkbox"
          name="vegetables"
          id="vegetables"
          value="Vegetables"
          onClick={(e) => handleProduceArray(e.target)}
        />{" "}
        Vegetables
      </label>
      <label htmlFor="other" className="ml-4 cursor-pointer">
        <input
          type="checkbox"
          name="other"
          id="other"
          value="Other"
          onClick={(e) => handleProduceArray(e.target)}
        />{" "}
        Other
      </label>

      <label htmlFor="other" className="flex flex-col mt-2">
        Other? What do you mean?
        <textarea
          name="other"
          id="other"
          placeholder="I want to grow..."
          value={otherExplanation}
          onChange={(e) => setOtherExplanation(e.target.value)}
          className="px-2"
        ></textarea>
      </label>

      <button
        type="submit"
        className="bg-slate-100 text-black text-xl w-full mt-6 rounded-2xl border-0 py-3"
        onClick={(e) => submitForm(e)}
      >
        Join Waitlist
      </button>
    </form>
  );
}

import { useState } from "react";

export default function LandingForm() {
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [wantedProduce, setWantedProduce] = useState([]);

  const bundledData = { zipCode, email, wantedProduce };

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
    <form className="flex flex-col gap-5 items-start">
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

      <h4 className="text-xl mt-6">Types of Produce You Want to Have/Grow:</h4>
      <label htmlFor="rootVgetables" className="ml-4 cursor-pointer">
        <input
          type="checkbox"
          name="rootVgetables"
          id="rootVgetables"
          value="root vegetables"
          onClick={(e) => handleProduceArray(e.target)}
        />{" "}
        Root Vegetables
      </label>
      <label htmlFor="leafyGreens" className="ml-4 cursor-pointer">
        <input
          type="checkbox"
          name="leafyGreens"
          id="leafyGreens"
          value="leafy greens"
          onClick={(e) => handleProduceArray(e.target)}
        />{" "}
        Leafy Greens
      </label>
      <label htmlFor="otherVegetables" className="ml-4 cursor-pointer">
        <input
          type="checkbox"
          name="otherVegetables"
          id="otherVegetables"
          value="other vegetables"
          onClick={(e) => handleProduceArray(e.target)}
        />{" "}
        Other Vegetables
      </label>
      <label htmlFor="berries" className="ml-4 cursor-pointer">
        <input
          type="checkbox"
          name="berries"
          id="berries"
          value="berries"
          onClick={(e) => handleProduceArray(e.target)}
        />{" "}
        Berries
      </label>
      <label htmlFor="fruitTrees" className="ml-4 cursor-pointer">
        <input
          type="checkbox"
          name="fruitTrees"
          id="fruitTrees"
          value="fruit trees"
          onClick={(e) => handleProduceArray(e.target)}
        />{" "}
        Fruit Trees
      </label>
      <label htmlFor="otherFruits" className="ml-4 cursor-pointer">
        <input
          type="checkbox"
          name="otherFruits"
          id="otherFruits"
          value="other fruits"
          onClick={(e) => handleProduceArray(e.target)}
        />{" "}
        Other Fruits
      </label>
      <label htmlFor="legumes" className="ml-4 cursor-pointer">
        <input
          type="checkbox"
          name="legumes"
          id="legumes"
          value="legumes"
          onClick={(e) => handleProduceArray(e.target)}
        />{" "}
        Legumes
      </label>
      <label htmlFor="flowers" className="ml-4 cursor-pointer">
        <input
          type="checkbox"
          name="flowers"
          id="flowers"
          value="flowers"
          onClick={(e) => handleProduceArray(e.target)}
        />{" "}
        Flowers
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

export default function LandingForm() {
  return (
    <form className="flex flex-col gap-5 items-start">
      <div className="flex justify-between w-full">
        <label htmlFor="zipcode">Zip Code: </label>
        <input type="text" name="zipcode" id="zipcode" placeholder="123456" />
      </div>
      <div className="flex justify-between w-full">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@farm.com"
        />
      </div>

      <h4 className="text-xl mt-6">Types of Produce You Want to Have/Grow:</h4>
      <label htmlFor="rootVgetables" className="ml-4">
        <input type="checkbox" name="rootVgetables" id="rootVgetables" /> Root
        Vegetables
      </label>
      <label htmlFor="leafyGreens" className="ml-4">
        <input type="checkbox" name="leafyGreens" id="leafyGreens" /> Leafy
        Greens
      </label>
      <label htmlFor="otherVegetables" className="ml-4">
        <input type="checkbox" name="otherVegetables" id="otherVegetables" />{" "}
        Other Vegetables
      </label>
      <label htmlFor="berries" className="ml-4">
        <input type="checkbox" name="berries" id="berries" /> Berries
      </label>
      <label htmlFor="fruitTrees" className="ml-4">
        <input type="checkbox" name="fruitTrees" id="fruitTrees" /> Fruit Trees
      </label>
      <label htmlFor="otherFruits" className="ml-4">
        <input type="checkbox" name="otherFruits" id="otherFruits" /> Other
        Fruits
      </label>
      <label htmlFor="legumes" className="ml-4">
        <input type="checkbox" name="legumes" id="legumes" /> Legumes
      </label>
      <label htmlFor="flowers" className="ml-4">
        <input type="checkbox" name="flowers" id="flowers" /> Flowers
      </label>

      <button
        type="submit"
        className="bg-slate-100 text-black text-xl w-full mt-6 rounded-2xl border-0 py-3"
      >
        Join Waitlist
      </button>
    </form>
  );
}

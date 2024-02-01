export default function LandingForm() {
  return (
    <form className="flex flex-col gap-5 items-start">
      <label htmlFor="zipcode">
        Zip Code:{" "}
        <input type="text" name="zipcode" id="zipcode" placeholder="123456" />
      </label>
      <label htmlFor="email">
        Email:{" "}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@farm.com"
        />
      </label>
      <label htmlFor="produceType">
        Types of Produce You want to Have/Grow:
        <br />
        <input type="checkbox" name="produceType" id="produceType" /> Root
        Vegetables
        <input type="checkbox" name="produceType" id="produceType" /> Leafy
        Greens
        <input type="checkbox" name="produceType" id="produceType" /> Other
        Vegetables
        <input type="checkbox" name="produceType" id="produceType" /> Fruits
        <input type="checkbox" name="produceType" id="produceType" /> Legumes
      </label>

      <button type="submit">Join Waitlist</button>
    </form>
  );
}

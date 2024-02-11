export default function HostsLandingInfo({ quizUrl }) {
  return (
    <>
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

      <a href={quizUrl} className="text-xl self-center">
        <button className="bg-white text-black font-bold px-6 py-4 rounded-xl">
          Join the Yard Hosts Waitlist
        </button>
      </a>
    </>
  );
}

export default function FarmersLandingInfo({ quizUrl }) {
  return (
    <>
      <h4 className="text-center font-bold text-lg">Find the Perfect Plot</h4>
      <p className="mb-4">
        Browse available plots in your community, review yard details and rules,
        and book the best plot for your seasonal farming needs and budget.
      </p>

      <h4 className="text-center font-bold text-lg">Know before you grow</h4>
      <p className="mb-4">
        Take our two-minute Farm Design Quiz to get your customized Farming
        Blueprint designed specifically for your plot.
      </p>

      <h4 className="text-center font-bold text-lg">Eat the rewards</h4>
      <p className="mb-4">Maintain and enjoy your harvest!</p>

      <h4 className="text-center font-bold text-lg">Build local community</h4>
      <p className="mb-4">
        Grow your own food while connecting with new friends.
      </p>

      <a href={quizUrl} className="text-xl self-center">
        <button className="bg-white text-black font-bold px-6 py-4 rounded-xl">
          Take the Quiz
        </button>
      </a>
    </>
  );
}

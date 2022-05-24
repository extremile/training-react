const SubmitButton = ({ onHandleClick }) => (
  <button
    type="button"
    onClick={onHandleClick}
    className="px-4 py-1.5 bg-cyan-300 duration-200 hoover:bg-cyan-600">
    Launch the Rocket
  </button>
);

export default SubmitButton;

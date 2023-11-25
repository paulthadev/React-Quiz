import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({
          type: "tick",
        });
      }, 1000);

      return function () {
        clearInterval(id);
      };
    },
    [dispatch]
  );

  return (
    <button className="btn timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </button>
  );
}

export default Timer;

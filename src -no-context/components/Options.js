function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {questions.options.map((option, index) => {
        return (
          <button
            className={`
              btn btn-option 
              ${index === answer ? "answer" : null}
              ${
                hasAnswered
                  ? index === questions.correctOption
                    ? "correct"
                    : "wrong"
                  : ""
              }
              `}
            key={option}
            disabled={hasAnswered}
            onClick={() =>
              dispatch({
                type: "newAnswer",
                payload: index,
              })
            }
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;

import Options from "./Options";

function Question({ questions, dispatch, answer }) {
  return (
    <>
      <div>
        <h4>{questions.question}</h4>
      </div>

      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </>
  );
}

export default Question;

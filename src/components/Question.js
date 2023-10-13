import Options from "./Options";

function Question({ questions }) {
  const { question, options, points, correctOption } = questions;

  return (
    <>
      <div>
        <h4>{question}</h4>
      </div>

      <Options options={options} />
    </>
  );
}

export default Question;

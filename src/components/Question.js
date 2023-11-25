import { useQuiz } from "../context/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <>
      <div>
        <h4>{questions.question}</h4>
      </div>

      <Options question={question} />
    </>
  );
}

export default Question;

import Options from "./Options";

function Questions({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <Options
            key={option}
            answer={answer}
            question={question}
            dispatch={dispatch}
            option={option}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Questions;

function Options({ answer, question, dispatch, option, index }) {
  const hasAnswered = answer !== null;
  return (
    <div>
      <button
        className={`btn btn-option ${index === answer ? "answer" : ""} ${
          hasAnswered
            ? index === question.correctOption
              ? "correct"
              : "wrong"
            : ""
        }`}
        onClick={() => dispatch({ type: "newAnswer", payload: index })}
        disabled={hasAnswered}
      >
        {option}
      </button>
    </div>
  );
}

export default Options;

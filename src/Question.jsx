import React from "react";

const Question = (props) => {
  const { question, answer, showAnswer, setVisibility } = props;
  return (
    <li class="question-item">
      <div class="question-cont">
        {question}
        <button
          class="show-btn"
          onClick={() => setVisibility((prevVisibility) => !prevVisibility)}
        >
          {showAnswer ? "-" : "+"}
        </button>{" "}
      </div>

      <div class={`answer-cont ${showAnswer ? "" : "hidden"}`}>{answer}</div>
    </li>
  );
};

export default Question;

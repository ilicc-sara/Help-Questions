import React from "react";

const Question = (props) => {
  const { question, answer, id, isVisible, questions, setQuestions } = props;
  // console.log(props);

  function setVisibility(id) {
    // const targetQuestion = questions.find((question) => question.id === id);
    // targetQuestion.isVisible = !targetQuestion.isVisible;

    const newQuestions = questions.map((question) => {
      if (question.id === id) {
        return {
          ...question,
          isVisible: !question.isVisible, // toggle the value
        };
      } else
        return {
          ...question,
          isVisible: question.isVisible, // toggle the value
        };
    });

    console.log(newQuestions);
    setQuestions(newQuestions);
  }

  return (
    <li class="question-item">
      <div class="question-cont">
        {question}
        <button class="show-btn" onClick={() => setVisibility(id)}>
          {isVisible ? "-" : "+"}
        </button>
      </div>

      <div class={`answer-cont ${isVisible ? "" : "hidden"}`}>{answer}</div>
    </li>
  );
};

export default Question;

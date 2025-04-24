import React, { useState } from "react";

const Question = (props) => {
  console.log(props);

  return (
    <li class="question-item">
      <div class="question-cont">
        {props.question}
        <button class="show-btn">+</button>{" "}
      </div>

      <div class="answer-cont">{props.answer}</div>
    </li>
  );
};

export default Question;

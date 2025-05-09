import { useState } from "react";
import "./App.css";
import Question from "./Question.jsx";

const info = [
  {
    question: "Do I have to allow the use of cookies?",
    answer:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    id: 1,
    isVisible: false,
  },
  {
    question: "How do I change my My Page password?",
    answer:
      "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    id: 2,
    isVisible: false,
  },
  {
    question: "What is BankID?",
    answer:
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
    id: 3,
    isVisible: false,
  },
  {
    question: "Whose birth number can I use?",
    answer:
      "Edison bulb direct trade gentrify beard lo-fi san sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
    id: 4,
    isVisible: false,
  },
  {
    question: "When do I recieve a password ordered by letter?",
    answer:
      "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi san.",
    id: 5,
    isVisible: false,
  },
];

function App() {
  const [questions, setQuestions] = useState(info);
  return (
    <>
      <div class="container">
        <h2>Questions</h2>
        <ul class="questions-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                // question={question.question}
                // answer={question.answer}
                // id={question.id}
                // isVisible={question.isVisible}
                {...question}
                questions={questions}
                setQuestions={setQuestions}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;

import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <div className="question">
      <div className="container">
        <h1>Question & Answer</h1>
        <div className="question-content">
          <details>
            <summary>How react works?</summary>
            <p>React works using their engine</p>
          </details>
          <details>
            <summary>What's the difference between Props and State?</summary>
            <p>
              There are tons of difference has between Props & State basically,
              we need to know what is props & state? so okay.
              <b>State :</b> State is react hooks useState state basically found
              where our element change inside of Browser Dom It's basic
            </p>
          </details>
          <details>
            <summary>How UseState works?</summary>
            <p>React works using their engine</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Question;

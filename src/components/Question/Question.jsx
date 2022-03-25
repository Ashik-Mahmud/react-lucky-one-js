import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <div className="question">
      <div className="container">
        <h1>Question & Answer</h1>
        <div className="question-content">
          <details>
            <summary>What's the difference between Props and State?</summary>
            <p>
              There are tons of difference has between Props & State here is
              some important & major difference between Props & State. <br />
              <b>State </b> is part of Application that found where change
              inside of Application it's mutable <br />
              <b>Props </b> is a react properties which one use to pass data
              component to another component this is immutable.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Props</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>This is immutable it can not be change</td>
                  <td>This is mutable it can change</td>
                </tr>
                <tr>
                  <td>Props can pass data component to another</td>
                  <td>State can pass data within component only</td>
                </tr>
                <tr>
                  <td>Props read-only can not modify</td>
                  <td>State can modify/read</td>
                </tr>
              </tbody>
            </table>
          </details>
          <details>
            <summary>How useState works?</summary>
            <p>
              <b>useState</b> is a react hooks which one created to manage state
              inside of functional component (hooks don't work inside of
              classes). It's include of react 16.8v. useState basically use for
              find out where make change inside of Application. useState just
              change this particular place where changes. how is it happen? it's
              question. useState can clone dom from browser dom or real dom it
              cloning dom called virtual dom and try to find difference between
              cloning Dom (Virtual Dom) and real dom. it compare using the Diff
              Algorithm inside of application behind. And it able to make
              changes where developer change inside of application.
            </p>
          </details>
          <details>
            <summary>How react works?</summary>
            <p>React is a javascript library. </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Question;

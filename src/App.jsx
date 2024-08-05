import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Favorite Color?",
      options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      id: 2,
      question: "Favorite Animal?",
      options: ["Dog", "Cat", "Bird", "Fish"],
    },
    {
      id: 3,
      question: "Favorite Food?",
      options: ["Pizza", "Burger", "Pasta", "Salad"],
    },
  ];

  const handleOptionChange = (questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <main>
      <h2>Polling App</h2>
      {submitted ? (
        <div>
          <h3>Thank You for Participating!</h3>
        </div>
      ) : (
        <>
          {questions.map((question) => (
            <div key={question.id}>
              <h3>{question.question}</h3>
              <ul style={{ paddingLeft: "50px" }}>
                {question.options.map((option) => (
                  <li
                    key={option}
                    style={{ listStyleType: "disc", marginBottom: "1px" }}
                  >
                    <label>
                      <input
                        type="radio"
                        name={`question${question.id}`}
                        value={option}
                        checked={answers[question.id] === option}
                        onChange={() => handleOptionChange(question.id, option)}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </main>
  );
}

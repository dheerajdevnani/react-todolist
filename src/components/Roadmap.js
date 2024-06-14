import React, { useState, useEffect } from 'react';
import RoadmapItem from './RoadmapItem';
import './Roadmap.css';

const Roadmap = () => {
  const initialSteps = [
    { id: 1, text: "Understand the basics of HTML, CSS, and JavaScript" },
    { id: 2, text: "Get familiar with ES6 features" },
    { id: 3, text: "Set up your React development environment" },
    { id: 4, text: "Learn about JSX" },
    { id: 5, text: "Understand components, props, and state" },
    { id: 6, text: "Learn about event handling in React" },
    { id: 7, text: "Get to know about React Router for navigation" },
    { id: 8, text: "Explore advanced state management with Redux or Context API" },
    { id: 9, text: "Learn about React hooks" },
    { id: 10, text: "Understand lifecycle methods and useEffect" },
    { id: 11, text: "Dive into styling React components" },
    { id: 12, text: "Build projects to practice what you've learned" },
    { id: 13, text: "Explore unit testing with Jest and React Testing Library" },
    { id: 14, text: "Understand deployment options for React apps" }
  ];

  const [steps, setSteps] = useState(() => {
    const savedSteps = localStorage.getItem('roadmapSteps');
    return savedSteps ? JSON.parse(savedSteps) : initialSteps;
  });
  const [text, setText] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    localStorage.setItem('roadmapSteps', JSON.stringify(steps));
  }, [steps]);

  const addStep = (text) => {
    if (text.trim() === '') {
      setErrorMsg('Please write something');
      return;
    }

    const newStep = {
      id: Date.now(),
      text
    };
    setSteps([...steps, newStep]);
    setText('');
    setErrorMsg('');
  };

  const deleteStep = (id) => {
    setSteps(steps.filter(step => step.id !== id));
  };

  return (
    <div className="roadmap">
      <h1>React Learning Roadmap</h1>
      <ul className="steps">
        {steps.map((step) => (
          <RoadmapItem
            key={step.id}
            id={step.id}
            step={step}
            deleteStep={deleteStep}
          />
        ))}
      </ul>
      <div className="input-container">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a new step..."
        />
        <button onClick={() => addStep(text)}>Add</button>
      </div>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

      <h2>Recommended Resources</h2>
      <ul className="resources">
        <li>
          <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
            React Official Documentation
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
            MDN Web Docs - JavaScript
          </a>
        </li>
        <li>
          <a href="https://www.freecodecamp.org/learn/front-end-libraries/react/" target="_blank" rel="noopener noreferrer">
            FreeCodeCamp - React Course
          </a>
        </li>
        <li>
          <a href="https://www.codecademy.com/learn/react-101" target="_blank" rel="noopener noreferrer">
            Codecademy - React Course
          </a>
        </li>
        <li>
          <a href="https://egghead.io/q/react" target="_blank" rel="noopener noreferrer">
            Egghead.io - React Lessons
          </a>
        </li>
      </ul>

      <h2>Additional Links</h2>
      <ul className="additional-links">
        <li>
          <a href="https://www.w3schools.com/REACT/DEFAULT.ASP" target="_blank" rel="noopener noreferrer">Link 1</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=bMknfKXIFA8" target="_blank" rel="noopener noreferrer">Link 2</a>
        </li>
        <li>
          <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt" target="_blank" rel="noopener noreferrer">Link 3</a>
        </li>
      </ul>
    </div>
  );
};

export default Roadmap;

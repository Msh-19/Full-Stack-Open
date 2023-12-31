import React from 'react';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    );
  };

  const Parts = (props) => (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );

  const Content = (props) => {
    return (
      <div>
        <Parts part={props.parts[0]} />
        <Parts part={props.parts[1]} />
        <Parts part={props.parts[2]} />
      </div>
    );
  };

  const Total = (props) => (
    <p>
      Number of exercises{' '}
      {props.parts.reduce((total, part) => part.exercises + total, 0)}
    </p>
  );

  return (
    <div>
      <Header course={course.name} />

      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;

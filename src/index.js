import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(props) {
    return (
        <h1>Welcome To react</h1>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
// hello world
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );

//   jsx
const element = <h1>Hello, world!</h1>;

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
  
  ReactDOM.render(
    element,
    document.getElementById('root')
  );

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  const element = <img src={user.avatarUrl}></img>;
  const element = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );
  const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );
  const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );

//   Rendering an Element into the DOM

  const element = <h1>Hello, world</h1>;
<div id="root"></div>

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);
  // Function and Class Components

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  const element = <div />;
  const element = <Welcome name="Sara" />;
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const element = <Welcome name="Sara" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
//   Composing Components
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
  
    );
  }
  function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <Avatar user={props.author} />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class HelloComponent extends React.Component{
    render(){
      return (
        <div>hello world</div>
      )
    }
}

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HelloComponent />, document.getElementById('root'));
registerServiceWorker();

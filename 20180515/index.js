import React from 'react';
import ReactDOM from 'react-dom';

class HelloComponent extends React.Component{
    render(){
      return (
        <div>hello world</div>
      )
    }
}

ReactDOM.render(<HelloComponent />, document.getElementById('root'));


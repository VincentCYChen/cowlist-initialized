import React from 'react';
import Detail from './Detail.jsx';
import Form from './Form.jsx';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [
        { name: 'Jon', description: 'handsome' },
        { name: 'Vin', description: 'sexy' }
      ]
    };
  }

  render() {
    return (
      <div>
        <Form />
        <List cows={this.state.cows} />
      </div>
    );
  }
}

export default App;

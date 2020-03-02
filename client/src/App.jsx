import React from 'react';
import Detail from './Detail.jsx';
import Form from './Form.jsx';
import List from './List';
import api from './models/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      cow: null
    };

    this.showDetail = this.showDetail.bind(this);
  }

  showDetail(cowObj) {
    this.setState({ cow: cowObj });
  }

  componentDidMount() {
    api.readAll(data => {
      this.setState({ cows: data });
    });
  }

  render() {
    return (
      <div>
        <Detail cow={this.state.cow} showDetail={this.showDetail} />
        <Form />
        <List cows={this.state.cows} showDetail={this.showDetail} />
      </div>
    );
  }
}

export default App;

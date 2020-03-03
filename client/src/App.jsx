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
    this.createCow = this.createCow.bind(this);
  }

  componentDidMount() {
    api.readAll(data => {
      this.setState({ cows: data });
    });
  }

  showDetail(cowObj) {
    this.setState({ cow: cowObj });
  }

  createCow(cowObj) {
    api.create(cowObj, data => {
      console.log('success', data);
      let result = this.state.cows.concat([data]);
      this.setState({ cows: result });
    });
  }

  render() {
    return (
      <div>
        <Detail cow={this.state.cow} showDetail={this.showDetail} />
        <Form createCow={this.createCow} />
        <List cows={this.state.cows} showDetail={this.showDetail} />
      </div>
    );
  }
}

export default App;

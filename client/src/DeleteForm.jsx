import React from 'react';
import axios from 'axios';

class DeleteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDelete() {}

  render() {
    return (
      <div>
        <form>
          <h3>Delete cow:</h3>
          <label htmlFor="Deletename">Name</label>
          <input type="text" id="Deletename" name="Deletename" />
        </form>
      </div>
    );
  }
}

export default DeleteForm;

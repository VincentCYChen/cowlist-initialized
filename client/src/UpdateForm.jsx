import React from 'react';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
          <h3>Update cow:</h3>
          <label htmlFor="updatename">Name</label>
          <input type="text" id="updatename" name="updatename" />
          <br />
          <br />
          <label htmlFor="newName">New Name</label>
          <input type="text" id="newName" name="newName" />
          <label htmlFor="newDescription">New Description</label>
          <input type="text" id="newDescription" name="newDescription" />
        </form>
      </div>
    );
  }
}

export default UpdateForm;

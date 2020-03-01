import React from 'react';

function Form() {
  return (
    <div>
      <form>
        <h3>Add new cow</h3>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />
        <label for="description">Description</label>
        <input type="text" id="description" name="description" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Form;

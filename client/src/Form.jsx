import React from 'react';

function Form() {
  return (
    <div>
      <form>
        <p>Add new cow:</p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Form;

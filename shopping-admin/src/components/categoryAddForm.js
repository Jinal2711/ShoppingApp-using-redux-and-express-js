import React, { Component } from 'react';

const CategoryAddForm = (props) => {

  const { name, desc } = props.data;
  return (
    <>
      <form onSubmit={(e) => this.submitCategory(e)}>
        <div class="form-group">
          <label>Category Name:</label>
          <input type="text"
            name="name"
            class="form-control"
            value={name}
            id="usr"
            onChange={(e) => this.handleChange(e)} />
        </div>
        <div class="form-group">
          <label>Category Description:</label>
          <textarea id="form10"
            name="desc"
            class="md-textarea form-control" rows="3"
            value={desc}
            onChange={(e) => this.handleChange(e)}
          >
          </textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </>
  );
}
export default CategoryAddForm;
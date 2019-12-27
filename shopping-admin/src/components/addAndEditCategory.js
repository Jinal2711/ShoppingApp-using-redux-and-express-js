import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import categoryAdd from '../actions/category/categoryAdd';
import fetchCategoryEdit from '../actions/category/updateCategoryById';
import updateCategoryEdit from '../actions/category/categoryUpdate';

import CategoryAddForm from './categoryAddForm';
import CategoryEditForm from './categoryEditForm';

class AddEditCategory extends Component {
  state = {
    name: '',
    desc: '',
    id: ''
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  componentDidMount() {
    this.setState({
      id: this.props.match.params.id
    })
    console.log(this.props);
    const { _editCategory } = this.props;
    _editCategory(this.state.id);
  }

  submitCategory(e) {
    if (this.props.categoryToEdit == null) {
      this.props._addCategories(e, this.state);
    }
    else {
      this.props._updateCategory(e, this.state.id, this.state);
    }
  }

  render() {
    const { pending, categoryToEdit } = this.props;
    console.log(categoryToEdit);
    if (pending && categoryToEdit) {
      alert("Data sent successfully");
      return <Redirect to="/" />
    }
    return (
      <div>
        <div className="category-header">
          <span>Edit Category</span>
        </div><br />
        <div className="container-fluid">
          <CategoryAddForm data={this.state} />
          <CategoryEditForm data={this.state} value={categoryToEdit} />

          {/* <form onSubmit={(e) => this.submitCategory(e)}>
            <div class="form-group">
              <label>Category Name:</label>
              <input type="text"
                name="name"
                class="form-control"
                value={categoryToEdit != null ? (
                  categoryToEdit.category_name || this.state.name
                ) : this.state.name}
                id="usr"
                onChange={(e) => this.handleChange(e)} />
            </div>
            <div class="form-group">
              <label>Category Description:</label>
              <textarea id="form10"
                name="desc"
                class="md-textarea form-control" rows="3"
                value={categoryToEdit != null ? (categoryToEdit.category_desc || this.state.desc) : this.state.desc}
                onChange={(e) => this.handleChange(e)}
              >
              </textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  category: state.categoryReducers.category,
  pending: state.categoryReducers.pending,
  msg: state.categoryReducers.msg,
  categoryToEdit: state.categoryReducers.categoryToEdit
});
const mapDispatchToProps = dispatch => ({
  _addCategories: (e, payload) => {
    e.preventDefault();
    dispatch(categoryAdd(payload))
  },
  _editCategory: (id) => dispatch(fetchCategoryEdit(id)),
  _updateCategory: (e, id, payload) => {
    e.preventDefault();
    dispatch(updateCategoryEdit(id, payload))
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(AddEditCategory);
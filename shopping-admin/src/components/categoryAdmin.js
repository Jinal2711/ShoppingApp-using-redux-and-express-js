import React, { Component } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { connect } from 'react-redux';
import fetchCategoryData from '../actions/category/fetchCategoryAction';
import categoryDelete from '../actions/category/categoryDelete';
import { Link } from 'react-router-dom';

class CategoryAdmin extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const { category, error, pending, msg, _categoryDelete } = this.props;
    msg && msg !== '' && alert(msg);
    let showCategory = category && category.map(items => {
      return (
        <tr key={items.id}>
          <td>{items.category_name}</td>
          <td>{items.category_desc}</td>
          <td>
            <Link to={`/edit/${items.category_id}`}><button type="button" className="btn btn-success">
              <FaEdit />
              Edit</button></Link>
          </td>
          <td><button type="button" className="btn btn-danger" onClick={() => _categoryDelete(items.category_id)}><FaTrashAlt />Delete</button></td>
        </tr>
      )
    })
    return (
      <div>
        <div className="category-header">
          <span>Category Panel</span>
          <Link to="/add-category">
            <button type="button" className="btn btn-success">ADD+</button>
          </Link>
        </div><br />
        <div className="container-fluid">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary">
                <tr>
                  <th>Category Name</th>
                  <th>Category Desc</th>
                  <th colSpan="2">Settings</th>
                </tr>
              </thead>
              <tbody>
                {showCategory}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  error: state.categoryReducers.error,
  category: state.categoryReducers.category,
  pending: state.categoryReducers.pending,
  msg: state.categoryReducers.msg,
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategoryData()),
  _categoryDelete: (id) => dispatch(categoryDelete(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoryAdmin);
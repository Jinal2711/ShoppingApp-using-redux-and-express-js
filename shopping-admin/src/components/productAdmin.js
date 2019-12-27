import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { connect } from 'react-redux';
import fetchProductData from '../actions/products/fetchCategoryApi';

class ProductAdmin extends Component {

  componentDidMount() {
    const { _fetchProducts } = this.props;
    _fetchProducts();
  }
  render() {
    const { product, error, pending } = this.props;
    let showProduct = product && product.map(product => {
      return (
        <tr>
          <td>{product.product_name}</td>
          <td>{product.price}</td>
          <td>{product.status}</td>
          <td>{product.created_at}</td>
          <td>{product.updated_at}</td>
          <td><img src={product.image} className="productImg" /></td>
          <td>{product.product_desc}</td>
          <td><button type="button" className="btn btn-success"><FaEdit />Edit</button></td>
          <td><button type="button" className="btn btn-danger"><FaTrashAlt />Delete</button></td>
        </tr>
      )
    })
    return (
      <div>
        <div className="category-header">
          <span>Product Panel</span>
          <Link to="/add-product">
            <button type="button" className="btn btn-success">ADD+</button>
          </Link>
        </div><br />
        <div className="container-fluid">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-primary">
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Updated</th>
                  <th>image</th>
                  <th>Description</th>
                  <th colSpan="2">Settings</th>
                </tr>
              </thead>
              <tbody>
                {showProduct}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.productReducer.error,
  pending: state.productReducer.pending,
  product: state.productReducer.product,
});
const mapDispatchToProps = dispatch => ({
  _fetchProducts: () => dispatch(fetchProductData())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdmin);
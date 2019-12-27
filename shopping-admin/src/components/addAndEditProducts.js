import React, { Component } from 'react';

export default class addEditProducts extends Component {
  render() {
    return (
      <div>
        <div className="category-header">
          <span>Product Panel</span>
          <button type="button" className="btn btn-success">ADD+</button>
        </div> <br />
        <div className="container-fluid">

          <div className="row">
            <div className="col-sm col-sm-6">
              <div class="form-group">
                <label>Product name:</label>
                <input type="text" class="form-control" id="usr" />
              </div>
              <div class="form-group">
                <label>Product price:</label>
                <input type="text" class="form-control" id="usr" />
              </div>
              <div class="form-group">
                <label>Product status:</label>
                <input type="text" class="form-control" id="usr" />
              </div>
            </div>
            <div className="col-sm col-sm-6">
              <div class="form-group">
                <label>Product created at:</label>
                <input type="date" class="form-control" id="usr" />
              </div>
              <div class="form-group">
                <label>Product updated at:</label>
                <input type="date" class="form-control" id="usr" />
              </div>
              <div class="form-group">
                <label>Product image:</label>
                <input type="file" class="form-control" id="usr" />
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Product description:</label>
            <textarea class="form-control" rows="5" id="comment"></textarea>
          </div>
          <button type="button" class="btn btn-success">Submit</button>

          <br />
        </div>
      </div>
    );
  }
}
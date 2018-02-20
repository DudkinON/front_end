import React, { Component } from 'react';
import { connect } from 'react-redux';


class Footer extends Component {

  render() {
    return (
      <footer className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 top-line pt-3 pb-3">
              <p className="text-center p-10 text-muted">Copyright Web Zoomer © 2015</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(Footer);

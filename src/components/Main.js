import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer'

class Main extends Component {


  render() {
    return (
      <div className="main">
        <Header/>
        <section>
          <div className="container mt-4">
            <div className="row">
              <div className="col-lg-12 text-center">Hello</div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(Main);

import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayLang: 'none',
      session: true
    }
  }

  openMenu() {
    if (this.state.displayLang === 'none') {
      this.setState({
        displayLang: 'block'
      });
    } else if (this.state.displayLang === 'block') {
      this.setState({
        displayLang: 'none'
      });
    }
  }


  render() {
    let self = this;
    let buttonBlock;
    if (self.state.session) {
      buttonBlock = (
        <li>
          <a className="nav-link inline-block" href="/profile">
            <i className="fas fa-user" />
          </a>
          <a className="nav-link inline-block" href="/logout">
            <i className="fas fa-sign-out-alt" />
          </a>
        </li>
      );
    } else {
      buttonBlock = (
        <li>
          <a className="nav-link" href="/login">
            <i className="fas fa-sign-in-alt" />
          </a>
        </li>
      );
    }

    return (
      <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src="logo.png" alt="logo" width="50px" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-targeta="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                write a story
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                popularity
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                rating
                </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a className="nav-link" href="#"><i className="fa fa-search" aria-hidden="true" /></a>
            </li>
            {buttonBlock}
            <li className="dropdown">
              <div className="btn-group">
                <button type="button" className="btn btn-dark dropdown-toggle"
                        data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false" onClick={this.openMenu.bind(this)}>
                  language
                </button>
                <div className="dropdown-menu dropdown-menu-right" style={{display: self.state.display}}>
                  <button className="dropdown-item pointer">english</button>
                  <button className="dropdown-item pointer">русский</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(Header);

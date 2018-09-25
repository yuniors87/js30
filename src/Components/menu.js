import React, { Component } from 'react';
import './menu.css';
import listClases from '../clases';

class Menu extends Component {
  renderClasess() {
    return listClases.map(clase => {
      return (
        <li key={clase.id} className="list--item">
          <a>{clase.name}</a>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="menu">
        <ul className="menu--list">{this.renderClasess()}</ul>
      </div>
    );
  }
}

export default Menu;

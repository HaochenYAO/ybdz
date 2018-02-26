import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

class Nav extends React.Component {
  static handleClick(e) {
    console.log('click ', e);
  }
  render() {
    const activeStyle = {
      color: '#1890ff'
    };
    const { active } = this.props;
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={[active]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/" style={active === 'home' ? activeStyle : {}}>
            <Icon type="home" />
            <span>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="tick">
          <Link to="/tick/12" style={active === 'tick' ? activeStyle : {}}>
            <Icon type="clock-circle-o" />
            <span>Tick</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="todo">
          <Link to="/todo" style={active === 'todo' ? activeStyle : {}}>
            <Icon type="book" />
            <span>Todo</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
Nav.propTypes = {
  active: PropTypes.string.isRequired,
};
export default Nav;

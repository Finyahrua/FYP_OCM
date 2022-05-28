import React from 'react'
import {Menu} from 'antd';
import  Link from 'next/link';
import {LoginOutlined,UserAddOutlined} from '@ant-design/icons'

const {Item}=Menu;
function NavBar() {
  return (
    <Menu mode='horizontal' className=''>
      <Item>
        <Link href="/">
          <a className='logo'>OCM</a>
        </Link>
      </Item>
      <Item icon={<LoginOutlined/>}>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </Item>
      <Item icon={<UserAddOutlined/>}>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </Item>
    </Menu>
  );
}

export default NavBar
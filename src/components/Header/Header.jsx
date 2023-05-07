import React from 'react'
import './Header.scss'
import {TbSearch} from 'react-icons/tb';
import {CgShoppingCart} from 'react-icons/cg'
import {AiOutlineHeart} from 'react-icons/ai'


import Search from './Search/Search'
import Cart from '../Cart/Cart'
import { Context } from '../../store/context';

const Header = () => {
  return (
    <header className='main-header' >
    <div className='header-content'>
    <ul className='left' >
      <li>Home</li>
      <li>About</li>
      <li>Categories</li>
    </ul>
    <div className='center' >TeeStore</div>
      <div className='right' >
        <TbSearch/>
        <AiOutlineHeart/>
        <span className='cart-icon'>
          <CgShoppingCart/>
          <span>0</span>
        </span>
      </div>
    </div>

    </header>
  )
}

export default Header
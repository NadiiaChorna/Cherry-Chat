import React from 'react';
import './style.scss';
import CherryIcon from '../../images/logo.svg';

export const Header = () => (
  <header>
    <img src={ CherryIcon } alt='logo' id='logo' />
    Cherry
  </header>
);
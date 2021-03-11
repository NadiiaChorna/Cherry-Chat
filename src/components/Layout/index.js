import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

import './style.scss';

export const Layout = ({ children }) => (
  <div>
    <Header />
    <main>{children || null}</main>
    <Footer />
  </div>
);

import React from 'react';
// import { createGlobalStyle } from "styled-components";

import Layout from '../layout';
import Seo from '../components/seo';

function NotFoundPage() {
  const imageStyle = {
    height : '100vh',
    width : '100%'
  }
  return (
      <img style={imageStyle} src='/404.png'/>
  );
}


export default NotFoundPage;

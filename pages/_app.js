//This is the main application file, it gets rendered before any other page

//instaled bootstrap and ant design which will be added here, the command npm i boostrap antd was used
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import React from 'react'

function MyApp({Component, pageProps}) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
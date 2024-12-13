import React from 'react';
import Login from './Login';
import Notlogin from './Notlogin';

const Main = ({Islogin}) => {
  return (
    <div>
      {Islogin ? <Login /> : <Notlogin />}
    </div>
  );
};

export default Main;

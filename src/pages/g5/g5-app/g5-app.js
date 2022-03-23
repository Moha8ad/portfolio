import { Outlet } from "react-router-dom";

import Navbar from '../../../components/g5-components/g5-navbar/g5-navbar.component.jsx';

import './g5-app.scss';

const G5App = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default G5App;

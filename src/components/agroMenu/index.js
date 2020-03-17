import React from 'react';

import "./agroMenu.css";

const AgroMenu = () => (
    <React.Fragment>
<aside class="sidebar">
  <div id="leftside-navigation" class="nano">
    <ul class="nano-content">
      <li className="row">
        <a class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
         href="index.html"><i class="fa fa-dashboard"></i><span>Home</span></a>
      </li>
      <li className="row">
        <a class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
         href="index.html"><i class="fa fa-dashboard"></i><span>Cadastros</span></a>
      </li>
    </ul>
  </div>
</aside>
</React.Fragment>
);

export default AgroMenu;
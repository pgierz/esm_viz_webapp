/*
 * Main Javascript file for esm_viz_webapp.
 *
 * This file bundles all of your javascript together using webpack.
 */
// Import for
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
// JavaScript modules
require('@fortawesome/fontawesome-free');
require('jquery');
require('popper.js');
require('bootstrap');
require('react');

require.context(
  '../img', // context folder
  true, // include subdirectories
  /.*/, // RegExp
);

// Your own code
require('./plugins.js');
require('./script.js');
require('./queue.jsx');

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h3>Paul Test!</h3>, document.getElementById("test_table"));

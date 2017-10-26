const path = require('path');

/**
* @description
* Set-up of all paths so it can easily be reconfigured if something changes in the future
*/
const ROOT_DIR = path.join(__dirname, '.');
const BUILD_DIR = `${ROOT_DIR}/build`;

// src paths
const SRC_DIR = path.join(__dirname, 'src');

const SCSS_DIR = `${SRC_DIR}/scss`;
const JS_DIR = `${SRC_DIR}/js`;

module.exports = {
  ROOT_DIR,
  BUILD_DIR,
  SRC_DIR,
  SCSS_DIR,
  JS_DIR,
};

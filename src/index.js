import React from 'react';
import ReactDOM from 'react-dom';

import Icon from './Icon.Arrow.Circular.Clockwise.svg';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <Icon />,
  document.getElementById('app')
);

module.hot.accept();
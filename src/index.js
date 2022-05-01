import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

window.renderDetail = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  unregister();
};

window.unmountDetail = containerId => {
  if (document.getElementById(containerId)) {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
  }
};

if (!document.getElementById('Detail-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}

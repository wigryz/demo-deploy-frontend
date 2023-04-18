import React from 'react';
import axios from 'axios';
import {useRoutes, BrowserRouter as Router} from 'react-router-dom';

function Hello() {
  return <div>Hello</div>;
}

class Backend extends React.Component {
  constructor(props) {
    super(props);
    this.state = { response: '' };
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_BACKEND_URL)
        .then(response => {
          this.setState({ response: response.data });
        })
        .catch(error => {
          console.error(error);
        });
  }

  render() {
    return (
        <div>
          Backend response (url: {process.env.REACT_APP_BACKEND_URL}): {this.state.response}
        </div>
    );
  }
}

function App() {
    const routes = useRoutes([
        { path: '/', element: <Hello /> },
        { path: '/backend', element: <Backend /> },
        // other routes
    ]);

    return (
        <div>
            {routes}
        </div>
    );
}

function MyRouter() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default MyRouter;
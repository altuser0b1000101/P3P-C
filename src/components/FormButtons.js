import * as React from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Subscribe from './Subscribe';

const routes = ['/login', '/subscribe'];

const FormButtons = () => {
  return (
    <div>
      <ButtonGroup>
        <Route path='/'>
          <Button
            value={routes[1]}
            component={Link}
            to={routes[1]}
            variant='outlined'
          >
            subscribe
          </Button>
        </Route>
        <Route path='/'>
          <Button
            value={routes[0]}
            component={Link}
            to={routes[0]}
            variant='outlined'
          >
            login
          </Button>
        </Route>
      </ButtonGroup>
    </div>
  );
};

export default FormButtons;

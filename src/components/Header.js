import classes from './Header.module.css';
import { useSelector, useDispatch, connect } from 'react-redux'

import { authActions } from '../store/index';


const Header = () => {

  const auth = useSelector(state => state.auth.isAuthenticated);


  const dispatch = useDispatch();

  const onHandleLogout = (e) => {
    e.preventDefault()
    dispatch(authActions.logout())
  }




  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {auth && <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={onHandleLogout}>Logout</button>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;

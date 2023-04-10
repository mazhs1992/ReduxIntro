import Counter from './components/Counter';
import { counterActions } from './store/index';
import { useSelector, useDispatch, connect } from 'react-redux'
import { authActions } from './store/index';
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.isAuthenticated);


  const userContext = (!auth) ? <Auth /> : <UserProfile />

  return (
    <>
      <Header />
      {userContext}
      <Counter />
    </>
  );
}

export default App;

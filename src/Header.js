import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    user && signOut(auth);
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && '/login'}>
          <div className="header_option" onClick={handleAuth}>
            <span className="header_optionLineOne">
              Hello {user ? user.email : 'Guest'}
            </span>
            <span className="header_optionLineTwo">
              {user ? 'Sign out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <div className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

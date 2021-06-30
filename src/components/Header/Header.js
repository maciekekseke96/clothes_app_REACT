import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import './Header.scss';

const Header = ({ currentUser, cartHidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signInSignUp">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!cartHidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  cartHidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);

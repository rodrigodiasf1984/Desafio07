import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import {
  Wrapper,
  BasketImage,
  Logo,
  BasketContainer,
  ItemCount,
} from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <BasketImage onPress={() => navigation.navigate('Home')}>
        <Logo />
      </BasketImage>
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>{cartSize || 0}</ItemCount>
      </BasketContainer>
    </Wrapper>
  );
}

export default connect(
  state => ({
    cartSize: state.length, // state já é o reduce cart cadastrado dentor do rootReducer
  }),
  null
)(Header);

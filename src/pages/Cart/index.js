import React from 'react';
import Toast from 'react-native-tiny-toast'; // lib para toast no Android e IOS
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import {
  ProductList,
  ProductItem,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelButton,
  ProductControlButtons,
  ProductDecrement,
  ProductAmount,
  ProductIncrement,
  ProductSubtotal,
  ProductFooter,
  ProductTotalPrice,
  ProductTotalText,
  ButtonEndOrder,
  ButtonEndOrderText,
  Container,
  EmptyCart,
  EmptyCartText,
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  // cart vem do estado do reducer cart, dentro das mapStateToProps

  function incrementAmount(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }
  function decrementAmount(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  function endOrder() {
    Toast.show('Funcionalidade não disponível no momento', {
      position: Toast.position.TOP,
      containerStyle: {
        backgroundColor: '#7159c1',
        borderRadius: 15,
      },
      textStyle: {
        color: '#fff',
      },
      imgStyle: {},
      mask: true,
      maskStyle: {},
    });
  }

  return (
    <Container>
      {cart.length === 0 ? (
        <EmptyCart>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyCartText>Carrinho vazio</EmptyCartText>
        </EmptyCart>
      ) : (
        <>
          <ProductList
            vertical
            data={cart}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <ProductItem key={item.id}>
                <ProductInfo>
                  <ProductImage source={{ uri: item.image }} />
                  <ProductDetails>
                    <ProductTitle numberOfLines={2}>{item.title}</ProductTitle>
                    <ProductPrice>{item.priceFormatted}</ProductPrice>
                  </ProductDetails>
                  <ProductDelButton onPress={() => removeFromCart(item.id)}>
                    <Icon name="delete-forever" color="#7159c1" size={25} />
                  </ProductDelButton>
                </ProductInfo>
                <ProductControlButtons>
                  <ProductDecrement onPress={() => decrementAmount(item)}>
                    <Icon
                      name="remove-circle-outline"
                      color="#7159c1"
                      size={20}
                    />
                  </ProductDecrement>
                  <ProductAmount>{item.amount}</ProductAmount>
                  <ProductIncrement onPress={() => incrementAmount(item)}>
                    <Icon name="add-circle-outline" color="#7159c1" size={20} />
                  </ProductIncrement>
                  <ProductSubtotal>{item.subTotal}</ProductSubtotal>
                </ProductControlButtons>
              </ProductItem>
            )}
          />
          <ProductFooter>
            <ProductTotalText>TOTAL</ProductTotalText>
            <ProductTotalPrice>{total}</ProductTotalPrice>
            <ButtonEndOrder onPress={() => endOrder()}>
              <ButtonEndOrderText>FINALIZAR PEDIDO</ButtonEndOrderText>
            </ButtonEndOrder>
          </ProductFooter>
        </>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  // pega um array e reduz a um único valor
  total: formatPrice(
    state.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

Cart.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  cart: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

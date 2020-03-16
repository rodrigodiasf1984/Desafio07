import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import {
  ButtonAdd,
  ProductList,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAmount,
  ProductAmountText,
  ButtonAddText,
  Product,
  Container,
} from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        <ProductList
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          extraData={this.props}
          renderItem={({ item }) => (
            <Product key={item.id}>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <ButtonAdd onPress={() => this.handleAddProduct(item.id)}>
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#fff" size={20} />
                  <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
                </ProductAmount>
                <ButtonAddText>ADICIONAR</ButtonAddText>
              </ButtonAdd>
            </Product>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

// convert actions em props
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

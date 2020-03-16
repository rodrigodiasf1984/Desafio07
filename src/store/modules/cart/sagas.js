import Toast from 'react-native-tiny-toast';

import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import NavigationService from '../../../services/NavigationService';
import { formatPrice } from '../../../util/format';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function toastErro() {
  Toast.show('Quantidade solicitada não disponível!', {
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

function* addToCart({ id }) {
  const productExist = yield select(state => state.find(p => p.id === id));

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExist ? productExist.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toastErro();
    return;
  }

  if (productExist) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };
    yield put(addToCartSuccess(data));

    NavigationService.navigate('Cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toastErro();
    return;
  }
  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);

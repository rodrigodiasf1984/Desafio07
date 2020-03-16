import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: #fff;
  border-radius: 10px;
  margin: 10px;
  height: auto;
  max-height: 97%;
`;

export const ProductList = styled.FlatList`
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  margin: 10px;
  height: auto;
  max-height: 75%;
`;
export const ProductItem = styled.View`
  margin-bottom: 20px;
`;
export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
`;
export const ProductDelButton = styled.TouchableOpacity``;

export const ProductDetails = styled.View`
  flex: 1;
  margin: 10px;
  padding: 10px;
`;
export const ProductPrice = styled.Text`
  margin-left: 5px;
  font-weight: bold;
  font-size: 22px;
`;
export const ProductTitle = styled.Text`
  margin-left: 5px;
  font-size: 16px;
`;
export const ProductControlButtons = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  background: #eee;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
export const ProductDecrement = styled.TouchableOpacity``;
export const ProductIncrement = styled.TouchableOpacity``;
export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  border-radius: 5px;
  height: 35px;
  width: 50px;
  margin: 5px 5px;
  border: 1px solid #ddd;
`;
export const ProductSubtotal = styled.Text`
  flex: 1;
  text-align: right;
  font-weight: bold;
  font-size: 22px;
`;
export const ProductFooter = styled.View`
  padding: 10px;
  align-items: center;
  background: #fff;
  margin: 10px;
  margin-top: -10px;
  border-radius: 10px;
`;
export const ProductTotalPrice = styled.Text`
  font-weight: bold;
  font-size: 22px;
  margin-top: 5px;
`;
export const ProductTotalText = styled.Text`
  font-size: 16px;
  color: #999;
  font-weight: bold;
`;
export const ButtonEndOrder = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 5px;
  border: 0;
  padding: 12px 20px;
  width: 100%;
  align-items: center;
  margin-top: 25px;
`;

export const ButtonEndOrderText = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const EmptyCart = styled.SafeAreaView`
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  margin: 10px;
  align-items: center;
`;

export const EmptyCartText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;

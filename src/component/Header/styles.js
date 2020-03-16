import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #192020;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

export const BasketImage = styled.TouchableOpacity`
  height: 30px;
  width: 155px;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  height: 30px;
  width: 155px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;

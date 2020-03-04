import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191920;
  flex: 1;
`;

export const Card = styled.View`
  display: flex;
`;

export const ProductList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
  height: 40px;
`;

export const Price = styled.Text`
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
  height: 20px;
`;

export const Image = styled.Image`
  align-self: center;
  width: 200px;
  height: 200px;
`;

export const Item = styled.View`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  margin-left: 20px;
  width: 250px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 40px;
  background: #7159c1;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin: 20px auto 0;
  display: flex;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  flex: 1;
`;

export const BasketIcon = styled.View`
  background: rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BasketText = styled.Text`
  margin-left: 5px;
  color: #fff;
`;

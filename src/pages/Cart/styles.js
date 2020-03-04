import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #191920;
  flex: 1;
`;

export const CartView = styled.View`
  display: flex;
  background: #fff;
  margin: 20px;
  border-radius: 8px;
  align-items: center;
`;

export const CartItems = styled.FlatList.attrs({
  horizontal: false,
  showsVerticalScrollIndicator: false,
  scrollEnabled: false,
})`
  padding: 5px;
  width: 100%;
`;

export const Image = styled.Image`
  align-self: center;
  width: 100px;
  height: 100px;
`;

export const Item = styled.View`
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const CartInfo = styled.View`
  display: flex;
  justify-content: center;
  height: 100px;
  margin: 0 0 0 10px;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 14px;
  color: #333;
  margin-top: 5px;
  width: 240px;
`;

export const Price = styled.Text`
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
`;

export const IconView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Total = styled.View`
  width: 100%;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-size: 20px;
  line-height: 20px;
  font-weight: bold;
  color: #666;
  margin-top: 5px;
  height: 20px;
`;

export const TotalPrice = styled.Text`
  font-size: 36px;
  line-height: 40px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
  height: 40px;
`;

export const Button = styled(RectButton)`
  height: 40px;
  background: #7159c1;
  border-radius: 4px;
  margin: 10px 0 10px 0;
  border: 0;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  width: 400px;
`;

export const Summary = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const Modify = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  height: 30px;
  background: #eee;
  border-radius: 8px;
  padding: 0 15px;
  border: 1px solid #eee;
  margin: 0 4px 0 4px;
`;

export const Subtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  align-self: center;
`;

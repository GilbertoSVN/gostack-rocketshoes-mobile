import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Basket, QuantityBadge, Quantity } from './styles';
import Logo from '../../assets/images/logo.svg';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  const handleNavigateHome = () => {
    navigation.push('Home');
  };

  const handleNavigateCart = () => {
    navigation.push('Cart');
  };

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigateHome}>
        <Logo width={160} height={60} />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNavigateCart}>
        <Basket>
          <Icon name="shopping-basket" size={24} color="#fff" />
          <QuantityBadge>
            <Quantity>{cartSize}</Quantity>
          </QuantityBadge>
        </Basket>
      </TouchableOpacity>
    </Container>
  );
}

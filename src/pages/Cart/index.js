import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import Header from '../../components/Header';
import {
  Container,
  CartView,
  CartItems,
  Item,
  Title,
  Price,
  IconView,
  Total,
  TotalText,
  TotalPrice,
  Image,
  Button,
  ButtonText,
  CartInfo,
  Summary,
  Input,
  Modify,
  Subtotal,
} from './styles';

export default function Cart({ navigation }) {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalPrice, product) => {
        return totalPrice + product.price * product.amount;
      }, 0),
    ),
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    })),
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <>
      <Header navigation={navigation} />
      <Container>
        <CartView>
          <CartItems
            data={cart}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <>
                <Item>
                  <Image source={{ uri: item.image }} />
                  <CartInfo>
                    <Title>{item.title}</Title>
                    <Price>{item.priceFormatted}</Price>
                  </CartInfo>
                  <IconView>
                    <TouchableOpacity
                      onPress={() =>
                        dispatch(CartActions.removeFromCart(item.id))
                      }>
                      <Icon name="delete-forever" size={24} color="#7159c1" />
                    </TouchableOpacity>
                  </IconView>
                </Item>
                <Summary>
                  <Modify>
                    <TouchableOpacity onPress={() => decrement(item)}>
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </TouchableOpacity>
                    <Input readOnly value={String(item.amount)} />
                    <TouchableOpacity onPress={() => increment(item)}>
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </TouchableOpacity>
                  </Modify>
                  <Subtotal>{item.subtotal}</Subtotal>
                </Summary>
              </>
            )}
          />
          <Total>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>{total}</TotalPrice>
          </Total>
          <TouchableOpacity activeOpacity={0.9}>
            <Button>
              <ButtonText>FINALIZAR PEDIDO</ButtonText>
            </Button>
          </TouchableOpacity>
        </CartView>
      </Container>
    </>
  );
}

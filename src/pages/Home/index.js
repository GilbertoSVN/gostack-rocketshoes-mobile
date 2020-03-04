import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Card,
  ProductList,
  Title,
  Price,
  Item,
  Image,
  Button,
  ButtonText,
  BasketIcon,
  BasketText,
} from './styles';

import Header from '../../components/Header';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((quantity, product) => {
      quantity[product.id] = product.amount;

      return quantity;
    }, {}),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <>
      <Header navigation={navigation} />
      <Container>
        <Card>
          <ProductList
            data={products}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <Item>
                <Image source={{ uri: item.image }} />
                <Title>{item.title}</Title>
                <Price>{item.priceFormatted}</Price>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => handleAddProduct(item.id)}>
                  <Button>
                    <BasketIcon>
                      <Icon name="add-shopping-cart" size={16} color="#fff" />
                      <BasketText>{amount[item.id] || 0}</BasketText>
                    </BasketIcon>
                    <ButtonText>ADICIONAR</ButtonText>
                  </Button>
                </TouchableOpacity>
              </Item>
            )}
          />
        </Card>
      </Container>
    </>
  );
}

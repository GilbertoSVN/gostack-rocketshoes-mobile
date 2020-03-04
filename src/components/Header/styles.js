import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: #131319;
`;

export const Basket = styled.View`
  display: flex;
  flex-direction: row;
`;

export const QuantityBadge = styled.View`
  background: #7159c1;
  position: absolute;
  top: -4px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  justify-content: center;
  align-items: center;
  padding-bottom: 1px;
`;

export const Quantity = styled.Text`
  font-size: 12px;
  color: #fff;
`;

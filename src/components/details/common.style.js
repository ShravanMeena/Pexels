import styled from 'styled-components/native';
import { COLORS, SIZES } from '../constants';

export const Button = styled.View`
  width: ${SIZES.width/2 - 25}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.transparentBlack};
  height: 40px;
  border-radius: 20px;
  border: 1px solid ${COLORS.transparentWhite};
`;


export const Title = styled.Text`
font-size: 20px;
color: #fff;
`;


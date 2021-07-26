import styled from 'styled-components/native';
import {SIZES, COLORS, FONTS} from '../../../components/constants';

export const CardContainer = styled.View`
  margin-top: ${SIZES.padding}px;
`;

export const CardHeader = styled.View`
  padding-top: ${SIZES.padding}px;
  padding-bottom: ${SIZES.padding / 5}px;
  display: flex;
  flex-direction: row;
  align-items: center;

`;

export const Card = styled.View`
`;

export const ImageBox = styled.Image`
  width: ${SIZES.width / 3}px;
  height: ${SIZES.width / 3 + 50}px;
  border-radius: 20px;
`;

export const Heading = styled.Text`
  flex: 1;
  color: ${COLORS.white};
  font-size: ${SIZES.h2}px;
`;

export const SubHeading = styled.Text`
  color: ${COLORS.white};
  font-size: ${SIZES.h4}px;
  margin-top: ${SIZES.base}px;
  font-weight: 300;
`;

export const DotsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${SIZES.padding - 10}px;
`;

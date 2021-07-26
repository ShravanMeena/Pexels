import styled from 'styled-components/native';
import { SIZES} from '../../../components/constants';

export const Card = styled.View`
  width: ${SIZES.width}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImageBackground = styled.ImageBackground`
  width: ${SIZES.width * 0.90}px;
  height: ${SIZES.width * 0.70}px;
  justify-content: flex-end;
`;


export const DotsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${SIZES.padding - 10}px;
`;

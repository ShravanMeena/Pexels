import styled from 'styled-components/native';
import {COLORS, SIZES} from '../../components/constants';

export const DetailsContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.black};
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  
`;

export const Title = styled.Text`
  color: ${COLORS.white};
  font-size: ${SIZES.h1-4}px;
`;

export const SubTitle = styled.Text`
  color: ${COLORS.white};
  font-size: ${SIZES.h3}px;
  margin-top: 2px;
`;


export const HeaderContainer = styled.View`
  flex: 1;
  margin-top: 20px;
  padding: 0px 20px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.transparentBlack};
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;


export const DescCard = styled.View`
width: ${SIZES.width * .8}px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: ${COLORS.transparentWhite};
padding: 10px 15px;
border-radius: 10px;
margin-top: 20px;
margin-bottom: 10px;
`
export const Desc = styled.View`
display: flex;
flex-direction: column;
align-items: center;
`
export const Heading = styled.Text`
  color: ${COLORS.white};
  font-size: ${SIZES.h4}px;
  font-weight: 300;
`
export const Span = styled.Text`
color: ${COLORS.white};
  font-size: ${SIZES.h3}px;
  font-weight: 500;
`

export const BookDetails = styled.View`
width: ${SIZES.width}px;
padding:15px;
`

export const Description = styled.Text`
color: ${COLORS.white};
  font-size: ${SIZES.h3}px;
  font-weight: 300;
  margin-top: 5px;
`
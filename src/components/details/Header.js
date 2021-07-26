import React from 'react';
import {
  ImageBackground,
  Header,
  Title,
  SubTitle,
  Button,
  Icon,
  HeaderContainer,
  DescCard,
  Desc,
  Heading,
  Span,
} from '../../screens/movieDetails/index.style';
import LinearGradient from 'react-native-linear-gradient';
import {icons, SIZES} from '../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {Animated} from 'react-native';


 const HEADER_HEIGHT = SIZES.height < 700 ? SIZES.height * 0.45 : SIZES.height * 0.55
export default function AnimatedHeader({selectedMovie,animatedValue,navigation}) {
  const insets = useSafeAreaInsets();
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, HEADER_HEIGHT/2 +  insets.top],
    extrapolate: 'clamp'
  });
    return (
      <Animated.View style={{
        height: headerHeight,
      }}>

        <ImageBackground
        style={{
          height:"100%"
        }}
        resizeMode="cover"
        source={{uri: selectedMovie.src.portrait}}>
        <HeaderContainer>
          <Header>
            <Button onPress={() => navigation.goBack()}>
              <Icon source={icons.left_arrow} style={{tintColor: 'white'}} />
            </Button>

            <Button onPress={() => console.log('Upload')}>
              <Icon source={icons.upload} style={{tintColor: 'white'}} />
            </Button>
          </Header>
        </HeaderContainer>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['transparent', '#000']}
          style={{
            width: '100%',
          //   height: 150,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingVertical: 20,
          }}>
          <Title>Book name goes here</Title>
          <SubTitle>By {selectedMovie.photographer}</SubTitle>

          <DescCard>
            <Desc>
              <Heading>Rating</Heading>
              <Span>4.7</Span>
            </Desc>
            <Desc>
              <Heading>Language</Heading>
              <Span>4.7</Span>
            </Desc>
            <Desc>
              <Heading>Price</Heading>
              <Span>99</Span>
            </Desc>

            <Desc>
              <Heading>Edition</Heading>
              <Span>4.7</Span>
            </Desc>
          </DescCard>
        </LinearGradient>
      </ImageBackground>

      </Animated.View>
      
    )
}

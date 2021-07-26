import React from 'react';
import {Animated} from 'react-native';
import { SIZES } from '../constants';
import {Title, Button} from './common.style';

export default function Footer() {
  return (
    <Animated.View
      style={{...animatedBox}}>
      <Button>
        <Title>Add To Cart</Title>
      </Button>

      <Button>
        <Title>Buy Now</Title>
      </Button>
    </Animated.View>
  );
}


const animatedBox = {
    width: SIZES.width,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
}
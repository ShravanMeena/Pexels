import React from 'react';

import {
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import {
  COLORS,
  icons,
  images,
  SIZES,
} from '../../components/constants';


const Header = ({navigation}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: SIZES.padding,
        }}>
        {/* profile */}
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            height: 50,
          }}
          onPress={() => console.log('Profile')}>
          <Image
            source={images.profile_photo}
            style={{
              width: 90,
              borderRadius: 20,
              tintColor: COLORS.primary,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
          }}
          onPress={() => console.log('Mirror')}>
          <Image
            source={icons.airplay}
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };


export default Header;

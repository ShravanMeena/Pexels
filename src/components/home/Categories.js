import React from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import {COLORS, FONTS, icons, SIZES} from '../../components/constants';
import {
  CardContainer,
  CardHeader,
  Heading,
  Card,
  ImageBox,
  SubHeading,
} from './style/cardFlatlist.style';

import LinearGradient from 'react-native-linear-gradient';

const Categories = ({navigation, photosData, mainTitle}) => {
  if (photosData.length === 0) {
    return <Text style={{color: 'red'}}>Loading...</Text>;
  }
  return (
    <CardContainer>
      {/* Header */}
      <CardHeader>
        <Heading>Categories</Heading>

        <Image
          source={icons.right_arrow}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.primary,
          }}
        />
      </CardHeader>

      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}
        numColumns={3}
        data={photosData}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('MovieDetail', {selectedMovie: item})
              }>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={[COLORS.transparentBlack, COLORS.transparentWhite]}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  marginBottom: 15,
                  marginLeft: index % 3 == 0 ? 0 : 10,
                  borderColor:COLORS.transparentWhite
                }}>
                <Card
                  style={{
                    width:
                      index === photosData.length - 1
                        ? SIZES.width
                        : SIZES.width / 3,
                    backgroundColor: COLORS.transparentWhite,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                  }}>
                  {/* name */}
                  <SubHeading>{item.id}</SubHeading>
                </Card>
              </LinearGradient>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </CardContainer>
  );
};

export default Categories;

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

const CardFlatlist = ({navigation, photosData, mainTitle}) => {
  if (photosData.length === 0) {
    return <Text style={{color: 'red'}}>Loading...</Text>;
  }
  return (
    <CardContainer>
      {/* Header */}
      <CardHeader>
        <Heading>{mainTitle} Books</Heading>

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
        numColumns={2}
        data={photosData}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <TouchableWithoutFeedback
            
              onPress={() =>
                navigation.navigate('MovieDetail', {selectedMovie: item})
              }>
              <Card style={{width:SIZES.width/2-10, marginBottom:20,marginLeft:index%2 ? 15:0}}>
                {/* thumbnail */}
                <ImageBox
                style={{width:"100%"}}
                  source={{uri: item.src.portrait}}
                  resizeMode="cover"
                />

                {/* name */}
                <SubHeading>{item.photographer}</SubHeading>
              </Card>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </CardContainer>
  );
};

export default CardFlatlist;

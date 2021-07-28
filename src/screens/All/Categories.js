import React from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
} from 'react-native';

import {COLORS, dummyData, FONTS, icons, SIZES} from '../../components/constants';
import {
  CardContainer,
  CardHeader,
  Heading,
  Card,
  ImageBox,
  SubHeading,
} from '../../components/home/style/cardFlatlist.style';

import LinearGradient from 'react-native-linear-gradient';

const Categories = ({navigation, photosData, mainTitle}) => {
  if (dummyData.newSeason.length === 0) {
    return <Text style={{color: 'red'}}>Loading...</Text>;
  }
  return (
      <SafeAreaView style={{flex:1,backgroundColor:"#000"}}>
    <CardContainer style={{marginTop:-5,paddingTop:20}}>
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}
        numColumns={2}
        data={dummyData.newSeason}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <TouchableWithoutFeedback
              >
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={[COLORS.primary, COLORS.black]}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  marginBottom: 15,
                  marginLeft: index % 2 == 0 ? 0 : 10,
                  borderColor:COLORS.transparentWhite,
                  marginBottom:index === dummyData.newSeason.length - 1
                  ? 20
                  : 10,

                }}>
                <Card
                  style={{
                    width:
                      index === dummyData.newSeason.length - 1
                        ? SIZES.width
                        : SIZES.width / 2,
                        height: SIZES.width/3,

                    backgroundColor: COLORS.transparentWhite,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                         {/* thumbnail */}
                         <Image
                         style={{width:30,height:30,tintColor:COLORS.white}}
                        source={icons.airplay}
                        resizeMode="cover"
                        
                      />
                  {/* name */}
                  <SubHeading style={{fontSize:18}}>Category {Math.floor(Math.random() * 1000) + 1}</SubHeading>
                </Card>
              </LinearGradient>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </CardContainer>
    </SafeAreaView>

  );
};

export default Categories;

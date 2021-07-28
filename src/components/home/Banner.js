import React, {useRef} from 'react';

import { Animated, TouchableWithoutFeedback} from 'react-native';
import { SIZES, COLORS} from '../../components/constants';
import {Card, ImageBackground, DotsContainer} from './style/banner.style';

const Banner = ({navigation,photosData}) => {
  const newSeasonScrollX = useRef(new Animated.Value(0)).current;

  const renderDots = () => {
    const dotPosition = Animated.divide(newSeasonScrollX, SIZES.width);
    return (
      <DotsContainer>
        {photosData.map((item, index) => {
          const dotOpacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [6, 20, 6],
            extrapolate: 'clamp',
          });

          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.lightGray, COLORS.primary, COLORS.lightGray],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={dotOpacity}
              style={{
                borderRadius: SIZES.radius,
                marginHorizontal: 3,
                width: dotWidth,
                height: 6,
                backgroundColor: dotColor,
              }}></Animated.View>
          );
        })}
      </DotsContainer>
    );
  };

  return (
    <>
      <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        contentContainerStyle={{marginTop: SIZES.radius}}
        data={photosData}
        keyExtractor={item => `${item.id}`}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: newSeasonScrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => {
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('Collections', {
                  selectedMovie: item,
                })
              }>
              <Card>
                {/* image background */}
                <ImageBackground
              source={{uri: item.src.portrait}}
              resizeMode="cover"
                  imageStyle={{borderRadius: 30}}></ImageBackground>
              </Card>
            </TouchableWithoutFeedback>
          );
        }}></Animated.FlatList>
      {renderDots()}
    </>
  );
};

export default Banner;

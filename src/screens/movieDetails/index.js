import React, {useState, useEffect, useRef} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {DetailsContainer, Title, BookDetails, Description} from './index.style';
import AnimatedHeader from '../../components/details/Header';
import {Animated,View} from 'react-native';
import Footer from '../../components/details/Footer';

const MovieDetail = ({route, navigation}) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const headerOffset = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let {selectedMovie} = route.params;
    setSelectedMovie(selectedMovie);
  }, []);

  if (selectedMovie === null) {
    return <Title style={{color: 'red'}}>Loading...</Title>;
  }
  
  return (
    <DetailsContainer>
      <AnimatedHeader
        navigation={navigation}
        selectedMovie={selectedMovie}
        animatedValue={headerOffset}
      />

      <ScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: headerOffset}}}],
          {useNativeDriver: false},
        )}>
        <BookDetails>
          <Title>Description</Title>
          <Description>
                {text}
          </Description>
        </BookDetails>

        <Footer />

      </ScrollView>
 
        
    </DetailsContainer>
  );
};

export default MovieDetail;


const text = `Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in yourInclude popular icons in your
React projects easily with react-icons, which utilizes ES6 imports
that allows you to include only the icons that your project is
using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
yourInclude popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using. Include popular icons in
your React projects easily with react-icons, which utilizes ES6
imports that allows you to include only the icons that your project
is using. Include popular icons in your React projects easily with
react-icons, which utilizes ES6 imports that allows you to include
only the icons that your project is using.`
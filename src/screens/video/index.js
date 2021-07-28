import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../components/home/Header';

import {SafeAreaView, ScrollView} from 'react-native';
import {COLORS} from '../../components/constants';
import Banner from '../../components/home/Banner';
import Cards from '../../components/home/Cards';
import CardFlatlist from '../../components/home/CardFlatlist';
import Categories from '../../components/home/Categories';

const Video = ({navigation}) => {
  const [photosData, setPhotosData] = useState([]);
  const getData = () => {
    const url = 'https://api.pexels.com/v1/curated?page=1&per_page=10';

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${'563492ad6f917000010000016116757279874e39885f4b23cfaa821b'}`,
        },
      })
      .then(res => {
        setPhotosData(res.data.photos);
      })
      .catch(error => {
        alert(JSON.stringify(error));
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}>
      <ScrollView>
        <Header />
        <ScrollView contentContainerStyle={{marginBottom: 100}}>
        <Banner navigation={navigation} photosData={photosData}/>
          <Categories navigation={navigation} photosData={photosData} />
          <CardFlatlist mainTitle="Trending" photosData={photosData} navigation={navigation} />
          <CardFlatlist mainTitle="Recommended" photosData={photosData.reverse()} navigation={navigation} />
          <Cards mainTitle="Cards" photosData={photosData} navigation={navigation} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Video;

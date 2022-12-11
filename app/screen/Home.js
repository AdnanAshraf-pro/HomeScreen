import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import LoginSection from '../component/LoginSection';
import Carousel from 'react-native-snap-carousel';
import RenderListMainItem from '../component/RenderListMainItem';
import {WINDOW_WIDTH} from '../utils/AppStyles';
import AppContext from '../utils/AppContext';
import Share from 'react-native-share';
import notifyMessage from '../utils/NotifyMessage';

//list of items to render on screen
const ListData = [
  {
    id: 1,
    name: 'Blue Cotton hoodie',
    price: '1000',
    currency: 'aed',
    soldItems: 430,
  },
  {
    id: 2,
    name: 'Blue Cotton hoodie',
    price: '1000',
    currency: 'aed',
    soldItems: 430,
  },
  {
    id: 3,
    name: 'Blue Cotton hoodie',
    price: '1000',
    currency: 'aed',
    soldItems: 430,
  },
];

export default function Home() {
  const {cartList, setcartList} = useContext(AppContext);

  const addToCartFunction = data => {
    let filteredItem = cartList.filter(element => element.id == data.id);
    if (filteredItem.length > 0) {
      let updatedArray = cartList.map(dataItem => {
        if (dataItem.id == data.id) {
          let temp = {
            ...dataItem,
            quantity: dataItem.quantity + 1,
          };
          return temp;
        } else {
          return dataItem;
        }
      });
      setcartList(updatedArray);
    } else {
      setcartList(prevState => [...prevState, {...data, quantity: 1}]);
    }
  };
  const decrementOrRemoveFromCart = data => {
    let filteredItem = cartList.filter(element => element.id == data.id);
    if (filteredItem.length > 0) {
    
      if (filteredItem[0].quantity == 1) {
        let tempArray = cartList.filter(dataItem => dataItem.id != data.id);
        setcartList(tempArray);
        notifyMessage('Item removed from the cart!');
      } else {
        let updatedArray = cartList.map(dataItem => {
          if (dataItem.id == data.id) {
            let temp = {
              ...dataItem,
              quantity: dataItem.quantity - 1,
            };
            return temp;
          } else {
            return dataItem;
          }
        });
        setcartList(updatedArray);
      }
    } else {
      setcartList(prevState => [...prevState, data]);
    }
  };

  //share functions
  const shareFuntion = data => {
    try {
      const options = {
        title: 'Sharing',
        message: data,
      };
      Share.open(options).then(res => {
        console.log('res', res);
      });
    } catch (error) {}
  };
  return (
    <View style={styles.mainView}>
      <ScrollView style={styles.mainView}>
        <View style={styles.mainContentView}>
          <LoginSection />
          <Carousel
            data={ListData}
            renderItem={({item, index}) => (
              <RenderListMainItem
                index={index}
                addOrUpdateCart={addToCartFunction}
                decrementOrRemoveFromCart={decrementOrRemoveFromCart}
                item={item}
                shareFuntion={shareFuntion}
              />
            )}
            sliderWidth={WINDOW_WIDTH}
            itemWidth={WINDOW_WIDTH * 0.95}
          />
        </View>
      </ScrollView>
      {/* <View style={styles.bottomTabView}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  mainContentView: {
    flex: 1,
    paddingBottom: 60,
  },
  bottomTabView: {
    width: WINDOW_WIDTH,
    position: 'absolute',
    bottom: 0,
    height: 50,
    backgroundColor: 'red',
  },
});

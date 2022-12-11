import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AppColors, WINDOW_HEIGHT, WINDOW_WIDTH} from '../utils/AppStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import {BLUE_HOODIE, CAR} from '../assets/images';
import AppContext from '../utils/AppContext';
import notifyMessage from '../utils/NotifyMessage';

export default function RenderListMainItem({
  item,
  index,
  decrementOrRemoveFromCart,
  addOrUpdateCart,
  shareFuntion,
}) {
  const {cartList} = useContext(AppContext);

  let cartQuantity = cartList.filter(dataItem => dataItem.id == item.id)?.[0]
    ?.quantity;
  console.log('cartQuantity', cartQuantity);
  return (
    <View style={styles.cardMainView}>
      <View style={styles.iconContainer}>
        <Ionicons
          name="share-social"
          size={RFValue(25)}
          style={styles.iconStyle}
          color="#000"
          onPress={() => shareFuntion(item.name)}
        />
        <Ionicons
          name="ios-heart-outline"
          size={RFValue(25)}
          style={styles.iconStyle}
          color="#000"
        />
      </View>
      <View style={styles.longTextView}>
        <Text style={[styles.longTextStyle,{fontSize:RFValue(18)}]}>get a chance to<Text style={styles.coloredInlineText}> win</Text> A </Text>
        <Text style={[styles.longTextStyle,{fontSize:RFValue(20)}]}>bentely Continental</Text>
      </View>
      <Image resizeMode="contain" source={CAR} style={styles.carImage} />
      <View style={styles.itemDetailsView}>
        <Image source={BLUE_HOODIE} style={styles.blueHoodieImageStyle} />
        <View style={styles.titleAndPriceView}>
          <Text style={styles.productNameText}>buy a {item.name}</Text>
          <Text style={styles.priceText}>
            {item.currency} {item.price}
          </Text>
          <View style={styles.itemQuantityContainer}>
            <Ionicons
              name="remove-circle-sharp"
              size={RFValue(32)}
              style={styles.iconStyle}
              color="#E03A3F"
              onPress={() => decrementOrRemoveFromCart(item)}
            />
            <Text style={styles.quantityText}>
              {cartList.filter(dataItem => dataItem.id == item.id)?.[0]
                ?.quantity
                ? cartList.filter(dataItem => dataItem.id == item.id)?.[0]
                    ?.quantity
                : 0}
            </Text>
            <Ionicons
              name="add-circle-sharp"
              size={RFValue(32)}
              style={styles.iconStyle}
              color="#E03A3F"
              onPress={() => addOrUpdateCart(item)}
            />
          </View>
        </View>
      </View>
      <View style={styles.halfColoredView} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardMainView: {
    width: WINDOW_WIDTH * 0.95,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    overflow: 'hidden',
    paddingVertical: 5,
    borderRadius: WINDOW_WIDTH * 0.055,
    paddingBottom: 15,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 10,
    zIndex: 2,
  },
  longTextView:{
    zIndex:2,
    alignItems:'flex-end',
    paddingRight:WINDOW_WIDTH*0.1
  },
  iconStyle: {
    marginHorizontal: 10,
  },
  carImage: {
    width: WINDOW_WIDTH * 0.6,
    height: WINDOW_HEIGHT * 0.18,
    alignSelf: 'flex-end',
    zIndex: 2,
  },
  blueHoodieImageStyle: {
    width: WINDOW_WIDTH * 0.25,
    height: WINDOW_WIDTH * 0.25,
  },
  titleAndPriceView: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemDetailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productNameText: {
    textTransform: 'uppercase',
    color: '#686869',
    fontWeight: 'bold',
    fontSize: RFValue(14),
  },
  priceText: {
    textTransform: 'uppercase',
    color: AppColors.primaryColor,
    fontWeight: 'bold',
    fontSize: RFValue(20),
  },
  itemQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityText: {
    color: '#464646',
    fontWeight: 'bold',
    fontSize: RFValue(20),
  },
  halfColoredView: {
    width: '100%',
    height: '50%',
    backgroundColor: '#F7F5F8',
    position: 'absolute',
  },
  longTextStyle:{
    textTransform:'uppercase',
    color:AppColors.primaryColor,
    width:'70%',
    textAlign:'right',
    fontWeight:'bold'
  },
  coloredInlineText:{
    color:"#E03A3F"
  }
});

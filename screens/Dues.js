import React, {useState} from "react";
import { Image, FlatList, TouchableOpacity, StyleSheet, View, Pressable } from "react-native";

import AppScreen from "../components/AppScreen";
import Avatar from "../components/Avatar";
import { mocks } from "../constants";
import AppText from "../components/AppText";
import { colors, sizes } from "../constants/theme";
import { AppIcon } from "../components/AppIcon";
import AppButton from '../components/AppButton';
import AppModal from '../components/AppModal';
import TextInput from '../components/TextInput';


function Dues({navigation}) {

  const Icon = ({type}) => {
    switch(type) {
      case 'electricity': return <AppIcon Icon='MaterialIcons' color={colors.lightGreen} name="electrical-services" size={24} />
      case 'dth': return <AppIcon Icon='Ionicons' color={colors.lightGreen} name="ios-tv-outline" size={20} />
      case 'broadband': return <AppIcon Icon='FontAwesome5' color={colors.lightGreen} name="inbox" size={20} />
      case 'medInsurance': return <AppIcon Icon='FontAwesome5' color={colors.lightGreen} name="hand-holding-medical" size={20} />
      case 'bikeInsurance': return <AppIcon Icon='FontAwesome5' color={colors.lightGreen} name="motorcycle" size={20} />
      case 'carInsurance': return <AppIcon Icon='Ionicons' color={colors.lightGreen} name="md-car-sport" size={20} />
      default: return <View></View>
    }
  }
  
  const BillList = () => (
    <FlatList
      data={mocks.dues}
      renderItem={(due) => (
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.cardIconContainer}>
              <Icon type={due.item.type} />
            </View>
            <View style={styles.itemNameContainer}>
              <AppText style={styles.itemName}>{due.item.name}</AppText>
              <AppText style={[styles.daysLeft, {color: due.item.daysLeft < 10 ? colors.tomato : colors.gray10}]}>{due.item.daysLeft} Days Left</AppText>
            </View>
            <View style={styles.amountContainer}>
              <AppText style={styles.amount}>&#8377;{due.item.amount}</AppText>
              <AppText style={styles.amountNote}>Bill Amount</AppText>
            </View>
          </View>
        </View>
      )}
    />
  )

  return (
    <AppScreen style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <AppText style={[styles.heading]}>My Dues</AppText>
        <Avatar source={mocks.profile.avatar} navigateTo="Profile" navigation={navigation}/>
      </View>
      
      <View style={styles.line}></View>

      <BillList/>
      
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: sizes.padding
  },
  topHeadingContainer: {
    flexDirection: 'row'
  },
  heading: {
    flex: 1,
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 20
  },
  line: {
    flexDirection: 'row',
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
    marginBottom: 10
  },
  card: {
    flex: 0.5,
    backgroundColor: colors.lightOrange,
    height: 70,
    margin: 10,
    justifyContent: 'space-around',
    borderRadius: 5,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  itemNameContainer: {
    justifyContent: 'center',
    marginLeft: 15,
    textAlign: 'center',
    flex: 1
  },
  itemName: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.darkGrey,
  },
  daysLeft: {
    color: colors.tomato,
    fontWeight: '700',
    fontSize: 15
  },
  cardIconContainer: {
    backgroundColor: colors.orange,
    height: 40,
    width: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
  },
  cardIcon: {
    fontWeight: '700',
  },
  amountContainer: {
    marginRight: 15,
    justifyContent:'center',
    minWidth: 80
  },
  amount: {
    fontWeight: '700',
    color: colors.green,
    fontSize: 17,
  },
  amountNote: {
    color: colors.gray10,
    fontSize: 13
  },
});

export default Dues;
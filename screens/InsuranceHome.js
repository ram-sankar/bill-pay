import React, {useState} from "react";
import { Image, FlatList, TouchableOpacity, StyleSheet, View, Pressable } from "react-native";

import AppScreen from "../components/AppScreen";
import Avatar from "../components/Avatar";
import { mocks } from "../constants";
import AppText from "../components/AppText";
import { colors, sizes } from "../constants/theme";
import { AppIcon } from "../components/AppIcon";
import AppButton from "../components/AppButton";


function InsuranceHome({navigation}) {

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
      data={mocks.insuranceDetails}
      renderItem={(insurance) => (
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.itemNameContainer}>
              <AppText style={styles.itemName}>{insurance.item.name}</AppText>
              <AppText style={[styles.daysLeft]}>{insurance.item.date}</AppText>
              <AppText style={[styles.paidBy]}>Paid By: 
                <AppText style={[styles.paidByName]}> {insurance.item.paidBy}
                </AppText>
              </AppText>
            </View>

            <View style={styles.amountContainer}>
              <AppText style={styles.amount}>&#8377;{insurance.item.amount}</AppText>
              <AppText style={styles.amountNote}>Bill Amount</AppText>
            </View>
            
            <View style={styles.downloadIcon}>
              <AppIcon Icon='Feather' color={colors.darkGrey} name="download" size={24} />
            </View>

          </View>
        </View>
      )}
    />
  )

  const NewInsurance = () => (
    <View style={styles.addMemberContainer}>
      <AppButton 
        title="+ New Insurance"
        onPress={() => navigation.navigate('Insurance')}
        style={styles.addMember}
      />
    </View>
  )

  return (
    <AppScreen style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <AppText style={[styles.heading]}>Insurance Details</AppText>
        <Avatar source={mocks.profile.avatar} navigateTo="Profile" navigation={navigation}/>
      </View>
      
      <View style={styles.line}></View>

      <NewInsurance/>
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
    backgroundColor: colors.lightViolet,
    height: 100,
    margin: 10,
    justifyContent: 'space-around',
    borderRadius: 15,
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
    color: colors.gray10,
    fontWeight: '700',
    fontSize: 13,
    paddingVertical: 3
  },
  paidBy: {
    color: colors.darkGrey,
    fontWeight: '700',
    fontSize: 14
  },
  paidByName: {
    color: colors.darkGrey,
    fontWeight: '700',
    fontSize: 14
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
  downloadIcon: {
    justifyContent: 'center',
    marginRight: 15
  },
  addMember: {
    height: 35,
    width: 170,
  },
  addMemberContainer: {
    alignItems: 'center'
  }
});

export default InsuranceHome;
import React, {useState} from "react";
import { Image, FlatList, TouchableOpacity, StyleSheet, View, Pressable } from "react-native";

import AppScreen from "../components/AppScreen";
import Avatar from "../components/Avatar";
import { mocks } from "../constants";
import AppText from "../components/AppText";
import { colors, sizes } from "../constants/theme";
import { AppIcon } from "../components/AppIcon";
import AppButton from './../components/AppButton';
import AppModal from './../components/AppModal';
import TextInput from './../components/TextInput';


function InsuranceDetails({navigation}) {

  const DetailsCard = () => (
    <FlatList 
      data={[{id: '1'}]}
      renderItem={(category) => (
        <View style={[styles.card]}>
          <View>
            <View style={styles.topContent}>
              <View style={styles.itemNameContainer}>
                <AppText style={styles.itemName}>Ram Sankar</AppText>
                <AppText style={styles.relationship}>Age: 24</AppText>
              </View>
              <View style={styles.amountContainer}>
                <AppText style={styles.amount}>&#8377;5,00,000</AppText>
                <AppText style={styles.amountNote}>Coverage Amount</AppText>
              </View>
            </View >

            <View style={styles.tenureContainer}>
              <AppText style={styles.Tenure}>Tenure: 
                <AppText style={styles.TenureDetail}> 1 year</AppText>
              </AppText>
            </View>

            <View style={styles.tenureContainer}>
              <AppText style={styles.Tenure}>Claims Settled: 
                <AppText style={styles.TenureDetail}> 95%</AppText>
              </AppText>
            </View>

            <View style={styles.tenureContainer}>
              <AppText style={styles.Tenure}>Co-pay(You pay): 
                <AppText style={styles.TenureDetail}> 5%</AppText>
              </AppText>
            </View>

            <View style={styles.tenureContainer}>
                <AppText style={styles.Tenure}>Things Covered </AppText>
                <AppText style={styles.covered}>Room rent upto 5,000/- Per day</AppText>
                <AppText style={styles.covered}>9,300+ cashless hospitals</AppText>
                <AppText style={styles.covered}>Ambulance cover upto 2,000</AppText>
                <AppText style={styles.covered}>ICU/ICCU upto 5,000/- Per day</AppText>
            </View>

          </View>
        </View>
      )}
      />
  )

  const PayMentButton = () => (
    <View style={styles.addMemberContainer}>
      <AppButton 
        title="Pay 4,350"
        onPress={() => navigation.navigate('Home')}
        style={styles.addMember}
      />
    </View>
  )

  return (
    <AppScreen style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <AppText style={[styles.heading]}>Plan Details</AppText>
        <Avatar source={mocks.profile.avatar} navigateTo="Profile" navigation={navigation}/>
      </View>
      
      <View style={styles.line}></View>

      <DetailsCard/>
      <PayMentButton/>
      
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
    // height: 70,
    margin: 10,
    justifyContent: 'space-around',
    borderRadius: 20,
    backgroundColor: colors.lightViolet,
    paddingVertical: 20,
    paddingLeft: 15
  },
  topContent: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10
  },
  itemNameContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1
  },
  itemName: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.darkGrey,
  },
  relationship: {
    color: colors.gray10,
    fontSize: 15
  },
  cardIconContainer: {
    // backgroundColor: colors.lightBlue2,
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
  addMemberContainer: {
    alignItems: 'center'
  },
  TenureDetail: {
    fontWeight: '700',
    color: colors.green,
    fontSize: 17,
  },
  Tenure: {
    fontWeight: '700',
    color: colors.darkGrey,
    fontSize: 17,
  },
  tenureContainer: {
    marginVertical: 8
  },
  covered: {
    fontWeight: '700',
    color: colors.gray10,
    fontSize: 14,
    paddingLeft: 10,
    paddingTop: 5
  }
});

export default InsuranceDetails;
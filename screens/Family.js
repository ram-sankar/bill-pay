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


function Family({navigation}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [input, setInput] = useState();

  const FamilyList = () => (
    <FlatList
      data={mocks.family}
      renderItem={(category) => (
        <View style={[styles.card, {backgroundColor: category.item.relationship === 'You' ? colors.lightOrange : colors.lightBlue}]}>
          <View style={styles.cardContent}>
            <View style={[styles.cardIconContainer, , {backgroundColor: category.item.relationship === 'You' ? colors.lightOrange2 : colors.lightBlue2}]}>
              <AppText style={[styles.cardIcon]}>{category.item.name.charAt(0)}</AppText>
            </View>
            <View style={styles.itemNameContainer}>
              <AppText style={styles.itemName}>{category.item.name}</AppText>
              <AppText style={styles.relationship}>{category.item.relationship}</AppText>
            </View>
            <View style={styles.amountContainer}>
              <AppText style={styles.amount}>&#8377;{category.item.amount}</AppText>
              <AppText style={styles.amountNote}>Bill Amount Paid</AppText>
            </View>
          </View>
        </View>
      )}
    />
  )

  const AddMember = () => (
    <View style={styles.addMemberContainer}>
      <AppButton 
        title="+ Add Member"
        onPress={() => setIsModalVisible(true)}
        style={styles.addMember}
      />
    </View>
  )

  const RenderModel = () => {
    return(
    <AppModal isModalVisible={isModalVisible} onRequestClose >
      <AppText style={styles.modalText}>Phone Number</AppText>
      <TextInput
        onChangeText={text => setInput(text)}
        value={input}
      />
      <Pressable
        style={[styles.button]}
        onPress={() => setIsModalVisible(false)}
      >
        <AppText style={styles.textStyle}>Send Request</AppText>
      </Pressable>
    </AppModal>
  )}

  return (
    <AppScreen style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <AppText style={[styles.heading]}>My Family</AppText>
        <Avatar source={mocks.profile.avatar} navigateTo="Profile" navigation={navigation}/>
      </View>
      
      <View style={styles.line}></View>

      <FamilyList/>
      <AddMember/>

      <RenderModel/>
      
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
    alignItems: 'flex-end'

  },
  addMember: {
    width: 150,
    height: 50,
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center",
    width: 200
  },
  button: {
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 30,
    marginTop: 10,
    backgroundColor: colors.primary,
    elevation: 2
  },
  textStyle: {
    color: "white",
  },
});

export default Family;
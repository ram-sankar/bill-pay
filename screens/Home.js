import React, {useState} from "react";
import { Image, FlatList, TouchableOpacity, StyleSheet, View, Dimensions, Pressable } from "react-native";

import AppScreen from "../components/AppScreen";
import Avatar from "../components/Avatar";
import { mocks } from "../constants";
import AppText from "../components/AppText";
import { colors, sizes } from "../constants/theme";
import { AppIcon } from "../components/AppIcon";

const { width } = Dimensions.get("window");

function Home({navigation}) {

  const [active, setActive] = useState("Products");
  const [categories, setCategories] = useState(mocks.categories);

  const RenderItem = () => (
    <FlatList 
      data={categories}
      renderItem={(category) => (
        <View style={[styles.card, {backgroundColor: colors[category.item.bg]}]}>
          <Pressable onPress={() => navigation.navigate("Product", {name: category.item.name, count: category.item.count})}>
            <View style={styles.cardContent}>
              <AppIcon Icon={category.item.iconType} color={colors[category.item.color]} name={category.item.iconName} size={24} />
              <View style={styles.itemNameContainer}>
                <AppText style={styles.itemName}>{category.item.name}</AppText>
              </View>
            </View>
          </Pressable>
        </View>
      )}
      numColumns={2}
    />
  )

  const HR = () => (
    <View style={styles.line}></View>
  )

  const Family = () => (
    <View style={[styles.card, {backgroundColor: colors.lightBlue}]}>
      <Pressable onPress={() => navigation.navigate("Product")}>
        <View style={styles.cardContent}>
          <AppIcon Icon='MaterialIcons' color={colors.blue} name="family-restroom" size={24} />
          <View style={styles.itemNameContainer}>
            <AppText style={styles.itemName}>My Family</AppText>
          </View>
        </View>
      </Pressable>
    </View>
  )

  const BillDues = () => (
    <View style={[styles.card, {backgroundColor: colors.lightViolet}]}>
      <Pressable onPress={() => navigation.navigate("Product")}>
        <View style={styles.cardContent}>
          <AppIcon Icon='Ionicons' color={colors.violet} name="document-text-outline" size={24} />
          <View style={styles.itemNameContainer}>
            <AppText style={styles.itemName}>Bill Dues</AppText>
          </View>
        </View>
      </Pressable>
    </View>
  )

  return (
    <AppScreen style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <AppText style={[styles.heading]}>Bill Pay</AppText>
        <Avatar source={mocks.profile.avatar} navigateTo="Profile" navigation={navigation}/>
      </View>
      <HR/>
      <Family/>
      <BillDues/>
      <RenderItem />
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
  tabContainer: {
    flexDirection: 'row',
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
  },
  line: {
    flexDirection: 'row',
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
    marginBottom: 10
  },
  tab: {
    padding: 13,
  },
  active: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 5,
  },
  activeTabText: {
    fontWeight: '700',
    color: colors.primary,
  },
  normalTabText: {
    fontWeight: '700',
    color: colors.gray,
  },
  card: {
    flex: 0.5,
    height: 100,
    margin: 10,
    justifyContent: 'space-around',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  cardImageContainer: {
    backgroundColor: colors.lightGreen,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemName: {
    fontWeight: '700',
    fontSize: 17,
    marginLeft: 15,
    textAlign: 'center',
    color: colors.darkGrey
  },
  itemCount: {
    fontSize: 15,
    color: colors.gray2
  },
  itemNameContainer: {
    width: 100,
  }
});

export default Home;
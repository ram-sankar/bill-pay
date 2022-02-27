const categories = [
  {
    id: "health-insurance",
    name: "Health Insurance",
    iconType: 'FontAwesome5',
    iconName: 'hand-holding-medical',
    bg: 'lightOrange',
    color: 'orange'
  },
  {
    id: "vehicle-insurance",
    name: "Vehicle Insurance",
    iconType: 'Ionicons',
    iconName: 'md-car-sport',
    bg: 'lightGreen',
    color: 'green'
  },
  {
    id: "electricity",
    name: "Electricity Bill",
    iconType: 'MaterialIcons',
    iconName: 'electrical-services',
    bg: 'lightBlue',
    color: 'blue'
  },
  {
    id: "gas-cylinder",
    name: "Gas Cylinder",
    iconType: 'MaterialCommunityIcons',
    iconName: 'gas-cylinder',
    bg: 'lightRed',
    color: 'red'
  },
  {
    id: "dth",
    name: "DTH Recharge",
    iconType: 'Ionicons',
    iconName: 'ios-tv-outline',
    bg: 'lightGreen',
    color: 'green'
  },
  {
    id: "broadband",
    name: "Broadband",
    iconType: 'FontAwesome5',
    iconName: 'inbox',
    bg: 'lightBlue',
    color: 'blue'
  },
];

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "react-ui-kit",
  location: "Europe",
  email: "contact@react-ui-kit.com",
  avatar: require("../assets/images/avatar.jpg"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

const images = {
  plant: require("../assets/images/plant.png")
}

export { categories, explore, products, profile, images };

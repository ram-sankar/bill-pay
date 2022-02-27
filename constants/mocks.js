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

const family = [
  {
    id: '0',
    name: 'Ram Sankar',
    relationship: 'You',
    amount: '6,500',
  },
  {
    id: '1',
    name: 'Shyam Sundar',
    relationship: 'Brother',
    amount: '8,300',
  },
  {
    id: '2',
    name: 'Ravi Sankar',
    relationship: 'Father',
    amount: '23,520',
  },
  {
    id: '3',
    name: 'Amirtha Gowri',
    relationship: 'Mother',
    amount: 0,
  },
]

const profile = {
  username: "Ram Sankar",
  location: "Chennai",
  email: "ram.sankar@gmail.com",
  avatar: require("../assets/images/avatar.jpg"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

export { categories, profile, family };

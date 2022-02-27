const categories = [
  {
    id: "health-insurance",
    name: "Health Insurance",
    iconType: 'FontAwesome5',
    iconName: 'hand-holding-medical',
    bg: 'lightOrange',
    color: 'orange',
    navigateTo: 'Insurance'
  },
  {
    id: "vehicle-insurance",
    name: "Vehicle Insurance",
    iconType: 'Ionicons',
    iconName: 'md-car-sport',
    bg: 'lightGreen',
    color: 'green',
    navigateTo: 'Insurance'
  },
  {
    id: "electricity",
    name: "Electricity Bill",
    iconType: 'MaterialIcons',
    iconName: 'electrical-services',
    bg: 'lightBlue',
    color: 'blue',
    navigateTo: 'Insurance'
  },
  {
    id: "gas-cylinder",
    name: "Gas Cylinder",
    iconType: 'MaterialCommunityIcons',
    iconName: 'gas-cylinder',
    bg: 'lightRed',
    color: 'red',
    navigateTo: 'Insurance'
  },
  {
    id: "dth",
    name: "DTH Recharge",
    iconType: 'Ionicons',
    iconName: 'ios-tv-outline',
    bg: 'lightGreen',
    color: 'green',
    navigateTo: 'Insurance'
  },
  {
    id: "broadband",
    name: "Broadband",
    iconType: 'FontAwesome5',
    iconName: 'inbox',
    bg: 'lightBlue',
    color: 'blue',
    navigateTo: 'Insurance'
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

const dues = [
  {
    id: '0',
    type: 'electricity',
    name: 'Electricity Bill',
    amount: '1,320',
    daysLeft: 5,
  },
  {
    id: '1',
    type: 'dth',
    name: 'DTH bill',
    amount: '270',
    daysLeft: 7,
  },
  {
    id: '2',
    type: 'broadband',
    name: 'Broadband bill',
    amount: '899',
    daysLeft: 14,
  },
  {
    id: '3',
    type: 'medInsurance',
    name: 'Medical Insurance',
    amount: '7,500',
    daysLeft: 35,
  },
  {
    id: '4',
    type: 'bikeInsurance',
    name: 'Bike Insurance',
    amount: '1,400',
    daysLeft: 82,
  },
  {
    id: '5',
    type: 'carInsurance',
    name: 'Car Insurance',
    amount: '4,700',
    daysLeft: 153,
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

export { categories, profile, family, dues };

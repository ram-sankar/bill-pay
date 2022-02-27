import React, {useState} from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import BackButton from "../components/BackButton";
import { ErrorMessage, Form, FormField, SubmitButton } from "../components/forms";
import defaultStyles from "../constants/styles";
import { sizes } from "../constants/theme";

const validationSchema = Yup.object().shape({
  userName: Yup.string().required().label("Name"),
  age: Yup.number().required().label("Age"),
  amount: Yup.number().required().label("Cover Amount"),
  pincode: Yup.number().required().label("Pincode"),
});

function Insurance({navigation}) {

  const handleSubmit = (data) => {
    console.log(data);
      return navigation.navigate('InsuranceDetails')
  }

  const insuranceForm = (
    <Form 
        initialValues={{ userName: "", age: '', amount: '', pincode: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          name="userName"
          placeholder="Name"
        />
        <FormField
          name="age"
          placeholder="Age"
          keyboardType='numeric'
        />
        <FormField
          name="amount"
          placeholder="Cover Amount"
          keyboardType='numeric'
        />
        <FormField
          name="pincode"
          placeholder="Pincode"
          keyboardType='numeric'
        />
        <SubmitButton title="Login" style={styles.loginButton}/>
      </Form>
  )

  return (
    <AppScreen style={styles.container}>
      <BackButton navigation={navigation}/>
      <AppText style={defaultStyles.headingText}>Insurance</AppText>
      {insuranceForm}
    </AppScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: sizes.padding
  },
  backIcon: {
    marginLeft: -15,
    marginBottom: 15
  },
  loginButton: {
    width: '100%',
    marginTop: 20
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
    color: defaultStyles.colors.gray
  }
});

export default Insurance;
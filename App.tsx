/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// import 'dotenv/config';
import RazorpayCheckout from 'react-native-razorpay';

function App() {
  // console.log( RAZORPAY_KEY_ID , RAZORPAY_KEY_SECRET )
  let razorpayKeyId = 'rzp_test_nnBICx4kOzlxi5';
  let razorpayKeySecret = 'xdGovQtSpNKJUanOm83Essno';

  const amount = 100;
  const currency = 'INR';

  const handlePayment = () => {
    var options = {
      description: 'Buy BMW CAR',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: currency,
      key: razorpayKeyId,
      amount: amount * 100,
      name: 'test order',
      order_id: '', //Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
      prefill: {
        email: 'xyz@gmail.com',
        contact: '9999999999',
        name: 'User 1',
      },
      theme: {color: '#F37254'},
    };

    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        console.log(error);
        Alert.alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <SafeAreaView>
      <Text>bd</Text>
      <Text
        onPress={handlePayment}
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: 10,
          margin: 10,
        }}>
        Pay Now
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    margin: 10,
  },
});

export default App;

import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import {
  Alert,
  StyleSheet,
  Text,
  Image,
  AsyncStorage,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List({navigation}) {
  const [techs, setTechs] = useState([]);
  async function handleLogout(){
    await AsyncStorage.removeItem('user');
    navigation.navigate('Login');
  }

  useEffect(() => {
    AsyncStorage.getItem('user').then(user_id => {
      const socket = socketio('http://192.168.0.10:3333', {
        query: { user_id },
      });

      socket.on('booking_response', booking => {
        Alert.alert(
          `Sua reserva em ${booking.spot.company} em ${booking.date} foi ${
            booking.approved ? 'APROVADA' : 'REJEITADA'
          }`
        );
      });
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storageTechs => {
      const techArrays = storageTechs.split(',').map(tech => tech.trim());
      setTechs(techArrays);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <ScrollView>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
      <TouchableOpacity
              style={[styles.button, styles.logoutButton]}
              onPress={() => handleLogout()}
            >
              <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 30,
  },
  button: {
    height: 32,
    marginHorizontal: 30,
    marginBottom: 5,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 15,
  },

  logoutButton: {
    borderRadius: 8,
    marginBottom: 10
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

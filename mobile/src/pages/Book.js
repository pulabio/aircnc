import React, { useState } from 'react';
import {
  AsyncStorage,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import api from '../services/api';

export default function Book({ navigation }) {
  const [date, setDate] = useState('');
  const spotId = navigation.getParam('spotId');

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user');

    await api.post(
      `/spots/${spotId}/bookings`,
      {
        date,
      },
      {
        headers: { user_id },
      }
    );
    Alert.alert('Solicitação de reserva enviada');
    navigation.navigate('List');
  }

  function handleCancel() {
    navigation.navigate('List');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Data de interesse:</Text>
      <TextInput
        style={styles.input}
        placeholder="Qual data você quer reservar?"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={setDate}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>Solicitar reserva</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.cancelButton]}
        onPress={() => handleCancel()}
      >
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },

  label: {
    marginTop: 30,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },

  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  cancelButton: {
    marginTop: 10,
    backgroundColor: '#ccc',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const isSelesai = status === 'selesai';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {title}
      </Text>

      <View
        style={[
          styles.badge,
          {
            backgroundColor: isSelesai ? '#DCFCE7' : '#FFEDD5'
          }
        ]}
      >
        <Text
          style={{
            color: isSelesai ? '#15803D' : '#C2410C',
            fontWeight: 'bold'
          }}
        >
          {status}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>
          Lihat Detail
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1F2937'
  },

  badge: {
    padding: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 15
  },

  button: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});

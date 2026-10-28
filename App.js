
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Alert,
  SafeAreaView,
  TextInput,
  FlatList,
  ScrollView
} from 'react-native';

import InfoCard from './src/components/InfoCard';

// DATA MAHASISWA
const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' }
];

// FUNGSI TOMBOL LIHAT DETAIL
const showDetail = (message) => {
  if (Platform.OS === 'web') {
    window.alert(message);
  } else {
    Alert.alert('Detail Aktivitas', message);
  }
};

export default function App() {

  // STATE PENCARIAN
  const [keyword, setKeyword] = useState('');

  // FILTER NAMA MAHASISWA
  const filteredMahasiswa = DAFTAR_MAHASISWA.filter(
    (item) =>
      item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >

        {/* JUDUL APLIKASI */}
        <Text style={styles.heading}>
          UTS Pemrograman Mobile
        </Text>

        {/* SOAL 1 - INFO CARD */}
        <Text style={styles.subheading}>
          Daftar Aktivitas
        </Text>

        {/* KARTU PERTAMA */}
        <InfoCard
          title="Mengerjakan Tugas React Native"
          status="selesai"
          onPress={() =>
            showDetail('Tugas React Native sudah selesai.')
          }
        />

        {/* KARTU KEDUA */}
        <InfoCard
          title="Membuat Aplikasi Mobile"
          status="proses"
          onPress={() =>
            showDetail('Aplikasi mobile sedang dalam proses.')
          }
        />

        {/* SOAL 2 - PENCARIAN MAHASISWA */}
        <Text style={styles.subheading}>
          Daftar Mahasiswa
        </Text>

        {/* INPUT PENCARIAN */}
        <TextInput
          style={styles.searchInput}
          placeholder="Cari nama mahasiswa..."
          placeholderTextColor="#9CA3AF"
          value={keyword}
          onChangeText={setKeyword}
        />

        {/* DAFTAR MAHASISWA */}
        <FlatList
          data={filteredMahasiswa}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.studentCard}>
              <Text style={styles.studentName}>
                {item.nama}
              </Text>

              <Text style={styles.studentProdi}>
                {item.prodi}
              </Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              Data tidak ditemukan!
            </Text>
          }
        />

      </ScrollView>
    </SafeAreaView>
  );
}

// STYLING APLIKASI
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6'
  },

  content: {
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 20
  },

  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    marginTop: 15,
    marginBottom: 15
  },

  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    color: '#1F2937'
  },

  studentCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2
  },

  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 5
  },

  studentProdi: {
    fontSize: 14,
    color: '#6B7280'
  },

  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#EF4444',
    marginTop: 20
  }
});

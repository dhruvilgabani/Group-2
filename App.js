import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Team Members</Text>
      <View style={styles.card}>
        <Text style={styles.name}>Dhruvil Gabani</Text>
        <Text style={styles.role}>Graphics Designer</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.name}>Arshleen Kaur</Text>
        <Text style={styles.role}>Web Developer</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98C1D9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#3D5A80',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#E0FBFC',
  },
  role: {
    fontSize: 16,
    color: '#E0FBFC',
    marginTop: 5,
  },
});


import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';
import { Menu } from '../../components/Menu';

const Home = () => {
  return(
    <View style={styles.container}>
      <Menu />
      <Text style={styles.text}>Bota uma cor ai caralho</Text>
      <StatusBar style="auto" />
    </View>
    )
}

export default Home;
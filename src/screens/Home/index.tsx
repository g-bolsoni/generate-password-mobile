import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './styles';

import { BatLogo } from '../../components/BatLogo';
import { BatButton } from '../../components/BatButton';

const Home = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      <View style={styles.inputContainer}>
        <BatButton />
      </View>

      <StatusBar style="light" />
    </View>
  )
}

export default Home;
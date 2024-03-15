import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './styles';
import { BatLogo } from '../../components/BatLogo';
import { BatTextInput } from '../../components/BatTextInput';

const Home = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      <View style={styles.inputContainer}>
        <BatTextInput />
      </View>

      <StatusBar style="light" />
    </View>
  )
}

export default Home;
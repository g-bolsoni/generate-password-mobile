import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#3e3e3e',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: "100%",
    overflow: 'hidden'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#4d4d4d',
    marginBottom: 60,
    borderColor: '#3e3e3e',
    borderWidth: 2,
    borderRadius: 12
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;
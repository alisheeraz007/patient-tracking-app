import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Provider } from 'react-redux'
import store from './store'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import Loader from './Components/loader/loader';
import SignIn from './Components/signIn';
import { Button } from 'native-base';
import SignUp from './Components/signUp';

const Login = () => {
  return (
    <Button
      style={{ height: 30, backgroundColor: "transparent", width: 60, marginRight: 10 }}
      onPress={()=>Actions.signUp()}
    >
      <Text style={{ color: "white", width: "100%", textAlign: "center" }}>Register</Text>
    </Button>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loader: true
    }
  }

  UNSAFE_componentWillMount() {
    setTimeout(() => {
      this.setState({
        loader: false
      })
    }, 1000)
  }

  render() {
    return (
      <>
        {this.state.loader ?
          <Loader />
          :
          <Provider store={store}>
            <Router>
              <Stack navigationBarStyle={{ backgroundColor: "rgb(20, 52, 156)" }} titleStyle={{ color: "white"}} tintColor="white">
                <Scene tabs={true} key="/" component={SignIn} title="Patiant Tracking App" renderRightButton={Login} init />
                <Scene key="signUp" component={SignUp} title="Patiant Tracking App" />
              </Stack>
            </Router>
          </Provider>
        }
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

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
import { Router, Stack, Scene } from 'react-native-router-flux';
import Loader from './Components/loader/loader';

const abc = () => {
  return (
    <View>

    </View>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loader: true
    }
  }

  UNSAFE_componentWillMount(){
    setTimeout(()=>{
      this.setState({
        loader: false
      })
    },3000)
  }

  render() {
    return (
      <>
        {this.state.loader ?
          <Loader />
          :
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>

            <Provider store={store}>
              <Router>
                <Stack navigationBarStyle={{ backgroundColor: "rgba(0,0,0,0.5)" }} titleStyle={{ color: "white", textAlign: "center", }}>
                  <Scene key="userForm" component={abc} title="User Entry Form" init />
                </Stack>
              </Router>
            </Provider>
          </ScrollView>
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

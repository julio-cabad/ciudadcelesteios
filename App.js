/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';
import type {Node} from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  StyleSheet, StatusBar,
} from 'react-native';

import {CreateTable} from './src/database/Schemas';
import {RNCamera} from 'react-native-camera';
import {StoreProvider} from './src/store/Provider';
import Toast from 'react-native-toast-message';
import NavigationApp from './src/components/routes/Navigation';

const App: () => Node = () => {

  useEffect(() => {
    let isMounted = true;

    const createTables = async () => {
      await CreateTable();
    };

    isMounted && createTables().catch(() => {
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const [state, setState] = useState({type: RNCamera.Constants.Type.front});

  return (
      <StoreProvider>
        <View style={{flex: 1}}>
          <StatusBar  hidden={true}/>
          <NavigationApp/>
          <Toast ref={(ref) => Toast.setRef(ref)}/>
        </View>
      </StoreProvider>
  );
};


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    position: 'relative',
    zIndex: 999,
  },

  preview: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    zIndex: 999,
  },

  avatar: {
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1000,
    top: 10,
    left: 5,
    width: 80,
    height: 80,
    borderRadius: 40,

  },

  topButtons: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'flex-start',
    position: 'absolute',
    zIndex: 1000,
    right: 10
  },
  bottomButtons: {
    flex: 1,
    width: Dimensions.get('window').width,

    alignItems: 'center',
    position: 'absolute',
    zIndex: 1000,
    bottom: 0,
    marginLeft: 50
  },

  flipButton: {
    flex: 1,
    marginTop: 20,
    right: 20,
    alignSelf: 'flex-end',
  },
  recordingButton: {
    marginBottom: 10,
  },
});

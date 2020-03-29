import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
//import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container,Content, Card, CardHeader, CardFooter, CardContent, Title, Description, Annotation} from './styles';

import Tabs from '~/components/Tabs/index';
import Menu from '~/components/Menu/index';
import personadd from '~/assets/person_add_white_27x27.png';
import logo from '~/assets/Nubank_Logo.png';
import arrow from '~/assets/keyboard_arrow_down_white_27x27.png';
import attachmoney from '~/assets/attach_money_grey_27x27.png';
import visibilityoff from '~/assets/visibility_off_grey_27x27.png';


export default function Main(){
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true }
  )
  function onHandlerStateChange(event){
    if (event.nativeEvent.oldState == State.ACTIVE){
      let opened =false;
      const{ translationY } = event.nativeEvent;
      offset += translationY;
      
      if(translationY >= 50){
        opened = true;
      }else{
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(()=>{
        offset = opened ? 380 :0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });

    }
  }

  return (
    <Container>
    
      <View style={styles.header}>
        <View style={styles.toper}>
          <Image source={logo}/>
          <Text style={styles.titler}>Natan</Text>
        </View>
        <TouchableOpacity>
          <Image source={arrow}/>
        </TouchableOpacity>
      </View>

      
      <Content>
        <Menu translateY={translateY}/>
        <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350,0,380],
                outputRange: [-20, 0 ,380],
                extrapolate: 'clamp',
              }),
            }]
          }}>
            <CardHeader>
              <Image source={attachmoney}/>
              <Image source={visibilityoff}/>
            </CardHeader>
            <CardContent>
              <Title>Saldo disponivel</Title>
              <Description>R$ 1.000.000,00</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia de R$20,00 de Natan Bezerra de Miranda HOJE às 06:00h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY}/> 
    
    </Container>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8B10AE',
    },
    header:{
      alignItems: 'center',
      //justifyContent: 'center',
      paddingLeft: 20,
      paddingTop: 40,
      paddingEnd: 30,
    },
    toper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    titler: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      marginLeft: 8
    },
    sounou: {
      flexDirection: 'row',
    }
});
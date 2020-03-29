import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    View,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Animated
  } from 'react-native';
import {Container, TabItem,TabText,TabsContainer} from './styles';
import personadd from '~/assets/person_add_white_24x24.png';
import sounou from '~/assets/chat_bubble_outline_white_24x24.png';
import depositar from '~/assets/arrow_downward_white_24x24.png';
import transf from '~/assets/arrow_upward_white_24x24.png';
import lock from '~/assets/lock_outline_white_24x24.png';



export default function Tabs({ translateY }){
    return(
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange:[0, 50],
                    extrapolate: 'clamp',
                }),
            }],
            opacity: translateY.interpolate({
                inputRange: [0,380],
                outputRange: [1, 0.2],
                extrapolate: 'clamp',
            }),
        }}>
            <TabsContainer>
                <TouchableOpacity>
                    <TabItem>
                        <Image source={personadd}/>
                        <TabText>Indicar Amigos</TabText>
                    </TabItem>
                </TouchableOpacity>
                <TouchableOpacity>
                    <TabItem>
                        <Image source={sounou}/>
                        <TabText>Cobrar</TabText>
                    </TabItem>
                </TouchableOpacity>
                <TouchableOpacity>
                    <TabItem>
                        <Image source={depositar}/>
                        <TabText>Depositar</TabText>
                    </TabItem>
                </TouchableOpacity>
                <TouchableOpacity>
                    <TabItem>
                        <Image source={transf}/>
                        <TabText>Transferir</TabText>
                    </TabItem>
                </TouchableOpacity>
                <TouchableOpacity>
                    <TabItem>
                        <Image source={lock}/>
                        <TabText>Bloquear Cartão</TabText>
                    </TabItem>
                </TouchableOpacity>
            </TabsContainer>
        </Container>
    );
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#612F74',
//     },
// });
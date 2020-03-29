import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Code, Nav, NavItem, NavText, SingOutButton, SingOutButtonText } from './styles.js';


import code from '~/assets/sounou2.png';
import help from '~/assets/help_outline_white_18x18.png';
import person from '~/assets/person_outline_white_18x18.png';
import card from '~/assets/credit_card_white_18x18.png';
import smart from '~/assets/smartphone_white_18x18.png';


export default function Menu( {translateY} ){
    return(
        
        <Container style={{
            opacity: translateY.interpolate({
              inputRange: [0, 150],
              outputRange: [0, 1],
            }),
          }}
        
        >
            <Code>
                <Image  source={code}/>
            </Code>
            <Nav>
                <NavItem>
                    <TouchableOpacity style={styles.bot}>
                        <Image source={help}/>
                        <NavText>Me ajude</NavText>
                    </TouchableOpacity>
                </NavItem> 
                <NavItem>
                    <TouchableOpacity style={styles.bot}>
                        <Image source={person}/>
                        <NavText>Perfil</NavText>
                    </TouchableOpacity>
                </NavItem>
                <NavItem>
                    <TouchableOpacity style={styles.bot}>
                        <Image source={card}/>
                        <NavText>Configurar Cartão</NavText>
                    </TouchableOpacity>
                </NavItem>
                <NavItem>
                    <TouchableOpacity style={styles.bot}>
                        <Image source={smart}/>
                        <NavText>Configurações do App</NavText>
                    </TouchableOpacity>
                </NavItem>
            </Nav>
            <SingOutButton onPress={() =>{}}>
                <SingOutButtonText>Sair do APP</SingOutButtonText>
            </SingOutButton>
        </Container>
    );
}

const styles = StyleSheet.create({
    bot: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
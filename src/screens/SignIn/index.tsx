import React from 'react';
import { memo } from 'react';
import { View, Text, Image } from 'react-native';
import style from './style';
import Illustration from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';

const SignIn = () => {
    const navigation = useNavigation();

    const handleSignIn = () => {
        navigation.navigate('Home');
    }

    return (
        <Background>
            <View style={style.container}>
                <Image source={Illustration} style={style.image} resizeMode='stretch' />
                
                <View style={style.content}>
                    <Text style={style.title}>
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas {'\n'}
                    </Text>

                    <Text style={style.subTitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Text>

                    <ButtonIcon
                        title="Entrar com Discord"
                        onPress={handleSignIn}
                        />
                </View>
            </View>
        </Background>
	);
}
export default memo(SignIn);
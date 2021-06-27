import React from 'react';
import { memo } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import style from './style';
import Illustration from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';
import { ActivityIndicator } from 'react-native';

const SignIn = () => {

    const { loading, signIn } = useAuth();

    async function handleSignIn(){
        try {
            await signIn();
        } catch (error) {
            Alert.alert( error );
        }
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

                    { 
                        loading ? <ActivityIndicator color={theme.colors.primary}/>
                        :
                        <ButtonIcon
                            title="Entrar com Discord"
                            onPress={handleSignIn}
                        />
                    }
                </View>
            </View>
        </Background>
	);
}
export default memo(SignIn);
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import Header from '../../components/Header';
import style from './style';
import { Fontisto } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { ImageBackground } from 'react-native';
import BannerImg from '../../assets/banner.png';
import ListHeader from '../../components/ListHeader';
import Member from '../../components/Member'; 
import ListDivider from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';


const AppointmentDetails = () => {
    const members = [
        {
            id: '1',
            username: 'João',
            avatarUrl: 'https://instagram.fgyn18-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73387412_774779042984351_3504585325173276672_n.jpg?tp=1&_nc_ht=instagram.fgyn18-1.fna.fbcdn.net&_nc_ohc=SBkFdiskdUQAX_zUhrG&edm=ABfd0MgBAAAA&ccb=7-4&oh=be0c164035a442b6d673bcbdf61d278f&oe=60D95677&_nc_sid=7bff83',
            status: 'online',
        },
        {
            id: '2',
            username: 'João',
            avatarUrl: 'https://instagram.fgyn18-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73387412_774779042984351_3504585325173276672_n.jpg?tp=1&_nc_ht=instagram.fgyn18-1.fna.fbcdn.net&_nc_ohc=SBkFdiskdUQAX_zUhrG&edm=ABfd0MgBAAAA&ccb=7-4&oh=be0c164035a442b6d673bcbdf61d278f&oe=60D95677&_nc_sid=7bff83',
            status: 'online',
        },
        {
            id: '3',
            username: 'João',
            avatarUrl: 'https://instagram.fgyn18-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73387412_774779042984351_3504585325173276672_n.jpg?tp=1&_nc_ht=instagram.fgyn18-1.fna.fbcdn.net&_nc_ohc=SBkFdiskdUQAX_zUhrG&edm=ABfd0MgBAAAA&ccb=7-4&oh=be0c164035a442b6d673bcbdf61d278f&oe=60D95677&_nc_sid=7bff83',
            status: 'online',
        },
    ]

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton
                    style={{backgroundColor: 'yellow'}}
                    >
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            
            <ImageBackground
                source={BannerImg}
                style={style.banner}
            >
                <View style={style.bannerContent}>
                    <Text style={style.title}>
                        Lendarios
                    </Text>

                    <Text style={style.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered/>}
                style={style.members}
            />

            <View style={style.footer}>
                <ButtonIcon title="Entrat na partida" />
            </View>

        </Background>
    );
}
export default AppointmentDetails;
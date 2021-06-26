import React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import CategorySelect from '../../components/CategorySelect';
import Header from '../../components/Header';
import style from './style';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import GuildIcon from '../../components/GuildIcon';
import SmallInput from '../../components/SmallInput';
import TextArea from '../../components/TextArea';
import { Button } from '../../components/Button';
import Guilds from '../Guilds';
import { GuildProps } from '../../components/Guild';
import ModalView from '../../components/ModalView';

const AppointmentCreate = () => {

    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    function handleOpenGuilds(){
        setOpenGuildsModal(true);
    }
    
    function handleGuildSelect(guildSelected: GuildProps){
        setGuild(guildSelected);
        setOpenGuildsModal(false);
    }

    return (
        <KeyboardAvoidingView
            style={style.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={20}
        >
            <ScrollView>
                <Header
                    title="Agendar Partida"
                    />

                <Text style={[
                    style.label, 
                    { marginLeft: 24, marginTop: 36, marginBottom: 18 }
                ]}>
                    Categoria
                </Text>

                <CategorySelect
                    hasCheckBox
                    setCategory={setCategory}
                    categorySelected={category}
                    />

                <View style={style.form}>
                    <RectButton onPress={handleOpenGuilds}>
                        <View style={style.select}>

                            {
                                guild.icon
                                ? <GuildIcon/>
                                : <View style={style.image}/>
                            }

                            <View style={style.selectBody}>
                                <Text style={style.label}>
                                    { guild.name ? guild.name : 'Selecione um servidor' }
                                </Text>
                            </View>

                            <Feather
                                name="chevron-right"
                                color={theme.colors.heading}
                                size={18}
                                />
                        </View>
                    </RectButton>

                    <View style={style.field}>
                        <View>
                            <Text style={style.label}>
                                Dia e mês
                            </Text>

                            <View style={style.column}>
                                <SmallInput maxLength={2} />
                                <Text style={style.divider}>
                                    /
                                </Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>
                        
                        <View>
                            <Text style={style.label}>
                                Hora e minuto
                            </Text>

                            <View style={style.column}>
                                <SmallInput maxLength={2} />
                                <Text style={style.divider}>
                                    :
                                </Text>
                                <SmallInput maxLength={2} />
                            </View>
                        </View>
                    </View>

                    <View style={[style.field, { marginBottom: 12}]}>
                        <Text style={style.label}>
                            Descrição
                        </Text>
                        
                        <Text style={style.caracteresLimit}>
                            Max 100 caracteres
                        </Text>
                    </View>

                    <TextArea
                        multiline
                        maxLength={100}
                        numberOfLines={5}
                        autoCorrect={false}
                    />

                    <View style={style.footer}>
                        <Button title='Agendar'/>
                    </View>

                </View>
            </ScrollView>

            <ModalView
                visible={openGuildsModal}
            >
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>

        </KeyboardAvoidingView>
    );
}
export default AppointmentCreate;
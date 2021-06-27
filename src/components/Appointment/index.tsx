import React from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';
import style from './style';
import GuildIcon from '../GuildIcon';
import { Text } from 'react-native';
import { categories } from '../../utils/categories';
import PlayerSvg from '../../assets/player.svg';
import { theme } from '../../global/styles/theme';
import CalendarSvg from '../../assets/calendar.svg';
import { GuildProps } from '../Guild';
import { LinearGradient } from 'expo-linear-gradient';

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentProps;
}

const Appointment = ({ data, ...rest}: Props) => {
    const [category] = categories.filter(item => item.id === data.category);
    const { owner } = data.guild;
    const { primary, on, secondary50, secondary70 } = theme.colors;

    return (
        <RectButton {...rest}>
            <View style={style.container}>
                <LinearGradient
                    style={style.guildIconContainer}
                    colors={[secondary50, secondary70]}
                >
                    <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
                </LinearGradient>

                <View style={style.content}>
                    <View style={style.header}>
                        <Text style={style.title}>
                            { data.guild.name }
                        </Text>

                        <Text style={style.category}>
                            { category.title }
                        </Text>
                    </View>

                    <View style={style.footer}>
                        <View style={style.dateInfo}>
                            <CalendarSvg />

                            <Text style={style.date}>
                                { data.date }
                            </Text>
                        </View>

                        <View style={style.playersInfo}>
                            <PlayerSvg fill={ owner ? primary : on } />

                            <Text style={[
                                style.player,
                                { color: owner ? primary : on }
                            ]}>
                                { owner ? 'Anfitrião' : 'Visitante' }
                            </Text>
                        </View>
                    </View>

                </View>
            </View>
        </RectButton>

    );
}
export default Appointment;
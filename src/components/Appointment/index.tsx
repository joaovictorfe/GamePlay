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

export type GuildProps = {
    id: string;
    name: string;
    icon: null;
    ownoer: boolean;
}

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
    const { ownoer } = data.guild;
    const { primary, on } = theme.colors;

    return (
        <RectButton {...rest}>
            <View style={style.container}>
                <GuildIcon />

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
                            <PlayerSvg fill={ ownoer ? primary : on } />

                            <Text style={[
                                style.player,
                                { color: ownoer ? primary : on }
                            ]}>
                                { ownoer ? 'Anfitrião' : 'Visitante' }
                            </Text>
                        </View>
                    </View>

                </View>
            </View>
        </RectButton>

    );
}
export default Appointment;
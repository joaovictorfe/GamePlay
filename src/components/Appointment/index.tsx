import React from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';
import style from './style';

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
    return (
        <RectButton {...rest}>
            <View style={style.container}>
                {/* <GuildIcon /> */}
            </View>
        </RectButton>

    );
}
export default Appointment;
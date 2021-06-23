import React from 'react';
import {
    Text,
    Image,
    View,
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import DiscordImg from '../../assets/discord.png';
import style from './style';

type Props = RectButtonProps & {
    title: string;
}

export function ButtonIcon({ title, ...rest } : Props) {
    return(
        <RectButton
            style={style.container}
            {...rest}
        >
            <View style={style.iconWrapper} >
                <Image source={DiscordImg} style={style.icon} />
            </View>

            <Text style={style.title} >
                {title}
            </Text>
        </RectButton>
    );
}
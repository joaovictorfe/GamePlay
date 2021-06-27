import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

type Props = {
    title: string;
    subtitle: string;
}

const ListHeader = ({ title, subtitle }: Props) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                {title}
            </Text>

            <Text style={style.suntitle}>
                {subtitle}
            </Text>
        </View>
    );
}
export default ListHeader;
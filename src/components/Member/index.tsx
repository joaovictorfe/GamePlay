import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../global/styles/theme';
import Avatar from '../Avatar';
import style from './style';

export type MemberProps = {
    id: string;
    username: string;
    avatarUrl: string;
    status: string;
}

type Props = {
    data: MemberProps;
}

const fc = ({ data }: Props) => {
    const { on, primary } = theme.colors;
    const isOnline = data.status === 'online';

    return (
        <View style={style.container}>
            <Avatar urlImage={data.avatarUrl}/>

            <View>
                <Text style={style.title}>
                    { data.username }
                </Text>

                <View style={style.status}>
                    <View  style={[
                        style.bulletStatus,
                        {
                            backgroundColor: isOnline ? on : primary
                        }
                    ]}
                />

                    <Text style={style.nameStatus}>
                        { isOnline ? 'Disponivel' : 'Ocupado' }
                    </Text>
                </View>
            </View>

        </View>
    );
}
export default fc;
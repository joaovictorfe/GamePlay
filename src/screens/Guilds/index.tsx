import React from 'react';
import { View, FlatList } from 'react-native';
import Guild, { GuildProps } from '../../components/Guild';
import style from './style';
import ListDivider from '../../components/ListDivider';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

const Guilds = ({ handleGuildSelect }: Props) => {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'Image.png',
            owner: true,
        },
        {
            id: '2',
            name: 'Noobs',
            icon: 'Image.png',
            owner: true,
        }
    ];

    return (
        <View style={style.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
                style={style.guilds}
            />
        </View>
    );
}
export default Guilds;
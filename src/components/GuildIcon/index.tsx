import React from 'react';
import { View, Image } from 'react-native';
import style from './style';
import DiscordSvg from '../../assets/discord.svg';

import { CDN_IMAGE } from '../../configs/discrodConfig';

type Props = {
    guildId: string;
    iconId: string | null;
}

const GuildIcon = ({ guildId, iconId }: Props) => {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    return (
        <View style={style.container}>
        {  
            iconId ?    
                <Image 
                    source={{ uri }}
                    style={style.image}
                    resizeMode="cover"    
                />
            :
                <DiscordSvg 
                    width={40} 
                    height={40}
                />
        }
        </View>
    );
}
export default GuildIcon;

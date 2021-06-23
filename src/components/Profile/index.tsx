import React from "react";
import { View, Text } from "react-native";
import { style } from "./style";

import Avatar from "../Avatar";

export function Profile() {
    return (
        <View style={style.container}>
            <Avatar urlImage="https://instagram.fgyn18-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73387412_774779042984351_3504585325173276672_n.jpg?tp=1&_nc_ht=instagram.fgyn18-1.fna.fbcdn.net&_nc_ohc=SBkFdiskdUQAX_zUhrG&edm=ABfd0MgBAAAA&ccb=7-4&oh=be0c164035a442b6d673bcbdf61d278f&oe=60D95677&_nc_sid=7bff83" />
            
            <View>
                <View style={style.user}>
                    <Text style={style.greeting}>
                        Olá,
                    </Text>  

                    <Text style={style.username}>
                        João
                    </Text>
                </View>
                
                <Text style={style.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    )
}
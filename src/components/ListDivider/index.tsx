import React from 'react';
import { View } from 'react-native';
import style from './style';

type Props = {
    isCentered?: boolean;
}

const fc = ({ isCentered }: Props) => {
    return (
        <View
            style={[
                style.container,
                isCentered ? {
                    marginVertical: 12,
                } : {
                    marginTop: 2,
                    marginBottom: 31,
                }
            ]}
        />
    );
}
export default fc;
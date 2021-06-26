import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import style from './style';

const SmallInput = ({...rest}: TextInputProps) => {
    return (
        <TextInput
            style={style.container}
            keyboardType='numeric'
            {...rest}
        />
    );
}
export default SmallInput;
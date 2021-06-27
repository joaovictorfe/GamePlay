import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import style from './style';

const TextArea = ({...rest}: TextInputProps) => {
    return (
        <TextInput
            style={style.container}
            numberOfLines={5}
            {...rest}
        />
    );
}
export default TextArea;
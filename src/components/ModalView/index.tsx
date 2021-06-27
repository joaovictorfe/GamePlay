import React, { ReactNode } from 'react';
import { View, Modal, ModalProps } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Background } from '../Background';
import style from './style';

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

const ModalView = ({ children, closeModal, ...rest }: Props) => {
    return (
        <Modal
            transparent
            animationType='slide'
            statusBarTranslucent
            {...rest}
        >
            {/* <TouchableWithoutFeedback onPress={closeModal}> */}
                <View style={style.overlay}>
                    <View style={style.container}>
                        <Background>
                            <View style={style.bar}/>
                            {children}
                        </Background>
                    </View>
                </View>
            {/* </TouchableWithoutFeedback> */}
        </Modal>
    );
}
export default ModalView;
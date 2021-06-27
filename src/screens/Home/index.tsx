import React, { useCallback, useState } from "react";
import { View, FlatList, Text, AsyncStorage } from "react-native";
import { style } from "./style";

import { Profile } from "../../components/Profile";
import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import ListHeader from '../../components/ListHeader';
import Appointment, { AppointmentProps } from "../../components/Appointment";
import ListDivider from '../../components/ListDivider';
import { Background } from "../../components/Background";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { Load } from "../../components/Load";


export function Home() {
    const navigation = useNavigation();
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
    

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails');
    }

    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate');
    }
    
    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if(category){
            setAppointments(storage.filter(item => item.category === category));
        }else{
            setAppointments(storage)
        }
        
        setLoading(false);
    }

    // useFocusEffect(useCallback(() => {
    //     loadAppointments();
    // },[category]));

    return (
        <Background>
            <View>
                <View style={style.header}>
                    <Profile />
                    <ButtonAdd onPress={handleAppointmentCreate} />
                </View>

                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                    hasCheckBox={true}
                />

                {
                    loading ? <Load/> :
                    <>
                        <ListHeader
                            title="Partidas agendadas"
                            subtitle="Total 6"
                        />

                        <FlatList
                            data={appointments}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Appointment
                                    data={item}                            
                                    onPress={handleAppointmentDetails}
                                />
                                )}
                            ItemSeparatorComponent={() => <ListDivider />}
                            contentContainerStyle={{ paddingBottom: 69 }}
                            style={style.matches}
                            showsVerticalScrollIndicator={false}
                        />
                    </>
                }
            </View>
        </Background>
    )
}
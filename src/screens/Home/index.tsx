import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import Appointment from '../../components/appointment'
import  ButtonAdd  from '../../components/ButtonAdd'
import CategorySelect from '../../components/CategorySelect'
import ListDivider from '../../components/ListDivider'
import { ListHeader } from '../../components/LIstHeader'
import Profile from '../../components/Profile'
import { styles } from './style'
import Background from '../../components/Background'
import { useNavigation } from '@react-navigation/core'

export default function Home() {
    const navigation = useNavigation()
    const [category, setCategory] = useState('')
    const appointments =[
        {
            id: '1',
            guild:{
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 as 20: 40h',
            description: 'É hoje que vamos chegar ao challenger'
        }
    ]
    const handleCategorySelect = (categoryId: string) =>{
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    const handleAppointmentDetails = () =>{
        navigation.navigate("AppointmentDetails")
    }
    const handleAppointmentCreate = () =>{
        navigation.navigate("AppointmentCreate")
    }
    return (
        <Background>
                <View style={styles.container}>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd onPress={()=>{handleAppointmentCreate()}}/>
                </View>
            
                    <CategorySelect
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                    />
            
                <ListHeader title="Partidas agendadas" subtitle="Total 6"/>

                <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                        <Appointment 
                         onPress={handleAppointmentDetails}
                         data={item}/>
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 69}}
                    />
            </View>
        </Background>
    )
}
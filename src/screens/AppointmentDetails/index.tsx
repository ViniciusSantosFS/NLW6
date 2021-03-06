import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { BorderlessButton, FlatList } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'
import Background from '../../components/Background'
import Header from '../../components/Header'
import { theme } from '../../global/styles/theme'
import bannerImg from '../../assets/banner.png'
import { styles } from './style'
import { ListHeader } from '../../components/LIstHeader'
import Member from '../../components/Member'
import ListDivider from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'

export default function AppointmentDetails() {
    const members =[
        {
            id: '1',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/Biniti.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Vinicius',
            avatar_url: 'https://github.com/Biniti.png',
            status: 'ofline'
        },
    ]
    return (
        <Background>
           <Header title="Detalhes"
                    action={
                        <BorderlessButton>
                            <Fontisto 
                                name="share"
                                size={24}
                                color={theme.colors.primary}
                            />
                        </BorderlessButton>
                    }
           />

           <ImageBackground source={bannerImg} style={styles.banner}>
               <View style={styles.bannerContent}>
               <Text style={styles.title}> Lendários </Text>
               <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
               </View>
           </ImageBackground>
           <ListHeader title="Jogadores" subtitle="Total 3"/>
            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item}) =>(
                    <Member data={item}/>
                )}
                ItemSeparatorComponent={()=> <ListDivider isCentered/> }
                style={styles.members}    
            />
            <View style={styles.footer}>
            <ButtonIcon title="Entrar na partida"/>
            </View>
        </Background>
    )
}


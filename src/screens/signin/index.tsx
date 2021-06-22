import React from 'react'
import { View, 
        Text,
        Image,
        StatusBar, 
} from 'react-native'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { styles } from './style'

export default function SignIn(){
    const title="Entrar com Discord"
    return(
        <View style={styles.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Image 
            source={IllustrationImg} 
            style={styles.img}
            resizeMode="stretch"/>

            <View style={styles.content}>
                <Text style={styles.title}>
                Organize {'\n'}
                suas jogatinas {'\n'} 
                facilmente
                </Text>

                <Text style={styles.subtitle}>
                Crie grupos para jogar seus games{'\n'}
                favoritos com seus amigos
                </Text>
                <ButtonIcon 
                title={title}
                activeOpacity={0.7}
                />
            </View>
        </View>
    )
}
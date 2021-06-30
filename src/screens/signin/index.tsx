import React from 'react'
import { View, 
        Text,
        Image,
        Alert,
        ActivityIndicator
} from 'react-native'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { styles } from './style'
import Background from '../../components/Background'
import { useAuth } from '../../hooks/auth'
import { theme } from '../../global/styles/theme'

export default function SignIn(){
    const { user, signIn, loading } = useAuth()
    const handleSignIn = async () =>{
        try{
            await signIn()
        }catch(error){
            Alert.alert(error)
        }
    }
    console.log(user)
    return(
        <Background>
                <View style={styles.container}>
                <Image 
                source={IllustrationImg} 
                style={styles.img}
                resizeMode="stretch"/>

                <View style={styles.content}>
                    <Text style={styles.title}>
                    Conecte-se{'\n'}
                    e organize suas{'\n'}
                    jogatinas {'\n'} 
                    </Text>
                    <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{'\n'}
                    favoritos com seus amigos
                    </Text>
                    {
                        loading ? <ActivityIndicator color={theme.colors.primary}/>
                            :
                        <ButtonIcon 
                        title="Entrar com Discord"
                        onPress={handleSignIn}
                        />
                    }
                </View>
            </View>
        </Background>
    )
}
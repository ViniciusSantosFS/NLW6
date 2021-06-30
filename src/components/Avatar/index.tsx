import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Image } from 'react-native'
import { theme } from '../../global/styles/theme'
import { styles } from './style'

type Props ={
    urlImage: string
}

export default function Avatar({urlImage}: Props){
    const { secondary50, secondary70 } = theme.colors

    return(
        <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
        >
            <Image 
             source={{ uri: urlImage }}
             style={styles.avatar}
            />
        </LinearGradient>
    )
}
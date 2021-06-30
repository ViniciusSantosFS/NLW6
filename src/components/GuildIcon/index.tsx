import React from 'react'
import { View, Image } from 'react-native'
import  DiscordSvg  from '../../assets/discord.svg' 
import { styles } from './style'
const { CDN_IMAGE } = process.env
type Props ={
    guildId: string
    iconId: string

}

export default function GuildIcon({guildId,iconId}: Props){
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`
    
    return(
        <View style={styles.container}>
        {
            iconId ?
            <Image 
            source={{ uri }}
        style={styles.image}
        resizeMode="cover"
        />
        :
            <DiscordSvg width={40} height={40}/>
        }
       </View>
    )
}
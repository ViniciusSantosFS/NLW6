import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import Guild, { GuildProps } from '../../components/Guild'
import ListDivider from '../../components/ListDivider'
import Load  from '../../components/Load'
import { api } from '../../services/api'

import { styles } from './style'

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export default function Guilds({handleGuildSelect}: Props) {
    const [guilds, setGuilds] = useState<GuildProps[]>([])
    const [loading, setLoading] = useState(true)
    
    const fetchGuilds = async () =>{
        const response = await api.get('/users/@me/guilds')
        setGuilds(response.data)
        setLoading(false)
    }

    useEffect(() =>{
        fetchGuilds()
    })

    return (
        <View style={styles.container}>
            {
                loading ? <Load /> :
                <FlatList 
                data={guilds}
                keyExtractor={item=>item.id}
                renderItem={({item})=>(
                    <Guild 
                    data={item}
                    onPress={() =>handleGuildSelect(item)}
                    />
                    
                )}
                ListHeaderComponent={() => <ListDivider isCentered/>}
                ItemSeparatorComponent={()=> <ListDivider isCentered/> }
                showsVerticalScrollIndicator={false}
                style={styles.guilds}
                contentContainerStyle={{paddingBottom:68, paddingTop: 103}}
                />
            }
        </View>
    )
}

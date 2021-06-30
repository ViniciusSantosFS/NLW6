import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { styles } from './style'
export default function SmallInput({...rest}: TextInputProps) {
    return (
        <TextInput
           keyboardType="numeric"
           style={styles.container} 
        />
    )
}

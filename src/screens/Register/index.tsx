import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert } from 'react-native';
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { ButtonInterface } from '../../components/ButtonInterface';
import { LoginTypes } from '../../navigation/login.navigation';
import { apiUser } from '../../services/data';
import { AxiosError } from 'axios';
import { useAuth } from '../../hook/auth';

export interface IRegister {
    name?: string
    email?: string
    password?: string
}

export interface IError {
    errors: {
        rule: string
        field: string
        message: string
    }[]
}
export function Register({ navigation }: LoginTypes) {
    const [data, setData] = useState<IRegister>();
    const { setLoading } = useAuth()
    async function handleRegister() {
        if (data?.email && data.name && data.password) {
            setLoading(true)
        try {
            const response = await apiUser.register(data)
            Alert.alert('${response.data.name} cadastrado!!!')
            navigation.navigate("Login")
            console.log(data)
        } catch (error) {
            console.log(error)
            const err = error as AxiosError
            const msg = err.response?.data as IError
            Alert.alert(msg.errors.reduce((total, atual) => total + atual.message, ''))
        }
        setLoading(false)
    } else {
        Alert.alert("Preencha todos os campos!!!");
    }
}
}
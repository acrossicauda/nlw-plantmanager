import React, { useState } from 'react';
import {
    SafeAreaView, StyleSheet, Text, View, TextInput, KeyboardAvoidingView,
    TouchableWithoutFeedback, Platform, Keyboard
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export function UserIdentification() {
    const navigation = useNavigation();

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    // const [isTrocaEmoji, setTrocaEmoji] = useState(false);

    function handleInputBlur() {
        setIsFocused(false);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    function handleSubmit() {
        navigation.navigate('Confirmation');
    }
    /* function handleInputLoad() {
         const trocaEmoji = isTrocaEmoji ? false : true;
         setInterval(() => { setTrocaEmoji(trocaEmoji)}, 10000);
    } */
    // handleInputLoad();
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>

                                <Text style={styles.emoji}>
                                    {/* { isFilled ? (isTrocaEmoji ? '😛' : '😝') : '😄' }  */}
                                    {isFilled ? '😊' : '😄'}
                                </Text>
                                <Text style={styles.title}>
                                    Como podemos {'\n'}chamar você?
                                </Text>

                            </View>

                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && { borderColor: colors.green }
                                ]}
                                placeholder="Digite um nome"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />

                            <View style={styles.footer}>
                                <Button
                                    title="Confirmar"
                                    onPress={handleSubmit}
                                />
                            </View>

                        </View>
                    </View>
                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20,
    }
});
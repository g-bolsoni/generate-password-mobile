import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './styles';
import { BatTextInput } from '../BatTextInput';
import generatePassword from '../../services/generatePassword';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
    const [pass, setPass] = useState('');

    const handleGeneratePassword = async () => {
        const password = await generatePassword();
        setPass(password);
    };

    const handleCopyPassword = async () => {
        if (pass.length == 0) return;
        Clipboard.setStringAsync(pass);
    };

    return (
        <>
            <BatTextInput
                password={pass}
            />

            <Pressable style={styles.button} onPress={handleGeneratePassword} >
                <Text style={styles.buttonText} >
                    ⚡ Generate
                </Text>
            </Pressable>

            <Pressable style={pass.length == 0 ? styles.buttonDisabled : styles.button} onPress={handleCopyPassword} disabled={pass.length === 0} >
                <Text style={styles.buttonText} >
                    ⚡ Copy
                </Text>
            </Pressable >
        </>
    );
}
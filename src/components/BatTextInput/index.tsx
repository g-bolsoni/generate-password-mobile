import { Button, TextInput, Alert } from 'react-native';

import { styles } from './styles';

export function BatTextInput() {

    return (
        <>
            <TextInput
                style={styles.input}
                placeholder="Password"
            />

        </>
    );
}
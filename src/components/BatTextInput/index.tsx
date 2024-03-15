import { TextInput } from 'react-native';

import { styles } from './styles';
interface IBatTextInput {
    password: string;
}
export function BatTextInput(props: IBatTextInput) {

    return (
        <>
            <TextInput
                style={styles.input}
                placeholder="Password"
                readOnly
                value={props.password}
            />

        </>
    );
}
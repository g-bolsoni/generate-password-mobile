import React from 'react';
import { Text, Image } from 'react-native';

import { styles } from './styles';
import batLogo from '../../../assets/bat-logo.png'

export function BatLogo() {
    return (
        <>
            <Text style={styles.title}>Bat Pass generator</Text>
            <Image
                source={batLogo}
                style={styles.image}
            />
        </>
    );
}
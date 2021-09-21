import * as React from 'react';
import { Text, View, Image } from 'react-native';

export default function CharacterCard({ image, name }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={image}
            />
            <Text style={styles.font}>{name}</Text>
        </View>
    );
}
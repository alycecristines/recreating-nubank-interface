import React from 'react';
import QRcode from 'react-native-qrcode';

import { Container, Code } from './styles';

export default function Menu() {
    return (
        <Container>
            <Code>
                <QRcode
                    value="https://www.google.com"
                    size={80}
                    bgColor="#FFF"
                    fgColor="#8B10AE"
                />
            </Code>
        </Container>
    );
}
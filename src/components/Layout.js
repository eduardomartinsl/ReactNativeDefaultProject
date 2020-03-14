import React from 'react'
import {} from 'react-native'
import styled from 'styled-components/native'

export const Col = styled.View`
    justify-content: center;
    flex-direction: column;
`

export const Row = styled.View`
    justify-content: center;
    flex-direction: row;
`

export const Container = styled(SafeAreaView)`
    flex: 1;
    flex-direction: column;
`
import React from 'react'
import {} from 'react-native'
import styled from 'styled-components/native'

//https://styled-components.com/docs/basics#getting-started

export const Col = styled.View`
    justify-content: center;
    flex-direction: column;
`

export const Row = styled.View`
    justify-content: center;
    flex-direction: row;
`

//O container é im componente que aplica a área de visão "segura", limitando a componentização somente na parte visível do dispositivo
export const Container = styled(SafeAreaView)`
    flex: 1;
    flex-direction: column;
`
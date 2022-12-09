import React from 'react'
import styled from 'styled-components/macro'
import { Button } from '~styled'
const HeaderButton = styled(Button)`
    min-width: 172px;
    height: 42px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: normal;
    color:#fff;
    background-color: var(--bs-base-primary);
    border-color: var(--bs-base-primary);
    box-shadow:-12px 12px 50px rgb(10 191 188 / 30%);
    border-radius:500px;
    &:hover{
        color:#fff;
        box-shadow:-12px 12px 50px rgb(10 191 188 / 0%);
    }
`
export default HeaderButton
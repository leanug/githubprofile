import React from 'react'
import styled from 'styled-components';

const Loading = () => {
    return (
        <Wrapper>
            <LdsRing>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </LdsRing>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LdsRing = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid var(--clr-alpha);
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: var(--clr-alpha) transparent transparent transparent;
    }

    div:nth-child(1) {
        animation-delay: -0.45s;
    }

    div:nth-child(2) {
        animation-delay: -0.3s;
    }

    div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export default Loading

import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper>
            <span>Built with: </span>
            <a href="https//react.js">React</a>/ 
            <a href="https://developer.github.com/v3/">GitHub API</a> / 
            <a href="https://reactjs.org/docs/context.html">Context API</a> / 
            <a href="https://www.fusioncharts.com/">FusionCharts</a> / 
            <a href="https://www.styled-components.com/">Styled Components</a>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    max-width: var(--max-width);
    margin: auto;
    padding: 1rem;
    text-align: center;
    margin-top: 6rem;

    a {
        font-weight: 700;
        margin: 0 1rem;
    }
`

export default Footer

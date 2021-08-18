import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Followers from './Followers';

const User = () => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Card />
      </Wrapper>
    </section>
  )
};

const Wrapper = styled.div`
 
`;

export default User;

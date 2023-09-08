import styled from 'styled-components';

import bgImage from '../../assets/bgImage.jpg';

export const BackgroundImage = styled('div')`
  background: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  position: relative;
`;

export const Container = styled('div')`
  left: 50%;
  position: absolute;
  top: 40%;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const Title = styled('h1')`
  color: #fff;
  font-size: 80px;
  letter-spacing: 16px;
  margin-bottom: 32px;
  text-transform: uppercase;
`;

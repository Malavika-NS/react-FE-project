import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: absolute;
  top: 20%;
  width: 100%;

  .search-section {
    margin-bottom: 50px;
    text-align: center;

    input[type='text'] {
      width: 500px;
      max-width: 100%;
    }

    h2 {
      color: #2185d0;
      margin-bottom: 30px;
    }

    .example-text {
      color: black;
    }
  }
`;

import styled from 'styled-components';

type ContainerProps = {
  center?: boolean;
  fullSize?: boolean;
}

const Container = styled.div<ContainerProps>`
  ${({ center }) => center ? `
    display: flex;
    align-items: center;
    justify-content: center;
  ` : ''}

  ${({ fullSize }) => fullSize ? `
    height: 100%;
    width: 100%;
  ` : ''}

`;

export default Container;

import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';


type CardContainerProps = {
  coordinates: { x: number, y: number };
  size: { width: number; height: number; };
}

export const CardContainer = styled.div<CardContainerProps>`
  position: absolute;
  top: ${({ coordinates }) => coordinates.x}px;
  left: ${({ coordinates }) => coordinates.y}px;
  width: ${({ size }) => size.width}px;
  width: ${({ size }) => size.height}px;
  overflow: hidden;
`;

export const CardTitle = styled(Typography)<{ _color: string }>`
  background-color: ${({ _color }) => _color};
  margin: 0;
  padding: 0.5rem;
`;

export const SettingsButton = styled.button<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  cursor: pointer;
  outline: none;
  border: none;
  border-bottom-left-radius: 5px;
`;

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;
import { Container } from '..';

export default {
    title: 'Layouts/Container',
    decorators: [],
};

export const NoProps: React.FC = () => (
    <Container style={{ width: 100, height: 100, border: '1px solid red' }}>
        <div>
      Some content
        </div>
    </Container>
);

export const Centered: React.FC = () => (
    <Container center style={{ backgroundColor: 'yellow' }}>
      It is yellow now
    </Container>
);

export const FullSize: React.FC = () => (
    <div style={{ height: '100vh' }}>
        <Container fullSize style={{ backgroundColor: 'blue' }}>
          Im blue Da ba dee da ba di
        </Container>
    </div>
);

export const CenteredFullSize: React.FC = () => (
    <div style={{ height: '100vh' }}>
        <Container fullSize center style={{ backgroundColor: 'green' }}>
          Thats epic man
        </Container>
    </div>
);

export const FullScreen: React.FC = () => (
    <Container fullScreen style={{ backgroundColor: 'black', color: 'white' }}>
          What?
    </Container>
);

export const HalfScreen: React.FC = () => (
    <div style={{ height: '50vh' }}>
        <Container fullSize style={{ backgroundColor: 'blue' }}>
            sthg 
        </Container>
    </div>    
);
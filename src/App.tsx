import { Router, StyleProvider, MobXProvider } from 'providers';

const App: React.FC = () => (
    <MobXProvider>
        <StyleProvider>
            <Router />
        </StyleProvider>
    </MobXProvider> 
);

export default App;

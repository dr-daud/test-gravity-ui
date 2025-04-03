import { ThemeProvider } from '@gravity-ui/uikit';

import Header from './components/header/header';

const App = () => {
    return (
        <ThemeProvider>
            <Header/>
        </ThemeProvider>
    )
};

export default App;

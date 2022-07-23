import 'swiper/swiper.min.css';
import './assets/boxicons-2.1.2/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './config/PrivateRoute';
function App() {
    return (
        
            <BrowserRouter>
            <AuthProvider>
                <Route render={props => (
                    <>
                        <Header {...props}/>
                        <Routes/>
                        <Footer/>
                    </>
                )}/>
            </AuthProvider>
            </BrowserRouter>
        
    );
}

export default App;
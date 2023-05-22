import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Header from './components/Header/Header';
import Management from './components/Management/Management';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';
import TenancyInfo from './components/TenancyInfo/TenancyInfo';


// import { Management } from './pages/Management';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                   
                    <Route path='/Messages' element={<Header/>} />
                    <Route path='/user' element={<Management />} />
                    <Route path='/Settings' element={<Header/>} />
                    <Route path='/PropertyDetails' element={<PropertyDetails/>} />
                    <Route path='/TenancyInfo' element={<TenancyInfo/>} />
                    
                  
                   

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

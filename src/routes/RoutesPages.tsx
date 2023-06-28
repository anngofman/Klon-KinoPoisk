import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout';

const RoutesPages = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default RoutesPages
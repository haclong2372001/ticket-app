import { Route,Routes } from 'react-router'
import NonAuthLayout from '../layouts/NonAuth'
import MainLayout from '../layouts/MainLayouts'
import Login from '../pages/login'
const AppRouter = () =>{
    return(
        <Routes>
            <Route path='/auth' element={<NonAuthLayout/>}>
                <Route path='/auth/login' element={<Login/>}/>
            </Route>
        </Routes>
    )
}
export default AppRouter
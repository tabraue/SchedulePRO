import { createBrowserRouter } from 'react-router-dom'

import SignUp from '../pages/SignUp/SignUp'
import SignUpmui from '../pages/SignUp/SignUpmui'
import Calendar from '../components/Calendar/Calendar'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Calendar/>,
        /*
        errorElement:,
        children:[
            {path: '', element: }
        ]*/
    }
])
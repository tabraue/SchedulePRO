import { createBrowserRouter } from 'react-router-dom'
import Error from '../components/Error/Error'
import Calendar from '../components/Calendar/Calendar'
import SignUp from '../pages/SignUp/SignUp'
import Terms from '../pages/Terms/Terms'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <SignUp/>,
        errorElement: <Error/>,
        children:[
            {path: '/terms', element: <Terms/>}

        ]
    }
])
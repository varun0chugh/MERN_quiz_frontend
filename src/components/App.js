
import '../styles/App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Main from './Main';
import Result from './Result';
import Quiz from './Quiz';
import { CheckUserExist } from './helper/helper';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>
  },
  {
    path:'/quiz',
    element: <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path:'/result',
    element:<Result></Result>
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;

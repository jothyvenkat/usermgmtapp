import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Create from './layout/page/Create';
import Read from './layout/page/Read';
import Update from './layout/page/Update';
import PageNotFound from './layout/page/PageNotFound';
import 'bootstrap/dist/css/bootstrap.css';
import { getSingleUser } from './layout/page/Update';
import ViewDetailsroot from './layout/ViewDetailsroot';
import { getUserid } from './layout/ViewDetailsroot';
import Place from './layout/page/Place';


function App() {
  const rout=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route path="create" element={<Create/>}/>
        <Route index element={<Read/>}/>
        <Route path="update/:id" element={<Update/>} loader={getSingleUser} />
        <Route path="viewdetail/:id/" element={<ViewDetailsroot/>} loader={getUserid}>
          <Route path='place' element={<Place/>} loader={getUserid} />
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Route>
    )
   ); 
  return (
    <>
      <RouterProvider router={rout}/>
    </>
  );
}

export default App;

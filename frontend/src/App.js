import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import LogIn from './pages/LogIn';
import Request from './pages/Request';

import AdminDashboard from './admin/AdminDashboard';
import CreatePost from './admin/CreatePost';
import EditPost from './admin/EditPost';
import AdminRoute from './components/AdminRoute';
import UserRoute from './components/UserRoute';
import Layout from './admin/global/Layout'

//HOC
const AdminDashboardHOC = Layout(AdminDashboard);

const App = () => {

  // aos initialization
	Aos.init({
		duration: 1800,
		offset: 0,
	});

  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/request' element={<Request />} />
              <Route path='/admin/dashboard' element={<AdminRoute><AdminDashboardHOC /></AdminRoute>} />
              <Route path='/admin/post/create' element={<AdminRoute><CreatePost /></AdminRoute>} />
              <Route path='/admin/post/edit/:id' element={<AdminRoute><EditPost /></AdminRoute>} />

              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>        
        </ProSidebarProvider>        
      </Provider>
    </>
  )
}

export default App

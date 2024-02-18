import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import EditorsPage from './pages/EditorsPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import CheckListPage from './pages/CheckListPage.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/editorspicks' element={<EditorsPage />} />
      <Route path='/checklist' element={<CheckListPage />} />
      <Route path='/aboutus' element={<AboutUsPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
)

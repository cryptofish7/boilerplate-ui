import Footer from 'components/Footer'
import Header from 'components/Header'
import ScrollToTop from 'components/ScrollToTop'
import NotFound from 'pages/404'
import Home from 'pages/Home'
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const ElementWithHeader = ({ element }: { element: JSX.Element }) => {
  return (
    <>
      <Header />
      {element}
    </>
  )
}

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ElementWithHeader element={<Home />} />} />
        <Route
          path="/page1"
          element={<ElementWithHeader element={<Home />} />}
        />
        <Route
          path="/page2"
          element={<ElementWithHeader element={<Home />} />}
        />
        <Route
          path="/404"
          element={<ElementWithHeader element={<NotFound />} />}
        />
        {/* Unknown paths */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

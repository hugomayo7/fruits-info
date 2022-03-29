import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import FruitDetails from '../components/fruit/FruitDetails'
import Home from '../components/home/Home'
import Layout from '../layout/Layout'

export default function AnimatedSwitch() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='accueil' element={<Navigate replace to='/' />} />
        <Route path='fruits/:id' element={<FruitDetails />} />
      </Route>
    </Routes>
  )
}

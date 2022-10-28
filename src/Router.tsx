import { Routes, Route, Navigate } from 'react-router-dom'
import { Event } from './pages/Event'
import { Subscribe } from './pages/Subscribe'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson" element={<Navigate to="/event" />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}
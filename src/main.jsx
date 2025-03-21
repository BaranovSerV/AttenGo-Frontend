import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthApp from './containers/auth/AuthApp.jsx'
import ScheduleApp from './containers/schedule/ScheduleApp.jsx'
import GroupApp from './containers/group/GroupApp.jsx'
import "./assets/styles/index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthApp />
    <ScheduleApp />
    <GroupApp />
  </StrictMode>,
)

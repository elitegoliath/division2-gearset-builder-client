import React from 'react'
import './App.scss'
import { BuilderPage } from './pages/builder'
import { EquipmentEditor } from './components/equipmentEditor'
import { AdminPage } from './pages/admin'

/**
 * Root app.
 */
export const App: React.FC = () => {
    return (
        <div className='app-root'>
            <BuilderPage />
            <EquipmentEditor />
            <AdminPage />
        </div>
    )
}

import React from 'react';
import './App.scss';
import BuilderPage from './pages/builder';
import EquipmentEditor from './components/equipmentEditor';

/**
 * Root app.
 */
export const App: React.FC = () => {
    return (
        <div className='app-root'>
            <BuilderPage />
            <EquipmentEditor />
        </div>
    );
};

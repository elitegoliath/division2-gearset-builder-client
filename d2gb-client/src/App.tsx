import React from 'react';
import './App.scss';
import BuilderPage from './pages/builder';

/**
 * Root app.
 */
export const App: React.FC = () => {
    return (
        <div className='app-root'>
            <BuilderPage></BuilderPage>
        </div>
    );
};

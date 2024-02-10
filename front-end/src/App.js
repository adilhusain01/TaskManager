// src/App.js
import React from 'react';
import TaskPage from './pages/taskPage';
import GlobalStyle from './styles/globalStyles';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <TaskPage />
    </div>
  );
};

export default App;

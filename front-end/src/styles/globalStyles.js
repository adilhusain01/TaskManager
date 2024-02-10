// src/styles/globalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  .task-form {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .task-input {
    flex: 1;
    margin-right: 10px;
    padding: 8px;
    font-size: 16px;
  }

  .add-task-btn {
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
  }

  .task-list {
    list-style-type: none;
    padding: 0;
  }

  .task-item {
    margin-bottom: 10px;
  }

  .task-item button {
    margin-left: 10px;
    cursor: pointer;
  }
`;

export default GlobalStyle;

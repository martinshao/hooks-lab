import React from 'react'
import useTheme from '../useTheme'
import './styles.scss'

// Usage
const theme = {
  'button-padding': '16px',
  'button-font-size': '14px',
  'button-border-radius': '4px',
  'button-border': 'none',
  'button-color': '#FFF',
  'button-background': '#6772e5',
  'button-hover-border': 'none',
  'button-hover-color': '#FFF'
};

function UseThemeDemo() {
  useTheme(theme);

  return (
    <div>
      <button className="button">Button</button>
    </div>
  );
}

export default UseThemeDemo
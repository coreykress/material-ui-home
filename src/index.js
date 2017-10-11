import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  {
  blue900, cyan700,
  orange600,
  grey100, grey300, grey400, grey500, grey900,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter } from 'react-router-dom'
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blue900,
        primary2Color: cyan700,
        primary3Color: grey400,
        accent1Color: orange600,
        accent2Color: grey100,
        accent3Color: grey900,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: blue900,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
  },
  appBar: {
    height: 50,
  },
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>,
     document.getElementById('root'));
registerServiceWorker();

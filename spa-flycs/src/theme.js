import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const FlyTheme = createTheme({
    palette: {
        primary: {
            main: '#f6ee8a',
            text: '#0000'
        },
        secondary: {
            main: '#fdd4d1'
        },
        error: {
            main: red.A400
        }
    }
})
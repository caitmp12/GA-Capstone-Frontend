import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red'


const theme = createMuiTheme({
    palette: {
        primary: {
            main: red[700],
        },
        secondary: {
            main: blue[700],
        },
    },
});

export default theme
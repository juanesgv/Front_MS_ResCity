import {createTheme}  from '@material-ui/core';


const theme = createTheme({
    palette : {
        primary : {
            main : '#4723D9'
        } 
    },

    typography : {

     fontFamily : 'Nunito',   
        button : {
            textTransform: 'none',
            fontWeight: 400,
            fontFamily: 'Nunito'
        }
    }
})

export default theme;

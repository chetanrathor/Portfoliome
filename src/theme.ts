import { createTheme } from '@mui/material'

// export const theme = createTheme({
//     typography: {
//         fontFamily: [
//             'Open Sans',
//             'Playfair Display'
//         ].join(','),
//         h1: {
//             fontFamily: ['Playfair Display'].join(','),
//             fontWeight: '600',
//             fontSize: "67px",
            
//         },
//         h2: {
//             fontFamily: ['Playfair Display'].join(','),
//             fontSize: "48px",
//         },
//         h3: {
//             fontFamily: ['Playfair Display'].join(','),
//             fontSize: "38px",
//             fontWeight: '600'
//         },
//         h4: {
//             fontFamily: ['Playfair Display'].join(','),
//             fontSize: "30px",
//             fontWeight: '600',
//             lineHeight: '39px'
//         },
//         h5: {
//             fontFamily: ['Playfair Display'].join(','),
//             fontSize: "22px",
//             fontWeight: "600"
//         },
//         h6: {
//             fontFamily: ['Playfair Display'].join(','),
//             fontSize: "19px",
//             fontWeight: '600'
//         },
//         button:{
//             fontFamily: ['Open Sans'].join(','),
//             fontSize: "16px",
//             fontWeight: '400',
//             lineHeight:'16px'
//         },
//         subtitle1: {
//             fontFamily: ['Open Sans'].join(','),
//             fontSize: "17px",
//             fontWeight: '400',


//         },
//         subtitle2: {
//             fontFamily: ['Open Sans'].join(','),
//             fontSize: "15px",
//         },
//         body1: {
//             fontFamily: ['Open Sans'].join(','),
//             fontSize: "14.449999809265137px",
//         },
//         body2: {
//             fontFamily: ['Open Sans'].join(','),
//             fontSize: "11px",
//             fontWeight: '700'
//         },


//     },
//     palette: {
//         primary: {
//             main: '#EC5B53'
//         },
//         secondary: {
//             main: '#002D5B'
//         },
//         warning: {
//             main: '#FFFFFF',
//             "100": "#DDDDDD",
//             "200": "#FAFAFA"

//         },
//         success: {
//             main: '#35373A',
//             "100": '#35373A',
//             "200": '#69727D',
//             "300": "#757575"
//         },

//     }

// })
export const theme = createTheme({
    typography: {
        fontFamily: [
            'Open Sans',
            'Playfair Display'
        ].join(','),
        h1: {
            fontFamily: ['Playfair Display'].join(','),
            fontWeight: '600',
            fontSize: "67px",
            
        },
        h2: {
            fontFamily: ['Playfair Display'].join(','),
            fontSize: "48px",
        },
        h3: {
            fontFamily: ['Playfair Display'].join(','),
            fontSize: "38px",
            fontWeight: '600'
        },
        h4: {
            fontFamily: ['Playfair Display'].join(','),
            fontSize: "30px",
            fontWeight: '600',
            lineHeight: '39px'
        },
        h5: {
            fontFamily: ['Playfair Display'].join(','),
            fontSize: "22px",
            fontWeight: "600"
        },
        h6: {
            fontFamily: ['Playfair Display'].join(','),
            fontSize: "19px",
            fontWeight: '600'
        },
        button:{
            fontFamily: ['Open Sans'].join(','),
            fontSize: "16px",
            fontWeight: '400',
            lineHeight:'16px'
        },
        subtitle1: {
            fontFamily: ['Open Sans'].join(','),
            fontSize: "17px",
            fontWeight: '400',


        },
        subtitle2: {
            fontFamily: ['Open Sans'].join(','),
            fontSize: "15px",
        },
        body1: {
            fontFamily: ['Open Sans'].join(','),
            fontSize: "14.449999809265137px",
        },
        body2: {
            fontFamily: ['Open Sans'].join(','),
            fontSize: "11px",
            fontWeight: '700'
        },


    },
    palette: {
        primary: {
            main: '#EC5B53'
        },
        secondary: {
            main: '#002D5B'
        },
        warning: {
            main: '#FFFFFF',
            "100": "#DDDDDD",
            "200": "#FAFAFA"

        },
        success: {
            main: '#35373A',
            "100": '#35373A',
            "200": '#69727D',
            "300": "#757575"
        },
        background:{
            default:'#FEFAFA',
            paper:'#fff'
        }

    }

})
export const darkTheme = createTheme({
    typography: {
        fontFamily: [
            'Open Sans',
            'Playfair Display'
        ].join(','),
        h1: {
            fontFamily: ['Playfair Display'].join(','),
            fontWeight: '600',
            fontSize: "67px",
            
        },
        h2: {
            fontFamily: ['Playfair Display'].join(','),
            fontSize: "48px",
        },
        h3: {
            fontFamily: ['Playfair Display'].join(','),
            fontSize: "38px",
            fontWeight: '600'
        },
        h4: {
            fontFamily: ['Playfair Display'].join(','),
            fontSize: "30px",
            fontWeight: '600',
            lineHeight: '39px'
        },
        h5: {
            fontFamily: ['Playfair Display'].join(','),
            fontSize: "22px",
            fontWeight: "600"
        },
        h6: {
            fontFamily: ['Playfair Display'].join(','),
            fontSize: "19px",
            fontWeight: '600'
        },
        button:{
            fontFamily: ['Open Sans'].join(','),
            fontSize: "16px",
            fontWeight: '400',
            lineHeight:'16px'
        },
        subtitle1: {
            fontFamily: ['Open Sans'].join(','),
            fontSize: "17px",
            fontWeight: '400',


        },
        subtitle2: {
            fontFamily: ['Open Sans'].join(','),
            fontSize: "15px",
        },
        body1: {
            fontFamily: ['Open Sans'].join(','),
            fontSize: "14.449999809265137px",
        },
        body2: {
            fontFamily: ['Open Sans'].join(','),
            fontSize: "11px",
            fontWeight: '700'
        },


    },
    palette: {
        primary: {
            main: '#EC5B53'
        },
        secondary: {
            main: '#002D5B'
        },
        warning: {
            main: '#FFFFFF',
            "100": "#DDDDDD",
            "200": "#FAFAFA"

        },
        success: {
            main: '#35373A',
            "100": '#35373A',
            "200": '#69727D',
            "300": "#757575"
        },
        background:{
            default:'red',
            paper:'#fff'
        }

    }

})

export const textAlign = {
    xs: 'center', md: 'start'
}


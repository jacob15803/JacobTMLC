const { createTheme } = require("@mui/material")

const backgroundColor="#E4A2A2"
const primaryColor="#FF0035"
const secondaryColor="#00A896"
const textColor="#43330dff"
const tertiaryColor="#e2f200ff"
const highlightColor="#2c1086ff"

const DbackgroundColor="#000000ff"
const DprimaryColor="#ff0033ff"
const DsecondaryColor="#00A896"
const DtextColor="#ffffffff"
const DtertiaryColor="#e2f200ff"
const DhighlightColor="#2c1086ff"

let theme =createTheme({
    palette:{
        mode:"light",
        background:{default:backgroundColor
        },
        primary:{
            main:primaryColor
        },
        secondary:{
            main:secondaryColor
        },
        tertiary:{
            main:tertiaryColor
        },
        icon:{
            main:textColor
        },
        error:{
            main:highlightColor
        }



    }
    
})

let darkTheme =createTheme({
    palette:{
        mode:"dark",
        background:{default:DbackgroundColor
        },
        primary:{
            main:DprimaryColor
        },
        secondary:{
            main:DsecondaryColor
        },
        tertiary:{
            main:DtertiaryColor
        },
        icon:{
            main:DtextColor
        },
        error:{
            main:DhighlightColor
        }



    }
    
})
export {theme}
export{darkTheme}
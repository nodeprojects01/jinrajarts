const jpStyle = {
    fontFamilyDancingScript: "'Dancing Script', cursiv",
    fontFamilyMontserrat: "Montserrat, sans-serif",

    colorBlack: "#555",
    colorGrey: "#999",
    colorGreyLight: "#F5F5F5", //#F9F9F9
    colorGreen:"#009688",
    fontSizeL: "1.5em",
    fontSizeML: "0.85em",
    fontSizeM: "0.75em",
    fontSizeS: "0.7em"
}

const jpTheme = {
    headerTitle: {
        fontFamily: jpStyle.fontFamilyDancingScript,
        color:"#fff"
    },
    header: {
        fontFamily: jpStyle.fontFamilyMontserrat,
        fontWeight: "200",
        color: "#444",
        fontSize: "2.5em",
        margin: "1em 0"
    },
    subHeader:{
        fontFamily: jpStyle.fontFamilyMontserrat,
        fontWeight: "400",
        color: jpStyle.colorBlack,
        fontSize: jpStyle.fontSizeML,
        margin: "0.5em 0"
    },
    textDefault:{
        fontWeight: "400",
        color: jpStyle.colorGrey,
        fontSize: jpStyle.fontSizeML,
        lineHeight: "2"
    },
    textSmall:{
        fontWeight: "400",
        color: jpStyle.colorGrey,
        fontSize: jpStyle.fontSizeM,
        lineHeight: "2"
    },
    buttonBorderless:{
        fontSize: "0.75em",
        color:"#fff"
    },
    subheader_c : {
        fontFamily: jpStyle.fontFamilyMontserrat,
        fontWeight: 800,
        color: '#444',
        fontSize: '3em',
        margin: '1em 0'
       }
}

module.exports = { jpStyle, jpTheme }
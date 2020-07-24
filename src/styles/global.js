const jpStyle = {
    fontFamilyDancingScript: "'Dancing Script', cursiv",
    fontFamilyMontserrat: "Montserrat, sans-serif",

    colorBlack: "#555",
    colorGrey: "#999",
    colorGreyLight: "#F2F2F2",

    fontSizeL: "1.5em",
    fontSizeML: "0.9em",
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
    default:{
        fontWeight: "400",
        color: jpStyle.colorGrey,
        fontSize: jpStyle.fontSizeM,
        lineHeight: "2"
    },
    buttonBorderless:{
        fontSize: "0.75em",
        color:"#fff"
    }
}

module.exports = { jpStyle, jpTheme }
const jpStyle = {
    fontFamilyDancingScript: "Epilogue, sans-serif",
    fontFamilyMontserrat: "Montserrat, sans-serif",
    fontFamilyAbril: "Epilogue, sans-serif",

    colorBlack: "#555",
    colorGrey: "#999",
    colorGreyLight: "#F5F5F5", //#F9F9F9
    colorGreen: "#009688",
    colorRed: "#EB7077",

    fontSizeXL: "8vw", //6vw
    fontSizeL: "2.5em",
    fontSizeML: "1em",
    fontSizeM: "0.85em",
    fontSizeS: "0.7em"
}

const jpTheme = {
    header: {
        fontFamily: jpStyle.fontFamilyMontserrat,
        color: "#FFF",
        fontWeight: "700",
        letterSpacing: "3px",
        fontSize: jpStyle.fontSizeXL
    },
    cursiveTitle: {
        paddingLeft: "8px",
        fontSize: "2em",
        fontFamily: jpStyle.fontFamilyDancingScript,
        fontWeight: "100",
        color: "#FFF"
    },
    cursiveTitle2: {
        paddingLeft: "8px",
        fontSize: "1.6em",
        fontFamily: jpStyle.fontFamilyDancingScript,
        fontWeight: "600",
        color: jpStyle.colorBlack
    },
    title: {
        fontFamily: jpStyle.fontFamilyAbril,
        fontWeight: "600",
        color: "#444",
        fontSize: jpStyle.fontSizeL,
        margin: "1em 0"
    },
    titleMarginLess: {
        // fontFamily: jpStyle.fontFamilyMontserrat,
        fontFamily: jpStyle.fontFamilyAbril,
        fontWeight: "600",
        color: "#444",
        fontSize: jpStyle.fontSizeML
    },
    subTitle: {
        fontFamily: jpStyle.fontFamilyMontserrat,
        fontWeight: "400",
        color: jpStyle.colorBlack,
        fontSize: jpStyle.fontSizeML,
        margin: "0.5em 0",
        lineHeight: "2"
    },
    textDefault: {
        fontFamily: jpStyle.fontFamilyMontserrat,
        fontWeight: "400",
        color: jpStyle.colorGrey,
        fontSize: jpStyle.fontSizeM,
        lineHeight: "2"
    },
    textSmall: {
        fontFamily: jpStyle.fontFamilyMontserrat,
        fontWeight: "400",
        color: jpStyle.colorGrey,
        fontSize: jpStyle.fontSizeM,
        lineHeight: "2"
    },
    buttonBorderless: {
        fontSize: jpStyle.fontSizeM,
        color: jpStyle.colorGrey
    },
    buttonBorderlessGrey: {
        fontSize: jpStyle.fontSizeM,
        color: jpStyle.colorGrey
    },
    buttonGrey: {
        fontSize: jpStyle.fontSizeM,
        color: jpStyle.colorGrey,
        border: "1px solid"
    },
    buttonBorderlessGray: {
        fontSize: "0.75em",
        color: jpStyle.colorBlack
    },
    buttomRightCorner: {
        position: 'fixed',
        bottom: "1em",
        right: "1em"
    },
    menuBar: {
        background: 'transparent',
        boxShadow: 'none',
        color: "#FFF"
    }
}

module.exports = { jpStyle, jpTheme }

export const COLORS = {
    primary: "#FF6C44", //orange
    transparentPrimray: 'rgba(227, 120, 75, 0.1)',
    orange: "#FFA133",
    lightOrange: "#FFA133",
    lightOrange2: "#FDDED4",
    lightOrange3: '#FFD9AD',
    green: "#27AE60",
    red: "#FF1717",
    blue: '#0064C0',
    darkBlue: "#111A2C",
    darkGray: "#525C67",
    darkGray2: "#757D85",
    gray: "#898B9A",
    gray2: "#BBBDC1",
    gray3: '#CFD0D7',
    lightGray1: "#DDDDDD",
    lightGray2: "#F5F5F8",
    white2: "#FBFBFB",
    white: '#FFFFFF',
    black: "#000000",

    transparent: 'transparent',
    transparentBlack1: "rgba(0, 0, 0, 0.1)",
    transparentBlack7: "rgba(0, 0, 0, 0.7)"

};
export const SIZES = {
    // global sizes
    radius: "20px",
    padding: "1rem",

    // font sizes
    largeTitle: '5rem',

    h1: "3.5rem",
    h2: '3rem',
    h3: '2.5rem',
    h4: '1.5rem',
    h5: '1.3rem',

    body1: "3rem",
    body2: '2.5rem',
    body3: '2rem',
    body4: '1.5rem',
    body5: '.9rem',

    // app dimensions
    // width,
    // height
};
export const FONTS = {
    largeTitle: { fontFamily: "Poppins", fontSize: SIZES.largeTitle },

    h1: { fontFamily: 'Poppins', fontSize: SIZES.h1, fontWeight: "800" },
    h2: { fontFamily: 'Poppins', fontSize: SIZES.h2, fontWeight: "800"},
    h3: { fontFamily: 'Poppins', fontSize: SIZES.h3, fontWeight: "800"},
    h4: { fontFamily: 'Poppins', fontSize: SIZES.h4, fontWeight: "800"},
    h5: { fontFamily: 'Poppins', fontSize: SIZES.h5, },
    
    body1: { fontFamily: "Poppins", fontSize: SIZES.body1, color: COLORS.gray},
    body2: { fontFamily: "Poppins", fontSize: SIZES.body2, color: COLORS.gray},
    body3: { fontFamily: "Poppins", fontSize: SIZES.body3, color: COLORS.gray},
    body4: { fontFamily: "Poppins", fontSize: SIZES.body4, color: COLORS.gray},
    body5: { fontFamily: "Poppins", fontSize: SIZES.body5, color: COLORS.gray},
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;

import { createTheme } from "@mui/material";
import customLightPalette from "./customLightPalette";
import customDarkPalette from "./customDarkPalette";

const customTheme = (isLightTheme?:boolean) =>{

    return createTheme({
        palette: isLightTheme ? customLightPalette : customDarkPalette,
        components: {
            MuiCssBaseline:{
                styleOverrides:({ palette }) => {
                    return `html {
                        background-color: ${palette.primary.dark};
                        }`
                }
            }
        }
    })
}

export default customTheme
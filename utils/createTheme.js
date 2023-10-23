export default function createTheme(mode, theme = "default") {
  mode = mode ?? "light"
  return Themes[mode][theme]
}

const Themes = {
  light: {
    default: {
      colors: {
        primary: "#6200ee",
        background: {
          backgroundColor: "#ffffff",
        },
        card: "#ffffff",
        text: {
          color: "#000000",
        },
        border: {
          borderColor: "#ffffff",
        },
        gray: "#808080",
        divider: "#d9d9d9",
        notification: "#6200ee",
      },
    },
  },
  dark: {
    default: {
      colors: {
        primary: "#ff0000",
        background: {
          backgroundColor: "#121212",
        },
        card: "#1e1e1e",
        text: {
          color: "#ffffff",
        },
        border: {
          borderColor: "#000000",
        },
        gray: "#808080",
        notification: "#bb86fc",
        divider: "#303030",
      },
    },
  },
}

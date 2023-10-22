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
        notification: "#6200ee",
      },
    },
  },
  dark: {
    default: {
      colors: {
        primary: "#bb86fc",
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
        notification: "#bb86fc",
      },
    },
  },
}

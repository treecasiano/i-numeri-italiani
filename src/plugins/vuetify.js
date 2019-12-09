import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.green.darken4,
        secondary: colors.green.lighten1,
        accent: colors.green.lighten4,
        anchor: colors.green.darken4,
        error: colors.red.darken4,
        warning: colors.deepOrange,
        info: colors.lightBlue,
        success: colors.lightBlue,
      },
      dark: {
        primary: colors.grey.darken4,
        secondary: colors.pink.lighten1,
        accent: colors.pink.lighten4,
        anchor: colors.pink.accent1,
        error: colors.red.darken4,
        warning: colors.deepOrange,
        info: colors.lightBlue,
        success: colors.lightBlue,
      },
    },
    options: {
      customProperties: true,
    },
  },
});

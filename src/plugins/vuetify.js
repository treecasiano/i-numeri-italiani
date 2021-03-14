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
    themes: {
      light: {
        primary: colors.pink.darken4,
        secondary: colors.pink.lighten1,
        accent: colors.pink.lighten3,
        error: colors.red.darken4,
        warning: colors.deepOrange,
        info: colors.lightBlue,
        success: colors.lightBlue,
      },
      dark: {
        primary: colors.grey.darken4,
        secondary: colors.pink.lighten1,
        accent: colors.pink.lighten3,
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

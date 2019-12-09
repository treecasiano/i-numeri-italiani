<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="accent--text title">
        I Numeri Italiani
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <NumberToTextTranslator />
    </v-content>
  </v-app>
</template>

<script>
import NumberToTextTranslator from "./components/NumberToTextTranslator";

export default {
  name: "App",

  components: {
    NumberToTextTranslator,
  },

  data: () => ({
    //
  }),
};
</script>

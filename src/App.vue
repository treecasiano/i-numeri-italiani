<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="accent--text title">I Numeri Italiani</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs v-model="tabs" centered slider-color="accent" background-color="transparent">
          <v-tab>Learn to Count in Italian</v-tab>
          <v-tab>Translate Numbers</v-tab>
          <v-tab>Practice Quiz</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-content>
      <v-tabs-items v-model="tabs" color="transparent">
        <v-tab-item></v-tab-item>
        <v-tab-item>
          <NumberToTextTranslator />
        </v-tab-item>
        <v-tab-item></v-tab-item>
      </v-tabs-items>
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
    tabs: null,
  }),
};
</script>

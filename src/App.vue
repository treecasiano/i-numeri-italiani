<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="accent--text display-1"
        >I Numeri Italiani</v-toolbar-title
      >
      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          centered
          slider-color="accent"
          background-color="transparent"
        >
          <v-tab>Learn</v-tab>
          <v-tab>Translate</v-tab>
          <v-tab>Practice</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <v-tabs-items v-model="tabs" color="transparent">
        <v-tab-item>
          <Lesson />
        </v-tab-item>
        <v-tab-item>
          <NumberToTextTranslator />
        </v-tab-item>
        <v-tab-item></v-tab-item>
      </v-tabs-items>
    </v-main>
  </v-app>
</template>

<script>
import Lesson from "./components/Lesson";
import NumberToTextTranslator from "./components/NumberToTextTranslator";

export default {
  name: "App",

  components: {
    Lesson,
    NumberToTextTranslator,
  },

  data: () => ({
    tabs: null,
  }),
};
</script>

<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <v-toolbar-title class="display-1">I Numeri Italiani</v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs
          background-color="secondary"
          centered
          class="pb-4"
          slider-color="primary lighten-4"
          slider-size="5"
          v-model="tabs"
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

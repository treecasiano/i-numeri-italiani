<template>
  <v-card
    class="mx-auto my-8 pa-5"
    color="grey lighten-3"
    elevation="0"
    max-width="600"
  >
    <v-card-text class="text-center">
      <div>
        <v-text-field
          :counter="counter"
          :rules="rules"
          @click:clear="clearValue"
          @keyup="translateNumber(numberToTranslate)"
          clearable
          color="secondary"
          label="Number from 1 to 9999"
          max="9999"
          maxLength="4"
          min="1"
          outlined
          placeholder="9999"
          rounded
          step="1"
          type="number"
          v-model="numberToTranslate"
        ></v-text-field>
      </div>
      <div v-if="translatedNumber">
        <div class="primary--text title">{{ translatedNumber }}</div>
      </div>
      <div v-else>
        <div class="primary--text title">{{ promptToEnterNumber }}</div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Translate from "../lib/translate";
const translate = new Translate();

export default {
  name: "NumberToTextTranslator",
  data: () => ({
    counter: 4,
    numberToTranslate: null,
    promptToEnterNumber: "Enter a number between 1 and 9999.",
    rules: [
      value =>
        value >= 0 ||
        "Must be a number greater than 0 and should not start with a 0.",
      value => (value || "").length < 5 || "Max 4 characters",
      value => (value && !value.includes(".")) || "Integers only, please.",
    ],
    translatedNumber: null,
  }),
  methods: {
    clearValue() {
      this.translatedNumber = null;
    },
    translateNumber(input) {
      // TODO: Prevent use of commas.
      // TODO: Fix layout. (Convert tables to Vuetify simple tables.)
      // TODO: Check for range, and return message here.
      // TODO: Clean up the JavaScript.
      // TODO: Fix router. (Show tab in URL.)
      // TODO: Clean up the translation function so that it never returns a string, just a number or null.
      // TODO: Create the practice tab
      // TODO: Make the header and landing page more appealing
      // TODO: Add the github pages deployment library for Vue

      if (!input) {
        this.translatedNumber = null;
        return;
      }
      this.translatedNumber = translate.parseInput(input);
    },
  },
};
</script>

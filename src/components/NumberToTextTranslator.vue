<template>
  <v-container>
    <v-layout wrap justify-center text-center>
      <v-flex xs12 md6 ma-5 align-self-baseline>
        <v-text-field
          v-model="numberToTranslate"
          :counter="counter"
          @keyup="translateNumber(numberToTranslate)"
          @click:clear="clearValue"
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
        ></v-text-field>
      </v-flex>
      <v-flex v-if="translatedNumber" xs12 md6 ma-5 align-self-baseline>
        <div class="accent--text title">{{ translatedNumber }}</div>
      </v-flex>
      <v-flex v-else xs12 md6 ma-5 align-self-baseline>
        <div class="accent--text title">{{ promptToEnterNumber }}</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Translate from "../lib/translate";
const translate = new Translate();

export default {
  name: "NumberToTextTranslator",
  data: () => ({
    counter: 4,
    numberToTranslate: null,
    promptToEnterNumber: "Please enter a number.",
    translatedNumber: null,
  }),
  methods: {
    clearValue() {
      this.translatedNumber = null;
    },
    translateNumber(input) {
      // TODO: Fix layout. (Convert tables to Vuetify simple tables.)
      // TODO: Add input validation for numbers outside of the range and don't allow negative numbers or commas
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

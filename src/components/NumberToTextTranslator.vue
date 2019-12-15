<template>
  <v-container>
    <v-layout wrap justify-center text-center>
      <v-flex xs12 md6 ma-5 align-self-baseline>
        <v-text-field
          v-model="numberToTranslate"
          :counter="counter"
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
        ></v-text-field>
      </v-flex>
      <v-flex xs12 md6 ma-5 align-self-baseline>
        <div class="accent--text title">{{ translatedNumber }}</div>
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
    translatedNumber: null,
  }),
  methods: {
    translateNumber(input) {
      if (!input) {
        return;
      }
      this.translatedNumber = translate.parseInput(input);
    },
  },
};
</script>

<template>
  <v-container>
    <v-layout text-left wrap justify-space-start>
      <v-flex xs12 sm4 ma-1 align-self-baseline>
        <v-text-field
          v-model="numberToTranslate"
          color="accent"
          :hide-details="true"
          max="9999"
          min="1"
          label="Number from 1 to 9999"
          outlined
          rounded
          type="number"
          step="1"
        ></v-text-field>
      </v-flex>
      <v-flex xs6 sm2 ma-1 align-self-baseline>
        <v-btn
          color="accent darken-4"
          rounded
          @click="translateNumber(numberToTranslate)"
        >
          translate
        </v-btn>
      </v-flex>
      <v-flex xs12 text-left>
        <div class="accent--text">translation: {{ translatedNumber }}</div>
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

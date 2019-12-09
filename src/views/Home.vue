<template>
  <div class="home">
    <NumberToTextTranslator />
  </div>
</template>

<script>
// @ is an alias to /src
import NumberToTextTranslator from "@/components/NumberToTextTranslator.vue";

export default {
  name: "home",
  components: {
    NumberToTextTranslator,
  },
};
</script>

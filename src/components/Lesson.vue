<template>
  <v-container>
    <v-layout column>
      <h1>How to Count in Italian</h1>
      <p>
        Counting in Italian is fun and relatively easy. You can say most of the
        numbers you encounter in daily life by learning the following:
      </p>
      <ol class="ma-3" type="1">
        <li>the numbers 1 to 19</li>
        <li>how to count by tens up to 100</li>
        <li>the words for thousand and million</li>
      </ol>
      <h2 class="my-3">Counting from 1 to 10</h2>
      <p class="my-3">Let's learn how to count to 10 first.</p>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Number</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in numbersBelowTen" :key="item.num">
              <td>{{ item.num }}</td>
              <td>{{ item.translation }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <h2 class="my-3">Counting from 11 to 99</h2>
      <p class="my-3">
        The numbers 11 through 19 are irregular and must be memorized.
      </p>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Number</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in teens" :key="item.num">
              <td>{{ item.num }}</td>
              <td>{{ item.translation }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <p class="my-3">Now, let's count by tens up to 100.</p>

      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Number</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tensPlace" :key="item.num">
              <td>{{ item.num }}</td>
              <td>{{ item.translation }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <h2 class="my-3">Counting from 20 to 99</h2>

      <p class="my-3">
        For the numbers 20 through 99, take the number in the tens place ( i.e.,
        <em>venti</em>, <em>trenta</em>, <em>quaranta</em>) and append a number
        1 through 9 ( <em>uno</em> through <em>nove</em>). For example, 99 is
        <em>novantanove</em>. 34 is <em>trentaquattro</em>. 22 is
        <em>ventidue</em>.
      </p>

      <h3 class="my-3">Exceptions to the Pattern</h3>
      <p>
        If the number ends in 1 or 8, drop the final vowel from the tens number.
        Thus,
        <em>trenta</em> + <em>otto</em> = trentotto (38).
      </p>
      <p>
        When numbers end in 3,
        <em>tre</em> becomes <em>tré</em>.
      </p>

      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Number</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>21</td>
              <td>ventuno</td>
            </tr>
            <tr>
              <td>23</td>
              <td>ventitré</td>
            </tr>
            <tr>
              <td>88</td>
              <td>ottantotto</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <h2 class="my-3">Counting from 100 to 999</h2>

      <p>
        For 200, 300, 400, you add 2, 3, 4, and so forth to
        <em>cento</em>. (You do not add <em>uno</em> before <em>cento</em> if
        the number is 100.) Thus, 200 is <em>duecento</em>, 300 is
        <em>trecento</em>, and 400 is <em>quattrocento</em>. You add the number
        1 through 99 to the hundreds value to get the other combinations of
        numbers:
      </p>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Number</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>147</td>
              <td>centoquarantasette</td>
            </tr>
            <tr>
              <td>888</td>
              <td>ottocentottantotto</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <table>
        <tr>
          <th scope="col">number</th>
          <th scope="col">translation</th>
        </tr>
        <tr>
          <td>147</td>
          <td>centoquarantasette</td>
        </tr>
        <tr>
          <td>888</td>
          <td>ottocentottantotto</td>
        </tr>
      </table>

      <p class="my-3">
        <strong>IMPORTANT!</strong> When <em>cento</em> is followed by
        <em>otto</em> or <em>ottanta</em>, you drop the <em>o</em> from
        <em>cento</em>.
      </p>

      <h2 class="my-3">Counting from 1000 to 9999</h2>
      <p>
        <em>Mille</em> is 1000. <em>Mille</em> changes to <em>mila</em> in 2000
        (<em>duemila</em>), 3000 (<em>tremila</em>), 4000
        (<em>quattromila</em>), and so forth.
      </p>
      <p>Numbers are chained together without spaces.</p>

      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Number</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1048</td>
              <td>millequarantotto</td>
            </tr>
            <tr>
              <td>2194</td>
              <td>duemilacentonovantaquattro</td>
            </tr>
            <tr>
              <td>8888</td>
              <td>ottomilaottocentottantotto</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <h2 class="my-3">More Numbers in Italian</h2>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Number</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>100,000</td>
              <td>centomila</td>
            </tr>
            <tr>
              <td>1,000,000</td>
              <td>un milione</td>
            </tr>
            <tr>
              <td>5,800,000</td>
              <td>cinque milioni ottocentomila</td>
            </tr>
            <tr>
              <td>1,00,000,000</td>
              <td>un miliardo</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    teens: [
      {
        num: "11",
        translation: "undici",
      },
      {
        num: "12",
        translation: "dodici",
      },
      {
        num: "13",
        translation: "tredici",
      },
      {
        num: "14",
        translation: "quattordici",
      },
      {
        num: "15",
        translation: "quindici",
      },
      {
        num: "16",
        translation: "sedici",
      },
      {
        num: "17",
        translation: "diciassette",
      },
      {
        num: "18",
        translation: "diciotto",
      },
      {
        num: "19",
        translation: "diciannove",
      },
    ],
    tensPlace: [
      {
        num: "10",
        translation: "dieci",
      },
      {
        num: "20",
        translation: "venti",
      },
      {
        num: "30",
        translation: "trenta",
      },
      {
        num: "40",
        translation: "quaranta",
      },
      {
        num: "50",
        translation: "cinquanta",
      },
      {
        num: "60",
        translation: "sessanta",
      },
      {
        num: "70",
        translation: "sessanta",
      },
      {
        num: "80",
        translation: "ottanta",
      },
      {
        num: "90",
        translation: "novanta",
      },
    ],
    numbersBelowTen: [
      {
        num: "1",
        translation: "uno",
      },
      {
        num: "2",
        translation: "due",
      },
      {
        num: "3",
        translation: "tre",
      },
      {
        num: "4",
        translation: "quattro",
      },
      {
        num: "5",
        translation: "cinque",
      },
      {
        num: "6",
        translation: "sei",
      },
      {
        num: "7",
        translation: "siete",
      },
      {
        num: "8",
        translation: "otto",
      },
      {
        num: "9",
        translation: "nove",
      },
      {
        num: "10",
        translation: "dieci",
      },
    ],
  }),
  methods: {},
};
</script>

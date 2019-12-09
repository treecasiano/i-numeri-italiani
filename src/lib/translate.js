const numsTo19 = {
  "1": "uno",
  "2": "due",
  "3": "tre",
  "4": "quattro",
  "5": "cinque",
  "6": "sei",
  "7": "sette",
  "8": "otto",
  "9": "nove",
  "10": "dieci",
  "11": "undici",
  "12": "dodici",
  "13": "tredici",
  "14": "quattordici",
  "15": "quindici",
  "16": "sedici",
  "17": "diciassette",
  "18": "diciotto",
  "19": "diciannove",
};

const tensPlaceNums = {
  "2": "venti",
  "3": "trenta",
  "4": "quaranta",
  "5": "cinquanta",
  "6": "sessanta",
  "7": "settanta",
  "8": "ottanta",
  "9": "novanta",
};

// TODO: Move numsTo19 and tensPlaceNums to a JSON object.

class TranslateNumberToItalian {
  constructor() {
    this.numsTo19 = numsTo19;
    this.tensPlaceNums = tensPlaceNums;
  }
  translate20To99(num) {
    const onesPlaceNum = String(num)[1];
    const tensPlaceNum = String(num)[0];
    let onesPlaceWord;
    let translatedNum;

    // Translate ones place.
    for (var ones in this.numsTo19) {
      if (ones == onesPlaceNum) {
        onesPlaceWord = this.numsTo19[onesPlaceNum];
      }
    }

    // Change tre to tré.
    if (onesPlaceWord == "tre") {
      onesPlaceWord = "tré";
    }

    for (var tens in this.tensPlaceNums) {
      if (tensPlaceNum == tens && onesPlaceNum == "0") {
        translatedNum = this.tensPlaceNums[tens];
        return translatedNum;
      } else if (
        tensPlaceNum == tens &&
        (onesPlaceWord == "uno" || onesPlaceWord == "otto")
      ) {
        translatedNum = this.tensPlaceNums[tens].slice(0, -1) + onesPlaceWord;
        return translatedNum;
      } else if (tensPlaceNum == tens) {
        translatedNum = this.tensPlaceNums[tens] + onesPlaceWord;
        return translatedNum;
      }
    }
  }
  translate100To999(num) {
    var hundredsPlace = String(num)[0];
    var tensPlaceNum = String(num)[1];
    var onesPlaceNum = String(num)[2];
    var restOfNumber = parseInt(String(num).slice(1));
    var hundreds;
    var translatedNum;

    /*If the hundreds place is 1, then you use "cento" NOT "uno cento"*/
    if (parseInt(hundredsPlace) > 1) {
      hundreds = numsTo19[Math.floor(num / 100)] + "cento";
    } else {
      hundreds = "cento";
    }

    /*Obtain value of the tens and ones place.
     * The "o" ending of cento is dropped if followed by otto or ottanta.
     */
    if (tensPlaceNum == "0" && onesPlaceNum == "0") {
      translatedNum = hundreds;
      return translatedNum;
    }

    if (restOfNumber < 20) {
      if (restOfNumber == 8) {
        hundreds = hundreds.slice(0, -1);
        translatedNum = hundreds + "otto";
        return translatedNum;
      } else if (restOfNumber == 3) {
        translatedNum = hundreds + "tré";
        return translatedNum;
      } else {
        translatedNum = hundreds + this.numsTo19[restOfNumber];
        return translatedNum;
      }
    } else if (restOfNumber >= 20) {
      if (tensPlaceNum == "8") {
        hundreds = hundreds.slice(0, -1);
      }
      translatedNum = hundreds + this.translate20To99(restOfNumber);
      return translatedNum;
    }
  }
  translate1000To9999(num) {
    var thousandsPlaceNum = parseInt(String(num)[0]);
    var restOfNumber = parseInt(String(num).slice(1));
    var thousands, translatedNum;

    if (thousandsPlaceNum == 1) {
      thousands = "mille";
    } else {
      thousands = this.numsTo19[thousandsPlaceNum] + "mila";
    }

    if (restOfNumber == 0) {
      translatedNum = thousands;
      return translatedNum;
    } else if (restOfNumber >= 100) {
      translatedNum = thousands + this.translate100To999(restOfNumber);
      return translatedNum;
    } else if (restOfNumber >= 20) {
      translatedNum = thousands + this.translate20To99(restOfNumber);
      return translatedNum;
    } else {
      if (restOfNumber != 3) {
        translatedNum = thousands + this.numsTo19[restOfNumber];
      } else {
        translatedNum = thousands + "tré";
      }
      return translatedNum;
    }
  }
  translateNumber(num) {
    var translatedNum;
    if (num < 20) {
      translatedNum = this.numsTo19[num];
    } else if (num >= 20 && num < 100) {
      translatedNum = this.translate20To99(num);
    } else if (num >= 100 && num < 1000) {
      translatedNum = this.translate100To999(num);
    } else if (num >= 1000 && num < 10000) {
      translatedNum = this.translate1000To9999(num);
    } else {
      return "That number is not within the specified range.";
    }
    return translatedNum;
  }
  parseInput(input) {
    return this.translateNumber(parseInt(input));
  }
}

module.exports = TranslateNumberToItalian;

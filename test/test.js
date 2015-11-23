var expect    = require("chai").expect;
var translate = require("../lib/translate");

describe("I Numeri", function() {
 describe("translations", function() {
   it("translates numbers up to 19", function(){
        var translate1 = translate("1");
        var translate8 = translate("8");
        var translate18 = translate("18");

        expect(translate1).to.equal("uno");
        expect(translate8).to.equal("otto");
        expect(translate18).to.equal("diciotto");
    });

   it("translates numbers 20 to 99", function(){
        var translate21 = translate("21");
        var translate38 = translate("38");
        var translate53 = translate("53");
        var translate91 = translate("91");

        expect(translate21).to.equal("ventuno");
        expect(translate38).to.equal("trentotto");
        expect(translate53).to.equal("cinquantatré");
        expect(translate91).to.equal("novantuno");
    });

   it("translates numbers 100 to 999", function(){
        var translate100 = translate("100");
        var translate101 = translate("101");
        var translate103 = translate("103");
        var translate108 = translate("108");
        var translate111 = translate("111");
        var translate400 = translate("400");
        var translate817 = translate("817");
        var translate999 = translate("999");

        expect(translate100).to.equal("cento");
        expect(translate101).to.equal("centouno");
        expect(translate103).to.equal("centotré");
        expect(translate108).to.equal("centotto");
        expect(translate111).to.equal("centoundici");
        expect(translate400).to.equal("quattrocento");
        expect(translate817).to.equal("ottocentodiciassette");
        expect(translate999).to.equal("novecentonovantanove");
    });

   it("translates numbers 1000 to 9999", function(){
        var translate1000 = translate("1000");
        var translate1003 = translate("1003");
        var translate1303 = translate("1303");
        var translate2000 = translate("2000");
        var translate2001 = translate("2001");
        var translate6083 = translate("6083");
        var translate8888 = translate("8888");
        var translate9999 = translate("9999");

        expect(translate1000).to.equal("mille");
        expect(translate1003).to.equal("milletré");
        expect(translate1303).to.equal("milletrecentotré");
        expect(translate2000).to.equal("duemila");
        expect(translate2001).to.equal("duemilauno");
        expect(translate6083).to.equal("seimilaottantatré");
        expect(translate8888).to.equal("ottomilaottocentottantotto");
        expect(translate9999).to.equal("novemilanovecentonovantanove");
    });
  });
});



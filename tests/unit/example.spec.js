import { shallowMount } from "@vue/test-utils";
import NumberToTextTranslator from "@/components/NumberToTextTranslator.vue";

skip.describe("NumberToTextTranslator.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(NumberToTextTranslator, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

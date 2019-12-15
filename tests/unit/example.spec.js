import { shallowMount } from "@vue/test-utils";
import NumberToTextTranslator from "@/components/NumberToTextTranslator.vue";

describe("NumberToTextTranslator.vue", () => {
  it.skip("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(NumberToTextTranslator, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

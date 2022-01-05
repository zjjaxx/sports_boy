import { mount } from "@vue/test-utils";
import ZHeader from "@/components/layout/z-header/z-header.vue";

describe("ZFooter", () => {
  test("ZFooter height属性", () => {
    const wrapper = mount(ZHeader, {
      props: {
        height: 200,
      },
    });
    const styleList = wrapper.attributes("style").split(";");
    const height = "height";
    const heightValue = styleList
      .find((item) => item.includes(height))
      ?.split(":")[1]
      .trim();
    expect(heightValue).toEqual("200px");
  });
});

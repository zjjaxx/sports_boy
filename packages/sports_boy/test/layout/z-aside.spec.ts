import { mount } from "@vue/test-utils";
import ZAside from "@/components/layout/z-aside/z-aside.vue";

describe("ZAside", () => {
  test("ZAside width属性", () => {
    const wrapper = mount(ZAside, {
      props: {
        width: 200,
      },
    });
    const styleList = wrapper.attributes("style").split(";");
    const width = "width";
    const widthValue = styleList
      .find((item) => item.includes(width))
      ?.split(":")[1]
      .trim();
    expect(widthValue).toEqual("200px");
  });
});

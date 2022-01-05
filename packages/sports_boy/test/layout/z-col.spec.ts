import { mount } from "@vue/test-utils";
import ZCol from "@/components/layout/z-col/z-col.vue";
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  }),
});
describe("ZCol", () => {
  test("ZCol span offset gutter 属性", () => {
    const wrapper = mount(ZCol, {
      global: {
        provide: {
          gutter: 12,
        },
      },
      props: {
        span: 12,
        offset: 9,
      },
    });
    const styleList = wrapper.attributes("style").split(";");
    const marginLeft = "margin-left";
    const width = "width";
    const paddingLeft = "padding-left";
    const paddingRight = "padding-right";
    const marginLeftValue = styleList
      .find((item) => item.includes(marginLeft))
      ?.split(":")[1]
      .trim();
    const widthValue = styleList
      .find((item) => item.includes(width))
      ?.split(":")[1]
      .trim();
    const paddingLeftValue = styleList
      .find((item) => item.includes(paddingLeft))
      ?.split(":")[1]
      .trim();
    const paddingRightValue = styleList
      .find((item) => item.includes(paddingRight))
      ?.split(":")[1]
      .trim();
    expect(marginLeftValue).toEqual("37.5%");
    expect(widthValue).toEqual("50%");
    expect(paddingLeftValue).toEqual("6px");
    expect(paddingRightValue).toEqual("6px");
  });
  test("ZCol >=1920px xl 属性", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => {
        //假设设备宽度 >=1920px
        let matches = false;
        if (query == "(min-width: 1920px)") {
          matches = true;
        }
        return {
          matches,
        };
      }),
    });
    const wrapper = mount(ZCol, {
      global: {
        provide: {
          gutter: 12,
        },
      },
      props: {
        xl: 9,
        span: 12,
      },
    });
    const styleList = wrapper.attributes("style").split(";");
    const width = "width";
    const widthValue = styleList
      .find((item) => item.includes(width))
      ?.split(":")[1]
      .trim();
    expect(widthValue).toEqual("37.5%");
  });
  test("ZCol <=1920px lg 属性", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => {
        //假设设备宽度 <=1920px
        let matches = false;
        if (query == "(max-width: 1920px)") {
          matches = true;
        }
        return {
          matches,
        };
      }),
    });
    const wrapper = mount(ZCol, {
      global: {
        provide: {
          gutter: 12,
        },
      },
      props: {
        lg: 9,
        span: 12,
      },
    });
    const styleList = wrapper.attributes("style").split(";");
    const width = "width";
    const widthValue = styleList
      .find((item) => item.includes(width))
      ?.split(":")[1]
      .trim();
    expect(widthValue).toEqual("37.5%");
  });
  test("ZCol <=1200px md 属性", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => {
        //假设设备宽度 <=1920px
        let matches = false;
        if (query == "(max-width: 1200px)") {
          matches = true;
        }
        return {
          matches,
        };
      }),
    });
    const wrapper = mount(ZCol, {
      global: {
        provide: {
          gutter: 12,
        },
      },
      props: {
        md: 9,
        span: 12,
      },
    });
    const styleList = wrapper.attributes("style").split(";");
    const width = "width";
    const widthValue = styleList
      .find((item) => item.includes(width))
      ?.split(":")[1]
      .trim();
    expect(widthValue).toEqual("37.5%");
  });
  test("ZCol <=992px sm 属性", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => {
        //假设设备宽度 <=1920px
        let matches = false;
        if (query == "(max-width: 992px)") {
          matches = true;
        }
        return {
          matches,
        };
      }),
    });
    const wrapper = mount(ZCol, {
      global: {
        provide: {
          gutter: 12,
        },
      },
      props: {
        sm: 9,
        span: 12,
      },
    });
    const styleList = wrapper.attributes("style").split(";");
    const width = "width";
    const widthValue = styleList
      .find((item) => item.includes(width))
      ?.split(":")[1]
      .trim();
    expect(widthValue).toEqual("37.5%");
  });
  test("ZCol <=768px xs 属性", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => {
        //假设设备宽度 <=1920px
        let matches = false;
        if (query == "(max-width: 768px)") {
          matches = true;
        }
        return {
          matches,
        };
      }),
    });
    const wrapper = mount(ZCol, {
      global: {
        provide: {
          gutter: 12,
        },
      },
      props: {
        xs: 9,
        span: 12,
      },
    });
    const styleList = wrapper.attributes("style").split(";");
    const width = "width";
    const widthValue = styleList
      .find((item) => item.includes(width))
      ?.split(":")[1]
      .trim();
    expect(widthValue).toEqual("37.5%");
  });
});

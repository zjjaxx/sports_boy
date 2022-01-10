import { mount } from "@vue/test-utils";
import { h, Fragment } from "vue";
import ZButton from "@/components/z-button/z-button.vue";
import ZButtonGroup from "@/components/z-button-group/z-button-group.vue";
ZButtonGroup.name = "ZButtonGroup";
describe("ZButton", () => {
  test("ZButton size 属性", async () => {
    const wrapper = mount(ZButton, {
      props: {
        size: "medium",
      },
    });
    expect(wrapper.find(".z-medium-button").exists()).toBe(true);
    await wrapper.setProps({ size: "small" });
    expect(wrapper.find(".z-small-button").exists()).toBe(true);
    await wrapper.setProps({ size: "mini" });
    expect(wrapper.find(".z-mini-button").exists()).toBe(true);
  });
  test("ZButton type 属性", async () => {
    const wrapper = mount(ZButton, {
      props: {
        type: "primary",
      },
    });
    expect(wrapper.find(".z-type-primary").exists()).toBe(true);
    await wrapper.setProps({ type: "success" });
    expect(wrapper.find(".z-type-success").exists()).toBe(true);
    await wrapper.setProps({ type: "warning" });
    expect(wrapper.find(".z-type-warning").exists()).toBe(true);
    await wrapper.setProps({ type: "danger" });
    expect(wrapper.find(".z-type-danger").exists()).toBe(true);
    await wrapper.setProps({ type: "info" });
    expect(wrapper.find(".z-type-info").exists()).toBe(true);
  });
  test("ZButton round 属性", async () => {
    const wrapper = mount(ZButton, {
      props: {
        round: true,
      },
    });
    expect(wrapper.find(".z-round").exists()).toBe(true);
  });
  test("ZButton circle 属性", async () => {
    const wrapper = mount(ZButton, {
      props: {
        circle: true,
      },
    });
    expect(wrapper.find(".z-circle").exists()).toBe(true);
  });
  test("ZButton disable 属性", async () => {
    const wrapper = mount(ZButton, {
      props: {
        disable: true,
      },
    });
    expect(wrapper.find(".z-disable").exists()).toBe(true);
  });
  test("ZButton icon 属性", async () => {
    const wrapper = mount(ZButton, {
      props: {
        icon: "complate",
      },
    });
    expect(wrapper.find(".gulu-complate").exists()).toBe(true);
  });
  test("ZButton loading 属性", async () => {
    const wrapper = mount(ZButton, {
      props: {
        loading: true,
      },
    });
    expect(wrapper.find(".z-icon-loading").exists()).toBe(true);
  });
  test("ZButton nativeType 属性", async () => {
    const wrapper = mount(ZButton, {
      props: {
        nativeType: "button",
      },
    });
    expect(wrapper.find("button").element.type).toEqual("button");
    await wrapper.setProps({ nativeType: "submit" });
    expect(wrapper.find("button").element.type).toEqual("submit");
    await wrapper.setProps({ nativeType: "reset" });
    expect(wrapper.find("button").element.type).toEqual("reset");
  });
  test("ZButtonGroup", async () => {
    const wrapper = mount(ZButtonGroup, {
      slots: {
        default: h(Fragment, {}, [
          h(
            ZButton,
            {
              type: "primary",
            },
            "button1"
          ),
          h(
            ZButton,
            {
              type: "primary",
            },
            "button2"
          ),
        ]),
      },
    });
    expect(wrapper.find(".z-button-group-item-type").exists()).toBe(true);
  });
});

import { mount } from "@vue/test-utils";
import ZCheckbox from "@/components/z-checkbox/z-checkbox.vue";
import ZCheckboxGroup from "@/components/z-checkbox-group/z-checkbox-group.vue";
import { Fragment, h } from "vue";

ZCheckboxGroup.name = "ZCheckboxGroup";
describe("ZCheckbox", () => {
  test("modelValue test", async () => {
    const wrapper = mount(ZCheckbox, {
      props: {
        modelValue: false,
      },
    });
    wrapper.find("input").setValue(true);
    expect(wrapper.emitted()).toHaveProperty("update:modelValue");
  });
  test("disabled test", () => {
    const wrapper = mount(ZCheckbox, {
      props: {
        modelValue: false,
        disabled: true,
      },
    });
    expect(wrapper.find(".z-checkbox-disabled").exists()).toBe(true);
    expect(wrapper.find("input").element.disabled).toEqual(true);
  });
  test("label test", () => {
    const wrapper = mount(ZCheckbox, {
      props: {
        modelValue: true,
        label: "label value",
      },
    });
    expect(wrapper.find(".z-label-checked span").text()).toEqual("label value");
  });
  test("indeterminate test", () => {
    const wrapper = mount(ZCheckbox, {
      props: {
        modelValue: true,
        indeterminate: true,
      },
    });
    expect(wrapper.find(".z-checkbox-indeterminate").exists()).toBe(true);
  });
  test("ZCheckboxGroup modelValue test", async () => {
    const wrapper = mount(ZCheckboxGroup, {
      props: {
        modelValue: [],
      },
      slots: {
        default: h(Fragment, {}, [
          h(ZCheckbox, { label: "checkbox1" }),
          h(ZCheckbox, { label: "checkbox2" }),
        ]),
      },
    });
    await wrapper.findAllComponents(ZCheckbox)[1].find("input").setValue(true);
    expect(wrapper.emitted("update:modelValue")).toHaveLength(1);
    expect(wrapper.emitted("update:modelValue")![0]).toEqual([["checkbox2"]]);
  });
  test("ZCheckboxGroup min max test", async () => {
    const wrapper = mount(ZCheckboxGroup, {
      props: {
        modelValue: ["checkbox2", "checkbox3"],
        min: 2,
        max: 3,
      },
      slots: {
        default: h(Fragment, {}, [
          h(ZCheckbox, { label: "checkbox1" }),
          h(ZCheckbox, { label: "checkbox2" }),
          h(ZCheckbox, { label: "checkbox3" }),
          h(ZCheckbox, { label: "checkbox4" }),
        ]),
      },
    });

    expect(wrapper.findAll(".z-checkbox-disabled").length).toEqual(2);
    await wrapper.setProps({
      modelValue: ["checkbox2", "checkbox3", "checkbox4"],
    });
    expect(wrapper.findAll(".z-checkbox-disabled").length).toEqual(1);
  });
});

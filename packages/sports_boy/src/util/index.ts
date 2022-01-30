import {
  App,
  ComponentCustomOptions,
  Plugin,
  VNode,
  ComponentInternalInstance,
} from "vue";
interface CustomComponent extends ComponentCustomOptions {
  name?: string;
}
export const addInstallPrototype = (
  component: CustomComponent,
  componnentName: string
) => {
  // eslint-disable-next-line dot-notation
  component["install"] = (Vue: App) => {
    Vue.component(componnentName, component);
  };
  component.name = componnentName;
  return component as Plugin;
};
//匹配子组件名
export const matchChildComponentName = (
  childrenVnodes: VNode[] | undefined,
  componentNames: Array<String>
) => {
  if (!childrenVnodes) {
    return false;
  }
  const item = childrenVnodes.find((vnode) => {
    if (vnode.type && (vnode.type as CustomComponent).name) {
      return componentNames.includes((vnode.type as CustomComponent).name!);
    } else {
      return false;
    }
  });
  return !!item;
};
// 匹配父组件名
export const matchParentComponentName = (
  parentVnode: ComponentInternalInstance | undefined | null,
  parentVnodeName: string
) => {
  if (!parentVnode) {
    return false;
  }
  if (parentVnode.type && (parentVnode.type as CustomComponent).name)
    return parentVnodeName === (parentVnode.type as CustomComponent).name;
  else {
    return false;
  }
};
// 递归获取父组件实例
export const getParentByNameRecursive = (
  parentVnode: ComponentInternalInstance | undefined | null,
  parentVnodeName: string
) => {
  if (!parentVnode) {
    return false;
  }
  if (parentVnode.type && (parentVnode.type as CustomComponent).name) {
    if (parentVnodeName === (parentVnode.type as CustomComponent).name) {
      return parentVnode;
    } else {
      return getParentByNameRecursive(parentVnode.parent, parentVnodeName);
    }
  } else {
    return false;
  }
};
//防抖
export const debounce = (fn: () => void, time: number) => {
  let timer;
  return () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      timer = setTimeout(() => {
        fn();
      }, time);
      return;
    }
    timer = setTimeout(() => {
      fn();
    }, time);
  };
};
// 深拷贝
export const deepClone = (target) => {
  let copy;
  if (typeof target === "object") {
    if (target instanceof Array) {
      copy = [];
      target.forEach((item) => {
        copy.push(deepClone(item));
      });
    } else {
      copy = {};
      for (const key in target) {
        copy[key] = deepClone(target[key]);
      }
    }
  } else {
    copy = target;
  }
  return copy;
};

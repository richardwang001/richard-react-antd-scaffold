import { allPanes, allSidePanes, PagePathEnum, PaneType } from '../../menu/menuConfig';

export const get1DPanes = () => {
  let panes: PaneType[]=[];
  allPanes.forEach(p => {
    const children = p.children;
    if (children) {
      panes.push(...children)
    } else {
      panes.push(p);
    }
  });
  return panes;
};

export const getNewActiveKeyAfterRemoving = (panes: PaneType[], targetKey: PagePathEnum, activeKey: PagePathEnum) => {
  if (targetKey === activeKey) {
    const index = panes.findIndex(p => p.key === targetKey);
    if (index !== -1) {
      const pane = panes.at(index - 1);
      return pane!.key;
    } else {
      return undefined;
    }
  } else { return undefined;}
};

export const getPaneByKey = (key: PagePathEnum): PaneType | undefined => {
  return get1DPanes().find(p => p.key === key);
};

export const getDefaultOpenKeys = (): PagePathEnum[] | undefined => {
  let keys: PagePathEnum[] = [];
  allSidePanes.forEach(p => {
    if (p.children) {
      keys.push(p.key);
    }
  });
  return keys.length > 0 ? keys : undefined;
};
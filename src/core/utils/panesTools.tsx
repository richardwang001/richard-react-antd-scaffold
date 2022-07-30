import { allPanes, PagePathEnum, PaneType } from '../../menu/menuContent/contentModel';

export const getNewActiveKeyAfterRemoving = (panes: PaneType[], targetKey: PagePathEnum, activeKey: PagePathEnum) => {
  if (targetKey === activeKey) {
    const index = panes.findIndex(p => p.key === targetKey);
    if (index !== -1) {
      const pane = panes.at(index-1);
      return pane!.key;
    } else {
      return undefined;
    }
  } else { return undefined;}
};

export const getPaneByKey = (key: PagePathEnum): PaneType | undefined => {
  return allPanes.find(p => p.key === key);
};
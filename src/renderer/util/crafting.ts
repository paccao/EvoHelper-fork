import { evoItems } from '../../constants/items';

export type DependencyObj = {
  [key: string]: number
}

export const getItemArrFlatDependenciesObject = (items: string[], presentItems: string[] = []): [DependencyObj, string[]] =>  {
  let res: DependencyObj = {};
  let stash: string[] = presentItems;

  for (const item of items) {
    const [tempItems, tempStash] = getItemFlatDependenciesObject(item, stash);
    res = addDependencies(res, tempItems);
    stash = tempStash;
  }

  return [res, stash];
}
export const getItemFlatDependenciesObject = (item: string, presentItems: string[] = []): [DependencyObj, string[]] =>  {
  let res: DependencyObj  = {};
  let items:Array<string> = presentItems;

  const traverse = (curr: string) => {
    const index = items.indexOf(curr);
    if (index !==  -1) {
      items.splice(index, 1);
      return;
    }

    if (!evoItems.hasOwnProperty(curr) || !evoItems[curr].crafting || evoItems[curr].crafting?.length === 0) {
      if (res.hasOwnProperty(curr)) {
        res[curr] += 1;
      } else {
        res[curr] = 1;
      }
      return;
    }

    // TS, pls tell how crafting can be undefined?
    //@ts-ignore
    for (const dep of evoItems[curr].crafting) {
      traverse(dep);
    }
  }

  traverse(item);

  return [res, items];
}

export const addDependencies = (a:DependencyObj, b: DependencyObj): DependencyObj => {
  const res: DependencyObj = {...a};

  for (const key in b) {
    if (res.hasOwnProperty(key)) {
      res[key] += b[key];
    } else {
      res[key] = b[key];
    }
  }

  return res;
}
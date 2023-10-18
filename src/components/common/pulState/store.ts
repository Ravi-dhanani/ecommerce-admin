import { Store } from "pullstate";
interface IStoreValue {
  isModelOpen: any;
  isEdit: boolean;
}
const StoreValue: IStoreValue = {
  isModelOpen: null,
  isEdit: false,
};
export const store = new Store(StoreValue);

export function setIsModel(data: any) {
  return store.update((s) => {
    s.isModelOpen = data;
  });
}

export function setIsEdit(data: boolean) {
  return store.update((s) => {
    s.isEdit = data;
  });
}

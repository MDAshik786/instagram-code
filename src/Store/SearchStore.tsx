import { makeAutoObservable, observable } from "mobx";

class SearchStore {
  searchInput: string = "";

  constructor() {
    makeAutoObservable(this, {
      searchInput: observable,
    });
  }

  setSearchInput = (value: string) =>  {
    this.searchInput = value;
  }
}

export const searchStote = new SearchStore();

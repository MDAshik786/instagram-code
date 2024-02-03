import { action, makeAutoObservable, observable } from "mobx";

class ModelStore {
  isModelIsOpen: string = "";
  postMoreOptionModel: boolean = false;
  likeGifModel: boolean = false;
  searchModel: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      isModelIsOpen: observable,
      postMoreOptionModel: observable,
      likeGifModel: observable,
      searchModel: observable,

      setIsModelIsOpen: action,
      setPostMoreOptionModel: action,
      setLikeGifModel: action,
      setSearchModel: action,
    });
  }

  setIsModelIsOpen = (value: string) => {
    console.log(value, "setIsModelIsOpen");
    this.isModelIsOpen = value;
  };

  setPostMoreOptionModel = (value: boolean) => {
    this.postMoreOptionModel = value;
  };

  setLikeGifModel = () => {
    this.likeGifModel = !this.likeGifModel;
  };

  setSearchModel = (value: boolean) => {
    this.searchModel = value;
  };
}

export const modelStore = new ModelStore();

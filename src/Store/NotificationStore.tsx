import { action, makeAutoObservable, observable } from "mobx";

class NotificationStore {
  searchUser: string = "";

  constructor() {
    makeAutoObservable(this, {
      searchUser: observable,

      setSearchUser: action,
    });
  }

  setSearchUser = (value: string) => {
    this.searchUser = value;
  };
}

export const notificationStore = new NotificationStore();

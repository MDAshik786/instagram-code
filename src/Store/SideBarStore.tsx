import { makeAutoObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { sideBarDataTypes } from "../Types/SideBarType";

class SideBarStore {
  sideBarData: sideBarDataTypes = {
    home: true,
    search: false,
    explore: false,
    reel: false,
    message: false,
    notification: false,
    create: false,
    profile: false,
    thread: false,
    more: false,
  };

  constructor() {
    makeAutoObservable(this, {
      sideBarData: observable,
      setSideBarData: observable,
    });
    makePersistable(this, {
      name: "instagramSideBar",
      properties: ["sideBarData"],
      storage: window.localStorage,
    });
  }

  setSideBarData = (name: string) => {
    this.sideBarData = {
      home: false,
      search: false,
      explore: false,
      reel: false,
      message: false,
      notification: false,
      create: false,
      profile: false,
      thread: false,
      more: false,
      [name]: true,
    };
  };
}

export const sideBarStore = new SideBarStore();

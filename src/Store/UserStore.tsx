import { action, makeAutoObservable, observable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { inputDataType } from "../Types/userType";

class UserStore {
  inputData: inputDataType = {
    email: "",
    password: "",
    firstName: "", 
    lastName: "",
    phone: "",
    dob: "",
    userName: "rio_ashik",
  };
  userExistOrNot: boolean = true;
  isPosswordVisibility: boolean = false;

  constructor() {
    makeAutoObservable(this, {
      inputData: observable,
      userExistOrNot: observable,
      isPosswordVisibility: observable,

      setInputData: action,
      setUserExistOrNot: action,
      setIsPosswordVisibility: action,
    });  

    makePersistable(this, {
      name: "instagramLoginData",
      properties: ["inputData" ],
      storage: window.localStorage,
    });
  }

  setInputData = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;
    this.inputData = {
      ...this.inputData,
      [name]: value,
    };
  };

  setUserExistOrNot = (value: boolean) => {
    this.userExistOrNot = value;
  };

  setIsPosswordVisibility = () => {
    this.isPosswordVisibility = !this.isPosswordVisibility;
  };
}

export const userStore = new UserStore();

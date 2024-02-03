export const locationPathName = (name: string) => {
  switch (name) {
    case "/":
      return "home";
    case "/message":
      return "message";
    default:
      return "unknown";
  }
};

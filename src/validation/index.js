export const isValidation = (obj) => {
  if (obj.email === "") {
    return {
      target: "email",
      message: "Email is required",
    };
  }
  if (obj.password === "") {
    return {
      target: "password",
      message: "Password is required",
    };
  }
  return false;
};

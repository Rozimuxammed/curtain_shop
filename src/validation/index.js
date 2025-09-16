export const isValidation = (obj) => {
  if (obj.fullname === "") {
    return {
      target: "fullname",
      message: "Ism va familiya kiriting",
    };
  }
  
  if (obj.email === "") {
    return {
      target: "email",
      message: "Email kiriting",
    };
  }
  if (obj.password === "") {
    return {
      target: "password",
      message: "Parol kiriting",
    };
  }

  if (obj.confirmPassword === "") {
    return {
      target: "confirmPassword",
      message: "Parolni tasdiqlang",
    };
  }
  return false;
};

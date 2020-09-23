export const loginService = async (username, password) => {
  const user = "admin";
  const pass = "minhaj2020";
  console.log(">>>", username, password);
  try {
    if (user === username && password === pass) {
      return { user: username, isLogin: true };
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};

import axios from "axios";
import api from "../api";

//user login
export const USER_LOGIN = (formData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}${api.login}`, formData)
      .then((res) => {
        if (res.status === 201) {
          resolve(res);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

//get current user data by id
export const GET_USER = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}${api.getUser}${id}`)
      .then((res) => {
        if (res.status === 200) {
          resolve(res);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

//user register
export const USER_REGISTER = (formData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}${api.register}`, formData)
      .then((res) => {
        if (res.status === 201) {
          resolve(res);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

//forgot password
export const FORGOT_PASSWORD = (formData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}${api.forgotPassword}`, formData)
      .then((res) => {
        if (res.status === 201) {
          resolve(res);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

//reset password
export const RESET_PASSWORD = (id, password) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${process.env.REACT_APP_API_URL}${api.resetPassword}${id}`, {
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          resolve(res);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

//update user
export const UPDATE_USER = (id, formData) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${process.env.REACT_APP_API_URL}${api.updateUser}${id}`, formData)
      .then((res) => {
        if (res.status === 200) {
          resolve(res);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

//update password
export const UPDATE_PASSWORD = (id, currentPassword, newPassword) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${process.env.REACT_APP_API_URL}${api.updatePassword}${id}`, {
        currentPassword,
        newPassword,
      })
      .then((res) => {
        if (res.status === 200) {
          resolve(res);
        } else {
          reject(res.error);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

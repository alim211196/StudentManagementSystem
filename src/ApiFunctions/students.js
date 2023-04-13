import axios from "axios";
import api from "../api";

//create student
export const CREATE_STUDENT = (formData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}${api.addStudent}`, formData)
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

//get students
export const GET_STUDENTS = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}${api.getStudents}`)
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

//get student by id
export const GET_STUDENT_BY_ID = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}${api.getStudent}${id}`)
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

//update student 
export const UPDATE_STUDENT = (id, formData) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}${api.updateStudent}${id}`,
        formData
      )
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

//delete student
export const DELETE_STUDENT = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}${api.deleteStudent}${id}`)
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


//post comment api
export const POST_COMMENT = (formData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}${api.addComment}`, formData)
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


//get comments
export const GET_COMMENTS = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}${api.getComments}`)
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


//delete student
export const DELETE_COMMENT = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}${api.deleteComment}${id}`)
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
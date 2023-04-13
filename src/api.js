const api = {
  //create student api
  addStudent: "/students/add",

  //get students
  getStudents: "/students/get-students",

  //get student by id
  getStudent: "/students/get-student/",

  //update student by id
  updateStudent: "/students/update-student/",

  //delete student
  deleteStudent: "/students/delete-student/",

  //user register
  register: "/user/register",

  //get user by id
  getUser: "/user/get-user/",

  //update user
  updateUser: "/user/update-user/",

  //update password
  updatePassword: "/user/update-password/",

  //user login
  login: "/user/login",

  //forgot password
  forgotPassword: "/user/forgot-password/",

  //reset password
  resetPassword: "/user/reset-password/",

  //post comment
  addComment: "/students/contact/add",

  //get comments
  getComments: "/students/contact/get-comments",

  //delete comment
  deleteComment: "/students/contact/delete-comment/",
};
export default api;

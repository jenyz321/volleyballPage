import axios from "axios";

export default {
  // Gets all books
  getSchedules: function() {
    return axios.get("/api/schedule");
  },
  // Gets the book with the given id
  getSchedule: function(id) {
    return axios.get("/api/schedule/" + id);
  },
  // Deletes the book with the given id
  deleteSchedules: function(id) {
    return axios.delete("/api/schedule/" + id);
  },
  // Saves a book to the database
  saveAddGames: function(scheduleData) {
    return axios.post("/api/schedule", scheduleData);
  },
  getAddGames: function() {
    return axios.get("/api/schedule");
  },
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Authenticates a user
  authenticateUser: function(userData) {
    return axios.post("/auth/login", userData);
  },
  // Sign up a user
  signUp: function(userData) {
    return axios.post("/auth/signup", userData);
  }

};

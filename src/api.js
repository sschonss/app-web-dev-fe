// src/api.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  getTopics() {
    return apiClient.get("/topics");
  },
  getTopic(id) {
    return apiClient.get(`/topics/${id}`);
  },
  createTopic(topic) {
    return apiClient.post("/topics", topic);
  },
  updateTopic(id, topic) {
    return apiClient.put(`/topics/${id}`, topic);
  },
  deleteTopic(id) {
    return apiClient.delete(`/topics/${id}`);
  },
};

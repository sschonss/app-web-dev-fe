<template>
  <div class="home">
    <h1>Topics</h1>
    <ul class="topic-list">
      <li v-for="topic in topics" :key="topic.id" class="topic-item">
        <div class="topic-info">
          <span class="topic-title">{{ topic.title }}</span>
          <div class="topic-actions">
            <button @click="editTopic(topic.id)" class="edit-button">
              Edit
            </button>
            <button @click="deleteTopic(topic.id)" class="delete-button">
              Delete
            </button>
          </div>
        </div>
      </li>
    </ul>
    <button @click="newTopic" class="new-topic-button">New Topic</button>
  </div>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      topics: [],
    };
  },
  methods: {
    fetchTopics() {
      api.getTopics().then((response) => {
        this.topics = response.data;
      });
    },
    newTopic() {
      this.$router.push("/topics/new");
    },
    editTopic(id) {
      this.$router.push(`/topics/${id}/edit`);
    },
    deleteTopic(id) {
      api.deleteTopic(id).then(() => {
        this.fetchTopics();
      });
    },
  },
  created() {
    this.fetchTopics();
  },
};
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.topic-list {
  list-style-type: none;
  padding: 0;
}

.topic-item {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.topic-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.topic-title {
  font-weight: bold;
}

.topic-actions {
  display: flex;
}

.edit-button,
.delete-button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.edit-button {
  background-color: #4caf50;
  color: white;
}

.delete-button {
  background-color: #f44336;
  color: white;
}

.new-topic-button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  background-color: #2196f3;
  color: white;
  cursor: pointer;
}
</style>

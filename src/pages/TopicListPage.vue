<template>
  <div class="container">
    <h1>Studies</h1>
    <button @click="newTopic">New Topic</button>
    <ul>
      <div class="no-topics" v-if="topics.length === 0">No topics found</div>
      <div class="topic-list">
        <li v-for="topic in topics" :key="topic.id">
          <div class="topic-title">{{ topic.title }}</div>
          <div class="topic-content">{{ topic.content }}</div>
          <div class="buttons">
            <button @click="editTopic(topic.id)">Edit</button>
            <button @click="deleteTopic(topic.id)">Delete</button>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import api from "../api";

export default {
  setup() {
    const router = useRouter();
    const topics = ref([]);

    const fetchTopics = () => {
      api.getTopics().then((response) => {
        topics.value = response.data;
      });
    };

    const newTopic = () => {
      router.push("/topics/new");
    };

    const editTopic = (id) => {
      router.push(`/topics/${id}/edit`);
    };

    const deleteTopic = (id) => {
      api.deleteTopic(id).then(() => {
        fetchTopics();
      });
    };

    onMounted(() => {
      fetchTopics();
    });

    return {
      topics,
      newTopic,
      editTopic,
      deleteTopic,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  padding: 10px;
}

button {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-left: 10px;
  padding: 5px 10px;
}

button:hover {
  background-color: #0056b3;
}

button:active {
  background-color: #004286;
}

button:focus {
  outline: none;
}

/* container */
.container {
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  /* centralizar o conteúdo */
  display: flex;
  flex-direction: column;
}

/* no topics */

.no-topics {
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  padding: 10px;
}

/* topic list */

.topic-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
}

.topic-title {
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 24px;
}

.topic-content {
  padding-bottom: 10px;
  overflow: auto;
}

.buttons {
  display: flex;
  justify-content: flex-end;
}
</style>

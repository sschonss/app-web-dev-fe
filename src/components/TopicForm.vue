<!-- src/components/TopicForm.vue -->
<template>
  <div class="topic-form">
    <form @submit.prevent="submitForm" class="form">
      <div class="form-group">
        <label for="title" class="form-label">Title:</label>
        <input type="text" v-model="topic.title" class="form-input" required />
      </div>
      <div class="form-group">
        <label for="content" class="form-label">Content:</label>
        <textarea
          v-model="topic.content"
          class="form-input"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn">
        {{ isEdit ? "Update" : "Create" }}
      </button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import api from "../api";

export default {
  props: {
    id: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const topic = ref({
      title: "",
      content: "",
      finished: false,
    });
    const isEdit = ref(!!props.id);

    const fetchTopic = () => {
      if (isEdit.value) {
        api.getTopic(props.id).then((response) => {
          topic.value = response.data;
        });
      }
    };

    const submitForm = () => {
      if (isEdit.value) {
        api.updateTopic(props.id, topic.value).then(() => {
          window.location.href = "/";
        });
      } else {
        api.createTopic(topic.value).then(() => {
          window.location.href = "/";
        });
      }
    };

    onMounted(() => {
      fetchTopic();
    });

    return {
      topic,
      isEdit,
      submitForm,
    };
  },
};
</script>

<style scoped>
/* Estilos para o formulário */
.topic-form {
  max-width: 500px;
  margin: 0 auto;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

.form-label {
  font-weight: bold;
}

.form-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

.form-checkbox {
  margin-left: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>

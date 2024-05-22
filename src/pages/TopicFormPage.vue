<!-- src/pages/TopicFormPage.vue -->
<template>
  <div class="topic-form-page">
    <h1>{{ id ? "Edit Topic" : "New Topic" }}</h1>
    <button @click="$router.back()" class="btn">Back</button>
    <TopicForm :id="id" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import TopicForm from "../components/TopicForm.vue";

export default {
  components: {
    TopicForm,
  },
  setup() {
    const route = useRoute();
    const id = computed(() => route.params.id);

    return {
      id,
    };
  },
};
</script>

<style scoped>
.topic-form-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.btn {
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}

.topic-form {
  max-width: 500px;
  margin: 0 auto;
}
</style>

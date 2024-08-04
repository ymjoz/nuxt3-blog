<!-- eslint-disable indent -->
<template>
  <div>
    <p>todo list</p>
    <ul>
      <li v-for="book in books" :key="book.title">
        {{ book.title }} - {{ book.author }}
      </li>
    </ul>
    <ul>
      <li v-for="todo in todos" :key="todo.title">
        <input type="checkbox" :checked="todo.done"> {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

  export default {
    data() {
      return {
        books: [
          { title: "Vue 3 Guide", author: "Evan You" },
          { title: "Nuxt.js Guide", author: "Sebastian Chopin" },
          { title: "Vite Guide", author: "Evan You" },
          { title: "Vue Router Guide", author: "Eduardo San Martin Morote" }
        ],
        todos: [
          { title: "Learn Vue 3", done: true },
          { title: "Learn Nuxt.js", done: false },
          { title: "Learn Vite", done: false },
          { title: "Learn Vue Router", done: false }
        ]
      };
    }
  };
</script>

<style scoped>

  p {
    color: rgb(26, 130, 109);
    font-size: 3em;
  }

  ul {
    list-style-type: none;
  }

  ul li {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
  }

</style>

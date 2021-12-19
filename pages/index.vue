<template>
  <section class="container">
    <h1>ToDoList</h1>
    <div>
      <input type="text" name="addName" v-model="content" placeholder="Please add Task">
      <button @click="addTask">Add</button>
    </div>
    <div>
      <button>All</button>
      <button>ToDo</button>
      <button>Doing</button>
      <button>Done</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Time</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in todos" :key="index">
          <td>{{ item.content }}</td>
          <td>{{ item.createdTime }}</td>
          <td><button>{{ item.status }}</button></td>
          <td><button>削除</button></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data: function() {
    return {
      content: ''
    }
  },
  // todosの中身が変わるたびに描写(vuexからmutationsを呼び出す)
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    addTask: function() {
      // 何かしら入力がある場合はstoreに保存
      if (this.content != "") {
        this.$store.commit("addTask", {
          content: this.content
        });
        this.content = "";
      }
    }
  }
}
</script>

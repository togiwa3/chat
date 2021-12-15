<template>
  <section class="container">
    <h1>ToDoList</h1>
    <div>
      <input type="text" placeholder="Please add Task">
      <button>追加</button>
    </div>
    <div>
      <button>ALL</button>
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
        <tr>
          <td>Test</td>
          <td>2021-12-15 22:00</td>
          <td><button>ToDo</button></td>
          <td><button>Delete</button></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
export default {}
</script>

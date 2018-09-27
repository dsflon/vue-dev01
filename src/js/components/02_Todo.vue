<template>
  <div class="todo">
    <h1>TODO List</h1>

    <form v-on:submit.prevent>
        <input type="text" v-model="newItem">
        <button v-on:click="addItem">Add</button>
    </form>

    <hr class="f-mt20 f-mb20">

    <ul class="f-pd20 f-mt20">
        <li v-for="(todo,index) in todos">
            <input type="checkbox" v-model="todo.isDone">
            <span v-bind:class="{done: todo.isDone}">{{ todo.item }}</span>
            <button v-on:click="deleteItem(index)">Delete</button>
        </li>
    </ul>

    <!-- <hr class="f-mb20"> -->
    <!-- <pre>{{ $data }}</pre> -->

  </div>
</template>

<script>
export default {
    data () {
        return {
            newItem: "",
            todos: []
        }
    },
    methods: {
        addItem: function(e) {
            if(this.newItem == "") return;
            let todo = {
                item: this.newItem,
                isDone: false // false: タスク未完了
            }
            this.todos.push(todo)
            this.newItem = ""
        },
        deleteItem: function(index){
            this.todos.splice(index,1)
        }
    }
}
</script>

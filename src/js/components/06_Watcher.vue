<template>
  <div class="todo">
    <h1>Watcher</h1>

    <hr>

    <p>
        FirstName: <input type="text" v-model:value="firstName">
    </p>
    <br>
    <p>
        LastName: <input type="text" v-model:value="lastName">
    </p>
    <br>
    <br>
    <p>FullName (watch): {{ fullName }}</p>
    <br>
    <p>FullName (computed): {{ fullNameComputed }}</p>

    <!-- <hr class="f-mb20">
    <pre>{{ $data }}</pre> -->

  </div>
</template>

<script>
export default {
    data () {
        return {
            firstName: "",
            lastName: "",
            fullName: ""
        }
    },
    watch: { //watchの場合
        firstName: function(value) {
            this.fullName = value + " " + this.lastName
        },
        lastName: function(value) {
            this.fullName = this.firstName + " " + value
        }
    },
    computed: { //算出プロパティの場合
        fullNameComputed: function(value) {
            return this.firstName + " " + this.lastName
        }
    }
}
</script>

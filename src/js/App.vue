<template>
    <div id="app" style="padding: 20px 20px 100px;">
        <img src="../images/logo.png">
        <!-- <HelloWorld /> -->
        <Todo />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Todo from './components/Todo'

export default {
    name: 'App',
    components: {
        HelloWorld,
        Todo
    }
}
</script>

<!--
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
-->

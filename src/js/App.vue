<template>
    <div id="app" style="padding: 20px 20px 100px;">
        <img src="../images/logo.png">
        <!-- <HelloWorld /> -->
        <!-- <Todo /> -->
        <bitcoin />
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Todo from './components/Todo'
import bitcoin from './components/bitcoin'

export default {
    name: 'App',
    components: {
        // HelloWorld,
        // Todo,
        bitcoin
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

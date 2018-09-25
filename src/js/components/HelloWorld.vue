<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <!-- v-bind -->
    <hr class="f-mt20">
    <section>
        <h2 class="f-font_b f-font_l f-mb10">v-bind</h2>
        <!-- NG <input type="text" value="Welcome to Your Vue.js App" /> -->
        <input type="text" v-bind:value="msg" />
    </section>

    <!-- v-if -->
    <hr class="f-mt20">
    <section>
        <h2 class="f-font_b f-font_l f-mb10">v-if</h2>
        <p v-if="toggle || toggle != 0">v-if: true</p>
        <p v-if="!toggle || toggle == 0">v-if: false</p>
    </section>

    <!-- v-show -->
    <hr class="f-mt20">
    <section>
        <h2 class="f-font_b f-font_l f-mb10">v-show</h2>
        <p v-show="toggle">v-show: true</p>
        <p v-show="!toggle">v-show: false</p>
    </section>

    <!-- v-for array -->
    <hr class="f-mt20">
    <section>
        <h2 class="f-font_b f-font_l f-mb10">v-for array</h2>
        <ol>
            <li v-for="color in colors">{{color}}</li>
        </ol>
    </section>

    <!-- v-for object -->
    <hr class="f-mt20">
    <section>
        <h2 class="f-font_b f-font_l f-mb10">v-for object</h2>
        <ul>
            <li v-for="value in user">{{value}}</li>
        </ul>
        <ul class="f-mt5">
            <li v-for="(value, key) in user">
                <strong>{{key}}</strong> : {{value}}
            </li>
        </ul>
    </section>

    <!-- v-on -->
    <hr class="f-mt20">
    <section>
        <h2 class="f-font_b f-font_l f-mb10">v-on</h2>
        <button v-on:click="onclick">Click !</button>
        <p>
            {{now}}
        </p>
    </section>

    <!-- 双方向data binding -->
    <hr class="f-mt20">
    <section>
        <h2 class="f-font_b f-font_l f-mb10">双方向data binding</h2>
        <p><input type="text" v-model="message"></p>
        <p><input type="text" v-model="message"></p>
        <pre>{{ $data.message }}</pre>
    </section>

  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        // return {
        //   msg: 'Welcome to Your Vue.js App'
        // }
        return {
            msg: 'Welcome to Your Vue.js App',
            toggle: true,
            colors: ["red","green","blue"],
            user: {
                firstName: "Daiki",
                lastName: "Saito",
                age: 30
            },
            now: "",
            message: "hello vue.js!"
        }
    },
    methods: {
        onclick: function(e){
            this.now = new Date().toLocaleString()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
-->

<template>
    <div>
        <br><hr><br>

        <button v-on:click='clickHandler($event,"text text")'>Click !</button>

        <p>
            {{ message }}
        </p>

        <br><hr><br>

        <button v-on:click='clickHandler2()'>Now !</button>
        <button v-on:click.once='clickHandler2()'>Now (once) !</button>
        <p>
            {{ date }}
        </p>

        <br><hr><br>
        <!-- <input type="text" @keyup.27='clear' v-model="inputTxt"> -->
        <input type="text" @keyup.esc='clear' v-model="inputTxt">
        <!-- <p><input type="text" @keyup.esc.space.up='clear' v-model="inputTxt"></p> -->
        escapeでテキストクリア

        <!--
        <hr class="f-mb20">
        <pre>{{ $data }}</pre> -->

    </div>
</template>

<script>
export default {
    data () {
        return {
            message: "",
            date: "",
            inputTxt: ""
        }
    },
    methods: {
        clickHandler: function($event,message) {
            this.message = message
            console.log($event);
        },
        clickHandler2: function() {
            this.date = new Date().toLocaleTimeString()
        },
        clear: function() {
            this.inputTxt = ""
        }
    }
}
</script>

<template>
  <div class="todo">
    <h1>Qiita API</h1>

    <hr>

    <p>Search: <input type="text" v-model="keyword"></p>

    <hr class="f-mb20">

    <p class="f-mb20">{{ message }}</p>

    <ul>
        <li class="f-mb20" v-for="item in items">
            <a :href="item.url" target="_blank">・{{ item.title }}</a> likes:{{ item.likes_count }}
        </li>
    </ul>

<!--
    <hr class="f-mb20">
    <pre>{{ $data }}</pre> -->

  </div>
</template>

<script>
export default {
    data () {
        return {
            items: null,
            keyword: "",
            message: "",
            inputTimer: null
        }
    },
    watch: {
        keyword: function(newKeyword,oldKeyword) {
            console.log(newKeyword);
            this.message = "Wainting for you to stop typing..."
            // this.debouncedGetAnswer()

            clearTimeout(this.inputTimer)
            this.inputTimer = setTimeout( this.getAnswer.bind(this), 1000)
        }
    },
    created: function() { // mountedでも可（Domにアクセスしないならcreatedのほうが良い）
        // this.keyword = "javascript"
        // this.getAnswer()
        // this.debouncedGetAnswer = _.debounce( this.getAnswer, 1000 ) // lodash.js
    },
    methods: {
        getAnswer: function() {
            if( this.keyword === "") {
                this.items = null
                this.message = ""
                return
            }
            this.message = "Loading..."

            let params = { page: 1, per_page: 20, query: this.keyword },
                param = "?"
            for (var key in params) param += key+"="+params[key]+"&"

            fetch("https://qiita.com/api/v2/items"+param)
            .then( (response) => {
                return response.json();
            })
            .then( (json) => {
                console.log(json);
                this.message = ""
                this.items = json
            })
            .catch( (e) => {
                console.error(e);
                this.message = "Error! " + e
                this.items = null
            });

        }
    }

}
</script>

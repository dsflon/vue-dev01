<template>
  <div class="todo">
    <h1>Watcher Deep</h1>

    <hr>

    <ul>
        <li v-for="color in colors">
            {{ color.name }}
        </li>
    </ul>


    <!-- <hr class="f-mb20">
    <pre>{{ $data }}</pre> -->

  </div>
</template>

<script>
export default {
    data () {
        return {
            colors: [
                { name: "Red" },
                { name: "Green" },
                { name: "Blue" }
            ]
        }
    },
    watch: {
        colors: {
            handler: function( newValue, oldValue ) {
                console.log(JSON.stringify(newValue,null,"\t"), JSON.stringify(oldValue,null,"\t"));
            },
            deep: true,
            immediate: true
        }
    }
}
</script>

<template>
  <div class="todo">
    <h1>Meter</h1>

    <hr>

    <p>
        <input type="number" v-model:value="km">km
    </p>
    <br>
    <p>
        <input type="number" v-model:value="m">m
    </p>
    <br>
    <p>
        <input type="number" v-model:value="mm">mm
    </p>

    <!-- <hr class="f-mb20">
    <pre>{{ $data }}</pre> -->

  </div>
</template>

<script>
export default {
    data () {
        return {
            km: 0,
            m: 0,
            mm: 0
        }
    },
    watch: {
        km: function(value) {
            this.km = value
            this.m = value * 1000
            this.mm = value * 1000000
        },
        m: function(value) {
            this.km = value / 1000
            this.m = value
            this.mm = value * 1000
        },
        mm: function(value) {
            this.km = value / 1000000
            this.m = value / 1000
            this.mm = value
        }
    }
}
</script>

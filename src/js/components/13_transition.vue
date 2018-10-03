<template>
    <div>
        <br><hr><br>

        <button v-on:click="show=!show">Change</button>
        <transition>
            <p v-show="show">(v-show) Hello Transition</p>
        </transition>
        <transition>
            <p v-if="show">(v-if) Hello Transition</p>
        </transition>

        <!-- <hr class="f-mb20"> -->
        <!-- <pre>{{ $data }}</pre> -->

    </div>
</template>

<script>
export default {
    data () {
        return {
            show: false
        }
    }
}
</script>

<template>
  <div>

    <p>
        Hello <span v-bind:class="{'f-font_l': isLarge}">Vue.js!</span>
    </p>
    <br><hr><br>
    <p>
        Hello <span v-bind:class="{'f-font_l': isLarge, 'f-txt_red': hasError}">Vue.js!</span>
    </p>
    <br><hr><br>
    <p>
        <span>複数指定</span><br><br>
        Hello <span class="f-box" v-bind:class="{'f-font_l': isLarge, 'f-txt_red': hasError}">Vue.js!</span>
    </p>
    <br><hr><br>
    <p>
        <span>配列で指定</span><br><br>
        Hello <span v-bind:class="[largeClass,redClass]">Vue.js!</span>
    </p>
    <br><hr><br>
    <p>
        <span>オブジェクトで指定</span><br><br>
        Hello <span v-bind:class="classObj">Vue.js!</span>
    </p>
    <br><hr><br>
    <p>
        <span>三項演算子で指定</span><br><br>
        Hello <span v-bind:class="isLarge ? 'f-font_l' : ''">Vue.js!</span><br>
        Hello <span v-bind:class="[isLarge ? 'f-font_l' : '', 'f-txt_red']">Vue.js!</span>
    </p>
    <br><hr><br>

<!--
    <hr class="f-mb20">
    <pre>{{ $data }}</pre> -->

  </div>
</template>

<script>
export default {
    data () {
        return {
            isLarge: true,
            hasError: true,
            largeClass: "f-font_l",
            redClass: "f-txt_red",
            classObj: {
                'f-font_l': true,
                'f-txt_red': true
            }
        }
    }
}
</script>

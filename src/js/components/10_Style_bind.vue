<template>
  <div>

    <p>
        Hello <span :style="{color:color,fontSize:fontSize + 'px'}">Vue,js !</span>
    </p>
    <br><hr><br>

    <p>
        <span>オブジェクトで指定</span><br><br>
        Hello <span :style="styleObj">Vue,js !</span>
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
            color: "blue",
            fontSize: "36",
            styleObj: {
                color: "blue",
                fontSize: "36px"
            }
        }
    }
}
</script>

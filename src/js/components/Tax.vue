<template>
  <div class="todo">
    <h1>Tax</h1>

    <p>
        base price: <input type="text" v-model="basePrice">
    </p>

    <p>
        tax included price: <input type="text" v-model="taxIncludedPrice">
    </p>

    <!-- <hr class="f-mb20"> -->
    <!-- <pre>{{ $data }}</pre> -->

  </div>
</template>

<script>
export default {
    data () {
        return {
            basePrice: 100
        }
    },
    computed: {
        taxIncludedPrice: {
            get: function() {
                return parseInt(this.basePrice * 1.08)
            },
            set: function(taxIncludedPrice) {
                console.log(taxIncludedPrice);
                this.basePrice = Math.ceil(taxIncludedPrice / 1.08)
            }
        }
    }
}
</script>

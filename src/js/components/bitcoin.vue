<template>
    <div class="todo">
        <h1>Bitcoin APP</h1>

        <ul>
            <li v-for="(rate, currency) in bpi">
                {{ currency }} : {{ rate.rate_float }}
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
            bpi: null
        }
    },
    mounted: function() { // componentDidMount

        let Fetch = () => {
            fetch("http://api.coindesk.com/v1/bpi/currentprice.json")
            .then( (response) => {
                return response.json();
            })
            .then( (json) => {
                console.log(json.bpi);
                this.bpi = json.bpi;
            })
            .catch( (e) => {
                console.error(e);
            });
        }

        Fetch();
        setInterval( Fetch.bind(this), 5000)
    }
}
</script>

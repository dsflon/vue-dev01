<template>
    <div class="todo">
        <h1>Bitcoin APP</h1>

        <section v-if="hasError">
            Error. {{ hasError }}
        </section>
        <section v-else>
            <div v-if="loading">
                Loading...
            </div>
            <div v-else>
                <ul>
                    <li v-for="(rate, currency) in bpi">
                        {{ currency }} : {{ rate.rate_float | currencyDecumal }}
                    </li>
                </ul>
            </div>
        </section>
        <!-- <hr class="f-mb20">
        <pre>{{ $data }}</pre> -->
    </div>
</template>

<script>
export default {
    data () {
        return {
            bpi: null,
            hasError: false,
            loading: true
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
            .then( (json) => {
                this.loading = false;
            })
            .catch( (e) => {
                console.error(e);
                this.hasError = e;
                this.loading = false;
            });
        }

        Fetch();
        // setInterval( Fetch.bind(this), 5000)
    },
    filters: {
        currencyDecumal(value) {
            return value.toFixed(2)
        }
    }
}
</script>

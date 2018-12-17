
<!-- <template> -->
    <!-- <div id="app" style="padding: 20px 20px 100px;"> -->
        <!-- <figure class="f-mb20"><img src="../images/logo.png"></figure> -->
        <!-- <HelloWorld /> -->
        <!-- <Todo /> -->
        <!-- <bitcoin /> -->
        <!-- <Tax /> -->
        <!-- <Meter /> -->
        <!-- <Watcher /> -->
        <!-- <WatcherDeep /> -->
        <!-- <QiitaApi /> -->
        <!-- <ClassBind /> -->
        <!-- <StyleBind /> -->
        <!-- <OnEvent /> -->
        <!-- <Form /> -->
        <!-- <Transition /> -->
    <!-- </div> -->
<!-- </template> -->
<template>
    <div id="app">
        asdfasdfasdf
        <carousel
        :per-page="3"
        :autoplay="true"
        :autoplayTimeout="2000"
        :loop="true"
        :navigationEnabled="true"
        :navigationPrevLabel="左"
        :navigationNextLabel="右"
        :mouse-drag="false">
          <slide>
            Slide 1 Content
          </slide>
          <slide>
            Slide 2 Content
          </slide>
          <slide>
            Slide 3 Content
          </slide>
          <slide>
            Slide 4 Content
          </slide>
          <slide>
            Slide 5 Content
          </slide>
          <slide>
            Slide 6 Content
          </slide>
        </carousel>
    </div>
</template>

<script>
// import HelloWorld from './components/01_HelloWorld'
// import Todo from './components/02_Todo'
// import bitcoin from './components/03_bitcoin'
// import Tax from './components/04_Tax'
// import Meter from './components/05_Meter'
// import Watcher from './components/06_Watcher'
// import WatcherDeep from './components/07_Watcher_Deep'
// import QiitaApi from './components/08_Qiita_api'
// import ClassBind from './components/09_Class_bind'
// import StyleBind from './components/10_Style_bind'
// import OnEvent from './components/11_event'
// import Form from './components/12_form'
// import Transition from './components/13_transition.vue'

import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'App',
    components: {
        // HelloWorld,
        // Todo,
        // bitcoin,
        // Tax,
        // Meter
        // Watcher,
        // WatcherDeep,
        // QiitaApi,
        // ClassBind,
        // StyleBind,
        // OnEvent,
        // Form,
        // Transition,
        Carousel,
        Slide
    },

    mounted: function() { // componentDidMount
    },
    methods: {
    }
}
</script>

<!--
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
-->

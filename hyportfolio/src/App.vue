<template>
    <div id="app">
        <Navigation />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <Footer />
    </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "App",
    components: {
        Navigation,
        HelloWorld,
        Footer,
    },
};
</script>

<style></style>

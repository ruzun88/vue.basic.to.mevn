<template>
    <div class="home">
        <h1>Home</h1>
        <p class="blue lighten-5 red--text">Lorem ipsum dolor sit amet.</p>
        <p class="blue white--text">Lorem ipsum dolor sit amet.</p>
        <p class="blue darken-3">Lorem ipsum dolor sit amet.</p>

        <v-btn color="blue" class="hidden-xs-only">Visibility -xs-only</v-btn>
        <v-btn color="blue" class="hidden-sm-only">Visibility -sm-only</v-btn>
        <v-btn color="blue" class="hidden-md-and-down">Visibility -md-and-down</v-btn>

        <v-container>
            <v-layout row wrap>
                <v-flex xs12 md6 class="primary white--text">
                    <div>{{message}}</div>
                </v-flex>
                <v-flex xs4 md2 class="green white--text">
                    <div>{{message}}</div>
                </v-flex>
                <v-flex xs4 md2 class="primary white--text">
                    <div>{{message}}</div>
                </v-flex>
                <v-flex xs4 md2 class="primary white--text">
                    <div>{{message}}</div>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs4 md3 class="teal white--text">
                    <div>{{message}}</div>
                </v-flex>
                <v-flex xs4 md3 class="teal white--text">
                    <div>{{message}}</div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<style>
    h1{ margin: 10px;}
    p {padding : 10px; margin: 5px 10px;}
    button {padding : 10px; margin: 5px 10px;}
</style>
<script>
export default {
    data() {
        return {
            message: 'Lorem ipsum color sit amet'
        }
    },
}
</script>
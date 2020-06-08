<template>
    <div>
        <v-btn rounded @click="roundBtnClick">Round 버튼</v-btn>
        <v-btn class="teal white--text">기본버튼</v-btn>
        <v-btn color="teal" text>기본버튼</v-btn>
        <v-btn color="teal" dark>
            <v-icon>bluetooth</v-icon>
            <span>bluetooth</span>
        </v-btn>
        <v-btn fab color="teal" dark>
            <v-icon>bluetooth</v-icon>
        </v-btn>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$vuetify.breakpoint)
    },
    methods: {
        roundBtnClick(){
            console.log("round button");
        }
    },
}
</script>
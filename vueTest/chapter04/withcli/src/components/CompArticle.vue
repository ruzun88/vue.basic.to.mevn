<template>
    <div class="container">
        <div>
            기사입니다. 무슨 말인진 몰겠지만 기사네요.
        </div>
        <child-component/>
    </div>
</template>
<script>
import ChildComponent from './ChildComponent'
export default {
    components: {
        ChildComponent
    }
}
</script>
<style scoped>
    div {
        background: #00897b;
        color:white;
        padding: 10px 20px;
    }
</style>
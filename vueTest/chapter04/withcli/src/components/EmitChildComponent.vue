<template>
    <div class="box">
        <button @click="sendmessage()">부모 컴포넌트로 데이터 전달</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: 'child component 에서 보낸 메시지'
        }
    },
    methods: {
        sendmessage: function() {
            this.$emit('sendmessage', this.message);
        }
    },
}
</script>
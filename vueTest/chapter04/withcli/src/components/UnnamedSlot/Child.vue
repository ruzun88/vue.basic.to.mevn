<template>
    <div>
        <p>Child component</p>
        <!-- 아래에 slot 통해 app.vue에 정의한 p 데이터 표시됨 -->
        <slot></slot>
        <slot></slot>
    </div>
</template>
<style scoped>
    p{ border: 3px solid teal; padding: 4px;}
</style>
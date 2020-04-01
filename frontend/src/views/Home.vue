<template>
    <div class="home-container">
        <div class="content">
            <h1>Home</h1>
            <p>data: {{}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
                error: ''
            };
        }
    }
</script>

<style lang="scss" scoped>
    .home-container {
        padding-top: 16px;
        width: 100%;
        max-width: 600px;
        height: 100vh;
        margin: 0 auto;
    }

    .home-container .content {
        width: 100%;
        padding: 96px;
        background: #f0f0f5;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
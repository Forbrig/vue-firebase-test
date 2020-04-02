<template>
    <div class="login-container">
        <div class="content">
            <form @submit.prevent="pressed">
                <h1>Login</h1>
                <input required class="input" type="email" v-model="email" placeholder="Email">
                <input required class="input" type="password" v-model="password" placeholder="Password">

                <button class="button" type="submit">Login</button>
                <div v-if="error" class="error">{{error.message}}</div>
                <span class="register-text">Need an account? Click here to <router-link to="/register">register</router-link>.</span>
            </form>
        </div>
    </div>
</template>

<script>
    import * as firebase from "firebase/app";
    import "firebase/auth";

    export default {
        data() {
            return {
                email: '',
                password: '',
                error: ''
            };
        },
        methods: {
            async pressed() {
                await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(data => {
                    console.log(data);
                    this.$router.replace({name: "Home"});
                }).catch (error => {
                    this.error = error;
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-container {
        width: 100%;
        max-width: 600px;
        height: 100vh;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login-container .content {
        width: 100%;
        padding: 96px;
        background: #f0f0f5;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .login-container .content form {
        width: 100%;
    }

    .login-container .content form input {
        margin-top: 8px;
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
    }

    .login-container .content .register-text {
        font-size: 18px;
        color: #737380;
        line-height: 32px;
        width: 100%;
        display: block;
        text-align: center;
    }
</style>
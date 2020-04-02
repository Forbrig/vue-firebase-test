<template>
    <div class="register-container">
        <div class="content">
            <form @submit.prevent="pressed">
                <h1>Register</h1>
                <input required class="input" type="email" v-model="email" placeholder="Email">
                <input required class="input" type="password" v-model="password" placeholder="Password">
                <button class="button" type="submit">Register</button>
                <div v-if="error" class="error">{{error.message}}</div>
                <span class="login-text">Already have an account? Click here to <router-link to="/login">login</router-link>.</span>

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
            }
        },
        methods: {
            pressed() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.replace({name: "Home"});
                }).catch(error => {
                    this.error = error;
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .register-container {
        width: 100%;
        max-width: 600px;
        height: 100vh;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .register-container .content {
        width: 100%;
        padding: 96px;
        background: #f0f0f5;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .register-container .content form {
        width: 100%;
    }

    .register-container .content form input {
        margin-top: 8px;
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
    }

    .register-container .content .login-text {
        font-size: 18px;
        color: #737380;
        line-height: 32px;
        width: 100%;
        display: block;
        text-align: center;
    }
</style>
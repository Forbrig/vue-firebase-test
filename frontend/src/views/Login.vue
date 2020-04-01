<template>
    <div>
        Login
        <form @submit.prevent="pressed">
            <div class="email">
                <input type="email" placeholder="email" v-model="email">
            </div>
            <div class="password">
                <input type="password" placeholder="password" v-model="password">
            </div>
            <button type="submit">Login</button>
            <div v-if="error" class="error">{{error.message}}</div>
            <span>Need an account? Click here to <router-link to="/register">register</router-link></span>

        </form>
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
            pressed() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
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

</style>
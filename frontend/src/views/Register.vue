<template>
    <div>
        <div v-if="error" class="error">{{error.message}}</div>
        Register
        <form @submit.prevent="pressed">
            <div class="email">
                <input type="email" v-model="email" placeholder="email">
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password">
            </div>
            <button type="submit">Register</button>
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

</style>
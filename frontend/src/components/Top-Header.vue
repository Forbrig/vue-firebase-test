<template>
    <nav class="navbar">
        <div>
            Logged in: 
            <span v-if="loggedIn">Yes</span>
            <span v-else>No</span>
        </div>
        <div>
            <button class="button-signout" @click="signOut">Sign out</button>
        </div>
    </nav>
</template>

<script>
    import * as firebase from "firebase/app";
    import "firebase/auth";
    
    export default {
        created() {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    this.loggedIn = true;
                } else {
                    this.loggedIn = false;
                }
            });
        },
        data() {
            return {
                loggedIn: false
            }
        },
        methods: {
            async signOut() {
                try {
                    const data = firebase.auth().signOut();
                    console.log(data);
                    this.$router.replace({name: "Login"})
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    nav {
        width: 100%;
        height: 45px;
        display: flex;
        background-color: #fff;
        justify-content: space-between;
        align-items: center;
    }

    nav div {
        display: inline-block;
        padding: 18px 30px;
        font-weight: bold;
        font-size: 16px;
        text-decoration: none !important;
        line-height: 1;
        text-transform: uppercase;
        background-color: transparent;
    }

    .button-signout {
        width: 100%;
        height: 30px;
        background: #e02041;
        border: 0;
        padding: 0px 10px;
        border-radius: 8px;
        color: #FFF;
        display: inline-block;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        transition: filter 0.2s;
        cursor: pointer;
    }

    .button-signout:hover {
        filter: brightness(90%);
    }
</style>
<template>
    <div class="home-container">
        <div class="content">
            <h1>Chat</h1>

            <div v-if="!nickname">
                <p>Inform a nickname to join the chat:</p>

                <form @submit.prevent="updateNickname">
                    <input class="input" v-model="nicknameSubmit" type="text" placeholder="Nickname">
                    <button class="button button-join" type="submit">Join</button>
                </form>
            </div>
            <div v-else>
                <div>
                    Logged as: {{nickname}}<br />
                </div>
                <hr>
                <div class="messages">
                    <h3>Messages</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nickname: '',
                messages: []
            };
        },
        methods: {
            updateNickname() {
                if (this.nicknameSubmit) {
                    this.nickname = this.nicknameSubmit;
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
    .home-container {
        padding-top: 16px;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
    }

    .home-container .content {
        width: 100%;
        padding: 96px;
        background: #f0f0f5;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        // align-items: center;
    }

    .home-container .content h1 {
        text-align: center;
    }
 
    .home-container .content form {
        display: flex;
    }

    .input {
        margin-top: 8px;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
    }

    .button-join {
        width: auto;
        margin-top: 8px;
        height: 60px;
        margin-left: 8px;
    //     border: 1px solid #dcdce6;
    //     border-radius: 8px;
        padding: 0 24px;
    }
</style>
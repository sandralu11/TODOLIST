<template>
    <div class="todo-input">

        <input type="text" placeholder="請輸入代辦事項" v-model.trim="todo" @keyup.enter="submitHandler" v-focus>
    </div>
</template>

<script>
    export default {
        name: 'todoInput',
        data() {
            return {
                todo: '',
            }
        },
        methods: {
            submitHandler() {
                //1--頭尾空白trim掉(v-model.trim)
                if (!this.todo) return
                this.$store.commit('ADD_TODO', {
                    content: this.todo,
                    complete: false
                });
                this.todo = ''
            }

        }
    }
</script>

<style lang="scss">
    .todo-input {
        input {
            width: 60%;
            height: 50px;
            border: none;
            border-radius: 10px;
            padding: 10px;
            background-color: white;
            font-size: 16px;
            &::placeholder {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: #ccc;
                opacity: 1; /* Firefox */
            }
        }
    }
</style>
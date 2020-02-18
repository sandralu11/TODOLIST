<template>
    <div class="todo-item">

        <input type="checkbox" v-model="complete"><label>{{todo.content}}</label>
        <button class="destroy" @click="destroyHandler"></button>
    </div>
</template>

<script>
    export default {
        name: "todoItem",
        props: {
            index: {
                type: Number,
                required: true
            }
        },
        computed: {
            todo() {
                return this.$store.state.todos[this.index]
            },
            //get-set
            complete: {
                get() {
                    return this.todo.complete
                },
                set(val) {
                    this.$store.commit('UPDATE_TODO', {
                        index: this.index,
                        data: {
                            content: this.todo.content,
                            complete: val
                        }
                    })
                }
            }
        },
        methods: {
            destroyHandler() {
                if (confirm(`是否確認刪除 ${this.todo.content}?`))
                    this.$store.commit('DELETE_TODO', this.index)
            }
        }
    }
</script>

<style lang="scss">
    .todo-item {
        width: 60%;
        height: 50px;
        border: none;
        border-radius: 3px;
        padding: 10px;
        background-color: white;
        font-size: 16px;
        margin: 10px auto;
    }
</style>
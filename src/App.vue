<template>
    <div id="app">
        <div id="nav">
            <router-link class="link" to="/all">全部</router-link> |
            <router-link class="link" to="/active">未完成</router-link> |
            <router-link class="link" to="/complete">已完成</router-link>
        </div>
        <todoInput />
        <div id="todoList">
            <todoItem v-for="index in todoIndex" :key="index" :index="index" />
        </div>
    </div>
</template>


<script>
    import todoInput from "@/components/todoInput.vue"
    import todoItem from '@/components/todoItem.vue'
    export default {
        name: 'app',
        components: {
            todoInput,
            todoItem,
        },
        computed: {
            todoIndex() {
                //讀取todoIndex
                return this.$store.getters['todoIndex'];
            }
        },
        //在安裝完成時，去調度INIT_TODOS
        mounted() {
            this.$store.dispatch('INIT_TODOS')
        },
    }
</script>


<style lang="scss">
    @import "~@/style/reset.scss";
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color: #77a88d;
        height: 100vh;
        #nav {
            padding: 80px;
            a {
                font-weight: bold;
                color: #2c3e50;
            }
            a.router-link-exact-active {
                color: #42b983;
            }
            .link {
                background-color: white;
                padding: 10px;
                border-radius: 10px;
            }
        }
        #todoList {
            margin: 50px auto;
        }
    }
</style>

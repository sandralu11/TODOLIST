<template>
    <div class="todo-item">
        <input class="todo-content" type="text" v-model.trim="edit" v-if="edit !== null" v-focus @keyup.enter="submitHandler" @keyup.esc='cancelHandler' @blur='cancelHandler'>
        <template v-else>
            <!-- <input type="checkbox" class="toggle" v-model="complete" /> -->
            <label @dblclick="editHandler">
                <input type="checkbox" v-model="complete" />
                <span class="check">
                    <i class="material-icons">check</i>
                </span>
                <span class="content">{{todo.content}}</span>
            </label>
            <button class="destroy" @click="destroyHandler">
                <i class="material-icons">close</i>
            </button>
        </template>

        <span class="center"></span>
    </div>

</template>
<script>
    import { Checkbox, CheckboxGroup } from "vant";
    export default {
        name: "todoItem",
        components: {
            [Checkbox.name]: " Checkbox",
            [CheckboxGroup.name]: "CheckboxGroup "
        },
        data() {
            return {
                edit: null,
            }
        },
        props: {
            index: {
                type: Number,
                required: true
            }
        },
        computed: {
            todo() {
                return this.$store.state.todos[this.index];
            },
            //get-set
            complete: {
                get() {
                    return this.todo.complete;
                },
                set(val) {
                    this.$store.commit("UPDATE_TODO", {
                        index: this.index,
                        data: {
                            content: this.todo.content,
                            complete: val
                        }
                    });
                }
            }
        },
        methods: {
            destroyHandler() {
                if (confirm(`是否確認刪除 ${this.todo.content}?`))
                    this.$store.commit("DELETE_TODO", this.index);
            },
            editHandler() {
                this.edit = this.todo.content
                // this.cache = this.todo.content
            },
            submitHandler() {
                if (!this.edit) return this.destroyHandler()
                this.$store.commit('UPDATE_TODO', {
                    index: this.index,
                    data: {
                        content: this.edit,
                        complete: this.todo.complete
                    }
                }),
                    this.cancelHandler()
            },
            cancelHandler() {
                this.edit = null
            }
        }
    };
</script>

<style lang="scss">
    .todo-item {
        vertical-align: middle;
        width: 60%;
        height: 50px;
        border: none;
        border-radius: 3px;
        padding: 10px;
        background-color: white;
        font-size: 16px;
        margin: 10px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .todo-content {
            background-color: #fff;
            padding: 15px;
            width: 90%;
            border-radius: 3px;
        }
        label {
            flex-grow: 1;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            position: relative;
            min-width: 0;
            input {
                position: absolute;
                z-index: -5;
                left: 0;
                top: 0;
                opacity: 0;
                &:checked ~ .check i {
                    display: block;
                }
                &:checked ~ .content {
                    text-decoration: line-through;
                    color: #ccc;
                }
            }
            .check {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 1px solid #ccc;
                margin: 0 15px 0 0;
                overflow: hidden;
                i {
                    display: none;
                    color: #53eda8;
                    font-size: 30px;
                }
            }
            .content {
                font-size: 20px;
                line-height: 1;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }

        button {
            align-items: flex-end;
            background-color: white;
            border: none;
            i {
                color: red;
            }
        }
    }
</style>

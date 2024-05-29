<template>
    <div class="login_background" v-show="show" :style="moveStyle">
        <div class="login_box">
            <div class="title">登录</div>
            <el-form class="login_form" :model="loginForm" :rules="loginRules" ref="loginRef">
                <el-form-item prop="username">
                    <el-input placeholder="用户名" v-model="loginForm.username" prefix-icon="el-icon-user" clearable>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input show-password clearable v-model="loginForm.password" prefix-icon="el-icon-lock"
                        placeholder="密码">
                    </el-input>
                </el-form-item>
                <el-form-item class="login_button">
                    <el-button type="success" round plain @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";
    export default {
        name: 'Login',
        data() {
            return {
                loginForm: {
                    username: '',
                    password: '',
                },
                loginRules: {
                    username: [{
                        required: true,
                        message: '请输入用户名',
                        trigger: 'dcy'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'dcy'
                    }],
                },
                show: true,
                moveStyle: {}
            }
        },
        methods: {
            login() {
                this.$refs.loginRef.validate(async valid => {
                    if (!valid) return
                    if (this.username != this.loginForm.username) {
                        this.$store.commit('CLEAR');
                    }
                    this.$store.commit('LOGIN', this.loginForm)
                    this.$refs['loginRef'].resetFields()
                    this.$router.push("/home")
                    this.$message({
                        type: 'success',
                        message: '登陆成功'
                    })
                });
            },
        },
        computed: {
            ...mapState({
                username: (state) => state.username,
            }),
        },
    }
</script>

<style scoped>
    .login_background {
        background-color: #18c7d3;
        border-radius: 7px;
        width: 320px;
        height: 500px;
        position: fixed;
        margin-top: -60px;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
        transition: all 0.5s;
    }

    .login_box {
        padding: 101px 0px;
    }

    .title {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        color: #F6F6F6;
        letter-spacing: 10px;
        padding-bottom: 40px;
    }

    .login_form {
        padding: 0px 30px;
        box-sizing: border-box;
    }

    .login_button {
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
    }
</style>
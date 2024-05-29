<template>
    <div class="register_background" v-show="show" :style="moveStyle">
        <div class="register_box">
            <div class="title">注册</div>
            <el-form class="register_form" :model="registerForm" :rules="registerRules" ref="registerRef">
                <el-form-item prop="username">
                    <el-input placeholder="用户名" v-model="registerForm.username" prefix-icon="el-icon-user" clearable>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input show-password clearable v-model="registerForm.password" prefix-icon="el-icon-lock"
                        placeholder="密码">
                    </el-input>
                </el-form-item>
                <el-form-item prop="confirmPassword">
                    <el-input show-password clearable v-model="registerForm.confirmPassword" prefix-icon="el-icon-lock"
                        placeholder="确认密码">
                    </el-input>
                </el-form-item>
                <el-form-item class="register_button">
                    <el-button type="success" round plain @click="register()">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            var confirmPassword = (rule, value, callback) => {
                if (value !== this.registerForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                registerForm: {
                    username: '',
                    password: '',
                    confirmPassword: ''
                },
                registerRules: {
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
                    confirmPassword: [{
                            required: true,
                            message: '请再次输入密码',
                            trigger: 'dcy'
                        },
                        {
                            validator: confirmPassword,
                            trigger: 'dcy'
                        }
                    ]
                },
                show: false,
                moveStyle: {}
            }
        },
        methods: {
            register() {
                this.$refs.registerRef.validate(async valid => {
                    if (!valid) return
                    this.$message({
                        type: 'success',
                        message: '注册成功'
                    })
                    this.$refs['registerRef'].resetFields()
                    this.$emit('toLogin')
                });
            }
        }
    }
</script>

<style scoped>
    .register_background {
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
        background-color: #18c7d3;
        border-radius: 7px;
        width: 320px;
        height: 500px;
        position: fixed;
        margin-top: -60px;
        transition: all 0.5s;
    }

    .title {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        color: #F6F6F6;
        letter-spacing: 10px;
        padding-bottom: 40px;
    }

    .register_box {
        padding: 72px 0px;
    }

    .register_form {
        padding: 0px 30px;
        box-sizing: border-box;
    }

    .register_button {
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
    }
</style>
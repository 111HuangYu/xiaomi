<template>
    <div class="welcome">
        <el-card class="background_box">
            <BookMark ref="login" :title_1="leftTitle.title_1" :title_2="leftTitle.title_2"
                :title_3_1="leftTitle.title_3_1" :title_3_2="leftTitle.title_3_2" :cover="leftTitle.cover"
                :buttonTitle="leftTitle.buttonTitle" @change=toLogin>
            </BookMark>
            <BookMark ref="register" :title_1="rightTitle.title_1" :title_2="rightTitle.title_2"
                :title_3_1="rightTitle.title_3_1" :title_3_2="rightTitle.title_3_2" :cover="rightTitle.cover"
                :buttonTitle="rightTitle.buttonTitle" @change=toRegister>
            </BookMark>
            <Login ref="loginRef"></Login>
            <Register ref="registerRef" @toLogin="toLogin"></Register>
        </el-card>
    </div>
</template>
<script>
    import BookMark from './bookmark'
    import Login from './login'
    import Register from './register'
    export default {
        name: 'Welcome',
        components: {
            BookMark,
            Login,
            Register
        },
        data() {
            return {
                leftTitle: {
                    title_1: 'mi家',
                    title_2: '欢迎',
                    title_3_1: '来到小米',
                    title_3_2: '商城',
                    cover: require('./images/cover1.jpg'),
                    buttonTitle: 'SIGN IN'
                },
                rightTitle: {
                    title_1: '选择',
                    title_2: '最适合',
                    title_3_1: '你的',
                    title_3_2: '产品',
                    cover: require('./images/cover2.jpg'),
                    buttonTitle: 'SIGN UP'
                },
            }
        },
        methods: {
            toLogin() {
                this.$refs.loginRef.show = true
                this.$refs.registerRef.show = false
                setTimeout(() => {
                    this.$refs.loginRef.moveStyle = {
                        transform: 'translateX(0px)'
                    }
                    this.$refs.registerRef.moveStyle = {
                        transform: 'translateX(0px)'
                    }
                }, 10)
            },
            toRegister() {
                this.$refs.loginRef.show = false
                this.$refs.registerRef.show = true
                setTimeout(() => {
                    this.$refs.loginRef.moveStyle = {
                        transform: 'translateX(300px)'
                    }
                    this.$refs.registerRef.moveStyle = {
                        transform: 'translateX(300px)'
                    }
                }, 10)
            },
        }
    }
</script>

<style scoped>
    .welcome {
        height: 100%;
        background: url(./images/beijing.png);
    }

    .background_box {
        width: 660px;
        height: 420px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        overflow: visible;
    }
</style>
<template>
    <div>
        <el-row class="row_box">
            <el-col :span="15" :offset="2">
                <div class="title" @click="toHome">小米商城</div>
            </el-col>
            <el-col :span="3">
                <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect"
                    background-color="#18c7d3" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="home">mi家</el-menu-item>
                    <el-menu-item index="shoppingCart">购物车</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="2">
                <el-dropdown @command="handleDownBoxCommand">
                    <span class="el-dropdown-link">
                        {{username}}
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";
    export default {
        name: 'Header',
        data() {
            return {
                activeIndex: 'home'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                if (key == 'home') {
                    this.$router.push('/home')
                } else if (key == 'shoppingCart') {
                    this.$router.push('/shoppingCart')
                }
            },
            handleDownBoxCommand(command) {
                if (command === 'logout') {
                    this.logout();
                }
            },
            logout() {
                this.$message({
                    type:'success',
                    message:'退出成功'
                })
                this.$router.push('/welcome')
            },
            toHome() {
                this.$router.push('/home')
            }
        },
        computed: {
            ...mapState({
                username: (state) => state.username,
            }),
        },
        watch: {
            $route(to,from) {
                if (to.name == 'Home') {
                    this.activeIndex = 'home'
                } else if(to.name == 'ShoppingCart') {
                    this.activeIndex = 'shoppingCart'
                } else {
                    this.activeIndex = ''
                }
            }
        },
    }
</script>

<style scoped>
    .row_box {
        background-color: #18c7d3;
    }

    .title {
        letter-spacing: 2px;
        font-size: 25px;
        color: #F6F6F6;
        float: left;
        font-weight: 600;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 61px;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #fff;
        font-size: 15px;
        line-height: 61px;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>
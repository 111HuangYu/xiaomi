<template>
    <div class="book">
        <el-card class="book_card">
            <el-divider content-position="left">{{book.bookName}}</el-divider>
            <el-row>
                <el-col :span="5">
                    <img :src="book.cover" alt="图片加载出错" class="cover">
                </el-col>
                <el-col :span="19">
                    <div class="information">版本：{{book.type}}</div>
                    <div class="information">款式：{{book.author}}</div>
                    <div class="information">价格：{{book.price}}元</div>
                    <div class="information">库存：99999+</div>
                </el-col>
            </el-row>
            <el-card class="description_box">
                <div class="title">
                    内容简介
                </div>
                <div class="description">
                    {{book.description}}
                </div>
            </el-card>
            <el-button type="success" class="shoppingCart" @click="addCart" plain icon="el-icon-shopping-cart-2">加入购物车</el-button>
        </el-card>
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";
    export default {
        name: 'Book',
        data() {
            return {
            }   
        },
        methods: {
            addCart() {
                this.$store.commit('ADDCART',this.book)
                this.$message({
                    type:'success',
                    message:'添加购物车成功'
                });
            }
        },
        computed: {
            ...mapState({
                book: (state) => state.book,
            }),
        },
    }
</script>

<style scoped>
    .book {
        background-color: #eee;
        display: flex;
        justify-content: center;
    }

    .book_card {
        margin: 30px 0px;
        width: 900px;
    }

    .el-divider__text {
        font-size: 20px;
        font-weight: 600;
    }

    .cover {
        width: 100%;
    }

    .information {
        font-size: 16px;
        padding: 16px 0px;
        padding-left: 25px;
    }

    .description_box {
        margin-top: 30px;
    }

    .description {
        margin-top: 20px;
        font-size: 15px;
        line-height: 30px;
    }

    .title {
        font-size: 20px;
        color: #18c7d3;
    }

    .shoppingCart {
        margin: 25px 0px;
        float: right;
    }
</style>
<template>
    <div class="search">
        <div class="search_box">
            <div class="title">Search for what you want</div>
            <el-form :model="serachForm" class="search_form">
                <el-form-item class="search_item">
                    <el-row>
                        <el-col :span="21">
                            <el-input v-model="serachForm.key" @keyup.enter.native="search" clearable placeholder="选择您的小米"></el-input>
                        </el-col>
                        <el-col :span="3">
                            <el-button type="success" @click="search" icon="el-icon-search"></el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>
            <div class="hotSearch">
                <span class="active" @click="detail(book)" v-for="(book,index) in hotSearch"
                    :key="index">{{book.bookName}}&nbsp;&nbsp;&nbsp;</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";
    export default {
        name: 'Search',
        data() {
            return {
                serachForm: {
                    key: ''
                },
                hotSearch: [],
            }
        },
        methods: {
            search() {
                this.$emit('search',this.serachForm.key);
                this.serachForm.key = '';
            },
            getHotSearch() {
                this.hotSearch = [];
                for (let index = 0; index < 4; index++) {
                    let book = this.bookList[Math.floor(Math.random() * this.bookList.length)]
                    this.hotSearch.push(book)
                }
            },
            detail(book) {
                this.$router.push('/book')
                this.$store.commit('DETAIL', book)
            }
        },
        mounted() {
            this.getHotSearch();
        },
        computed: {
            ...mapState({
                bookList: (state) => state.bookList,
            }),
        },
    }
</script>

<style scoped>
    .search {
        height: 350px;
        background: url(./images/beijing.jpg);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .search_box {
        width: 450px;
    }

    .title {
        text-align: center;
        color: #fff;
        font-weight: 800;
        font-size: 20px;
        letter-spacing: 1.5px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding-bottom: 20px;
    }

    .search_item {
        margin: 0px 0px;
    }

    .hotSearch {
        cursor: pointer;
        text-align: center;
        color: #fff;
        font-size: 15px;
        padding-top: 15px;
    }

    .active:hover {
        color: #18c7d3
    }
</style>
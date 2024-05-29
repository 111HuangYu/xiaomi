<template>
    <div class="bookList">
        <div class="bookList_box">
            <div class="category_list">
                <span @click="categoryChange(index,$event)" :class="{'active':activeIndex == index}"
                    v-for="(category,index) in categoryList" :key="index" class="category">{{category}}</span>
            </div>
            <div class="book_box">
                <el-row>
                    <el-col :span="6" v-for="(book,index) in bookPage" :key="index" class="boox_col">
                        <div class="item">
                            <img :src="book.cover" @click="detail(book)" alt="图片加载出错" class="cover">
                            <div class="information">
                                <span>{{book.bookName}}</span>
                                <span>{{book.author}}</span>
                            </div>
                            <div class="information">
                                <el-tag type="success">{{book.price}}元</el-tag>
                                <el-tooltip effect="light" content="加入购物车" placement="right">
                                    <el-button type="success" @click="addCart(book)" size="mini"
                                        icon="el-icon-shopping-cart-2"></el-button>
                                </el-tooltip>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <el-pagination class="pagination" :current-page="page.currentPage" :page-sizes="[8, 16, 24]"
                :page-size="page.pageSize" @size-change="handleSizeChange" @current-change="handleCurrentChange"
                layout="prev, pager, next, jumper, ->, sizes, total" :total="page.total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";
    export default {
        name: 'BookList',
        data() {
            return {
                bookPage: [],
                page: {
                    currentPage: 1,
                    pageSize: 8,
                    total: 0,
                },
                activeIndex: 0,
            }
        },
        methods: {
            getBookPage() {
                let start = (this.page.currentPage - 1) * (this.page.pageSize);
                let end = this.page.pageSize * this.page.currentPage;
                this.bookPage = this.bookList.slice(start, end);
            },
            getTotal() {
                this.page.total = this.bookList.length;
            },
            handleSizeChange(pageSize) {
                this.page.pageSize = pageSize;
                this.getBookPage();
            },
            handleCurrentChange(currentPage) {
                this.page.currentPage = currentPage;
                this.getBookPage();
            },
            categoryChange(index, event) {
                this.activeIndex = index
                let type = event.target.innerHTML;
                if (type == '全部分类') {
                    this.getBookPage();
                    this.getTotal();
                } else {
                    let newBookList = this.bookList.filter((item) => {
                        if (item.type == type) return true
                    })
                    this.page.total = newBookList.length;
                    this.bookPage = newBookList;
                }
            },
            detail(book) {
                this.$router.push('/book')
                this.$store.commit('DETAIL', book)
            },
            search(key) {
                this.bookPage = this.bookList.filter((item) => {
                    if (item.bookName.indexOf(key) == 0) return true
                })
                this.page.total = this.bookPage.length;
            },
            addCart(book) {
                this.$store.commit('ADDCART', book);
                this.$message({
                    type: 'success',
                    message: '添加购物车成功'
                });
            }
        },
        mounted() {
            this.getBookPage();
            this.getTotal();
        },
        computed: {
            ...mapState({
                bookList: (state) => state.bookList,
                categoryList: (state) => state.categoryList,
            }),
        },
    }
</script>

<style scoped>
    .bookList {
        display: flex;
        justify-content: center;
        text-align: center;
        background: #eee;
    }

    .bookList_box {
        background: white;
    }

    .category_list {
        width: 1150px;
        height: 50px;
    }

    .category {
        font-size: 16px;
        padding: 10px 30px;
        line-height: 50px;
    }

    .category:hover {
        color: #b5b824;
        border-bottom: 2px solid #b5b824;
        cursor: pointer;
    }

    .active {
        color: #b5b824;
        border-bottom: 2px solid #b5b824;
    }

    .book_box {
        width: 1150px;
    }

    .boox_col {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .item {
        padding: 10px 15px;
        border: 2px #eeeeee solid;
        width: 200px;
    }

    .item:hover {
        box-shadow: 0 0 10px #ddd;
    }

    .cover {
        width: 200px;
        height: 200px;
    }

    .information {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        padding-top: 20px;
    }

    .pagination {
        text-align: center;
        padding: 30px 100px;
    }
</style>
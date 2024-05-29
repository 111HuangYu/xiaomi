import Vuex from 'vuex';
import Vue from 'vue';
import VuexPersist from 'vuex-persist'
import bookList from './bookList'
import categoryList from './categoryList'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        username: '',
        bookList: bookList,
        categoryList: categoryList,
        book: {},
        cart: []
    },
    mutations: {
        LOGIN(state, {
            username
        }) {
            state.username = username;
        },
        DETAIL(state, book) {
            state.book = book;
        },
        ADDCART(state, book) {
            if (state.cart.length == 0) {
                Vue.set(book, 'number', 1)
                state.cart.push(book)
                return;
            }
            for (let index = 0; index < state.cart.length; index++) {
                if (state.cart[index].bookName == book.bookName) {
                    state.cart[index].number++;
                    return;
                }
            }
            Vue.set(book, 'number', 1)
            state.cart.push(book)
        },
        ADD(state, book) {
            state.cart.forEach((item) => {
                if (item.bookName == book.bookName) item.number++;
            })
        },
        SUB(state, book) {
            state.cart.forEach((item) => {
                if (item.bookName == book.bookName) item.number--;
            })
        },
        DELETE(state, book) {
            state.cart = state.cart.filter((item) => {
                if (item.bookName != book.bookName) return true;
            })
        },
        PAY(state, selectBook) {
            state.cart = state.cart.filter((item) => {
                let flag = false;
                for (let index = 0; index < selectBook.length; index++) {
                    if (item.bookName == selectBook[index].bookName) {
                        flag = true;
                        break;
                    }
                }
                if (flag) return false;
                else return true;
            })
        },
        CLEAR(state) {
            state.cart = [];
        }
    },
    plugins: [
        new VuexPersist({
            storage: window.localStorage,
        }).plugin,
    ]
})
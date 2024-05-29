<template>
    <div class="footer">
        {{word}}
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                word: '',
                wordList: [
                    '小米之家',
                    '小米，让你的生活更加个性化',
                    '智能，便捷欸，高级',
                    
                ],
            }
        },
        methods: {
            getWord() {
                this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
            },
        },
        watch: {
            $route() {
                this.getWord();
            }
        },
    }
</script>

<style scoped>
    .footer {
        text-align: center;
        line-height: 50px;
        font-size: 16px;
        background-color: #18c7d3;
        height: 50px;
        color: #fff;
    }
</style>
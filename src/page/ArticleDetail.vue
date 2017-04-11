<script>
    export default {
    
        data() {
    
            return {
    
                content: ''
    
            }
    
        },
    
        methods: {
    
            onFethcData() {
    
                this.$ajax({
    
                    url: '/topic/' + this.$route.query.id,
    
                    success: (res) => {
    
                        this.content = res.data.data.content;
    
                        console.log(res)
                    }
    
                })
    
            },
    
        },
    
        activated() {
            this.onFethcData()
        },
    
        created() {
    
    
        }
    
    }
</script>

<template>
    <div>
        <div v-html="content"></div>
    </div>
</template>

<style lang="">
    
</style>
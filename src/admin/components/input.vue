<template lang="pug">
    input.input(:class="classMod")
</template>

<script>
    export default {
        name: 'addInput',
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {

        },
        props: {
            classMod: String
        }
        /*watch: {

        }*/
    }
</script>  

<style lang="postcss">
    .input {
        background: transparent;
        border: 1px solid transparent;
        color: #464d62;
        font-size: 18px;
        font-weight: 600;
        position: relative;

        &:focus {
            outline: none;
            border-bottom: 1px solid #383bcf !important;
        }

    }
</style>
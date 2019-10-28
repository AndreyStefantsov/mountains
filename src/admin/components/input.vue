<template lang="pug">
    input.input(:class="classMod")
</template>

<script>
    export default {
        name: 'addInput',
        data: () => ({

        }),
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

<style lang="pcss">
    .input {
        background: transparent;
        border: none;
        //width: 100%;  
        color: #464d62;
        font-size: 18px;
        font-weight: $semibold;
        position: relative;

        /*@media screen and (max-width: $bp-tablets) {
            width: 145px;
        }*/

        &:focus {
            outline: none;
            border-bottom: 1px solid #383bcf !important;
        }


    }
</style>
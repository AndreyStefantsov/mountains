<template lang="pug">
    button(:class="activeClass" @click.prevent="$emit('addNewProject')").button {{buttonTitle}}
</template>

<script>

    export default {
        name: 'buttonSection',
        data: () => ({

        }),
        props: {
            buttonTitle: String
        },
        computed: {
            activeClass() {
                return this.buttonTitle=='Загрузить' ? 'button_load' : 'button_save'
            }
        },
        methods: {

        },

    }
</script>  

<style scoped lang="pcss">
    .button {
        display: flex;
        justify-content: center;
        color: #fff;
        font-weight: $bold;
        background: #1b5ae3;
        background: -moz-linear-gradient(left,  #1b5ae3 0%, #433acc 100%);
        background: -webkit-linear-gradient(left,  #1b5ae3 0%,#433acc 100%);
        background: linear-gradient(to right,  #1b5ae3 0%,#433acc 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1b5ae3', endColorstr='#433acc',GradientType=1 );

        &:focus {
            outline: none
        }
    }
    .button_load {
        width: 180px;
        height: 50px;
        border-radius: 25px;
    }
    .button_save {
        width: 180px;
        height: 60px;
        border-radius: 30px;
    }
</style>
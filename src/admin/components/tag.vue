<template lang="pug">
    .tag-wrap
        .tag-colored {{newTag}}
        .button__cross-project(@click="remTag")
</template>

<script>

    export default {
        name: 'tagComponent',
        data: () => ({
            tagndx: 1
        }),
        props: {
            newTag: String,
            tagIndex: Number
        },
        computed: {
            
        },
        methods: {
            remTag: function () {
                this.$emit('removeTag')
            }
        },

    }
</script>  

<style scoped lang="postcss">
    .tag-wrap {
        display: flex;
        padding: 10px 13px 10px 20px;
        background: #f4f4f4;
        border-radius: 20px;
        align-items: center;
    }

    .tag-colored {
        color: rgba(#464d62, 0.7);
        font-size: 13px;
        margin-right: 10px;
    }

    .button__cross-project {
        background: svg-load("cross.svg", fill=#464d62) no-repeat center;
        width: 14px;
        height: 12px;
        cursor: pointer;

        &:hover {
            background: svg-load("cross.svg", fill=#bf2929) no-repeat center;
        }
    }
</style>
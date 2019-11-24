<template lang="pug">
    .tag-wrap
        .tag-colored {{tagTitle}}
        a.button__cross-project(@click.prevent="removeTag")
</template>

<script>

    export default {
        name: 'tagComponent',
        data() {
            return {
                index: this.tagIndex
            }
        },
        props: {
            tagTitle: {
                type: String,
                required: true
            },
            tagIndex: {
                type: Number,
                default: 0,
                required: true
            }
        },
        computed: {
            
        },
        methods: {
            removeTag () {
                this.$emit('removeTag', this.index)
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
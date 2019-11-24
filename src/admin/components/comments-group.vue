<template lang="pug">
    .group
        .comments-main
            .comments-main__image
                img.comments-main__pic(:src="imgPath")
            .comments-main__info
                span.comments-main__name {{editedComment.author}}
                span.comments-main__prof {{editedComment.occ}}
        .comment-text {{editedComment.text}}
        .button-comment
            a.button__pencil-comment(@click="transferEditedComment" title="Изменить отзыв") Править
            a.button__cross-comment(@click="removeExistedComment" title="Удалить отзыв") Удалить
</template>

<script>
    export default {
        name: 'commentsGroup',
        data() {
            return {
                editedComment: {...this.comment}
            }
        },
        props: {
            comment: {
                type: Object,
                default: () => ({}),
                required: true
            }
        },
        computed: {
            imgPath: function() {
                const imgURL = this.editedComment.photo
                const baseURL = 'https://webdev-api.loftschool.com'
                return `${baseURL}/${imgURL}`
            }
        },
        methods: {
            transferEditedComment() {
                this.$emit('transferEditedComment', this.editedComment);
            },
            removeExistedComment() {
                this.$emit('removeExistedComment', this.editedComment.id);
            }

        },
    }
</script>  

<style scoped lang="postcss">

    @import "../styles/mixins.pcss";
    
    .group {
        width: 340px;
        display: flex;
        flex-direction: column;
        background: #fff;
        padding: 30px;
        align-items: flex-start;

        @include phones {
            width: 320px;
        }
    }

    .comments-main {
        margin-bottom: 60px;
        display: flex;
        position: relative;
        width: 100%;        

        &:after {
            content: '';
            position: absolute;
            bottom: -30px;
            left: -10px;
            width: 105%;
            height: 1px;
            background: #dedee0;
        }
    }

    .comments-main__image {
        width: 50px;
        height: 50px;
        margin-right: 20px;
        border-radius: 50%;
        overflow: hidden;
    }

    .comments-main__pic {
        width: 100%;
        object-fit: cover;
    }

    .comments-main__info {
        display: flex;
        flex-direction: column;
        max-width: 200px;
    }

    .comments-main__name {
        font-size: 18px;
        font-weight: 700;
        color: #464d62;
        margin-bottom: 10px;
    }

    .comments-main__prof {
        font-weight: 600;
        color: rgba(#464d62, 0.5);
    }

    .comment-text {
        font-weight: 600;
        color: rgba(#464d62, 0.7);
        margin-bottom: 60px;
    }

    .button-comment {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .button__pencil-comment {
        position: relative;
        color: rgba(#464d62, 0.5);
        padding-right: 25px;

        &:hover {
            color: #383bcf
        }

        &:after {
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(0, -50%);
            background: svg-load("pencil.svg", fill="#383bcf") no-repeat center;
            width: 16px;
            height: 15px;
            background-size: 15px;
        }
    }

    .button__cross-comment {
        position: relative;
        color: rgba(#464d62, 0.5);
        padding-right: 25px;

        &:hover {
            color: #bf2929
        }

        &:after {
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(0, -50%);
            background: svg-load("cross.svg", fill=#bf2929) no-repeat center;
            width: 14px;
            height: 12px;
        }
    }

    
</style>
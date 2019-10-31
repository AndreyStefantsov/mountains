<template lang="pug">
    .group-project
        .main-title-project Новый отзыв
        .main-project
            .form-comment
                .form-comment__image
                a.add-photo Добавить фото
            .content-commment
                .commment-input-group
                    .comment-info
                        .comment-text Имя автора
                        input.input.input_name(v-model="name")
                        //addInput(classMod="input_name" v-model="name")
                        .error(v-if="isErrorName") {{errorMessage}}
                    .comment-info
                        .comment-text Титул автора
                        input.input.input_prof(v-model="prof")
                        //addInput(classMod="input_prof" v-model="prof")
                        .error(v-if="isErrorProf") {{errorMessage}}
                .comment-textarea
                    .comment-text Отзыв
                    textarea.textarea(v-model="text")
                    .error(v-if="isErrorTextarea") {{errorMessage}}
        .button-add-comment
            a.reset-button(@click="$emit('closeComment')") Отмена
            button-section(:buttonTitle="buttonNameSave" @addNewProject="addNewProject")
</template>

<script>
    import buttonSection from './button-section.vue'
    import addInput from './input.vue'
    export default {
        name: 'addComment',
        data: () => ({
            name: '',
            prof: '',
            text: '',
            buttonNameSave: 'Сохранить',
            errorMessage: 'Это поле должно быть заполнено',
            isErrorName: false,
            isErrorProf: false,
            isErrorTextarea: false

        }),
        components: {
            buttonSection, addInput
        },
        computed: {

        },
        methods: {
            addNewProject() {
                if ((this.name==undefined) || (this.name=='')) {
                    this.isErrorName = true;
                    setTimeout(() => {
                        this.isErrorName = false
                    }, 2000);
                } else if ((this.prof==undefined) || (this.prof=='')) {
                    this.isErrorProf = true;
                    setTimeout(() => {
                        this.isErrorProf = false
                    }, 2000);
                } else if ((this.text==undefined) || (this.text=='')) {
                    this.isErrorTextarea = true;
                    setTimeout(() => {
                        this.isErrorTextarea = false
                    }, 2000);
                }
            }
        }

    }
</script>  

<style scoped lang="postcss">
    @import "../styles/mixins.pcss";
    .group-project {
        padding: 30px;
        display: flex;
        flex-direction: column;
        background: #fff;
        margin-bottom: 30px;
    }

    .main-title-project {
        font-size: 18px;
        margin-bottom: 70px;
        font-weight: 700;
        color: #464d62;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            bottom: -25px;
            left: -10px;
            width: 100%;
            height: 1px;
            background: #dedee0;
        }
    }

    .main-project {
        display: flex;
        justify-content: flex-start;

        @include desktop {
            flex-direction: column;
            align-items: center;
        }

    }

    .form-comment {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 30px;

        @include desktop {
            margin-bottom: 55px;
            margin-right: 0;
        }

        @include phones {
            width: 280px;
            margin-right: 0;
        }

    }

    .form-comment__image {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #dee4ed;
        position: relative;
        margin-bottom: 30px;

        &:after {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: svg-load("avatar.svg", fill=#fff) no-repeat center;
            width: 85px;
            height: 113px;
        }
    }

    .add-photo {
        color: #383bcf;
    }

    .commment-input-group {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    .content-commment {
        width: 100%;
        max-width: 610px;
    }

    .comment-info {
        display: flex;
        flex-direction: column;
        width: 290px;
        position: relative;

        @include tablets {
            width: 47.5%;
        }
    }

    .input_name, .input_prof {
        padding-bottom: 18px;
        border-bottom: 1px solid #464d62;
        width: 100%;

        &:focus {
            outline: none;
            border-bottom: 1px solid #383bcf;
        }
    }

    .comment-textarea {
        width: 100%;
        margin-bottom: 30px;
        position: relative;
    }

    .textarea {
        resize: none;
        padding: 20px;
        color: #464d62;
        height: 115px;
        width: 100%;

        &:focus {
            outline: none;
            border: 1px solid #383bcf;
        }
    }

    .button-add-comment {
        display: flex;
        align-self: flex-end;
        align-items: center;

        @include desktop {
            align-self: center;
        }

    }

    .comment-text {
        color: rgba(#464d62, 0.5);
        margin-bottom: 20px;
    }

    .reset-button {
        color: #383bcf;
        margin-right: 60px;
    }

</style>
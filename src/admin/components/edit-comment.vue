<template lang="pug">
    .group-project
        .main-title-project Новый отзыв
        .main-project
            form.form-comment(@submit.prevent="checkFields")
                .form
                    .form-comment__image(:class="{'hidden-background': renderedPhoto.length}" :style="{'backgroundImage': `url(${renderedPhoto})`}")
                    a.add-photo() Добавить фото
                        label.form_label(for="photo")
                    input.form__input(type="file" id="photo" accept="image/*,image/jpeg" @change="uploadRenderedPhoto")
                .content-commment
                    .commment-input-group
                        .comment-info
                            input.input.input_name(v-model="comment.author")
                            .comment-text Имя автора
                            .error(v-if="isErrorAuthor") {{errorMessage}}
                        .comment-info
                            input.input.input_prof(v-model="comment.occ")
                            .comment-text Титул автора
                            .error(v-if="isErrorOcc") {{errorMessage}}
                    .comment-textarea
                        textarea.textarea(v-model="comment.text")
                        .comment-text Отзыв
                        .error(v-if="isErrorText") {{errorMessage}}
                    .button-add-comment
                        button.reset-button(type="reset" @click.prevent="resetForm" title="Отменить изменения") Отмена
                        button-section(:buttonTitle="buttonNameSave" type="submit" @checkFields="checkFields" title="Сохранить изменения")
</template>

<script>
    export default {
        name: 'addComment',
        components: {
            buttonSection: () => import('components/button-section.vue'),
        },
        data() {
            return {
                renderedPhoto: '',
                comment: {
                    author: '',
                    occ: '',
                    text: '',
                    photo: '',
                },
                buttonNameSave: 'Сохранить',
                errorMessage: 'Это поле должно быть заполнено',
                isErrorAuthor: false,
                isErrorOcc: false,
                isErrorText: false
            }
        },
        props: {
            editedComment: {
                type: Object,
                default: () => ({}),
                required: true
            },
        },
        created() {
            this.comment = this.editedComment;
            this.renderedPhoto = this.imgPath
        },
        computed: {
            imgPath: function() {
                const imgURL = this.editedComment.photo
                const baseURL = 'https://webdev-api.loftschool.com'
                
                return `${baseURL}/${imgURL}`
            }
        },
        methods: {
            resetForm() {
                this.renderedPhoto = "";
                this.comment = {};
            },
            uploadRenderedPhoto(event) {
                const file = event.target.files[0];
                this.comment.photo = file;
                const reader = new FileReader();
                try {
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                    this.renderedPhoto = reader.result;
                    };
                } catch (error) {

                }
            },
            editExistedComment() {
                this.$emit('editExistedComment', this.comment);
            },
            checkFields() {             
                if ((this.comment.author==undefined) || (this.comment.author=='')) {
                    this.isErrorAuthor = true;
                    setTimeout(() => this.isErrorAuthor = false, 2000);
                } else if ((this.comment.occ==undefined) || (this.comment.occ=='')) {
                    this.isErrorOcc = true;
                    setTimeout(() => this.isErrorOcc = false, 2000);
                } else if ((this.comment.text==undefined) || (this.comment.text=='')) {
                    this.isErrorText = true;
                    setTimeout(() => this.isErrorText = false, 2000);
                } else this.editExistedComment();
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

    .form-comment {
        display: flex;
        justify-content: space-between;

        @include desktop {
            flex-direction: column;
            align-items: center;
        }
    }

    .form_label {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        cursor: pointer;
        z-index: 2;
    }

    .form__input {
        position: absolute;
        left: -9999px;    
    }


    .form {
        position: relative;
        display: flex;
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
        background-position: center;
        background-size: cover;

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
        position: relative;
        color: #383bcf;

        &:hover {
            color: #bf2929;
        }
    }

    .commment-input-group {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    .content-commment {
        width: 100%;
        max-width: 610px;
        display: flex;
        flex-direction: column;
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
        order: 1;

        &:focus {
            outline: none;
            border-bottom: 1px solid #383bcf;

            & ~div {
                color: #383bcf
            }
        }
    }

    .comment-textarea {
        width: 100%;
        margin-bottom: 30px;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .textarea {
        resize: none;
        padding: 20px;
        color: #464d62;
        height: 115px;
        width: 100%;
        order: 1;
        font-weight: 600;

        &:focus {
            outline: none;
            border: 1px solid #383bcf;

            & ~div {
                color: #383bcf
            }
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
        background: none;

        &:focus {
            outline: none
        }

        &:hover {
            color: #bf2929;
        }
    }

    .hidden {
        visibility: hidden;;
    }

    .hidden-background {
        &:after {
            content: '';
            background: none;
        }
    }

</style>
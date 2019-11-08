<template lang="pug">
    .group-project
        .main-title-project Добавление работы
        .main-project
            form.form-project(@submit.prevent="checkFields")
                .form(:style="{'backgroundImage': `url(${renderedPhoto})`}")
                    label.form_label(for="photo")
                    span.form__text(:class="{hidden: renderedPhoto.length}") Перетащите или нажмите "Загрузить" для загрузки изображения
                    button-section(:buttonTitle="buttonNameLoad" :class="{hidden: renderedPhoto.length}")
                    input.form__input(type="file" id="photo" accept="image/*,image/jpeg" @change="uploadRenderedPhoto")
                .content-project
                    div.project-info
                        input.input.input_name(v-model="project.title")
                        .project-text Название
                        .error(v-if="isErrorName") {{errorMessage}}
                    div.project-info
                        input.input.input_ref(v-model="project.link")
                        .project-text Ссылка
                        .error(v-if="isErrorRef") {{errorMessage}}
                    div.project-info
                        textarea.textarea(v-model="project.description")
                        .project-text Описание
                        .error(v-if="isErrorDesc") {{errorMessage}}
                    div.project-info
                        input.input.input_tags(v-model="project.techs")
                        .project-text Добавление тэга
                        .error(v-if="isErrorTags") {{errorMessage}}
                        div.tag-create
                            ul.tag-create__list
                                li.tag-create__item(v-for="(tag, index) in makeArrayFromString" :key="index") 
                                    tag-component(:tagTitle="tag" :tagIndex="index" @removeTag="removeTag")
                    .button-add-projects
                        button.reset-button(type="reset" @click.prevent="resetForm" title="Отменить изменения") Отмена
                        button-section(:buttonTitle="buttonNameSave" type="submit" @checkFields="checkFields" title="Сохранить изменения")
</template>

<script>
    /*import buttonSection from './button-section.vue'
    import tagComponent from './tag.vue'
    //import addInput from './input.vue'*/

    export default {
        name: 'addProject',
        data: () => ({
            renderedPhoto: '',
            project: {
                title: '',
                techs: '',
                photo: '',
                link: '',
                description: ''
            },
            
            buttonNameLoad: 'Загрузить',
            buttonNameSave: 'Сохранить',
            errorMessage: 'Это поле должно быть заполнено',
            isErrorName: false,
            isErrorRef: false,
            isErrorDesc: false,
            isErrorTags: false
        }),
        components: {
            buttonSection: () => import('components/button-section.vue'),
            tagComponent: () => import('components/tag.vue')
        },
        computed: {
            makeArrayFromString() {
                if ((this.project.techs==undefined) || (this.project.techs==''))  {
                    return
                    }
                return this.project.techs.split(',')
            },
        },
        methods: {
            removeTag(removedTagIndex) {
                let str = this.project.techs.split(',').filter((item, index) => {
                    return index !== removedTagIndex
                });
                return this.project.techs = str.join(',')
            },
            resetForm() {
                this.renderedPhoto = "";
                this.project = {};
            },
            uploadRenderedPhoto(event) {
                const file = event.target.files[0];
                this.project.photo = file;
                const reader = new FileReader();
                try {
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                    this.renderedPhoto = reader.result;
                    };
                } catch (error) {

                }
            },
            addNewProject() {
                this.$emit('addNewProject', this.project);
            },
            checkFields() {             
                if ((this.project.title==undefined) || (this.project.title=='')) {
                    this.isErrorName = true;
                    setTimeout(() => {
                        this.isErrorName = false
                    }, 2000);
                } else if ((this.project.link==undefined) || (this.project.link=='')) {
                    this.isErrorRef = true;
                    setTimeout(() => {
                        this.isErrorRef = false
                    }, 2000);
                } else if ((this.project.description==undefined) || (this.project.description=='')) {
                    this.isErrorDesc = true;
                    setTimeout(() => {
                        this.isErrorDesc = false
                    }, 2000);
                } else if ((this.project.techs==undefined) || (this.project.techs=='')) {
                    this.isErrorTags = true;
                    setTimeout(() => {
                        this.isErrorTags = false
                    }, 2000);
                } else this.addNewProject();
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


    }

    .form-project {
        display: flex;
        justify-content: space-between;

        @include desktop {
            flex-direction: column;
            align-items: center;
        }
    }

    .form {
        position: relative;
        width: 495px;
        height: 275px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #dee4ed;
        background-position: center;
        background-size: cover;

        @include desktop {
            margin-bottom: 55px;
        }

        @include phones {
            width: 280px;
            height: 155px;
        }
    }

    .form_label {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        cursor: pointer;
        background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: grey; stroke-width: 2; stroke-dasharray: 8'/></svg>");

        &:hover {
            background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: darkslategrey; stroke-width: 2; stroke-dasharray: 8'/></svg>"); 
    
            &~.button {
                color: #E3EF62;
                }
        }
    }

       

    .form__input {
        position: absolute;
        left: -9999px;    
    }

    

    .form__text {
        color: rgba(#464d62, 0.5);
        max-width: 220px;
        text-align: center;
        margin-bottom: 25px;
    }

    .content-project {
        width: 495px;

        @include phones {
            width: 100%;
        }
    }

    .project-info {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        position: relative;
    }

    .input_name, .input_ref, .input_tags {
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

    .input_tags {
        margin-bottom: 20px;
    }

    .textarea {
        resize: none;
        padding: 20px;
        color: #464d62;
        height: 145px;
        font-weight: 600;
        order: 1; 

        &:focus {
            outline: none;
            border: 1px solid #383bcf;

            & ~div {
                color: #383bcf
            }
        }
    }

    .button-add-projects {
        display: flex;
        align-self: flex-end;
        align-items: center;

        @include desktop {
            align-self: center;
        }

    }

    .project-text {
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

    .tag-create {
        order: 2
    }

    .tag-create__list {
        display: flex;
        flex-flow: wrap;
    }

    .tag-create__item {
        display: flex;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .hidden {
        visibility: hidden;;
    }

</style>
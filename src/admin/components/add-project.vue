<template lang="pug">
    .group-project
        .main-title-project Редактирование работы
        .main-project
            form(enctype="multipart/form-data" method="post").form-project
                span.form__text Перетащите или нажмите "Загрузить" для загрузки изображения
                //input.form__input(type="file" name="photo" multiple accept="image/*,image/jpeg")
                button-section(:buttonTitle="buttonNameLoad")
            .content-project
                div.project-info
                    .project-text Название
                    input.input.input_name(v-model="name")
                    .error(v-if="isErrorName") {{errorMessage}}
                    //addInput(classMod="input_name" v-model="name")
                div.project-info
                    .project-text Ссылка
                    input.input.input_ref(v-model="ref")
                    .error(v-if="isErrorRef") {{errorMessage}}
                    //addInput(classMod="input_ref" v-model="ref")
                div.project-info
                    .project-text Описание
                    textarea.textarea(v-model="desc")
                    .error(v-if="isErrorDesc") {{errorMessage}}
                div.project-info
                    .project-text Добавление тэга
                    input.input.input_tags(v-model="tags")
                    //addInput(classMod="input_tags" v-model="tags")
                    .error(v-if="isErrorTags") {{errorMessage}}
                    div.tag-create
                        ul.tag-create__list
                            li.tag-create__item(v-for="(tag,index) in makeArrayFromString" :key=index) 
                                tag-component(:newTag="tag" :tagIndex="index" @removeTag="removeTag")
        .button-add-projects
            a.reset-button(@click="$emit('closeProject')") Отмена
            button-section(:buttonTitle="buttonNameSave" @addNewProject="addNewProject")
</template>

<script>
    import buttonSection from './button-section.vue'
    import tagComponent from './tag.vue'
    import addInput from './input.vue'
    export default {
        name: 'addProject',
        data: () => ({
            name: '',
            ref: '',
            desc: '',
            tags: undefined,
            tagsArr: '',
            buttonNameLoad: 'Загрузить',
            buttonNameSave: 'Сохранить',
            errorMessage: 'Это поле должно быть заполнено',
            isErrorName: false,
            isErrorRef: false,
            isErrorDesc: false,
            isErrorTags: false
        }),
        components: {
            buttonSection, tagComponent, addInput
        },
        computed: {
            makeArrayFromString() {
                if ((this.tags==undefined) || (this.tags==''))  {
                    
                    return
                    }
                return this.tags.split(',')
            }
        },
        methods: {
            removeTag(tagIndexRemove) {
                //console.log('asdasd')
                //console.log(this.makeArrayFromString)
                //this.makeArrayFromString.splice(1, 1)
            },
            addNewProject() {
                if ((this.name==undefined) || (this.name=='')) {
                    this.isErrorName = true;
                    setTimeout(() => {
                        this.isErrorName = false
                    }, 2000);
                } else if ((this.ref==undefined) || (this.ref=='')) {
                    this.isErrorRef = true;
                    setTimeout(() => {
                        this.isErrorRef = false
                    }, 2000);
                } else if ((this.desc==undefined) || (this.desc=='')) {
                    this.isErrorDesc = true;
                    setTimeout(() => {
                        this.isErrorDesc = false
                    }, 2000);
                } else if ((this.tags==undefined) || (this.tags=='')) {
                    this.isErrorTags = true;
                    setTimeout(() => {
                        this.isErrorTags = false
                    }, 2000);
                }
            }
        }
        /*watch: {
            tags(newSymbol) {
                this.tagsArr = makeArrayFromString(newSymbol)
                console.log(this.tagsArr)
            }
        }*/
    }
</script>  

<style scoped lang="pcss">
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
        font-weight: $bold;
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
        justify-content: space-between;

        @media screen and (max-width: $bp-desktop) {
            flex-direction: column;
            align-items: center;
        }
    }

    .form-project {
        width: 495px;
        height: 275px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #dee4ed;
        background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: grey; stroke-width: 1; stroke-dasharray: 8 8'/></svg>");

        @media screen and (max-width: $bp-desktop) {
            margin-bottom: 55px;
        }

        @media screen and (max-width: $bp-phones) {
            width: 280px;
            height: 155px;
        }
    }

    .form__text {
        color: rgba(#464d62, 0.5);
        max-width: 220px;
        text-align: center;
        margin-bottom: 25px;
    }

    .content-project {
        width: 495px;

        @media screen and (max-width: $bp-phones) {
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

        &:focus {
            outline: none;
            border-bottom: 1px solid #383bcf;
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

        &:focus {
            outline: none;
            border: 1px solid #383bcf;
        }
    }

    .button-add-projects {
        display: flex;
        align-self: flex-end;
        align-items: center;

        @media screen and (max-width: $bp-desktop) {
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
</style>
<template lang="pug">
    .group
        .image
            img.image__pic(:src="imgPath")
        .info
            .title {{editedProject.title}}
            .description {{editedProject.description}}
            a.ref(:href="editedProject.link" title="Перейти на сайт") {{editedProject.link}}
            .button-project
                a.button__pencil-project(@click="transferEditedProject" title="Изменить проект") Править
                a.button__cross-project(@click="removeExistedProject" title="Удалить проект") Удалить

</template>

<script>
    export default {
        name: 'projectGroup',
        data() {
            return {
                editedProject: {...this.project}
            }
        },
        props: {
            project: {
                type: Object,
                default: () => ({}),
                required: true
            }
        },
        computed: {
            imgPath: function() {
                
                const imgURL = this.editedProject.photo
                // if (imgURL === Object) {
                //     console.log('nan')
                //     return
                // }
                //console.log(imgURL)
                const baseURL = 'https://webdev-api.loftschool.com'
                return `${baseURL}/${imgURL}`
            }
        },
        methods: {
            transferEditedProject() {
                this.$emit('transferEditedProject', this.editedProject);
            },
            removeExistedProject() {
                this.$emit('removeExistedProject', this.editedProject.id);
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
        padding: 0;
        padding-bottom: 40px;
        align-items: center;

        @include phones {
            width: 320px;
        }

    }

    .image {
        width: 340px;
        height: 190px;
        margin-bottom: 40px;

        @include phones {
            width: 100%;
        }
    }

    .image__pic {
        width: 100%;
        object-fit: cover;
    }

    .info {
        width: 280px;
        display: flex;
        flex-direction: column;
    }

    .title {
        font-size: 18px;
        margin-bottom: 30px;
        font-weight: 700;
        color: #464d62;
    }

    .description {
        color: rgba(#464d62, 0.7);
        margin-bottom: 30px;
    }

    .ref {
        color: #383bcf;
        margin-bottom: 45px;
    }

    .button-project {
        display: flex;
        justify-content: space-between;
    }

    .button__pencil-project {
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

    .button__cross-project {
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
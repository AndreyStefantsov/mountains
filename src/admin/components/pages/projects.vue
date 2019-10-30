<template lang="pug">
    .main-wrap
        section.main-section
            .main-info
                span.main-info__title Блок &#171;{{sectionTitle}}&#187;
            add-project(v-if="showGroup" @closeProject="addNewProject")
            div.groups
                ul.groups__list
                    li.add-project-item(@click.prevent="addNewProject")
                        a.add-group
                            span.add-group__link &#43;
                            span.add-group__text Добавить работу
                    li.groups__item(v-for="item in projects" :key="item.id")
                        project-group(:prImage="item.image" :prTitle="item.title" :prTags="item.tags" :prRef="item.ref" :prDesc="item.decription")
</template>
        
<script>
    import projectsArr from '../../../data/projects.json'
    export default {
        name: 'projects',
        data: () => ({
            sectionTitle: 'Работы',
            showGroup: false,
            projects: []
        }),
        components: {
            addProject: () => import("components/add-project.vue"),
			projectGroup: () => import("components/project-group.vue")
        },
        props: {

        },
        created() {
            this.projects = this.forRequireImg(projectsArr)
        },
        methods: {
            addNewProject() {
                console.log('asd')
                this.showGroup = !this.showGroup
                this.showGroup ? window.scrollTo(0,200) : window.scrollTo(0,0) 
                
            },
            forRequireImg(projectsArr) {
                return projectsArr.map(item => {
                    const newImage = require(`../../../images/content/${item.image}`);
                    item.image = newImage;
                    return item
                })
            },
        }
    }
    
</script>  

<style scoped lang="postcss">
    @import "../../styles/mixins.pcss";

    .main-info {
        display: flex;
        flex-direction: column;
    }

    .add-group {
        display: flex;
        flex-direction: column;
        align-items: center;

        @include phones {
			flex-direction: row
		}
    }

    .add-group__link {
        color: #fff;
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 3px solid #fff;
        margin-bottom: 30px;
        font-size: 72px;

        @include phones {
			margin-bottom: 0;
            margin-right: 20px;
            width: 50px;
            height: 50px;
            font-size: 24px;
		}

    }

    .add-group__text {
        color: #fff;
        font-weight: 700;
    }

    .add-project-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 340px;
        height: 555px;
        margin-bottom: 30px;
        margin-right: 30px;
        background: #1b5ae3;
        background: -moz-linear-gradient(left,  #1b5ae3 0%, #433acc 100%);
        background: -webkit-linear-gradient(left,  #1b5ae3 0%,#433acc 100%);
        background: linear-gradient(to right,  #1b5ae3 0%,#433acc 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1b5ae3', endColorstr='#433acc',GradientType=1 );

        @include phones {
			margin-right: 0;
            width: 320px;
            height: 110px;
		}

    }

    .groups {

    }

    .groups__list {
        display: flex;
        flex-flow: wrap;

        @include desktop {
			justify-content: center;
		}
    }


    .groups__item {
        margin-bottom: 30px;
        margin-right: 30px;

        &:nth-child(3n) {
            margin-right: 0;

            @include desktop {
			    margin-right: 30px;
		    }

            @include tablets {
			    margin-right: unset;
		    }
        }

        @include tablets {
             &:nth-child(even) {
                margin-right: 0;
            }

            &:nth-child(odd) {
                margin-right: 30px;
            }
        }

        @include phones {
            margin-right: 0;

            &:nth-child(odd) {
                margin-right: 0;
            }
        }       
    }

</style>
<template lang="pug">
    .main-wrap
        section.main-section
            .main-info
                span.main-info__title Блок &#171;{{sectionTitle}}&#187;
            add-project(v-if="showGroup" @addNewProject="addNewProject")
            edit-project(
                v-if="showEditGroup" 
                @editExistedProject="editExistedProject" 
                @resetForm="resetForm" 
                :editedProject="editedProject"
                :projects="projects" 
            )
            div.groups
                ul.groups__list
                    li.add-project-item
                        a.add-group(@click.prevent="showCloseNewProjectForm" title="Добавить проект")
                            span.add-group__link &#43;
                            span.add-group__text Добавить работу
                    li.groups__item(v-for="project in projects" :key="project.id")
                        project-group(
                            :project="project" 
                            @transferEditedProject="transferEditedProject"
                            @removeExistedProject="removeExistedProject")
        tooltip-message(:message="errorMessage" :messageMod="messageMod" v-if="isError")
</template>
        
<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        name: 'projects',
        data() {
            return {
                sectionTitle: 'Работы',
                showGroup: false,
                showEditGroup: false,
                editedProject:'',
                errorMessage: '',
                messageMod: '', //error-message/complete-message/other-message
                isError: false
            }
        },
        components: {
            addProject: () => import("components/add-project.vue"),
            projectGroup: () => import("components/project-group.vue"),
            editProject: () => import("components/edit-project.vue"),
            tooltipMessage: () =>import("components/tooltip.vue")
        },
        computed: {
            ...mapState("projects", {
				projects: state => state.projects
			}),
        },
        created() {
			this.setProjects()
        },
        methods: {
            ...mapActions("projects", ["setProjects", "addProject", "editProject", "removeProject"]),
            showCloseNewProjectForm() {
                this.showGroup = !this.showGroup
                this.showEditGroup = false;
                this.showGroup ? window.scrollTo(0,200) : window.scrollTo(0,0) 
            },
            async addNewProject(newProject) {
                try {
                    await this.addProject(newProject);
					this.messageMod = 'complete-message'
					this.errorMessage = "Проект добавлен";
					this.isError = true;
                } catch (error) {
                    this.messageMod = 'error-message'
					this.errorMessage = error.message;
					this.isError = true;
                } finally {
                    this.showGroup = !this.showGroup
                    window.scrollTo(0,0);
                    setTimeout(() => this.isError = false, 2500);
                }
            },
            resetForm() {
                this.showEditGroup = false;
            },
            transferEditedProject(editedProject) {
                this.editedProject = editedProject;
                this.showGroup = false;
                this.showEditGroup = true;
                this.showEditGroup ? window.scrollTo(0,200) : window.scrollTo(0,0) 
            },
            async editExistedProject(editedProject) {
                try {
                    await this.editProject(editedProject);
                    this.messageMod = 'complete-message'
					this.errorMessage = "Проект изменен";
                    this.isError = true;
                } catch (error) {
                    this.messageMod = 'error-message'
					this.errorMessage = error.message;
					this.isError = true;
                } finally {
                    this.showEditGroup = false;
                    setTimeout(() => this.isError = false, 2500);
                }     
            },
            async removeExistedProject(projectId) {
                try {
                    await this.removeProject(projectId);
                    this.messageMod = 'complete-message'
					this.errorMessage = "Проект удален";
					this.isError = true;
                } catch (error) {
                    this.messageMod = 'error-message'
					this.errorMessage = error.message;
					this.isError = true;
                } finally {
                    setTimeout(() => this.isError = false, 2500);
                }   
            }
           
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
        justify-content: center;
        width: 100%;
        height: 100%;

        &:hover {
            .add-group__link {
                border: 3px solid #E3EF62;
                color: #E3EF62
            }
            .add-group__text {
                color: #E3EF62
            }
        }

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
        transition: all .5s .1s;

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
        transition: all .5s

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
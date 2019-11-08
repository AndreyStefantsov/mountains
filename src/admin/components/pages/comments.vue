<template lang="pug">
    .main-wrap
        section.main-section
            .main-info
                span.main-info__title Блок &#171;{{sectionTitle}}&#187;
            add-comment(v-if="showGroup" @addNewComment="addNewComment")
            edit-comment(
                v-if="showEditGroup" 
                @editExistedComment="editExistedComment" 
                @resetForm="resetForm" 
                :editedComment="editedComment"
            )
            div.groups
                ul.groups__list
                    li.add-project-item
                        a.add-group(@click.prevent="showCloseNewCommentForm" title="Добавить отзыв")
                            span.add-group__link &#43;
                            span.add-group__text Добавить отзыв
                    li.groups__item(v-for="comment in comments" :key="comment.id")
                        comments-group(
                            :comment="comment" 
                            @transferEditedComment="transferEditedComment"
                            @removeExistedComment="removeExistedComment"
                        )
</template>
        
<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        name: 'comments',
        data: () => ({
            sectionTitle: 'Отзывы',
            showGroup: false,
            showEditGroup: false,
            editedComment:''
        }),
        components: {
            addComment: () => import("components/add-comment.vue"),
            commentsGroup: () => import("components/comments-group.vue"),
            editComment: () => import("components/edit-comment.vue"),
        },
        computed: {
            ...mapState("comments", {
				comments: state => state.comments
			}),
        },
        created() {
            this.setComments()
        },
        methods: {
            ...mapActions("comments", ["setComments", "addComment", "editComment", "removeComment"]),
            showCloseNewCommentForm() {
                this.showGroup = !this.showGroup
                this.showEditGroup = false;
                this.showGroup ? window.scrollTo(0,200) : window.scrollTo(0,0) 
            },
            async addNewComment(newComment) {
                try {
                    await this.addComment(newComment)
                } catch (error) {
                    
                } finally {
                    this.showGroup = !this.showGroup
                    window.scrollTo(0,0) 
                }
            },
            resetForm() {
                this.showEditGroup = false;
            },
            transferEditedComment(editedComment) {
                this.editedComment = editedComment;
                this.showGroup = false;
                this.showEditGroup = true;
                this.showEditGroup ? window.scrollTo(0,200) : window.scrollTo(0,0) 
            },
            async editExistedComment(editedComment) {
                try {
                    await this.editComment(editedComment)
                } catch (error) {
                    
                } finally {
                    this.showEditGroup = false;
                }     
            },
            async removeExistedComment(commentId) {
                try {
                    await this.removeComment(commentId)
                } catch (error) {
                    
                } finally {
    
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
        height: 380px;
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
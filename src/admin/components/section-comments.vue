<template lang="pug">
    .main-wrap
        section.main-section
            .main-info
                span.main-info__title Блок &#171;{{sectionTitle}}&#187;
            add-comment(v-if="showGroup" @closeComment="addNewComment")
            div.groups
                ul.groups__list
                    li.add-project-item(@click.prevent="addNewComment")
                        a.add-group()
                            span.add-group__link &#43;
                            span.add-group__text Добавить отзыв
                    li.groups__item(v-for="item in comments" :key="item.id")
                        comments-group(:commPhoto="item.photo" :commName="item.name" :commProf="item.prof" :commText="item.text")
</template>
        
<script>
    import commentsArr from '../../data/comments.json'
    import addComment from './add-comment.vue'
    import commentsGroup from './comments-group.vue'
    export default {
        name: 'sectionComments',
        data: () => ({
            sectionTitle: 'Отзывы',
            showGroup: false,
            comments: []
        }),
        components: {
            addComment, 
            commentsGroup
        },
        props: {

        },
        created() {
            this.comments = this.forRequireImg(commentsArr)
        },
        methods: {
            addNewComment() {
                this.showGroup = !this.showGroup
                this.showGroup ? window.scrollTo(0,200) : window.scrollTo(0,0) 
            },
            forRequireImg(commentsArr) {
                return commentsArr.map(item => {
                    const newImage = require(`../../images/content/${item.photo}`);
                    item.photo = newImage;
                    return item
                })
            },
        }
    }
    
</script>  

<style scoped lang="postcss">

    @import "../styles/mixins.pcss";

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
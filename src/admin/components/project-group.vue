<template lang="pug">
    .group
        .image
            img.image__pic(:src="prImage")
        .info
            .title {{prTitle}}
            .description {{prDesc}}
            a.ref(:href="prRef") htttp:{{prRef}}
            .button-project
                a.button__pencil-project Править
                a.button__cross-project Удалить

</template>

<script>
    export default {
        name: 'projectGroup',
        data: () => ({

        }),
        props: {
            prImage: String,
            prTitle: String,
            prTags: String,
            prRef: String,
            prDesc: String
        },
        methods: {
            newValues: function () {
                this.$emit('addSkill', this.newSkill, this.newPercent, this.skillId)
            }            
        },
        watch: {
            newSkill() {
                //this.newSkill = this.$refs.newSkillValue.value
                //console.log(this.newSkill)
            }
        }
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

        &:after {
            content: '';
            position: absolute;
            right: -26px;
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
        margin-right: 25px;

        &:after {
            content: '';
            position: absolute;
            right: -26px;
            top: 50%;
            transform: translate(0, -50%);
            background: svg-load("cross.svg", fill=#bf2929) no-repeat center;
            width: 14px;
            height: 12px;
        }
    }

    
</style>
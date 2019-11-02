<template lang="pug">
    .skill-item-container
        .inputs-wrap(:class="{'active-item': editMode}")
            input.input.input_skill-text(v-model="editSkill.newSkillTitle")
            .percent-wrap
                input.input.input_skill-percent(v-model="editSkill.newSkillPercent" maxlength="3")
        .button(v-if="editMode == false")
            a.button__pencil(@click.prevent="changeEditMode")
            a.button__remove(@click.prevent="removeSkill")
        .button(v-else="editMode == true")
            button.button__tick(@click.prevent="confirmNewSkill" @keydown.enter="confirmNewSkill")
            a.button__cross(@click.prevent="changeEditMode") 
</template>


<script>
    export default {
        name: 'editSkill',
        data() {
            return {
                editMode: false,
                editSkill: {
                    id: this.skillItem.id,
                    newSkillTitle: this.skillItem.title,
                    newSkillPercent: this.skillItem.percent
                }
            }
        },
        props: {
            skillItem: Object
        },
        methods: {
            changeEditMode() {
                this.editMode= !this.editMode;
                this.editSkill.newSkillTitle = this.skillItem.title;
                this.editSkill.newSkillPercent = this.skillItem.percent;
            },
            confirmNewSkill() {
                if ((this.editSkill.newSkillTitle !== this.skillItem.title) || (this.editSkill.newSkillPercent !== this.skillItem.percent))  {
                    this.$emit('changeSkill', this.editSkill)
                } 
                this.editMode= !this.editMode;
            },
            removeSkill() {
                this.$emit('removeSkill', this.editSkill.id)
            }
        },
    }
</script>


<style lang="postcss">

    .skill-item-container {
        display: flex;
        width: 100%;
    }
</style>
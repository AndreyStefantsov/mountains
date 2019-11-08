<template lang="pug">
    .skill-item-container
        .inputs-wrap(:class="{'active-item': editMode}")
            input.input.input_skill-text(v-model="editedSkills.title")
            .percent-wrap
                input.input.input_skill-percent(v-model="editedSkills.percent" maxlength="3")
        .button(v-if="editMode == false")
            a.button__pencil(@click.prevent="changeEditMode" title="Изменить навык")
            a.button__remove(@click.prevent="removeExistedSkill" title="Удалить навык")
        .button(v-else="editMode == true")
            a.button__tick(@click.prevent="editExistedSkill" title="Подтвердить изменения")
            a.button__cross(@click.prevent="changeEditMode" title="Отменить изменения") 
</template>


<script>
    export default {
        name: 'editSkill',
        data() {
            return {
                editMode: false,
                editedSkills: {...this.skill},
            }
        },
        props: {
            skill: {
                type: Object,
                default: () => ({}),
                required: true
            }
        },
        methods: {
            changeEditMode() {
                this.editMode= !this.editMode;
            },
            editExistedSkill() {
                const editSkill = {
                    id: this.editedSkills.id,
                    title: this.editedSkills.title,
                    percent: this.editedSkills.percent,
                    category: this.editedSkills.category
                }
                this.editMode= !this.editMode;
                this.$emit('editExistedSkill', editSkill)
            },
            removeExistedSkill() {
                const editSkill = {
                    id: this.editedSkills.id,
                    title: this.editedSkills.title,
                    percent: this.editedSkills.percent,
                    category: this.editedSkills.category
                }
                this.$emit('removeExistedSkill', editSkill)
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
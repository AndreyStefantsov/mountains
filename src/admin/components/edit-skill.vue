<template lang="pug">
    .skill-item-container
        .inputs-wrap(:class="{'active-item': editMode}")
            input.input.input_skill-text(v-model="editedSkills.title")
            .error(v-if="isErrorTitle") {{errorMessage}}
            .percent-wrap
                input.input.input_skill-percent(v-model="editedSkills.percent" maxlength="3")
                .error(v-if="isErrorPercent") {{errorMessage}}
        .button(v-if="editMode == false")
            a.button__pencil(@click.prevent="changeAndBlockEditMode" title="Изменить навык")
            a.button__remove(@click.prevent="removeExistedSkill" title="Удалить навык")
        .button(v-else="editMode == true")
            a.button__tick(@click.prevent="editExistedSkill" title="Подтвердить изменения")
            a.button__cross(@click.prevent="changeAndBlockEditMode" title="Отменить изменения") 
</template>


<script>
    export default {
        name: 'editSkill',
        data() {
            return {
                editMode: false,
                editedSkills: {...this.skill},
                errorMessage: 'Это поле должно быть заполнено',
                isErrorTitle: false,
                isErrorPercent: false,
            }
        },
        props: {
            skill: {
                type: Object,
                default: () => ({}),
                required: true
            },
        },

        methods: {
            changeAndBlockEditMode() {
                this.editMode= !this.editMode;
                this.$emit('changeAndBlockEditMode', this.editMode)
            },
            editExistedSkill() {
                const editSkill = {
                    id: this.editedSkills.id,
                    title: this.editedSkills.title,
                    percent: this.editedSkills.percent,
                    category: this.editedSkills.category
                }
                this.editMode= !this.editMode;
                if ((this.editedSkills.title==undefined) || (this.editedSkills.title=='')) {                 
                    this.isErrorTitle = true;
                    setTimeout(() => this.isErrorTitle = false, 2000);
                } else if ((this.editedSkills.percent==undefined) || (this.editedSkills.percent=='')) {
                    this.isErrorPercent = true;
                    setTimeout(() => this.isErrorPercent = false, 2000);
                } else {
                    this.$emit('editExistedSkill', editSkill)
                }
                
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

    .inputs-wrap, .percent-wrap {
        position: relative;
    }
</style>
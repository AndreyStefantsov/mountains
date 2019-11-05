<template lang="pug">
	.main-wrap
		section.main-section
			.main-info
				span.main-info__title Блок &#171;{{sectionTitle}}&#187;
				a.add-group.add-group_top(@click="showNewGroupModule")
					span.add-group__link &#43;
					span.add-group__text Добавить группу
			div.groups
				ul.groups__list-skills
					li.groups__item-skills(v-if="showGroup")
						add-skill(@addNewGroup="addNewGroup")
					li.groups__item-skills(v-for="category in categories" :key="category.id")
						skill-group(
							:category="category" 
							@changeCategoryName="changeCategoryName"
							@removeExistedCategory="removeExistedCategory"
							@addNewSkill="addNewSkill"
						)
		tooltip-message(:message="errorMessage" :messageMod="messageMod" v-if="isError")
</template>
	
<script>
	import {mapState, mapActions} from 'vuex';
	//import tooltipMessage from '../tooltip';
	export default {
		name: 'skills',
		data() {
			return {
				showGroup: false,
				sectionTitle: 'Обо мне',
				errorMessage: '',
				messageMod: '', //error/complete/other
				isError: false
			}
		},
		components: {
			skillGroup: () => import("components/skill-group.vue"),
			addSkill: () => import("components/add-skill.vue"),
			tooltipMessage: () =>import("components/tooltip.vue")
		},
		computed: {
			...mapState("categories", {
				categories: state => state.categories
			}),
		},
		created() {
			this.setCategories()
		},
		
		methods: {
			...mapActions("categories", ["addNewCategory", "setCategories", "editCategory", "removeCategory"]),
			...mapActions("skills", ["addSkill"]),
			changeSkill(editSkill) {
				console.log(editSkill)
			},
			showNewGroupModule() {
				this.showGroup = !this.showGroup
			},
			async addNewGroup(newTitle) {
				try {
					await this.addNewCategory(newTitle)
					this.messageMod = 'complete'
					this.errorMessage = "Категория добавлена";
					this.isError = true;
					
				} catch (error) {
					this.messageMod = 'error'
					this.errorMessage = error.message;
					this.isError = true;
					
				} finally {
                    setTimeout(() => {
						this.isError = false;
						this.messageMod = ''
					}, 3500);
                }
			},
			async addNewSkill(newSkill) {
				try {
					await this.addSkill(newSkill);
					this.messageMod = 'complete'
					this.errorMessage = "Скилл добавлен";
					this.isError = true;
				} catch (error) {
					this.messageMod = 'error'
					this.errorMessage = error.message;
					this.isError = true;
				} finally {
                     setTimeout(() => {
						this.isError = false;
						this.messageMod = ''
					}, 3500);
                }
			},
			async changeCategoryName(editedCategory) {
				try {
					await this.editCategory(editedCategory);
					this.messageMod = 'complete'
					this.errorMessage = "Имя категории изменено";
					this.isError = true;
				} catch (error) {
					this.messageMod = 'error'
					this.errorMessage = error.message;
					this.isError = true;
				} finally {
                     setTimeout(() => {
						this.isError = false;
						this.messageMod = ''
					}, 3500);
                }
			
			},
			async removeExistedCategory(editedCategory) {
				try {
					await this.removeCategory(editedCategory);
					this.messageMod = 'complete'
					this.errorMessage = "Категория удалена";
					this.isError = true;
				} catch (error) {
					this.messageMod = 'error'
					this.errorMessage = error.message;
					this.isError = true;
				} finally {
                     setTimeout(() => {
						this.isError = false;
						this.messageMod = ''
					}, 3500);
                }
			}
		},
		
	}

	
</script>  

<style lang="postcss">
	@import "../../styles/mixins.pcss";

	.add-group {
		display: flex;
		align-items: center;
	}

	.add-group_top {
		@include phones {
			margin-bottom: 30px;
			margin-left: 30px
		}
	}
	
	.add-group__link {
		color: #fff;
		width: 21px;
		height: 21px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background: #1b5ae3;
		background: -moz-linear-gradient(left,  #1b5ae3 0%, #433acc 100%);
		background: -webkit-linear-gradient(left,  #1b5ae3 0%,#433acc 100%);
		background: linear-gradient(to right,  #1b5ae3 0%,#433acc 100%);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1b5ae3', endColorstr='#433acc',GradientType=1);
	}
	.add-group__link__link-in-group {
		font-size: 30px;
		width: 40px;
		height: 40px;
	}

	.add-group__text {
		color: #383bcf;
		margin-left: 13px;
	}

	.groups__list-skills {
		display: flex;
		flex-flow: wrap;

		@include desktop {
			justify-content: center;
		}

	}

	.groups__item-skills {
		margin-bottom: 30px;
		margin-right: 30px;

		@include desktop {
			margin-right: 0;
		}


		@include tablets {
			margin-right: 0;
		}

		@include phones {
			margin-right: 0;
		}


		&:nth-child(even) {                      
			margin-right: 0;
		} 
	}

	
</style>
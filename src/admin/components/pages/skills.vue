<template lang="pug">
	.main-wrap
		section.main-section
			.main-info
				span.main-info__title Блок &#171;{{sectionTitle}}&#187;
				a.add-group.add-group_top(@click="addNewGroup")
					span.add-group__link &#43;
					span.add-group__text Добавить группу
			div.groups
				ul.groups__list-skills
					li.groups__item-skills(v-if="showGroup")
						add-skill(:skills="skills")
					li.groups__item-skills(v-for="item in skills" :key="item.id")
						//skill-group(:skillsArr="item.skills" :skillTitle="item.title" :skillId="item.id" @addSkill="(newSkillValue, newPercentValue, itemId) => $emit('addSkill', newSkillValue, newPercentValue, itemId)")
						skill-group(:skills="item")
</template>
	
<script>
	import {mapState} from 'vuex'
	export default {
		name: 'skills',
		data() {
			return {
				showGroup: false,
				sectionTitle: 'Обо мне',
			}
		},
		components: {
			skillGroup: () => import("components/skill-group.vue"),
			addSkill: () => import("components/add-skill.vue")
		},
		computed: {
			...mapState({
				skills: state => state.skills.skills
			})
		},
		methods: {
			changeSkill(editSkill) {
				console.log(editSkill)
			},
			addNewGroup() {
				this.showGroup = !this.showGroup
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
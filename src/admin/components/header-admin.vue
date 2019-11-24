<template lang="pug">
    header.header
        .header__top
            .header__container
                .header__container-top
                    .header__image
                        img.header__pic(:src="src")
                    .header__info-wrap
                        .header-info
                            .header__name Андрей Стефанцов    
                            .header__title Панель администрирования
                        .quit 
                            a.quit__link(@click.prevent="userLogout") Выйти
        .header__down
            .header__container
                nav.nav
                    ul.nav__list
                        li.nav__item(v-for="(tab, i) in tabs" :key="i")    
                            router-link(
                                :to="tab.href" 
                                :data-text="tab.title" 
                                class="nav__link" 
                                exact-active-class="active"
                                )                            
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        name: 'headerAdmin',
        data() {
            return {
                src: require('images/content/me.jpg'),
                activeTab: 0,
                tabs: [
                    {title: "Скиллы", href: "/"},
                    {title: "Работы", href: "/projects"},
                    {title: "Отзывы", href: "/comments"}
			    ]
            }
        },
        methods: {
            ...mapActions("user", ["logout"]),
            async userLogout() {
                try {
                    await this.logout();
                    this.$router.replace("/login")
                } catch (error) {
                   
                }
            }
        }
    }
    
</script>  

<style lang="postcss">
	@import "../../styles/mixins.pcss";

    .header {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }

    .header__top {
        background: #3e3e59;
        background: -moz-linear-gradient(left,  #3e3e59 0%, #454573 100%);
        background: -webkit-linear-gradient(left,  #3e3e59 0%,#454573 100%);
        background: linear-gradient(to right,  #3e3e59 0%,#454573 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3e3e59', endColorstr='#454573',GradientType=1 );
    }
    .header__container {
        width: 100%;
        margin: 0 auto;
        max-width: 1200px;
    }

    .header__container-top {
        display: flex;
        margin: 16px 5% 19px;
    }

    .header__info-wrap {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: space-between;

        @include phones {
			flex-direction: column;
            justify-content: center;
            align-items: flex-start;
		}

        /*@media screen and (max-width: $bp-phones) {
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }*/
    }

    .header-info {
        display: flex;
        align-items: center;
    }

    .header__image {
        width: 44px;
        max-height: 44px;
        margin-right: 20px;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
    }

    .header__pic {
        width: 100%;
        object-fit: cover;
    }    
    .header__name {
        margin-right: 25px;
        font-size: 18px;
        color: #fff;
        font-weight: 600;

        @include phones {
			margin-right: 0px;
		}
    }
    .header__title {
        color: rgba(#6d6d87, 0.5);
        font-size: 14px;

        @include phones {
			display: none;
		}
    }
    .quit {
        display: flex;
        align-items: center;
    }
    .quit__link {
        color: rgba(#6d6d87, 0.7);
        text-decoration: rgba(#6d6d87, 0.7);
        text-decoration-line: underline;

        &:hover {
            color: rgba(#6d6d87, 1);
        }
    }

    .header__down {
        margin: 0 auto;
        width: 100%;
    }

    .nav {
        margin: 0 5%;

    }
    .nav__list {
        display: flex;
    }
    .nav__item {
        width: 125px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-right: 20px;
    }

    .nav__link {
        color: #464d62;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 3px solid transparent;
            
        &:before {
            content: attr(data-text);
        }

        &:hover {
            border-bottom: 3px solid #383bcf;
            color: #383bcf;
        }

        &.active {
            border-bottom: 3px solid #383bcf;
            color: #383bcf;
        }
    }
    
    
</style>
    
    
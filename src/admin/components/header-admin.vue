<template lang="pug">
    header.header
        .header__top
            .header__container
                .header__info
                    .header__image
                        img.header__pic(:scr="src")
                    .header__name Андрей Стефанцов    
                    .header__title Панель администрирования
                .quit 
                    a.quit__link(href="#") Выйти
        .header__down
            nav.nav
                ul.nav__list
                    li.nav__item(v-for="tab in tabs" :key="tab.id" :class="{'active-tab': tab.id==activeTab}")
                        a.nav__link {{tab.tab}}
</template>


<script>
    import tabsArr from '../data/nav.json'
    export default {
        name: 'headerAdmin',
        data: () => ({
            src: require('images/content/me.jpg'),
            activeTab: 0,
            tabs: tabsArr
        }),
    }
    
</script>  

<style  lang="pcss">
    .header {
        display: flex;
        flex-direction: column;
    }

    .header__top {
        background: #3e3e59;
        background: -moz-linear-gradient(left,  #3e3e59 0%, #454573 100%);
        background: -webkit-linear-gradient(left,  #3e3e59 0%,#454573 100%);
        background: linear-gradient(to right,  #3e3e59 0%,#454573 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3e3e59', endColorstr='#454573',GradientType=1 );
    }
    .header__container {
        display: flex;
        justify-content: space-between;
        margin: 16px 5% 19px;
        
    }

    .header__info {
        display: flex;
        align-items: center;
    }

    .header__image {
        width: 44px;
        height: 44px;
        margin-right: 20px;
    }

    .header__pic {
        max-width: 100%;
        object-fit: cover;
    }    
    .header__name {
        margin-right: 25px;
        font-size: 18px;
        color: #fff;
        font-weight: $semibold;
    }
    .header__title {
        color: rgba(#6d6d87, 0.5);
        font-size: 14px;
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
        border-bottom: 3px solid transparent;
        cursor: pointer;

        &:hover {
            border-bottom: 3px solid #383bcf;
        }

        &:hover >a {
            color: #383bcf;

        }
    }
    .nav__link {
        color: #464d62
    }
    .active-tab {
        border-bottom: 3px solid #383bcf;
        
        &>a {
            color: #383bcf;
        }
    }
    
</style>
    
    
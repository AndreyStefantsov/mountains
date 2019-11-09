<template lang="pug">
    .login
        .login__container
            form.login__form(@submit.prevent="userLogin")
                .login__form-title Авторизация
                .login__content.login-content_name
                    label(for="login").login__label Логин
                    input(v-model="user.name" name="login").login__name
                .login__content.login-content_password
                    label(for="password").login__label Пароль
                    input(v-model="user.password" name="password" type="password").login__password
                button(type="submit").login__send Войти
        tooltip-message(:message="errorMessage" v-if="isError")            
</template>

<script>
    import $axios from '../../requests';
    import tooltipMessage from '../tooltip';
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                user: {
                    name: "stefantsov-102019",      //stefantsov-102019
                    password: "jo5e72"    //jo5e72
                },
                errorMessage: '',
                isError: false
            }
        },
        components: {
            tooltipMessage
        },
        methods: {
            ...mapActions("user", ["login"]),
            async userLogin() {
                try {
                    await this.login(this.user);
                    this.$router.replace("/");
                    this.errorMessage = "Вход выполнен";
                    this.isError = true;

                } catch (error) {
                    this.errorMessage = error.message;
                    this.isError = true;
                    
                } finally {
                    setTimeout(() => this.isError = false, 2500);
                }
            }
        }
    }
    
</script>

<style scoped lang="postcss">
    
    @import "../../styles/mixins.pcss";
    
    .login {
        background: url("../../../images/content/mountain_baloon.jpg"), rgba(#fff, .9) no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #3b4a5e;
            opacity: 0.5;
        }
    }

    .login__container {
        position: relative;

        @include phones {
			width: 100%;
            height: 100%;
		}
    }

    .login__form {
        width: 565px;
        padding: 60px 77px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
    }

    .login__form-title {
        font-size: 36px;
        text-align: center;
        font-weight: 600;
        margin-bottom: 80px;
    }

    .login__content {
        position: relative;
    }

    .login-content_name {
        &:before {
            content: '';
            position: absolute;
            background: svg-load("user.svg", fill=#c7cad0) no-repeat center;
            width: 26px;
            height: 30px;
        }
    }

    .login-content_password {
        &:before {
            content: '';
            position: absolute;
            background: svg-load("key.svg", fill="#c7cad0") no-repeat center;
            width: 28px;
            height: 28px;
        }
    }
    
    .login__name, .login__password {
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 1px solid #464d62;
        padding-bottom: 20px;
        padding-left: 45px;
        resize: none;
        font-size: 18px;
        font-weight: 700;

        &:focus {
            outline: none;
            border-bottom: 1px solid $hover-color;
        }
    }

    .login__name {
        margin-bottom: 75px;
    }

    .login__password {
        margin-bottom: 40px;
    }

    .login__label {
        left: 45px;
        top: -45px;
        font-weight: 600;
        color: rgba($text-color, .3);
        position: absolute;
    }

    .login__send {
        width: 347px;
        height: 80px;
        font-size: 18px;
        border-radius: 40px 4px;
        display: flex;
        justify-content: center;
        color: #fff;
        font-weight: 700;
        background: #7d00e9; /* Old browsers */
        background: -moz-linear-gradient(left,  #7d00e9 0%, #4a00ed 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left,  #7d00e9 0%,#4a00ed 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right,  #7d00e9 0%,#4a00ed 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7d00e9', endColorstr='#4a00ed',GradientType=1 ); /* IE6-9 */

        &:focus {
            outline: none
        }
    }
</style>
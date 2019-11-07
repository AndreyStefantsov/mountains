<template lang="pug">
  .maincontent-container
    template(v-if="$route.meta.public")
      router-view
    template(v-else="isLogged")  
      header-admin
      .content-wrap
        router-view
</template>

<script>
  
  export default {
    data() {
      return {
        isLogged: false
      }
    },
    components: {
      headerAdmin: () => import("components/header-admin.vue")
    },
    beforecreated() {
      const token = localStorage.getItem("token")
      token ? isLogged=true : isLogged=false
    }
  } 
</script>

<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

  .admin-wrapper, .maincontent, .maincontent-container {
    width: 100%;
    height: 100%
  }

  .content-wrap {
    background: url("../images/content/mountain_baloon.jpg"), rgba(#fff, .9) no-repeat;
    background-size: cover;
    background-blend-mode: lighten;
    padding-top: 60px;
    padding-bottom: 30px; 
  }

  .main-section {
    margin: 0 4%;
    display: flex;
    flex-direction: column;

    @include tablets {
      margin: 0 2.5%;
    }
    @include phones {
      margin: 0
    }

  }

  .main-wrap {
    margin: 0 auto;
    max-width: 1200px;
  }
  
  .main-info {
    display: flex;
    margin-bottom: 60px;

    @include phones {
      flex-direction: column;
      margin-bottom: 0;
    }
  }
  
  .main-info__title {
    color: #464d62;
    font-weight: bold;
    font-size: 21px;
    margin-right: 60px;

    @include phones {
      margin-left: 30px;
      margin-bottom: 30px;
    }
  }

  .error {
        font-size: 12px;
        color: red;
        position: absolute;
        left: 0;
        top: 100%
    }

    .input {
        background: transparent;
        border: 1px solid transparent;
        color: #464d62;
        font-size: 18px;
        font-weight: 600;
        position: relative;
        line-height: 1.42;

        &:focus {
            outline: none;
            border-bottom: 1px solid #383bcf !important;
        }
    }
</style>


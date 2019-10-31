<template lang="pug">
  .div
    header-admin
    .content-wrap
      router-view      
</template>

<script>

  export default {
    components: {
      headerAdmin: () => import("components/header-admin.vue")
    },
  } 
</script>

<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

  .maincontent {
    width: 100%;
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

    /*@media screen and (max-width: $bp-tablets) {
      margin: 0 2.5%;
    }*/

    @include phones {
      margin: 0
    }

    /*@media screen and (max-width: $bp-phones) {
      margin: 0
    }*/
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

    /*@media screen and (max-width: $bp-phones) {
      flex-direction: column;
      margin-bottom: 0;
    }*/
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

    /*@media screen and (max-width: $bp-phones) {
      margin-bottom: 30px;
    }

    @media screen and (max-width: $bp-phones) {
      margin-left: 30px;
    }*/
  }

  .error {
        font-size: 12px;
        color: red;
        position: absolute;
        left: 0;
        top: 100%
    }
</style>


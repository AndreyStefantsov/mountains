<template lang="pug">
    .tooltip(:class="messageMod") {{message}}
</template>

<script>
export default {
    name: 'tooltipMessage',
    data() {
        return {
            
        }
    },
    props: {
        message: {
            type: String,
            default: "Произошла ошибка"
        },
        messageMod: {
            type: String,
        }
    }
}
</script>

<style lang="postcss">
    .tooltip {
        position: absolute;
        bottom: 100px;
        padding: 20px;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        left: 50%;
        transform: translate(-50%, 0);
        white-space: nowrap;
        transition: bottom 2s
    }
    .error {
        background-color: #b13333;
        bottom: 0;
    }
    .complete {
        background-color: #4bb133;
        bottom: 0;
    },
    .other {
        background-color: #b18333;
        bottom: 0;
    }
    
</style>
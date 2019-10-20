new Vue ({
    el: "#bg-top",

    data: {
        open: '',
        hidden: ''
    },
    
    methods: {
        openMenu() {
            this.open = 'open';
            setTimeout(() => this.hidden = 'hidden', 400);
        },

        closeMenu() {
            this.open = '';
            setTimeout(() => this.hidden = '', 200);
        }
    }
})

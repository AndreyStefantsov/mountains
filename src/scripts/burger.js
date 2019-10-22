new Vue ({
    el: "#burger-wrap",

    data: {
        open: '',
        hidden: ''
    },
    
    methods: {
        openMenu() {
            this.open = 'open';
            setTimeout(() => this.hidden = 'hidden', 400);
            document.body.style.overflow = 'hidden'
        },

        closeMenu() {
            this.open = '';
            setTimeout(() => this.hidden = '', 200);
            document.body.style.overflow = ''
        },

        clickOn(e) {
            if (e.target.tagName !== 'A') return
            setTimeout(() => this.open = '', 300);
            setTimeout(() => this.hidden = '', 300);
            document.body.style.overflow = ''
        }
    }

})
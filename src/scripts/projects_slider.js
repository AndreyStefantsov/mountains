new Vue ({
    el: "#projects",

    data: {
        offsetTop: "",
        blockedUp: true,
        blockedDown: false,
        scrollWidth: 17,
        listHeight: '',
        previewsIterate: '',
        activeItem: 0,
        changed: true,
        activeIndex: 0,
        currentItem: [],
        /*path: 'images/content/',
        images: [this.path + 'preview_future.jpg'],
        src: ''*/
    },

    computed: {
        previewsItems() {
            return this.$el.querySelectorAll('.project-preview__item')
        },
        itemHeight() {
            return parseInt(this.previewsItems[0].clientHeight)
        },
        previewsHeight() {
            if (document.body.clientWidth+this.scrollWidth>1200) {
                return 400
            } else return document.body.clientWidth<=480 ? 190 : 300;
        },
        /*previewsIterate() {
            return this.previewsHeight/this.itemHeight;
        }*/
    },

    mounted () {
        window.onload = () => {
            this.offsetTop = parseInt(getComputedStyle(this.$el.querySelector('.project-preview__list')).top);
            this.listHeight = parseInt(getComputedStyle(this.$el.querySelector('.project-preview__list')).height);
        },
        this.previewsIterate = this.previewsHeight/this.itemHeight;
        //this.currentItem
        //this.src = this.path + 'preview_car.jpg' 
    },


    watch: {
        previewsIterate() {
            if (this.previewsIterate === this.listHeight/this.itemHeight) {
                this.blockedDown = true;
            } else if (this.offsetTop == 0) {
                this.blockedUp = true;
            } 
        }
    },

    methods: {

        slideUp() {
            if (this.offsetTop != 0) {
                this.offsetTop += this.itemHeight;
                this.blockedDown = false;
                //this.activeItem--;
                this.previewsIterate--;
                console.log(this.previewsIterate)
            }
            return this.offsetTop;
        },

        slideDown() {
            //this.activeItem++
            //this.$el.getAttribute('data-index')
            //console.log(this.previewsItems[this.activeItem].getAttribute('data-index'))
            //if (this.activeItem ==)
            if (this.listHeight-this.previewsHeight !== Math.abs(this.offsetTop)) {
                this.blockedUp = false;
                this.offsetTop += -this.itemHeight;
                this.previewsIterate++
                console.log(this.previewsIterate)
                return this.offsetTop;
                
            }

        },

        changePreview(e) {
            if (e.target.tagName !== "A") return;
            this.currentItem = e.target.closest('li').getAttribute('data-index');
            //this.activeItem = this.previewsItems[this.currentItem]
            console.log(this.currentItem)
            this.previewsItems.forEach(item => {
                item.classList.remove('is-active')
            });
            this.previewsItems[this.currentItem].classList.add('is-active')
            //this.src = this.images[0]
            //this.$refs.fullImage['src'] = '../images/content/preview_future.jpg'
            console.log(this.$refs.fullImage['src'])
        }
    }
})
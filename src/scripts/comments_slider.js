
new Vue ({
    el: "#comments",
    data: {
        offsetleft: "",
        start: "",
        blockedRight: true,
        blockedLeft: false,
        iterate: 1
    },
    
    computed: {
        commentlist() {
            return this.$el.querySelector('.comments__list')
        },
        items() {
            return this.commentlist.querySelectorAll('.comments__item')
        },
        itemWidth() {
            return parseInt(getComputedStyle(this.items[0]).marginRight) + this.items[0].offsetWidth;
        },
        stopper() {
            return this.items.length % 2 === 0 ? stopper = 2 : stopper = 1;
        },
        ismobile() {
            if (document.body.clientWidth<=812) {
                return true;
            } else return false
        },
        slideCount() {
            console.log()
            return this.iterate + this.items.length; 
        },
        count() {
            return this.ismobile ? 1 : 2;
        }
    },

    watch: {
        iterate() {
            if (this.iterate*this.count==this.items.length+(stopper == 2 ? 0 : 1))  {
                this.blockedLeft = true;
            } else {
                if (this.offsetleft == start) {
                    this.blockedRight = true;
                } 
            }
        },

    },

    mounted () {
        window.onload = () => {
            this.offsetleft = parseInt(getComputedStyle(this.commentlist).left);
            start = this.offsetleft;
            this.items.length <=2 ? this.blockedLeft = true : this.blockedLeft = false;
        }
    },

    methods: {
        slideLeft() {
            this.blockedRight = false;
            this.iterate++;
            if (this.items.length <=2) {
                return
            } else {
                if (((this.items.length-this.stopper)*this.itemWidth-start) != Math.abs(this.offsetleft)) {
                    this.offsetleft +=  -this.itemWidth*this.count;
                    return this.offsetleft;
                }  
            }
        },

        slideRight() {
            this.iterate--;
            this.blockedLeft = false;
            if (this.offsetleft != start) {
                this.offsetleft +=  this.itemWidth*this.count ;
                return this.offsetleft;
            } 
        },
    }
})
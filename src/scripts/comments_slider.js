import Vue from "vue"
import {mapState, mapActions} from 'vuex';
import store from '@/store'
import axios from '@/requests'
store.$axios = axios;

new Vue({
    el: "#comments-content",
    store,
    template: "#comments-block",
    data: () => ({
        offsetleft: 0,
        start: "",
        blockedRight: true,
        blockedLeft: false,
        iterate: 1
    }),
    created() {
        this.setComments()
    },
    computed: {
        ...mapState("comments", {
            comments: state => state.comments
        }),
        commentlist() {
            return this.$refs['commentsList']
        },
        items() {
            return this.commentlist.children.length
        },
        itemWidth() {
            return parseInt(getComputedStyle(this.commentlist.children[0]).marginRight) + parseInt(this.commentlist.children[0].offsetWidth);
        },
        stopper() {
            return this.items % 2 === 0 ? 2 : 1;
        },
        ismobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
                return true;
            } else return false
        },
        slideCount() {
            return this.iterate + this.items; 
        },
        count() {
            return ((this.ismobile) || (document.body.clientWidth<=700)) ? 1 : 2;
        }
        
    },
    watch: {        
        iterate() {
            if (this.iterate*this.count==this.items+(this.stopper == 2 ? 0 : 1))  {
                this.blockedLeft = true;
            } else {
                if (this.offsetleft == this.start) {
                    this.blockedRight = true;
                } 
            }
        },

        offsetleft() {
            window.onresize = () => {
                this.offsetleft = parseInt(getComputedStyle(this.commentlist).left);
                this.start = this.offsetleft;  
            }
        }
    },
    methods: {
        ...mapActions("comments", ["setComments"]),

        slideLeft() {
            this.blockedRight = false;
            this.iterate++;
            if (this.items <=2) {
                return
            } else {
                if (((this.items-this.stopper)*this.itemWidth-this.start) != Math.abs(this.offsetleft)) {
                    this.offsetleft +=  -this.itemWidth*this.count;
                    return this.offsetleft;
                }  
            }
        },

        slideRight() {
            this.iterate--;
            this.blockedLeft = false;
            if (this.offsetleft != this.start) {
                this.offsetleft +=  this.itemWidth*this.count ;
                return this.offsetleft;
            } 
        },

    },

   
})

/*
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
            return this.$refs['commentsList']
        },
        items() {
            return this.commentlist.children.length
        },
        itemWidth() {
            return parseInt(getComputedStyle(this.$refs['commentsItem']).marginRight) + this.$refs['commentsItem'].offsetWidth;
        },
        stopper() {
            return this.items % 2 === 0 ? stopper = 2 : stopper = 1;
        },
        ismobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
                return true;
            } else return false
        },
        slideCount() {
            return this.iterate + this.items; 
        },
        count() {
            return ((this.ismobile) || (document.body.clientWidth<=700)) ? 1 : 2;
        }
    },

    watch: {
        iterate() {
            if (this.iterate*this.count==this.items+(stopper == 2 ? 0 : 1))  {
                this.blockedLeft = true;
            } else {
                if (this.offsetleft == this.start) {
                    this.blockedRight = true;
                } 
            }
        },

        offsetleft() {
            window.onresize = () => {
                this.offsetleft = parseInt(getComputedStyle(this.commentlist).left);
                this.start = this.offsetleft;  
            }
        }
        
    },

    mounted () {
        window.onload = () => {
            this.offsetleft = parseInt(getComputedStyle(this.commentlist).left);
            this.start = this.offsetleft;
            this.items <=2 ? this.blockedLeft = true : this.blockedLeft = false;
        }
    },

    methods: {
        slideLeft() {
            this.blockedRight = false;
            this.iterate++;
            if (this.items <=2) {
                return
            } else {
                if (((this.items-this.stopper)*this.itemWidth-this.start) != Math.abs(this.offsetleft)) {
                    this.offsetleft +=  -this.itemWidth*this.count;
                    return this.offsetleft;
                }  
            }


        },

        slideRight() {
            this.iterate--;
            this.blockedLeft = false;
            if (this.offsetleft != this.start) {
                this.offsetleft +=  this.itemWidth*this.count ;
                return this.offsetleft;
            } 
        },
    }
})
*/



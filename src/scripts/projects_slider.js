import Vue from "vue"

const projectTags = {
    template: '#project-tags',
    props: ["tagsArr"]
    
}

const projectDecription = {
    template: '#project-decription',
    components: {projectTags},
    props: ["currentItem"],
    computed: {
        makeTagsArr() {
            return this.currentItem.tags.split(', ')
        }
    }
}

const projectButtons = {
    template: '#project-buttons'
}

const projectPreviews = {
    template: '#project-previews',
    props: ["projects", "currentItem", "offsetBottom"],
    computed: {
        reverseProjectsArr() {
            return[...this.projects].reverse()
        },
        /*computeListHeight() {
            return this.listHeight = parseInt(getComputedStyle(this.$refs.previewList).height)
        }*/
    }
}

new Vue({
    el: "#projects-container",
    template: '#project-block',
    components: {projectPreviews, projectButtons, projectDecription},
    data: () => ({
        projects: [],
        activeItem: 0,
        offsetBottom: 0,
        dataCount: 0,
        scrollWidth: 17,
        previewsAmount:''
    }),
    computed: {
        currentItem() {
            return this.projects[this.activeItem]
        },
        itemsAmount() {
            return this.projects.length;
        },
        previewsHeight() {
            if (document.body.clientWidth+this.scrollWidth>1200) {
                return 400
            } else return document.body.clientWidth<=480 ? 190 : 300;
        },

        visibleItemsAmount() {
            if (this.previewsHeight == 400) {
                return 4
            } else return this.previewsHeight == 300 ? 3 : 1;
        },
        
        itemHeight() {
            return this.previewsHeight == 190 ? 190 : 100
        },
        
    },
    watch: {
        activeItem(index) {
            if (index<0) {
                this.activeItem = this.projects.length-1;
                
            };

            if (index>this.projects.length-1) {
                this.activeItem = 0;
                this.offsetBottom = 0
            };
        }
    },
    methods: {
        forRequireImg(projectArr) {
            return projectArr.map(item => {
                const newImage = require(`images/content/${item.image}`);
                item.image = newImage;
                return item
            })
        },

        slideUp() {
            this.activeItem++
            console.log(this.activeItem)
            if ((this.activeItem > Math.abs(this.itemsAmount-this.visibleItemsAmount)) && (this.activeItem<this.visibleItemsAmount)) {
                this.offsetBottom += -this.itemHeight 
            } else if ((this.activeItem >= this.visibleItemsAmount) && (-this.offsetBottom !== (this.itemsAmount-this.visibleItemsAmount)*this.itemHeight)) {
                this.offsetBottom += -this.itemHeight 
            }

        },

        slideDown() {
            this.activeItem--
            if ((this.offsetBottom == 0) && (this.activeItem < 0)) {
                this.offsetBottom = -this.itemHeight*(this.itemsAmount-this.visibleItemsAmount)

            } else if (this.activeItem < Math.abs(this.offsetBottom)/this.itemHeight) {
                this.offsetBottom += this.itemHeight
            }

        },

        clickOnPreview(event) {
            let dataIndex = event.target.closest('a').dataset.index
            this.activeItem = dataIndex-1
            
        }
    },

    created() {
        const projectArr = require('../data/projects.json');
        this.projects = this.forRequireImg(projectArr)
    } 
})

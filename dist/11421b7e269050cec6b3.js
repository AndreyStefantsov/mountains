(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{369:function(t,e,o){},388:function(t,e,o){"use strict";var s=o(369);o.n(s).a},392:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"group-project"},[o("div",{staticClass:"main-title-project"},[t._v("Новый отзыв")]),o("div",{staticClass:"main-project"},[o("form",{staticClass:"form-comment",on:{submit:function(e){return e.preventDefault(),t.checkFields(e)}}},[o("div",{staticClass:"form"},[o("div",{staticClass:"form-comment__image",class:{"hidden-background":t.renderedPhoto.length},style:{backgroundImage:"url("+t.renderedPhoto+")"}}),o("a",{staticClass:"add-photo"},[t._v("Добавить фото"),o("label",{staticClass:"form_label",attrs:{for:"photo"}}),t.isErrorPhoto?o("div",{staticClass:"error"},[t._v(t._s(t.errorMessage))]):t._e()]),o("input",{staticClass:"form__input",attrs:{type:"file",id:"photo",accept:"image/*,image/jpeg"},on:{change:t.uploadRenderedPhoto}})]),o("div",{staticClass:"content-commment"},[o("div",{staticClass:"commment-input-group"},[o("div",{staticClass:"comment-info"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.comment.author,expression:"comment.author"}],staticClass:"input input_name",domProps:{value:t.comment.author},on:{input:function(e){e.target.composing||t.$set(t.comment,"author",e.target.value)}}}),o("div",{staticClass:"comment-text"},[t._v("Имя автора")]),t.isErrorAuthor?o("div",{staticClass:"error"},[t._v(t._s(t.errorMessage))]):t._e()]),o("div",{staticClass:"comment-info"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.comment.occ,expression:"comment.occ"}],staticClass:"input input_prof",domProps:{value:t.comment.occ},on:{input:function(e){e.target.composing||t.$set(t.comment,"occ",e.target.value)}}}),o("div",{staticClass:"comment-text"},[t._v("Титул автора")]),t.isErrorOcc?o("div",{staticClass:"error"},[t._v(t._s(t.errorMessage))]):t._e()])]),o("div",{staticClass:"comment-textarea"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment.text,expression:"comment.text"}],staticClass:"textarea",domProps:{value:t.comment.text},on:{input:function(e){e.target.composing||t.$set(t.comment,"text",e.target.value)}}}),o("div",{staticClass:"comment-text"},[t._v("Отзыв")]),t.isErrorText?o("div",{staticClass:"error"},[t._v(t._s(t.errorMessage))]):t._e()]),o("div",{staticClass:"button-add-comment"},[o("button",{staticClass:"reset-button",attrs:{type:"reset",title:"Отменить изменения"},on:{click:function(e){return e.preventDefault(),t.resetForm(e)}}},[t._v("Отмена")]),o("button-section",{attrs:{buttonTitle:t.buttonNameSave,type:"submit",title:"Сохранить изменения"},on:{checkFields:t.checkFields}})],1)])])])])};s._withStripped=!0;var r={name:"addComment",components:{buttonSection:function(){return o.e(0).then(o.bind(null,405))}},data:function(){return{renderedPhoto:"",comment:{author:"",occ:"",text:"",photo:""},buttonNameSave:"Сохранить",errorMessage:"Это поле должно быть заполнено",isErrorPhoto:!1,isErrorAuthor:!1,isErrorOcc:!1,isErrorText:!1}},props:{editedComment:{type:Object,default:function(){return{}},required:!0}},created:function(){this.comment=this.editedComment,this.renderedPhoto=this.imgPath},computed:{imgPath:function(){var t=this.editedComment.photo;return"".concat("https://webdev-api.loftschool.com","/").concat(t)}},methods:{resetForm:function(){this.renderedPhoto="",this.comment={},this.$emit("resetForm")},uploadRenderedPhoto:function(t){var e=this,o=t.target.files[0];this.comment.photo=o;var s=new FileReader;try{s.readAsDataURL(o),s.onload=function(){e.renderedPhoto=s.result}}catch(t){}},editExistedComment:function(){this.$emit("editExistedComment",this.comment)},checkFields:function(){var t=this;this.comment.photo.size>=15e5?(this.isErrorPhoto=!0,this.errorMessage="Размер фото больше допустимого (1500Кb)",setTimeout(function(){t.isErrorPhoto=!1,t.errorMessage="Это поле должно быть заполнено"},2e3)):null==this.comment.author||""==this.comment.author?(this.isErrorAuthor=!0,setTimeout(function(){return t.isErrorAuthor=!1},2e3)):null==this.comment.occ||""==this.comment.occ?(this.isErrorOcc=!0,setTimeout(function(){return t.isErrorOcc=!1},2e3)):null==this.comment.text||""==this.comment.text?(this.isErrorText=!0,setTimeout(function(){return t.isErrorText=!1},2e3)):this.editExistedComment()}}},i=(o(388),o(342)),n=Object(i.a)(r,s,[],!1,null,"be9ab4a8",null);n.options.__file="src/admin/components/edit-comment.vue";e.default=n.exports}}]);
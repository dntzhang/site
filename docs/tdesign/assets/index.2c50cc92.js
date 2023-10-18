import{W as g,p as o,V as d,$ as u}from"./index.79a2e431.js";import{T as t}from"./clsx.f76af8a1.js";import"./lodash.966b3234.js";import"./index.01b533f1.js";var p=`.t-message{margin:0;padding:0;list-style:none;width:fit-content;outline:0;border-radius:var(--td-radius-medium);background-color:var(--td-bg-color-container);box-shadow:var(--td-shadow-3),var(--td-shadow-inset-top),var(--td-shadow-inset-right),var(--td-shadow-inset-bottom),var(--td-shadow-inset-left);box-sizing:border-box;display:flex;align-items:center;color:var(--td-text-color-primary);font:var(--td-font-body-medium);padding:var(--td-comp-paddingTB-m) var(--td-comp-paddingLR-l)}.t-message>.t-icon,.t-message>[data-t-icon]>.t-icon,.t-message .t-loading{color:var(--td-brand-color);margin-right:var(--td-comp-margin-s);flex-shrink:0;font-size:calc(var(--td-font-size-body-medium) + 6px)}.t-message.t-is-success>.t-icon,.t-message.t-is-success>[data-t-icon]>.t-icon,.t-message.t-is-success .t-loading{color:var(--td-success-color)}.t-message.t-is-warning>.t-icon,.t-message.t-is-warning>[data-t-icon]>.t-icon,.t-message.t-is-warning .t-loading{color:var(--td-warning-color)}.t-message.t-is-error>.t-icon,.t-message.t-is-error>[data-t-icon]>.t-icon,.t-message.t-is-error .t-loading{color:var(--td-error-color)}.t-message.t-is-closable .t-message__close{display:inline-flex;margin-right:0;margin-left:var(--td-comp-margin-xxl);cursor:pointer;color:var(--td-text-color-secondary)}.t-message.t-is-closable .t-message__close .t-icon-close{font-size:calc(var(--td-font-size-body-medium) + 2px);border-radius:var(--td-radius-default);transition:all .2s linear}.t-message.t-is-closable .t-message__close .t-icon-close:hover{background:var(--td-bg-color-container-hover)}.t-message.t-is-closable .t-message__close .t-icon-close:active{background:var(--td-bg-color-container-active)}.t-message__list{position:fixed;z-index:6000}.t-message__list .t-message{margin-bottom:var(--td-comp-margin-s);word-break:break-all}
`,f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,_=(e,a,n,i)=>{for(var s=i>1?void 0:i?b(a,n):a,l=e.length-1,r;l>=0;l--)(r=e[l])&&(s=(i?r(a,n,s):r(s))||s);return i&&s&&f(a,n,s),s};const m=e=>t("message__")+e;let c=class extends g{constructor(){super(...arguments),this.onCloseBtnClick=()=>{this.parentElement.removeChild(this)},this.onDurationEnd=e=>{e!==null&&setTimeout(()=>this.parentElement.removeChild(this),e)}}getMessageTheme(e){return t(`is-${e||"success"}`)}render(e,a){const{theme:n,className:i,style:s,icon:l,content:r,closeBtn:v,duration:h}=e;return o(o.f,null,o("div",{style:s,class:d(t("reset"),t("message"),t("is-closable"),m("closeBtn"),this.getMessageTheme(n),this.onDurationEnd(h),i)},l&&o("svg",{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em",class:d(t("icon"),t("icon-check-circle-filled"))},o("path",{fill:"currentColor",d:"M12 23a11 11 0 100-22 11 11 0 000 22zM11 8.5v-2h2v2h-2zm2 1.5v7.5h-2V10h2z"})),r&&o("div",{class:m("content")},r),v&&o("svg",{onClick:this.onCloseBtnClick,fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em",class:d(t("icon"),t("icon-close"),t("message__close"))},o("path",{fill:"currentColor",d:"M7.05 5.64L12 10.59l4.95-4.95 1.41 1.41L13.41 12l4.95 4.95-1.41 1.41L12 13.41l-4.95 4.95-1.41-1.41L10.59 12 5.64 7.05l1.41-1.41z"}))))}};c.css=p;c.defaultProps={content:"my message",icon:!0,theme:"info",closeBtn:""};c.propTypes={className:String,style:String,content:String,duration:Number,icon:g,theme:String,onClose:Function,onCloseBtnClick:Function,onDurationEnd:Function};c=_([u("t-message")],c);
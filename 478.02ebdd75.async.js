(self.webpackChunkcondition_editor=self.webpackChunkcondition_editor||[]).push([[478],{57493:function(on,k,n){"use strict";n.d(k,{n:function(){return Nn}});var G=n(57213),p=n.n(G),S=n(25359),P=n.n(S),W=n(49811),T=n.n(W),K=n(54306),B=n.n(K),H=n(12342),an=n.n(H),Cn=n(33513),N=n(31333),dn=n(14196),I=n(28881),_=n(13563),hn=n(57395),F=n(59496),gn=n(52510),mn=n.n(gn),un=n(7685),vn=n(838),xn=n(84875),pn=n.n(xn),Pn=n(3289),An=n(81644),yn=n(40856),En=n(85315),a=n(82143),d=n(4637),$n=function(o){var L,E=(0,N.tB)("condition-item"),C=(0,F.useState)(!1),w=B()(C,2),nn=w[0],t=w[1],J=(0,F.useRef)(),e=(0,un.E)(),f=(L=e==null?void 0:e.disabled)!==null&&L!==void 0?L:!1,b=(e==null?void 0:e.levelText)||[],j=o==null?void 0:o.actionRef,X=(0,dn.useMergeState)(void 0,{defaultValue:o==null?void 0:o.defaultValue,value:o==null?void 0:o.value,onChange:o==null?void 0:o.onChange}),en=B()(X,2),A=en[0],tn=en[1],U=function(i){var y=(0,N.p$)(A);return y.data=i,tn(y)},V=function(){return(0,I.mf)(e==null?void 0:e.renderCondField)?e.renderCondField({node:A,data:(0,N.p$)(A.data),disabled:f},U,e.getContainer):(0,d.jsx)("div",{children:"-"})},O=(0,F.useMemo)(function(){var v;return(v=e==null?void 0:e.operators)!==null&&v!==void 0?v:[]},[e==null?void 0:e.operators]),g=function(){var i;return(0,I.mf)(e==null?void 0:e.renderCondOperator)?e.renderCondOperator({node:A,data:(0,N.p$)(A.data),disabled:f},U,e.getContainer):(0,d.jsx)(vn.Z,{getPopupContainer:e==null?void 0:e.getContainer,placeholder:"\u8BF7\u9009\u62E9",dropdownMatchSelectWidth:!1,value:(i=A.data)===null||i===void 0?void 0:i.operator,onChange:function(h){var c=(0,N.p$)(A.data);tn(p()(p()({},c),{},{operator:h}))},style:{minWidth:"80px",width:"100%",maxWidth:"100%"},options:O})},u=function(){var i;return(0,I.mf)(e==null?void 0:e.renderCondValue)?e.renderCondValue({node:A,data:(0,N.p$)(A.data),disabled:f},U,e.getContainer):(0,d.jsx)(yn.Z,{style:{width:"120px"},placeholder:"\u8BF7\u8F93\u5165",value:(i=A.data)===null||i===void 0?void 0:i.value,onChange:function(h){var c,R,M=h==null||(c=h.target)===null||c===void 0?void 0:c.value;return U(p()(p()({},(R=A.data)!==null&&R!==void 0?R:{}),{},{value:M}))}})},l=function(){return(0,I.mf)(e==null?void 0:e.renderCondPrefix)?e.renderCondPrefix({node:A,data:(0,N.p$)(A.data),disabled:f},U,e.getContainer):null},m=function(){return(0,I.mf)(e==null?void 0:e.renderCondExtra)?e.renderCondExtra({node:A,data:(0,N.p$)(A.data),disabled:f},U,e.getContainer):null};(0,F.useEffect)(function(){typeof j=="function"&&J.current&&j(J.current)},[j]);var r={add:function(i,y){var h;o==null||(h=o.onAdd)===null||h===void 0||h.call(o,A.key,i,y)},delete:function(){var i;o==null||(i=o.onDelete)===null||i===void 0||i.call(o,A.key)}};J.current=r,j&&(j.current=J.current);var x=function(){if(f)return null;var i=(0,d.jsx)("div",{className:"".concat(E,"-action ").concat(E,"-action-delete"),onClick:function(s){var $;s==null||($=s.stopPropagation)===null||$===void 0||$.call(s),r.delete()},children:(0,d.jsx)(Pn.Z,{})},"delete"),y=(0,d.jsx)(_.Z,{type:"link",block:!0,onClick:function(s){var $;s==null||($=s.stopPropagation)===null||$===void 0||$.call(s),t(!1),r.add(a.s9.Before)},children:b[0]||"\u5728\u4E0A\u65B9\u63D2\u5165\u6761\u4EF6"},a.s9.Before),h=(0,d.jsx)(_.Z,{type:"link",block:!0,onClick:function(s){var $;s==null||($=s.stopPropagation)===null||$===void 0||$.call(s),t(!1),r.add(a.s9.After)},children:b[1]||"\u5728\u4E0B\u65B9\u63D2\u5165\u6761\u4EF6"},a.s9.After),c=(0,d.jsx)(_.Z,{type:"link",block:!0,onClick:function(s){var $;s==null||($=s.stopPropagation)===null||$===void 0||$.call(s),t(!1),r.add(a.s9.Child)},children:b[2]||"\u63D2\u5165\u5B50\u7EA7\u6761\u4EF6"},a.s9.Child),R=o.depth>1&&(0,d.jsx)(_.Z,{type:"link",block:!0,onClick:function(s){var $;s==null||($=s.stopPropagation)===null||$===void 0||$.call(s),t(!1),r.add(a.s9.BeforeParent)},children:b[3]||"\u5728\u7236\u7EA7\u4E0A\u65B9\u63D2\u5165\u6761\u4EF6"},a.s9.BeforeParent),M=o.depth>1&&(0,d.jsx)(_.Z,{type:"link",block:!0,onClick:function(s){var $;s==null||($=s.stopPropagation)===null||$===void 0||$.call(s),t(!1),r.add(a.s9.AfterParent)},children:b[4]||"\u5728\u7236\u7EA7\u4E0B\u65B9\u63D2\u5165\u6761\u4EF6"},a.s9.AfterParent),z=[y,h,c,R,M].filter(function(D){return!!D}),Q=(0,d.jsx)("div",{className:"".concat(E,"-action ").concat(E,"-action-addition"),children:(0,d.jsx)(En.Z,{placement:"right",overlayClassName:"".concat(E,"-action-menu"),open:nn,onOpenChange:t,content:(0,d.jsx)("div",{className:"".concat(E,"-action-menu-container"),children:z}),trigger:"hover",getPopupContainer:e.getContainer,children:(0,d.jsx)(An.Z,{})})},"addition"),q=[i,Q];if((0,I.mf)(e==null?void 0:e.renderCondActions)){var Z=e.renderCondActions(q,{node:A,data:(0,N.p$)(A.data),actionClassName:"".concat(E,"-action")},r);return(0,d.jsx)("div",{className:"".concat(E,"-cond-actions"),children:Z})}return(0,d.jsx)("div",{className:"".concat(E,"-cond-actions"),children:q})};return(0,d.jsxs)("div",{className:E,children:[l(),(0,d.jsx)("div",{className:"".concat(E,"-cond-field"),children:V()}),(0,d.jsx)("div",{className:"".concat(E,"-cond-operator"),children:g()}),(0,d.jsx)("div",{className:"".concat(E,"-cond-value"),children:u()}),m(),x()]})},cn=(0,F.memo)($n),sn=function(){return"root"},jn=function(o){return(0,I.PO)(o)&&o.type==a.Jq.Group},ln=function(){return{key:"".concat(new Date().valueOf()),type:a.Jq.Item,description:"",data:{}}},On=function(){return{key:"".concat(new Date().valueOf()),type:a.Jq.Group,description:"",data:{relation:a.uT.AND},children:[]}},Bn=sn(),fn=function Y(o){var L,E=(0,N.tB)("condition-group"),C=(0,un.E)(),w=(L=C==null?void 0:C.disabled)!==null&&L!==void 0?L:!1,nn=(C==null?void 0:C.relationText)||["\u5E76\u4E14","\u6216\u8005"],t=(0,F.useRef)(null),J=(0,dn.useMergeState)(void 0,{defaultValue:o==null?void 0:o.defaultValue,value:o==null?void 0:o.value,onChange:o==null?void 0:o.onChange,transformToOrigin:function(O){return O}}),e=B()(J,2),f=e[0],b=e[1],j=!(f!=null&&f.children)||f.children.length<2,X=function(){var V=T()(P()().mark(function O(g,u,l){var m,r,x,v,i,y,h,c,R,M,z,Q,q;return P()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:if(r=(0,N.p$)(Object.assign({},f)),x=r==null||(m=r.children)===null||m===void 0?void 0:m.findIndex(function(s){return s.key==g}),!(x>-1)){D.next=22;break}if(!(o.parentNode&&[a.s9.BeforeParent,a.s9.AfterParent].includes(u))){D.next=7;break}u==a.s9.BeforeParent?(v=o.onAddParent)===null||v===void 0||v.call(o,f.key,a.s9.Before,l):(i=o.onAddParent)===null||i===void 0||i.call(o,f.key,a.s9.After,l),D.next=22;break;case 7:if(h=ln(),!(0,I.mf)(C==null?void 0:C.onBeforeAddition)){D.next=18;break}return D.next=11,(0,I.lm)(C.onBeforeAddition(f,g,u));case 11:if(c=D.sent,R=B()(c,2),M=R[0],z=R[1],!(M||z===!1)){D.next=17;break}return D.abrupt("return");case 17:h.data=z;case 18:l&&(h.data=l),u==a.s9.Before?r.children.splice(x,0,h):u==a.s9.After?r.children.splice(x+1,0,h):u==a.s9.BeforeParent?r.children.splice(x,0,h):u==a.s9.AfterParent?r.children.splice(x+1,0,h):(Q=p()({},r.children[x]),q=On(),q.children.push(Q,h),r.children.splice(x,1,q)),b(r),C==null||(y=C.onAddition)===null||y===void 0||y.call(C,f,g,u,h);case 22:case"end":return D.stop()}},O)}));return function(g,u,l){return V.apply(this,arguments)}}(),en=function(){var V=T()(P()().mark(function O(g){var u,l,m,r,x,v,i,y;return P()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(l=(0,N.p$)(Object.assign({},f)),m=l==null||(u=l.children)===null||u===void 0?void 0:u.findIndex(function(R){return R.key==g}),!(m>-1)){c.next=15;break}if(!(0,I.mf)(C==null?void 0:C.onBeforeDelete)){c.next=12;break}return c.next=6,(0,I.lm)(C.onBeforeDelete(f,{key:g,index:m},a.Jq.Item));case 6:if(x=c.sent,v=B()(x,2),i=v[0],y=v[1],!(i||y===!1)){c.next=12;break}return c.abrupt("return");case 12:l.children.splice(m,1),l.children.length==1&&l.key!==Bn?b(p()(p()({},l.children[0]),{},{key:l.key})):b(l),C==null||(r=C.onDelete)===null||r===void 0||r.call(C,f,g,a.Jq.Item);case 15:case"end":return c.stop()}},O)}));return function(g){return V.apply(this,arguments)}}(),A=function(O){var g,u=(0,N.p$)(Object.assign({},f)),l=u==null||(g=u.children)===null||g===void 0?void 0:g.findIndex(function(m){return m.key==O.key});l>-1&&(u.children[l]=O,b(u))},tn=function(){var O;return f==null||(O=f.children)===null||O===void 0?void 0:O.map(function(g){return jn(g)?(0,d.jsx)(Y,{parentNode:f,value:g,onChange:A,onAddParent:function(l,m,r){X(l,m,r)},depth:o.depth+1},g.key):(0,d.jsx)(cn,{depth:o.depth+1,value:g,onChange:A,onAdd:X,onDelete:en},g.key)})},U=function(){var O,g,u;return j?null:(0,d.jsxs)("div",{className:"".concat(E,"-relation-wrap"),children:[(0,d.jsx)("div",{className:"".concat(E,"-line")}),(0,d.jsx)("div",{className:"".concat(E,"-relation"),children:(0,d.jsx)(vn.Z,{getPopupContainer:C==null?void 0:C.getContainer,value:f==null||(O=f.data)===null||O===void 0?void 0:O.relation,onChange:function(m){var r=(0,N.p$)(Object.assign({},f,{data:{relation:m}}));b(r)},disabled:w,style:{width:"100%",maxWidth:"100%"},options:[{value:a.uT.AND,label:(g=nn[0])!==null&&g!==void 0?g:"\u5E76\u4E14"},{value:a.uT.OR,label:(u=nn[1])!==null&&u!==void 0?u:"\u6216\u8005"}]})})]})};return(0,I.rr)(o,(0,d.jsxs)("div",{className:pn()(E,mn()({},"".concat(E,"-single"),j)),onChange:function(){},ref:t,children:[U(),(0,d.jsx)("div",{className:"".concat(E,"-content"),children:tn()})]}))},Dn=["maxHeight","additionText","additionProps"],rn=sn(),Tn=function(o){var L=o.maxHeight,E=o.additionText,C=E===void 0?"\u6DFB\u52A0\u6761\u4EF6":E,w=o.additionProps,nn=w===void 0?{}:w,t=an()(o,Dn),J=(0,N.tB)("condition-editor"),e=(0,F.useRef)(null),f=(0,dn.useMergeState)({key:rn,type:a.Jq.Group,data:{relation:a.uT.AND},children:[]},{defaultValue:t==null?void 0:t.defaultValue,value:t==null?void 0:t.value,onChange:t==null?void 0:t.onChange}),b=B()(f,2),j=b[0],X=b[1],en=function(){var u=T()(P()().mark(function l(){var m,r,x,v,i,y,h,c;return P()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:if(r=a.s9.After,x=(0,N.p$)(Object.assign({key:rn,type:a.Jq.Group,data:{relation:a.uT.AND},children:[]},j)),v=ln(),!(0,I.mf)(t==null?void 0:t.onBeforeAddition)){M.next=13;break}return M.next=6,(0,I.lm)(t.onBeforeAddition(j,rn,r));case 6:if(i=M.sent,y=B()(i,2),h=y[0],c=y[1],!(h||c===!1)){M.next=12;break}return M.abrupt("return");case 12:v.data=c;case 13:x.children.push(v),X(x),t==null||(m=t.onAddition)===null||m===void 0||m.call(t,j,rn,r,v);case 16:case"end":return M.stop()}},l)}));return function(){return u.apply(this,arguments)}}(),A=function(){var u=T()(P()().mark(function l(m,r,x){var v,i,y,h,c,R,M,z,Q;return P()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:if(i=(0,N.p$)(Object.assign({},j)),y=i==null||(v=i.children)===null||v===void 0?void 0:v.findIndex(function(D){return D.key==m}),!(y>-1)){Z.next=18;break}if(c=ln(),!(0,I.mf)(t==null?void 0:t.onBeforeAddition)){Z.next=14;break}return Z.next=7,(0,I.lm)(t.onBeforeAddition(j,m,r));case 7:if(R=Z.sent,M=B()(R,2),z=M[0],Q=M[1],!(z||Q===!1)){Z.next=13;break}return Z.abrupt("return");case 13:c.data=Q;case 14:x&&(c.data=x),r==a.s9.Before?i.children.splice(y,0,c):r==a.s9.After&&i.children.splice(y+1,0,c),X(i),t==null||(h=t.onAddition)===null||h===void 0||h.call(t,j,m,r,c);case 18:case"end":return Z.stop()}},l)}));return function(m,r,x){return u.apply(this,arguments)}}(),tn=function(){if(!(j!=null&&j.children)||(j==null?void 0:j.children.length)==0){if(t.disabled){var l;return(0,d.jsx)("div",{className:"".concat(J,"-placeholder"),children:(l=t.noCondContent)!==null&&l!==void 0?l:"\u6CA1\u6709\u6761\u4EF6"})}return(0,d.jsx)("div",{className:"".concat(J,"-addition"),children:(0,d.jsx)(_.Z,p()(p()({type:"dashed",block:!0},nn),{},{onClick:function(r){var x;(x=r.stopPropagation)===null||x===void 0||x.call(r),en()},children:C}))})}return(0,d.jsx)(fn,{depth:0,className:"".concat(J,"-root"),value:j,onChange:X,onAddParent:function(r,x,v){A(r,x,v)}})},U=(0,F.useCallback)(function(){return(t==null?void 0:t.getContainer)===!1?e.current:typeof(t==null?void 0:t.getContainer)=="function"?t.getContainer():(t==null?void 0:t.getContainer)||document.body},[e]),V=["disabled","relationText","levelText","renderCondField","renderCondOperator","operators","renderCondValue","renderCondPrefix","renderCondExtra","renderCondActions","onBeforeDelete","onBeforeAddition","onAddition","onDelete"],O=(0,N.CE)(t,[].concat(V,["noCondContent","defaultValue","value","onChange","style","className","getContainer"])),g=(0,N.ei)(t,V);return(0,d.jsx)(Cn.v.Provider,{value:p()(p()({},g),{},{getContainer:U}),children:(0,I.rr)(t,(0,d.jsx)(hn.Z,p()(p()({ref:e,type:"inner",bordered:!1,bodyStyle:{maxHeight:L}},O),{},{className:J,children:tn()})))})},Nn=(0,I.AG)(Tn,{Group:fn,Item:cn})},82143:function(on,k,n){"use strict";n.d(k,{Jq:function(){return p},s9:function(){return G},uT:function(){return S}});var G;(function(P){P.Child="child",P.Before="before",P.After="after",P.BeforeParent="beforeParent",P.AfterParent="afterParent"})(G||(G={}));var p;(function(P){P.Item="item",P.Group="group"})(p||(p={}));var S;(function(P){P.AND="and",P.OR="or"})(S||(S={}))},33513:function(on,k,n){"use strict";n.d(k,{v:function(){return p}});var G=n(59496),p=(0,G.createContext)({})},7685:function(on,k,n){"use strict";n.d(k,{E:function(){return S}});var G=n(33513),p=n(59496),S=function(){var W=(0,p.useContext)(G.v);return W}},86478:function(on,k,n){"use strict";n.r(k),n.d(k,{ConditionEditor:function(){return p.n},LevelType:function(){return S.s9},NodeType:function(){return S.Jq},RelationType:function(){return S.uT},deepCopy:function(){return W.p$},getPrefixClass:function(){return W.tB},omit:function(){return W.CE},pick:function(){return W.ei},useConditionEditor:function(){return P.E}});var G=n(4406),p=n(57493),S=n(82143),P=n(7685),W=n(31333),T=n(15694),K=n.n(T),B={};for(var H in T)["default","ConditionEditor","LevelType","NodeType","RelationType","useConditionEditor","deepCopy","getPrefixClass","omit","pick"].indexOf(H)<0&&(B[H]=function(an){return T[an]}.bind(0,H));n.d(k,B)},31333:function(on,k,n){"use strict";n.d(k,{CE:function(){return p},ei:function(){return S},p$:function(){return P},tB:function(){return G}});var G=function(T){return T?"ce-".concat(T):"ce"},p=function(T,K){return Object.keys(T).filter(function(B){return!(K!=null&&K.includes(B))}).reduce(function(B,H){return B[H]=T[H],B},{})},S=function(T,K){return Object.keys(T).filter(function(B){return K==null?void 0:K.includes(B)}).reduce(function(B,H){return B[H]=T[H],B},{})},P=function(T){return JSON.parse(JSON.stringify(T))}},15694:function(){},4406:function(){"use strict"}}]);

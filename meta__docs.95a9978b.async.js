"use strict";(self.webpackChunkcondition_editor=self.webpackChunkcondition_editor||[]).push([[904],{59222:function(s,e,n){n.r(e),n.d(e,{demos:function(){return C}});var t=n(90228),d=n.n(t),c=n(26068),E=n.n(c),P=n(87999),h=n.n(P),r=n(59496),b=n(49341),D=n(43744),C={"docs-guide-demo-0":{component:r.memo(r.lazy(h()(d()().mark(function v(){var l,i;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.bind(n,43744));case 2:return l=a.sent,i=l.ConditionEditor,a.abrupt("return",{default:function(){var o=function(_){console.log("\u6761\u4EF6\u914D\u7F6E:",_)};return r.createElement(i,{onChange:o,renderCondField:function(_,f){var u=_.data,M=_.disabled;return r.createElement("input",{value:u==null?void 0:u.value,onChange:function(p){var m,O=(p==null||(m=p.target)===null||m===void 0?void 0:m.value)||"";f(E()(E()({},u),{},{value:O}))},disabled:M,style:{width:"120px"},placeholder:"\u8BF7\u8F93\u5165"})},operators:[{value:"equal",label:"\u7B49\u4E8E"},{label:"\u4E0D\u7B49\u4E8E",value:"notEqual"}]})}});case 5:case"end":return a.stop()}},v)})))),asset:{type:"BLOCK",id:"docs-guide-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ConditionEditor, ConditionGroupInfo } from 'condition-editor';

export default () => {
  const handleChange = (value: ConditionGroupInfo) => {
    console.log('\u6761\u4EF6\u914D\u7F6E:', value);
  };
  return (
    <ConditionEditor
      onChange={handleChange}
      renderCondField={({ data, disabled }, onChange) => {
        return (
          <input
            value={data?.value}
            onChange={(e) => {
              const val = e?.target?.value || '';
              onChange({
                ...data,
                value: val,
              });
            }}
            disabled={disabled}
            style={{ width: '120px' }}
            placeholder="\u8BF7\u8F93\u5165"
          />
        );
      }}
      operators={[
        {
          value: 'equal',
          label: '\u7B49\u4E8E',
        },
        {
          label: '\u4E0D\u7B49\u4E8E',
          value: 'notEqual',
        },
      ]}
    />
  );
};`},"condition-editor":{type:"NPM",value:"1.0.0"}},entry:"index.tsx"},context:{"condition-editor":D},renderOpts:{compile:function(){var v=h()(d()().mark(function i(){var I,a=arguments;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(68).then(n.bind(n,46068));case 2:return o.abrupt("return",(I=o.sent).default.apply(I,a));case 3:case"end":return o.stop()}},i)}));function l(){return v.apply(this,arguments)}return l}()}}}},6600:function(s,e,n){n.r(e),n.d(e,{demos:function(){return c}});var t=n(59496),d=n(58767),c={}},11245:function(s,e,n){n.r(e),n.d(e,{texts:function(){return d}});var t=n(49341);const d=[{value:"\u5728\u7EBF\u6761\u4EF6\u7F16\u8F91\u5668",paraId:0,tocIndex:0},{value:`pnpm add condition-editor

## \u6216\u8005

npm i condition-editor

`,paraId:1,tocIndex:2},{value:"\u221A \u652F\u6301\u5C42\u7EA7\u521B\u5EFA\u6761\u4EF6",paraId:2,tocIndex:4},{value:"\u221A \u652F\u6301 ",paraId:2,tocIndex:4},{value:"TypeScript",paraId:2,tocIndex:4},{value:"\u221A \u652F\u6301\u81EA\u5B9A\u4E49\u6761\u4EF6\u5404\u4E2A\u90E8\u5206\u5185\u5BB9",paraId:2,tocIndex:4},{value:"\u221A \u652F\u6301\u76D1\u542C\u6761\u4EF6\u65B0\u589E\u524D\u540E\u3001\u5220\u9664\u524D\u540E\u4E8B\u4EF6",paraId:2,tocIndex:4},{value:"\u221A \u652F\u6301\u7A7A\u7ED3\u679C",paraId:2,tocIndex:4},{value:"\u221A \u652F\u6301\u53EA\u8BFB(\u7ED3\u5408\u63CF\u8FF0)",paraId:2,tocIndex:4},{value:"\u221A \u652F\u6301\u81EA\u5B9A\u4E49\u6761\u4EF6\u9879\u6309\u94AE",paraId:2,tocIndex:4},{value:"\u221A \u652F\u6301 ",paraId:2,tocIndex:4},{value:"Antd",paraId:2,tocIndex:4},{value:" \u6846\u67B6",paraId:2,tocIndex:4},{value:"\u221A \u652F\u6301\u7EC4\u4EF6\u6587\u6848\u6269\u5C55",paraId:2,tocIndex:4},{value:"\u221A \u652F\u6301\u8FFD\u52A0\u5230\u8282\u70B9\u524D\uFF0C\u8282\u70B9\u540E",paraId:2,tocIndex:4},{value:"\u221A \u652F\u6301\u521B\u5EFA\u7236\u7EA7\u7684\u5144\u5F1F\u8282\u70B9",paraId:2,tocIndex:4},{value:"\u221A \u652F\u6301\u81EA\u5B9A\u4E49\u7F16\u8F91\u5668\u6302\u8F7D",paraId:2,tocIndex:4},{value:"DOM",paraId:2,tocIndex:4},{value:"\u8282\u70B9",paraId:2,tocIndex:4},{value:" \u652F\u6301\u6761\u4EF6\u7EC4\u5220\u9664",paraId:2,tocIndex:4},{value:" \u652F\u6301\u540C\u5C42\u7EA7\u62D6\u62FD",paraId:2,tocIndex:4},{value:" \u652F\u6301\u591A\u5957\u6846\u67B6(",paraId:2,tocIndex:4},{value:"Antd-Vue",paraId:2,tocIndex:4},{value:"\u3001",paraId:2,tocIndex:4},{value:"React-Vant",paraId:2,tocIndex:4},{value:" \u7B49)",paraId:2,tocIndex:4},{value:"MIT",paraId:3,tocIndex:5}]},44640:function(s,e,n){n.r(e),n.d(e,{texts:function(){return d}});var t=n(58767);const d=[]}}]);

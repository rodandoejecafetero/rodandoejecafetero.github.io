import{j as l,D as p,R as f,N as j}from"./index-f-u8fpBz.js";import{B as h}from"./BaseLayout-yLeNqXY_.js";import{C as b}from"./ComponentMap-D5S2juGY.js";function g({route:s}){var n,a,m,c,i,x,d;return l.jsxs("div",{id:s==null?void 0:s.name,className:`flex flex-wrap bg-${s==null?void 0:s.bgColor} min-h-screen relative`,children:[l.jsx(h,{route:s}),l.jsxs("div",{className:`flex flex-col justify-center w-full p-4 md:w-2/5 md:min-h-screen bg-${s==null?void 0:s.bgColor2}`,children:[l.jsx("img",{src:`${p}${s==null?void 0:s.img}`,alt:s==null?void 0:s.descriptiveSummary,className:"object-contain w-full max-w-md mx-auto my-8"}),l.jsx("p",{style:{whiteSpace:"pre-line"},className:`text-${s==null?void 0:s.textColor2} font-light max-w-md mx-auto`,dangerouslySetInnerHTML:{__html:(n=s==null?void 0:s.body)!=null?n:""}})]}),l.jsx("div",{className:"z-10 w-full max-w-6xl mx-auto my-auto md:w-3/5",children:l.jsx("div",{className:`p-10 text-sm text-left text-${s==null?void 0:s.textColor}`,children:l.jsxs("div",{className:`rounded-4xl bg-${s==null?void 0:s.bgColor}/50`,children:[l.jsx("h2",{className:"text-4xl font-bold uppercase",children:(a=s==null?void 0:s.content)==null?void 0:a.title}),((m=s==null?void 0:s.content)==null?void 0:m.body)&&l.jsx("p",{className:`mt-5 text-${(c=s==null?void 0:s.content)==null?void 0:c.color} mb-8`,style:{whiteSpace:"pre-line"},children:(i=s==null?void 0:s.content)==null?void 0:i.body}),((x=s==null?void 0:s.content)==null?void 0:x.component)&&f.cloneElement(b[(d=s==null?void 0:s.content)==null?void 0:d.component]||l.jsx(j,{name:s.name}),{route:s})]})})})]})}export{g as default};

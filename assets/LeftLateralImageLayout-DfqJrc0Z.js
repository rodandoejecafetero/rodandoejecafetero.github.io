import{j as a,D as n,R as x,N as c}from"./index-Da0UpBoG.js";import{B as i}from"./BaseLayout-CoAn7Nq0.js";import{C as d}from"./ComponentMap-B2J-J-Z1.js";function j({route:s}){var l,m;return a.jsxs("div",{id:s==null?void 0:s.name,className:`flex justify-center items-center bg-${s==null?void 0:s.bgColor} min-h-screen relative`,children:[a.jsx(i,{route:s}),a.jsxs("div",{className:"flex flex-wrap px-5 py-10 max-w-7xl",children:[a.jsx("div",{className:"flex w-full h-[34vh] overflow-hidden md:w-3/5 md:h-[100vh]",children:a.jsx("img",{src:`${n}${s==null?void 0:s.img}`,alt:s==null?void 0:s.descriptiveSummary,className:"object-contain w-full max-w-md mx-auto"})}),a.jsx("div",{className:"z-10 w-full max-w-6xl mx-auto my-auto mt-10 md:w-2/5 md:mt-0",children:a.jsx("div",{className:`text-sm text-left text-${s==null?void 0:s.textColor}`,children:a.jsxs("div",{className:`rounded-4xl bg-${s==null?void 0:s.bgColor}/50`,children:[a.jsx("h2",{className:"text-4xl font-bold uppercase",children:s==null?void 0:s.title}),a.jsx("p",{className:"mt-5",children:s==null?void 0:s.subtitle}),((l=s==null?void 0:s.content)==null?void 0:l.component)&&x.cloneElement(d[(m=s==null?void 0:s.content)==null?void 0:m.component]||a.jsx(c,{name:s.name}),{route:s})]})})})]})]})}export{j as default};

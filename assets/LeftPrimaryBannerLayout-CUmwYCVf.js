import{j as m,D as i,R as x,N as c}from"./index-D8OLoSKu.js";import{B as d}from"./BaseLayout-BYsy1DnB.js";import{C as p}from"./ComponentMap-D_ypoYYM.js";function g({route:a}){var s,l,n;return m.jsxs("div",{id:a==null?void 0:a.name,className:`flex flex-wrap bg-${a==null?void 0:a.bgColor} min-h-screen relative`,children:[m.jsx(d,{route:a}),m.jsx("div",{className:"flex w-full h-[34vh] overflow-hidden md:w-3/5 md:h-[100vh]",style:{backgroundImage:`url(${`${i}${a==null?void 0:a.img}`})`,backgroundSize:"cover",backgroundPosition:"top left"}}),m.jsx("div",{className:"z-10 w-full max-w-6xl mx-auto my-auto md:w-2/5",children:m.jsx("div",{className:`p-10 text-sm text-left text-${a==null?void 0:a.textColor}`,children:m.jsxs("div",{className:`rounded-4xl bg-${a==null?void 0:a.bgColor}/50 text-center`,children:[(a==null?void 0:a.img2)&&m.jsx("img",{src:`${i}${a==null?void 0:a.img2}`,alt:a==null?void 0:a.descriptiveSummary,className:"w-2/3 max-w-md mx-auto"}),m.jsx("h2",{className:"my-8 text-4xl font-bold uppercase",children:(s=a==null?void 0:a.content)==null?void 0:s.title}),m.jsx("p",{className:"max-w-md mx-auto mt-5",children:a==null?void 0:a.subtitle}),m.jsx("div",{className:"max-w-md mx-auto",children:((l=a==null?void 0:a.content)==null?void 0:l.component)&&x.cloneElement(p[(n=a==null?void 0:a.content)==null?void 0:n.component]||m.jsx(c,{name:a.name}),{route:a})})]})})})]})}export{g as default};

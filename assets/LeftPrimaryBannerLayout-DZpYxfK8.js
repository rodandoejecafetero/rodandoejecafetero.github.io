import{j as s,D as c,R as i,N as x}from"./index-B0fitaLh.js";import{B as d}from"./BaseLayout-sYDDBNi1.js";import{C as f}from"./ComponentMap-B_FG2RaQ.js";function j({route:a}){var n,l,m;return s.jsxs("div",{id:a==null?void 0:a.name,className:`flex flex-wrap bg-${a==null?void 0:a.bgColor} min-h-screen relative`,children:[s.jsx(d,{route:a}),s.jsx("div",{className:"flex w-full h-[34vh] overflow-hidden md:w-3/5 md:h-[100vh]",style:{backgroundImage:`url(${`${c}${a==null?void 0:a.img}`})`,backgroundSize:"cover",backgroundPosition:"top left"}}),s.jsx("div",{className:"z-10 w-full max-w-6xl mx-auto my-auto md:w-2/5",children:s.jsx("div",{className:`p-10 text-sm text-left text-${a==null?void 0:a.textColor}`,children:s.jsxs("div",{className:`rounded-4xl bg-${a==null?void 0:a.bgColor}/50 text-center`,children:[(a==null?void 0:a.img2)&&s.jsx("img",{src:a==null?void 0:a.img2,alt:"Secondary img",className:"w-2/3 mx-auto mb-8"}),s.jsx("h2",{className:"text-4xl font-bold uppercase",children:(n=a==null?void 0:a.content)==null?void 0:n.title}),s.jsx("p",{className:"mt-5",children:a==null?void 0:a.subtitle}),((l=a==null?void 0:a.content)==null?void 0:l.component)&&i.cloneElement(f[(m=a==null?void 0:a.content)==null?void 0:m.component]||s.jsx(x,{name:a.name}),{route:a})]})})})]})}export{j as default};

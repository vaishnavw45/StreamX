import{r as a,A as B,i as W,a as e,j as r,c as O,k as c,l as g,m as I,n as z,o as D,q as E,s as T}from"./index.422924f9.js";import{I as F,_ as H}from"./index.a5045f7d.js";import{W as _}from"./WelcomePageBanner.bce996d6.js";/* empty css                       */function G(){const{User:o}=a.exports.useContext(B),[d,m]=a.exports.useState(""),[f,N]=a.exports.useState(""),[h,k]=a.exports.useState(""),[y,x]=a.exports.useState(!1),[u,L]=a.exports.useState(""),[U,C]=a.exports.useState(!1),b=W();a.exports.useEffect(()=>{o!=null&&(console.log(o.photoURL,"hello"),m(o.photoURL))},[]);const w=a.exports.useRef(null),P=()=>{w.current.click()};function p(){H.success("  Data Updated Sucessfuly  ")}const j=s=>{const t=s.target.files[0];k(t),N(URL.createObjectURL(t)),t&&(console.log("fileObj is",t),s.target.value=null)},R=s=>{if(s.preventDefault(),y)if(u!==""){const t=c();g(t.currentUser,{displayName:u}).then(()=>{p()}).catch(i=>{alert(i.message)})}else x(!1);if(h!=""){const t=I(),i=z(t,`/ProfilePics/${o.uid}`),v=D(i,h);v.on("state_changed",n=>{Math.round(n.bytesTransferred/n.totalBytes*100)},n=>{alert(n.message),alert(n.code)},()=>{E(v.snapshot.ref).then(n=>{console.log(n,"This is the new Url for Profile Pic"),m(n);const S=c();g(S.currentUser,{photoURL:n}).then(()=>{p(),C(!0)}).catch(A=>{alert(A.message)})})})}},l=s=>{const t=c();g(t.currentUser,{photoURL:s}).then(()=>{m(o.photoURL),p()}).catch(i=>{alert(i.message)})},M=()=>{const s=c();T(s).then(()=>{b("/")}).catch(t=>{alert(t.message)})};return e("div",{children:r("div",{className:"flex h-screen justify-center items-center",style:{backgroundImage:`linear-gradient(0deg, hsl(0deg 0% 0% / 73%) 0%, hsl(0deg 0% 0% / 73%) 35%), url(${_})`},children:[U?e(F,{toastOptions:{style:{padding:"1.5rem",backgroundColor:"##f4fff4",borderLeft:"6px solid green"}}}):null,e(O.Fade,{children:r("div",{className:"bg-[#000000bf] p-5 md:p-12 rounded-md",children:[e("h1",{className:"text-4xl text-white font-bold mb-4 md:mb-8",children:"Edit your Profile"}),r("div",{className:"flex justify-center flex-col items-center md:flex-row md:items-start",children:[e("img",{className:"h-28 w-28 rounded-full cursor-pointer mb-3 md:mr-16",src:d?`${d}`:"https://www.citypng.com/public/uploads/preview/profile-user-round-red-icon-symbol-download-png-11639594337tco5j3n0ix.png",alt:"NETFLIX"}),r("div",{children:[e("hr",{className:"mb-2 h-px bg-gray-500 border-0 dark:bg-gray-700"}),e("h1",{className:"text-white text-lg font-medium mb-2",children:"User Name"}),e("input",{type:"text",onChange:s=>L(s.target.value)||x(!0),className:"block w-full rounded-md bg-stone-900 text-white border-gray-300 p-2 mb-6 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base",placeholder:o?o.displayName:null}),e("h1",{className:"text-white text-lg font-medium mb-2",children:"Email"}),e("h1",{className:"text-white text-xl bg-stone-900 p-2 rounded mb-4 md:pr-52",children:o?o.email:null}),r("h1",{className:"text-white text-xl p-2 rounded mb-4",children:["Unique ID : ",o?o.uid:null]}),e("hr",{className:"h-px bg-gray-500 border-0 mb-4 md:mb-10 dark:bg-gray-700"}),e("h1",{className:"text-white text-lg font-medium mb-4",children:"Who is Watching ?"}),r("div",{className:"flex justify-between cursor-pointer mb-4 md:mb-8",children:[e("img",{onClick:()=>l("https://i.pinimg.com/originals/ba/2e/44/ba2e4464e0d7b1882cc300feceac683c.png"),className:"w-16 h-16 rounded-md cursor-pointer",src:"https://i.pinimg.com/originals/ba/2e/44/ba2e4464e0d7b1882cc300feceac683c.png"}),e("img",{onClick:()=>l("https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg"),className:"w-16 h-16 rounded-md cursor-pointer",src:"https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg"}),e("img",{onClick:()=>l("https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"),className:"w-16 h-16 rounded-md cursor-pointer",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}),e("img",{onClick:()=>l("https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg"),className:"w-16 h-16 rounded-md cursor-pointer",src:"https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg"}),e("input",{style:{display:"none"},ref:w,type:"file",onChange:j}),e("svg",{onClick:P,xmlns:"http://www.w3.org/2000/svg",className:"h-12 w-12 text-stone-600 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})})]}),f?e("img",{className:"h-30 w-72",src:f}):null]})]}),r("div",{className:"flex justify-between mt-4",children:[r("button",{onClick:M,className:"flex items-center border-[0.7px] border-white text-white font-medium sm:font-bold text-xs px-14 md:px-24 md:text-xl  py-3 rounded shadow hover:shadow-lg hover:bg-white hover:border-white hover:text-red-700 outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 mr-2",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"})}),"SignOut"]}),u!=""||h!=""?r("button",{onClick:R,className:"flex items-center bg-red-700 text-white font-medium sm:font-bold text-xs px-10 md:px-16 md:text-xl  py-3 rounded shadow hover:shadow-lg hover:bg-white hover:text-red-700 outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 mr-2",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"})}),"Save and continue"]}):r("button",{onClick:()=>b("/"),className:"flex items-center bg-red-700 text-white font-medium sm:font-bold text-xs px-10 md:px-16 md:text-xl  py-3 rounded shadow hover:shadow-lg hover:bg-white hover:text-red-700 outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 mr-2",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})}),"Back to Home"]})]})]})})]})})}export{G as default};

"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[117],{153:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a=n(885),s=n(791),r=n(434),c="ContactForm_title__jZguf",i="ContactForm_boxInput__zg5w-",l="ContactForm_label__-cVXI",o="ContactForm_input__Bl93P",u="ContactForm_addContact__Q30Jz",m=n(36),d=n(184),_=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],_=t[1],f=(0,s.useState)(""),h=(0,a.Z)(f,2),x=h[0],C=h[1],b=(0,r.I0)(),p=(0,r.v9)((function(e){return e.contacts.contacts})),j=function(e){var t=e.target,n=t.value;switch(t.name){case"name":_(n);break;case"number":C(n)}};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{className:c,children:"Phonebook"}),(0,d.jsxs)("form",{className:i,onSubmit:function(e){if(e.preventDefault(),p.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))||p.find((function(e){return e.number===x})))return alert("".concat(n," is already in contacts!"));b((0,m.Q6)({name:n,number:x})),_(""),C("")},children:[(0,d.jsxs)("label",{className:l,children:["Name",(0,d.jsx)("input",{value:n,onChange:j,className:o,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,d.jsx)("br",{}),(0,d.jsxs)("label",{className:l,children:["Numbers",(0,d.jsx)("input",{onChange:j,value:x,className:o,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{type:"submit",className:u,children:"Add contact"})})]})]})},f=function(e){return e.contacts.contacts.filter((function(t){return t.name.toLowerCase().includes(e.filter.filter.toLowerCase())}))},h="ContactList_list__csErn",x="ContactList_item__EZYHO",C="ContactList_name__UCkFW",b="ContactList_button__7kL4l";function p(){var e=(0,r.I0)(),t=(0,r.v9)(f);(0,s.useEffect)((function(){e((0,m.lV)())}),[e]);var n=function(t){var n=t.currentTarget.id;e((0,m.zY)(n))};return(0,d.jsx)("ul",{className:h,children:t.map((function(e){return(0,d.jsxs)("li",{className:x,children:[(0,d.jsxs)("p",{className:C,children:[e.name,": ",e.number]}),(0,d.jsx)("button",{className:b,id:e.id,onClick:n,children:"Delete"})]},e.id)}))})}var j=n(653),v="Filter_contacts__asuCA",N="Filter_form__wVnxJ",F="Filter_label__vEd1E",w="Filter_input__N7T3z",g=function(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e.filter.filter}));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{className:v,children:"Contacts"}),(0,d.jsx)("form",{className:N,children:(0,d.jsxs)("label",{className:F,children:["Find contacts by name",(0,d.jsx)("input",{className:w,type:"text",value:t,onChange:function(t){var n=t.currentTarget.value;e((0,j.eC)(n))}})]})})]})},k="Contacts_allContent__wzeqP";function z(){return(0,d.jsxs)("div",{className:k,children:[(0,d.jsx)(_,{}),(0,d.jsx)(g,{}),(0,d.jsx)(p,{})]})}}}]);
//# sourceMappingURL=117.cc365000.chunk.js.map
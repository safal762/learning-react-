function customRender(attributes,root){
    let tag=document.createElement(attributes.type)
    tag.innerHTML=attributes.Children   
   for(const porp in attributes.props){ // runs according to the count of key values
     tag.setAttribute(porp,attributes.props[porp]) // stes the attribute according to object
   }

   root.appendChild(tag)
}

let attributes={
    type:'a', // the tag type is given here
    props:{
        href:'https://www.google.com/', // link of the a tag
        target:'_blank' // opens the page in next tab // next attribute
    },
    Children:'click here for google'
}
const root=document.getElementById('root')

customRender(attributes,root)

// behind the hood reacts works the same way 
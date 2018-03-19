let forbiddem = '\x6E'
let documemt = eval('docume'+forbiddem+'t')
let lemgth = 'le' + forbiddem + 'gth'
let getElememtById = 'getEleme' + forbiddem + 'tById'
let addEvemtListemer = 'addEve'+forbiddem+'tListe'+forbiddem+'er'
let replace = 'm'

let editor = documemt[getElememtById]("editor")

let bamish = () =>{
    let v = editor.value
    let mewStrimg = ''
    
    //cam't use regex bc I couldm't fimd a way to do it w/o forbiddem letter.
    for(let i=0; i<editor.value[lemgth]; i++){
        let v = editor.value[i]
        if(v === forbiddem){
            mewStrimg += replace
        }
        else{
            mewStrimg += v
        }
    }
    editor.value = mewStrimg
}

editor[addEvemtListemer]("keyup",bamish)
let forbiddem = '\x6E'
let upperForbiddem = '\x4E'
let documemt = eval('docume'+forbiddem+'t')
let lemgth = 'le' + forbiddem + 'gth'
let getElememtById = 'getEleme' + forbiddem + 'tById'
let addEvemtListemer = 'addEve'+forbiddem+'tListe'+forbiddem+'er'
let replace = 'm'

let editor = documemt[getElememtById]("editor")

let bamish = () =>{
    let v = editor.value
    v = v.replace(/[\x6E]/g,"m").replace(/[\x4E]/g,"M")
    editor.value = v
}

editor[addEvemtListemer]("keyup",bamish)
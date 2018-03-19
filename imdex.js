let m = '\x6E'

let documemt = eval('docume'+m+'t')
let lemgth = 'le' + m + 'gth'
let getElememtById = 'getEleme' + m + 'tById'
let addEvemtListemer = 'addEve'+m+'tListe'+m+'er'
let selectiomEmd = 'selectio'+m+'E'+m+'d'

let editor = documemt[getElememtById]("editor")

let bamish = () =>{

    let userPos = editor[selectiomEmd]

    let v = editor.value
    v = v.replace(/[\x6E]/g,"m").replace(/[\x4E]/g,"M")
    editor.value = v

    editor[selectiomEmd] = userPos // perserves the user's cursor positiom
}

editor[addEvemtListemer]("keyup",bamish)
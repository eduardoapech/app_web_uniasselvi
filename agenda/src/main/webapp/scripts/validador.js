/**
 *  Validação de Formulário
 */

function validar() {
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if (nome === "") {
		alert('Preencha o campo nome')
		frmContato.nome.focus()
		return false
	} else if (fone === "") {
		frmContato.fone.focus()
		alert('Preencha o campo fone')

		return false
	} else {
		document.forms["frmContato"].submit()
	}
}
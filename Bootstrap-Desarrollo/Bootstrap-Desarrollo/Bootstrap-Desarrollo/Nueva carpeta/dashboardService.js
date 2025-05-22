/*tokenValidate()


function logout(){
    localStorage.removeItem('token')
    location.href = '../index.html'
}

function tokenValidate(){
    const TOKEN = localStorage.getItem('token')
    if(!TOKEN){ // Simplemente verificar que existe un token
        location.href = '../index.html'
    }
    console.log('autenticado', TOKEN)
}*/

function tokenValidate() {
    const TOKEN = localStorage.getItem('token');
    
    // Verifica simplemente que exista un token, sin comparar el valor exacto
    if(!TOKEN) {
        location.href = '../index.html';
    }
    
    console.log('Usuario autenticado', TOKEN);
}

// Llama a la validación al cargar
tokenValidate();

function logout() {
    localStorage.removeItem('token');
    location.href = '../index.html';
}
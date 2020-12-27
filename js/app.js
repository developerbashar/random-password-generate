function getPassword() {
    let pass = 'bT25C]gZff}tQN3p{6vG@3P[6jAf48%9k(9v)4Qm!g7$N53K^f2-5jgUsY'
    let passLength = 8
    let password = ''
    for (let i = 0; i < passLength; i++) {
        
        let randomNum = Math.floor(Math.random() * pass.length)
        password += pass.substring(randomNum, randomNum + 1)
        
    }
    document.getElementById('pwdGenField').value = password
}
// Disabled mouse right click
document.addEventListener('contextmenu', (e) => e.preventDefault())
// Kata sandi yang dihardcode (Ini bukan praktik yang aman dalam pengembangan sebenarnya)
const hardcodedPassword = 'password123';

function encrypt() {
    const message = document.getElementById('message').value;
    
    if (!message) {
        alert('Mohon isi pesan terlebih dahulu.');
        return;
    }
    
    const encryptedMessage = encryptAES(message, hardcodedPassword);
    document.getElementById('result').textContent = encryptedMessage;
}

function decrypt() {
    const encryptedMessage = document.getElementById('message').value;
    
    if (!encryptedMessage) {
        alert('Mohon isi pesan terenkripsi terlebih dahulu.');
        return;
    }
    
    const decryptedMessage = decryptAES(encryptedMessage, hardcodedPassword);
    document.getElementById('result').textContent = decryptedMessage;
}

function encryptAES(message, password) {
    const encrypted = CryptoJS.AES.encrypt(message, password);
    return encrypted.toString();
}

function decryptAES(encryptedMessage, password) {
    const decrypted = CryptoJS.AES.decrypt(encryptedMessage, password);
    return decrypted.toString(CryptoJS.enc.Utf8);
}

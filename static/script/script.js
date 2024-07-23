function generateWhatsAppLink() {
    var name = encodeURIComponent(document.getElementById('name').value);
    var whatsapp = encodeURIComponent(document.getElementById('whatsapp').value);
    var email = encodeURIComponent(document.getElementById('email').value);
    var doubt = encodeURIComponent(document.getElementById('doubt').value);

    // Formato do link do WhatsApp: https://wa.me/5512988017175?text=Mensagem
    var whatsappLink = 'https://wa.me/' +'5512988017175'+ '?text=Nome: ' + name + '%0AEmail: ' + email + '%0AWhatsapp: ' + whatsapp + '%0ADúvida: ' + doubt;

    window.open(whatsappLink, '_blank');
}
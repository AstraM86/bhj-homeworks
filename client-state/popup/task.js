document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('subscribe-modal');
    const closeButton = document.querySelector('.modal__close');
  
    function getCookie(name) {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) {
                return decodeURIComponent(cookieValue);
            }
        }
        return null;
    }
    
    const isModalClosed = getCookie('modalClosed');
    
    if (!isModalClosed) {
        modal.classList.add('modal_active');
    }
    
    closeButton.addEventListener('click', function() {
        modal.classList.remove('modal_active');
        const expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        document.cookie = `modalClosed=true; path=/; expires=${expiryDate.toUTCString()}`;
    });
});
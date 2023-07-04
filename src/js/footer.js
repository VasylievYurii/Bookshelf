const settingsBtn = document.querySelector('.footer-btn');
const backdropFooter = document.querySelector('.backdrop-modal-footer');
const closeFooterBrn = document.querySelector('.close-footer-btn');

function openFooterModal(e) {
    e.preventDefault();
    backdropFooter.classList.remove('is-hidden-footer');
}

function closeFooterModal(e) {
    if (e.target === e.currentTarget) {
        backdropFooter.classList.add('is-hidden-footer');
    }
}

function escClose(e) {
    if (e.keyCode === 27) {
        if (backdropFooter.classList.contains('is-hidden-footer') === false) {
            backdropFooter.classList.add('is-hidden-footer');
        }
  }
}

settingsBtn.addEventListener('click', openFooterModal);

backdropFooter.addEventListener('click', closeFooterModal);

closeFooterBrn.addEventListener('click', () => {
    backdropFooter.classList.add('is-hidden-footer');
});

document.addEventListener('keydown', escClose);
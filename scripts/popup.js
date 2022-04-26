const popupOpenBtn = document.querySelector('.profile-info__edit-button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

popupOpenBtn.addEventListener ('click', function() {
    console.log('rabotaet');
    togglePopup();
});

popupClose.addEventListener ('click', function() {
    console.log('pochti rabotaet');
    togglePopup();
});

function togglePopup () {
    popup.classList.toggle('popup_active');
}
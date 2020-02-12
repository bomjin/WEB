(function (Window, document){
    'use strict';

    const $toggles=document.querySelectorAll('.toggle');
    const StaggleBtn=document.getElementById('toggle-btn');

    StaggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    function toggleElements() {
        [].forEach.call($toggles, function(toggle){
            toggle.classList.toggle('on');
        });
    }
})
(Window, document)
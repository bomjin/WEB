(function (Window, document){
    'use strict';

    const $toggles=document.querySelectorAll('.toggle');
    const StaggleBtn=document.getElementById('toggle-btn');

    StaggleBtn.addEventListener('click', function () {
        toggleElements();
    });  // 클릭

    window.addEventListener('resize',  function( ) {
        if(window.innerWidth > 1024) {
            offElements();
        }

    });

    function toggleElements() {
        [].forEach.call($toggles, function(toggle){
            toggle.classList.toggle('on');
        });
    }
    function offElements() {
        [].forEach.call($toggles, function(toggle){
            toggle.classList.remove('on'); // 토글 삭제 
        });  
    }
})
(Window, document)
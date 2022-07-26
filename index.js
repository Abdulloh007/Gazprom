window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    const header =  document.querySelector('#header');
    const footer =  document.querySelector('#footer');
    
    fetch('/src/components/header.html').then(response => response.text()).then(data => header != undefined || header != null ? header.innerHTML = data : '');
    fetch('/src/components/footer.html').then(response => response.text()).then(data => footer != undefined || footer != null ? footer.innerHTML = data : '').finally(() => {
        //ScrollTop Fixed menu
        const nav = document.querySelectorAll('.g-nav');
        
        window.addEventListener('scroll', ()=> {
            if (document.documentElement.scrollTop > 80) {
                nav.forEach(item => item.classList.add('fix'));
            }else {
                nav.forEach(item => item.classList.remove('fix'));
            }
        });
        window.addEventListener('resize', () => goAdaptive())
        // Mobile Menu Srcipt
        function goAdaptive() {
            if(window.innerWidth <= 992) { 
                const sideBar = document.querySelector('.g-m_side-bar'),
                sideBarOverlay = document.querySelector('.g-m_overlay'),
                sideBarBtn = document.querySelector('.g-humburger');

                sideBarBtn.addEventListener('click', function () {
                    if (this.classList.contains('active')) {
                        this.classList.remove('active');
                        sideBar.classList.remove('open');
                        sideBarOverlay.classList.remove('open');
                        document.documentElement.style.overflow = ''
                    }
                    else {
                        this.classList.add('active');
                        sideBar.classList.add('open');
                        sideBarOverlay.classList.add('open');
                        document.documentElement.style.overflow = 'hidden'
                    }
                })

                sideBarOverlay.addEventListener('click', ()=> {
                    sideBarBtn.classList.remove('active');
                    sideBar.classList.remove('open');
                    sideBarOverlay.classList.remove('open');
                    document.documentElement.style.overflow = '';
                })
            }
        }
        goAdaptive();

        // Mega Menu 
        const mmBtn = document.querySelector('.g-mm__btn');
        const mmContent = document.querySelector('.g-mega-menu');

        mmBtn.addEventListener('click', ()=> {
            mmContent.classList.toggle('active'); 
            mmContent.parentNode.parentNode.parentNode.classList.toggle('mega')
        })
    });
    

    
    //PopUp`s
    let popUpBtns = document.querySelectorAll('.g-pop_up__btn'),
    popUps = document.querySelectorAll('.g-pop_up');
    
    function popUper(elem) {
        popUps.forEach((item) => {
            const closeBtn = item.querySelector('.fa-close');
            closeBtn.addEventListener('click', function () {
                item.classList.remove('active');
            })
        });
        elem.addEventListener('click', function () {
            for (let i = 0; i < popUps.length; i++) {
                if (elem.id == popUps[i].dataset.target) {
                    popUps[i].classList.add('active');
                }
            }
        })
    }
    if (popUpBtns != undefined && popUps != undefined) {
        popUpBtns.forEach((item) =>  popUper(item));
    }


    //Tabination
    const tabination = document.querySelectorAll('.g-tabination');

    function activeTabination(elem) {
        const tabNav = elem.querySelector('.g-tab_navigation'),
        tabBtns = elem.querySelectorAll('.g-tn__item'),
        tabs = elem.querySelectorAll('.g-tab');

        tabNav.addEventListener('click', function () {
            for (let i = 0; i < tabBtns.length; i++) {
                if (event.target == tabBtns[i]) {
                    showTab(i);
                }
            }
        })
        showTab(0);
        function showTab(n) {
            tabBtns.forEach((item) => item.classList.remove('active'));
            tabs.forEach((item) => item.classList.remove('active'));
            tabBtns[n].classList.add('active');
            tabs[n].classList.add('active');
        }
    }
    if (tabination !== undefined && tabination !== null) {
        tabination.forEach(item => activeTabination(item));
    }
    

})
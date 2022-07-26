//Second lewel Tabination
const tabination = document.querySelectorAll('.g-tabination__sl');

function activeTabination(elem) {
    const tabNav = elem.querySelector('.g-tab_navigation__sl'),
    tabBtns = elem.querySelectorAll('.g-tn__item__sl'),
    tabs = elem.querySelectorAll('.g-tab__sl');

    tabNav.addEventListener('click', function (event) {
        for (let i = 0; i < tabBtns.length; i++) {
            if (event.target == tabBtns[i] || event.target.parentNode == tabBtns[i]) {
                showTab(i);
            }
        }
    })
    showTab(0);
    function showTab(n) {
        tabBtns.forEach((item) => item.classList.remove('active'));
        tabBtns.forEach((item) => item.children[0].classList.remove('blue'));
        tabs.forEach((item) => item.classList.remove('active'));
        tabBtns[n].classList.add('active');
        tabBtns[n].children[0].classList.add('blue');
        tabs[n].classList.add('active');
    }
}
if (tabination !== undefined && tabination !== null) {
    tabination.forEach(item => activeTabination(item));
}
//FAQ
const faqs = document.querySelectorAll('.g-faq');
console.log(faqs);

faqs.forEach(item => {
    let currentHeight = item.clientHeight;
    let collapseHeight = item.querySelector('.g-faq__header').clientHeight + 30;
    const btn = item.querySelector('.g-btn');
    item.style.height = collapseHeight + 'px';
    
    btn.addEventListener('click', (e) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            item.style.height = collapseHeight + 'px';
        }else {
            item.classList.add('active');
            item.style.height = currentHeight + 'px';
        }
    })
})
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
let cartCounterLabel = document.querySelector('#cart-counter');
let buttonsContainer = document.querySelector('#content-container');
let cartCount = 0;
let cartPrice = 0;

function cartBtnHandler(e) {
    let target = e.target;
    if (target.classList.contains('item-actions__cart')) {

        cartCounterLabel.innerHTML = ++cartCount;
        if (cartCount === 1) cartCounterLabel.style.display = 'block';

        const mockData = +target.parentElement.previousElementSibling.innerHTML.
        replace('$', '').
        replace('</sup>', '').
        replace('<sup>', '.');

        cartPrice = Math.round((cartPrice + mockData) * 100) / 100;
        let restoreHTML = target.innerHTML;
        target.innerHTML = `Added ${cartPrice.toFixed(2)}$`;
        target.disabled = true;
        buttonsContainer.removeEventListener('click', cartBtnHandler);

        setTimeout(() => {
            target.innerHTML = restoreHTML;
            target.disabled = false;
            buttonsContainer.addEventListener('click', cartBtnHandler);
        }, 2000);
    }
}

buttonsContainer.addEventListener('click', cartBtnHandler);
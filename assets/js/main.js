let buttonsContainer = document.querySelector('.page-content');
let cartCounterLabel = document.querySelector('#cart-counter');
let cartCount = 0;
let cartPrice = 0;

let cartBtnHandler = (e) => {
    let target = e.target;

    if (target.classList.contains('item-actions__cart')) {

        cartCounterLabel.innerHTML = `${++cartCount}`;
        if (cartCount === 1) cartCounterLabel.style.display = 'block';

        const mockData = +target.
        parentElement.
        previousElementSibling.
        innerHTML.
        replace(/^\$(\d+)\s\D+(\d+).*$/u, '$1.$2');


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
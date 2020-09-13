let cartCounterLabel = document.querySelector('#cart-counter');
let buttonsContainer = document.querySelector('#content-container');
let cartCount = 0;
let cartPrice = 0;

function cartBtnHandler(e) {
    let target = e.target;
    if (target.classList.contains('item-actions__cart')) {
        cartCounterLabel.innerHTML = ++cartCount;
        if (cartCount === 1) cartCounterLabel.style.display = 'block';

        const mockData = target.parentElement.previousElementSibiling.innerHTML;
        console.log(mockData);
    }
}

buttonsContainer.addEventListener('click', cartBtnHandler);
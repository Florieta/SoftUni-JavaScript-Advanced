function solve() {
   let addProductButtons = document.querySelectorAll('.add-product');
   let textAreaElement = document.querySelector('textarea');
   let checkOutButtonEl = document.querySelector('.checkout');
   let sum = 0;
   let products = [];

   for (const addProductButton of addProductButtons) {
      addProductButton.addEventListener('click', (e) => {
         let currentProductEl = e.currentTarget.parentNode.parentNode;
         let productName = currentProductEl.querySelector('.product-title').textContent;
         let productPrice = Number(currentProductEl.querySelector('.product-line-price').textContent);

         sum += productPrice;
         products.push(productName);
         textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      });
   }
   checkOutButtonEl.addEventListener('click', (e) => {
      let uniqueProducts = products.reduce((a, x) => {
         if (!a.includes(x)) {
            a.push(x);
         }
         return a;
      }, []);

      textAreaElement.textContent += `You bought ${uniqueProducts.join(', ')} for ${sum.toFixed(2)}.`;
   });
}
function solution() {
  let [listOfGifts, listOfSent, listOfDiscarded] = document.querySelectorAll('ul');
  let addGiftBtn = document.querySelector('div button');
  let giftNameInputElement = document.querySelector('input');

  let addGift = (e) => {
      if(giftNameInputElement.value){
          let newLi = document.createElement('li');
          newLi.textContent = giftNameInputElement.value;
          newLi.classList.add('gift');

          let sentBtn = document.createElement('button');
          sentBtn.id = 'sendButton';
          sentBtn.textContent = 'Send';
          sentBtn.addEventListener('click', send);

          let discardBtn = document.createElement('button');
          discardBtn.id = 'discardButton';
          discardBtn.textContent = 'Discard';
          discardBtn.addEventListener('click', discard);

          newLi.appendChild(sentBtn);
          newLi.appendChild(discardBtn);

          listOfGifts.appendChild(newLi)

          Array.from(listOfGifts.getElementsByTagName("li"))
          .sort((a, b) => a.textContent.localeCompare(b.textContent))
          .forEach(li => listOfGifts.appendChild(li));

          giftNameInputElement.value = '';
      }
  }

  let send = (e) => {
      let currLi = e.currentTarget.parentElement;
      currLi.children[1].remove();
      currLi.children[0].remove();
      listOfSent.appendChild(currLi)
  }
  let discard = (e) => {
      let currLi = e.currentTarget.parentElement;
      currLi.children[1].remove();
      currLi.children[0].remove();
      listOfDiscarded.appendChild(currLi)
  }
  addGiftBtn.addEventListener('click', addGift)
}
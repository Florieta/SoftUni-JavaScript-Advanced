window.addEventListener('load', solution);

function solution() {
  let fNameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneNumberElement = document.getElementById('phone');
  let addressElement = document.getElementById('address');
  let codeElement = document.getElementById('code');
  let submitButton = document.getElementById('submitBTN');
  let editButton = document.getElementById('editBTN');
  let continueButton = document.getElementById('continueBTN');


  submitButton.addEventListener('click', submit);

  function submit(e) {
    e.preventDefault;
    if (fNameElement.value === '' || emailElement.value === '') {
      returns;
    }

    let ulElement = document.getElementById('infoPreview');
    let liName = document.createElement('li');
    liName.textContent = `Full Name: ${fNameElement.value}`;
    let liEmail = document.createElement('li');
    liEmail.textContent = `Email: ${emailElement.value}`;
    let liPhone = document.createElement('li');
    liPhone.textContent = `Phone Number: ${phoneNumberElement.value}`;
    let liAddress = document.createElement('li');
    liAddress.textContent = `Address: ${addressElement.value}`;
    let liCode = document.createElement('li');
    liCode.textContent = `Postal Code: ${codeElement.value}`;


    ulElement.appendChild(liName);
    ulElement.appendChild(liEmail);
    ulElement.appendChild(liPhone);
    ulElement.appendChild(liAddress);
    ulElement.appendChild(liCode);

    fNameElement.value = '';
    emailElement.value = '';
    phoneNumberElement.value = '';
    addressElement.value = '';
    codeElement.value = '';
    submitButton.disabled = true;
    editButton.disabled = false;
    continueButton.disabled = false;

    editButton.addEventListener('click', edit);
    continueButton.addEventListener('click', continueFn);

    function edit() {

      const liElements = Array.from(ulElement.children);
      fNameElement.value = liElements[0].textContent.split(':')[1];
      emailElement.value = liElements[1].textContent.split(':')[1];
      phoneNumberElement.value = liElements[2].textContent.split(':')[1];
      addressElement.value = liElements[3].textContent.split(':')[1];
      codeElement.value = liElements[4].textContent.split(':')[1];

      submitButton.disabled = false;
      editButton.disabled = true;
      continueButton.disabled = true;

      ulElement.innerHTML = '';

    }
   
    function continueFn() {
      const blockEl = document.getElementById('block');
      blockEl.innerHTML = '<h3>Thank you for your reservation!</h3>';
    }
  }
}

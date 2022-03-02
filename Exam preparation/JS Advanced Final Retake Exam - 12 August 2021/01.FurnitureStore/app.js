window.addEventListener('load', solve);

function solve() {
    const modelField = document.getElementById("model");
    const yearField = document.getElementById("year");
    const descriptionField = document.getElementById("description");
    const priceField = document.getElementById("price");
 
    const addButton = document.getElementById("add");
    addButton.addEventListener("click", addFurniture);
 
    const furnitureList = document.getElementById("furniture-list");
    const totalPrice = document.querySelector(".total-price");
 
 
 
    function addFurniture(e) {
        e.preventDefault();
 
        const yearValue = Number(yearField.value);
        const priceValue = Number(priceField.value);
        if (modelField.value != "" && descriptionField.value != "" && yearValue > 0 && priceValue > 0) {
            const tr = document.createElement("tr");
            tr.classList.add("info");
            tr.innerHTML = `<td>${modelField.value}</td>
                            <td>${priceValue.toFixed(2)}</td>
                            <td><button class="moreBtn">More Info</button>
                                <button class="buyBtn">Buy it</button>
                            </td>`;
            const hideTr = document.createElement("tr");
            hideTr.classList.add("hide");
            hideTr.innerHTML = `<td>Year: ${yearValue}</td><td colspan="3">Description: ${descriptionField.value}</td>`
 
            furnitureList.appendChild(tr);
            furnitureList.appendChild(hideTr);
 
            const moreInfoButtons = tr.querySelectorAll("button");
            moreInfoButtons[0].addEventListener("click", showMoreInfo);
            moreInfoButtons[1].addEventListener("click", buyFurniture);
 
        }
 
        modelField.value = "";
        yearField.value = "";
        descriptionField.value = "";
        priceField.value = "";
    }
 
    function showMoreInfo(e) {
        const moreInfoTr = e.target.parentElement.parentElement.nextElementSibling;
        if (e.target.textContent == "More Info") {
            e.target.textContent = "Less Info";
            moreInfoTr.style.display = "contents";
        } else {
            e.target.textContent = "More Info";
            moreInfoTr.style.display = "none";
        }
    }
 
    function buyFurniture(e) {
        const tr = e.target.parentElement.parentElement;
        const hideTr = tr.nextElementSibling;
 
        hideTr.parentElement.removeChild(hideTr);
 
        const price = Number(tr.querySelectorAll("td")[1].textContent);
        totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);
 
        tr.parentElement.removeChild(tr);
    }
}

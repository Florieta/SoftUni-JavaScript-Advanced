window.addEventListener('load', solve);

function solve() {
    let type = document.getElementById('type-product');
    let description = document.getElementById('description');
    let name = document.getElementById('client-name');
    let phone = document.getElementById('client-phone');
    let buttonSubmit = document.querySelector('button[type=submit]');
    let orders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders')
    let clearBtn = document.querySelector('.clear-btn');
let option1 = document.getElementById('type-product');
    buttonSubmit.addEventListener('click', addService);

    function addService(e) {
        e.preventDefault();
        if (description.value && name.value && phone.value) {
            let div = createAnElement('div', '', 'container', orders);
            createAnElement('h2', `Product type for repair: ${type.value}`, '', div);
            createAnElement('h3', `Client information: ${name.value}, ${phone.value}`, '', div);
            createAnElement('h4', `Description of the problem: ${description.value}`, '', div);
            let buttonStart = createAnElement('button', 'Start', 'start-btn', div);
            let buttonFinish = createAnElement('button', 'Finish repair', 'finish-btn', div);
            buttonFinish.disabled = true;

option1 = null;
            description.value = '';
            name.value = '';
            phone.value = '';

            buttonStart.addEventListener('click', start);

            function start() {
                buttonStart.disabled = true;
                buttonFinish.disabled = false;
            }

            buttonFinish.addEventListener('click', finish);

            function finish() {
                completedOrders.appendChild(div);
                div.removeChild(buttonStart);
                div.removeChild(buttonFinish);
                clearBtn.addEventListener('click', clear);

                function clear() {
                    completedOrders.removeChild(div);
                }
            }
        }
    }

    function createAnElement(type, content, attribute, appender) {
        const el = document.createElement(type);
        if (attribute) {
            el.setAttribute('class', attribute);
            el.textContent = content;
        } else if (content) {
            el.textContent = content;
        }
        if (appender) {
            appender.appendChild(el);
        }
        return el;
    }

}
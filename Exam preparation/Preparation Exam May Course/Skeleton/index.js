function solve() {
    let addButton = document.querySelector('.admin-view .action button');
    let modules = {};

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let lectureNameElement = document.querySelector('input[name="lecture-name"]');
        let lectureDateElement = document.querySelector('input[name="lecture-date"]');
        let lectureModuleElement = document.querySelector('select[name="lecture-module"]');

        if (!lectureNameElement.value || !lectureDateElement.value || lectureModuleElement.value == 'Select module') {
            return;
        }

        if (!modules[lectureModuleElement.value]) {
            modules[lectureModuleElement.value] = [];
        }
        let currentLecture = { name: lectureNameElement.value, data: formatDate(lectureDateElement.value) };
        modules[lectureModuleElement.value].push(currentLecture);

        lectureNameElement.value = '';
        lectureDateElement.value = '';
        lectureModuleElement.value = 'Select module';

        createTrainings(modules);

        
    });

    function createTrainings(modules){
        let modulesElement = document.querySelector('.modules');
        modulesElement.innerHTML = '';
        for (const moduleName in modules){
            let moduleEl = createModule(moduleName);
            let lectureListEl = document.createElement('ul');
            let lectures = modules[moduleName];

            lectures
            .sort((a,b) => a.date.localeCompare(b.date))
            .forEach(({ name, date }) => {
                let lectureEl = createLecture(name, date, moduleName);
                lectureListEl.appendChild(lectureEl);

                let deleteButtonEl = lectureEl.querySelector('button');
                deleteButtonEl.addEventListener('click', (e) => {
                    modules[moduleName] = modules[moduleName]
                    .filter(x => !(x.name == name && x.date == date));

                    if (modules[moduleName].length == 0){
                        delete modules[moduleName];
                        e.currentTarget.closest('.module').remove();
                    }else{
                        e.currentTarget.parentNode.remove();
                    }

                   
                });
            });

            moduleEl.appendChild(lectureListEl);
            modulesElement.appendChild(moduleEl);
        }
    }
    function createModule(name) {
        let divEl = document.createElement('div');
        divEl.classList.add('module');

        let headingEl = document.createElement('h3');
        headingEl.textContent = `${name.toUpperCase()}-MODULE`;

        
        divEl.appendChild(headingEl);
       

        return divEl;

    }
    function createLecture(name, date) {
        let liElement = document.createElement('li');
        liElement.classList.add('flex');
        let courseHeadingEl = document.createElement('h4');
        courseHeadingEl.textContent = `${name} - ${formatDate(date)}`;

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.textContent = 'Del';

        liElement.appendChild(courseHeadingEl);
        liElement.appendChild(deleteButton);

        return liElement;
    }
    function formatDate(dateInput) {
        let [date, time] = dateInput.split('T');
        date = date.replace('-', '/');

        return `${date} - ${time}`;
    }
}
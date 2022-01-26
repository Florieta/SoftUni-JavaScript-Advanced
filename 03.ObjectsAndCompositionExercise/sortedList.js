function createSortedList() {
    const isValid = (index) => 0 <= index && index < sortedList.size;

    const sortedList = {
        numbers: new Array(0),
        size: 0,
        add: function (number) {
            this.numbers.push(number);
            this.numbers = this.numbers.sort((a, b) => a - b);
            this.size++;
        },
        remove: function (index) {
            if (!isValid(index)) {
                throw `Invalid index (${index})!`;
            }

            this.numbers.splice(index, 1);
            this.size--;
        },
        get: function (index) {
            if (!isValid(index)) {
                throw `Invalid index (${index})!`;
            }

            return this.numbers[index];
        }
    };

    return sortedList;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
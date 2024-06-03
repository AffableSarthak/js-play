const obj = {
    value: 42,
    getValue() {
        let arrow = () => this.value
        return arrow()
    }
};

obj.value = 99;
console.log(obj.getValue()); // This will return 42

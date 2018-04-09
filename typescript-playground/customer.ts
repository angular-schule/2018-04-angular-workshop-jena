class Customer {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }

    fooBar() {

        const self = this;
        function callback1() {
            return self.id * 10;
        }

        const callback2 = () => this.id * 20;

        console.log(callback1());
        console.log(callback2());

        const text1 = "Hallo Jena,\n" +
        "das ist Kunde " + this.id + "!";

        const text2 = `Hallo Jena,
das ist Kunde ${this.id}!!`;

        console.log(text2);

        console.log(this.id);
    }
}

const myCustomer = new Customer(3);
myCustomer.fooBar();
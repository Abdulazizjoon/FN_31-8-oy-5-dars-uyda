"use strict";
class CSVWriter {
    constructor(PaymentColumn) {
        this.PaymentColumn = PaymentColumn;
        this.cvs = PaymentColumn.join(",") + "\n";
    }
    save() { }
    addRows(payments) {
        let cvs = payments.map((payment) => this.formatRow(payment)).join("");
        this.cvs += cvs;
        console.log(this.cvs);
    }
    formatRow(payment) {
        return this.PaymentColumn.map((col) => payment[col]).join(",") + "\n";
    }
}
let file1 = new CSVWriter(["id", "amount", "notes", "to"]);
file1.addRows([
    { id: 1, amount: 500, notes: "for dinner", to: "john" },
    { id: 2, amount: 700, notes: "for lunch", to: "jane" },
]);

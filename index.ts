type PaymentColumn = ("id" | "amount" | "to" | "notes")[];

interface Payment {
  id: number; 
  amount: number;
  from?: string;
  to: string;
  notes: string;
}

class CSVWriter {
  constructor(private PaymentColumn: PaymentColumn) {
    this.cvs = PaymentColumn.join(",") + "\n";
  }
  private cvs: string;
  save() {}

  addRows(payments: Payment[]) {
    let cvs = payments.map((payment) => this.formatRow(payment)).join("");
    this.cvs += cvs;
    console.log(this.cvs);
  }

  private formatRow(payment: Payment) {
    return this.PaymentColumn.map((col) => payment[col]).join(",") + "\n";
  }
}

let file1 = new CSVWriter(["id", "amount", "notes", "to"]);

file1.addRows([
  { id: 1, amount: 500, notes: "for dinner", to: "john" },
  { id: 2, amount: 700, notes: "for lunch", to: "jane" },
]);

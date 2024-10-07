interface sim {
  credito: number;
  numeroChiamate: number;
}

class User implements sim {
  name: string;
  lastName: string;
  credito: number = 0;
  numeroChiamate: number = 0;

  constructor(_name: string, _lastName: string) {
    this.name = _name;
    this.lastName = _lastName;
  }
  ricarica(soldi: number): void {
    this.credito += soldi;
  }
  chiamata(minuti: number): void {
    let costochiamata: number = minuti * 0.2;
    if (this.credito - costochiamata < 0) {
      alert("devi effetuare la ricarica");
    } else {
      this.numeroChiamate += minuti;
      this.credito -= costochiamata;
    }
  }
  chiama404(): number {
    return this.credito;
  }
  getNUmeroChiamata(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const io = new User("Marco", "Cipolletta");

io.ricarica(50);
io.chiamata(25);
console.log(io.chiama404());
console.log(io.getNUmeroChiamata());
io.azzeraChiamate();
console.log(io);

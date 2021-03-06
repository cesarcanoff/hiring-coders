// Boolean
const isPerson: boolean = false;
// ==============================

// Number
const age: number = 18;
const height: number = 1.8;
// ==============================

// String
const fullName: string = "César Canoff";
// ==============================

// Array
const ages: number[] = [23, 14, 96, 55];
// ==============================

// Tuple - Three values
let players: [string, string, string];
players = ["Canoff", "César", "Caio"];
// ==============================

// Enum
enum StatusAprovacao {
  Aprovado = "001",
  Pendente = "002",
  Reprovado = "003",
}

// Recebe "APROVADO"
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;
// ==============================

// Any
const apiReturn: any[] = [123, "Bull", true];
const apiReturn_2: any = {};
// ==============================

// Void
function printScreen(msg: string): void {
  console.log(msg);
}
// ==============================

// Null e Undefined
const u: undefined = undefined;
const n: null = null;
// ==============================

// Object
function criar(obj: object) {
  // ...
}

criar({});
// ==============================

// Never
function infinityLoop(): never {
  while (true) {}
}

function error(msg: string): never {
  throw new Error(msg);
}

function failed() {
  return error("FAILED!");
}
// ==============================

// Union Types
const nota: string | number = 5;
function showGrade(nota: number | string) {
  console.log(`A nota é: ${nota}`);
}

showGrade("10");
showGrade(10);
// ==============================

// Alias

type Employer = {
  name: string;
  age: number;
  job: string;
};

type Employers = Employer;

const employers: Employer[] = [
  {
    name: "César Canoff",
    age: 18,
    job: "Software Engineer at Microsoft",
  },
  {
    name: "Anna Rufus",
    age: 20,
    job: "Cloud Engineer at Google",
  },
];

function returnEmployers(employers: Employers[]) {
  for (let employer of employers) {
    console.log(`Name: ${employer.name}`);
  }
}
// ==============================
// ? Optional
let altura: number | null = 1.6;
altura = null;

type Contato = {
  name: string;
  phone1: string;
  phone2?: string;
};

const contato: Contato = {
  name: "César",
  phone1: "55555",
};

// Type Assertion
const myAge: any = 23;
(myAge as number).toString();

// CERTIFICANDO QUE RETORNE UM INPUT.
const input = document.getElementById("numero_1") as HTMLInputElement;
// Row up <-> Row down
const input_2 = <HTMLInputElement>document.getElementById("numero_1");
console.log(input.value);
// ========================

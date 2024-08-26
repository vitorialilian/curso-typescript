import { EmailValidator, ZipCodeValidator } from './validators';

let email = 'neve.usagi@email.com';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(`O e-mail ${email} é válido? ${result}`);

let cep = '12345'
let validatorZipCode = new ZipCodeValidator();
let result2 = validatorZipCode.isValid(cep);

console.log(`O CEP ${cep} é válido? ${result2}`);

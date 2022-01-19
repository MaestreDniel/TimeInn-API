export function validarEmailTesting(email) {
  //Si el email esta vacio salta el error y retorna falso
  if (email.length == 0) {
    return false;
    //Si no sigue el siguiente patron el email es incorrecto
  } else if (!/^[A-Za-z]{1}[a-z]{0,20}@[a-z]{5,10}.(net|com|gov)/.test(email)) {
    return false;
  } else {
    return true;
  }
}

export function validarNameTesting(user) {
  if (user.length == 0) {
    return false;
  }
  //Si no cumple el patrón de usuario salta el error y retorna falso 
  else if (!/^\w{1,20}$/.test(user)) {
    return false;
  }
  //Si cumple todos los requisitos entonces se da como valido y da true
  else {
    return true;
  }
}

export function validarPasswordTesting(password) {
//Si está vacio salta el error y retorna falso
  if (password.length == 0) {
    return false;
  } 
  //Si no cumple el patrón salta el error y retorna falso
  else if (!/^.{7,}\W{1,}/.test(password)) {
    return false;
  }
  //Si cumple todos los requisitos entonces se da como válido y da true
   else {
    return true;
  }
}
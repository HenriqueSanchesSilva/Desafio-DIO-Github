function getAdmins(Map){
  let admins = []
  for([key,value] of Map){
    if(value === 'Admin')
      admins.push(key)
  }

  return admins
}

const admMap = new Map;

admMap.set('Luiz', 'Admin');
admMap.set('Carlos', 'Sem Acesso');
admMap.set('João', 'Sem Acesso');
admMap.set('Henrique', 'Admin');
admMap.set('Fernando', 'Admin');
admMap.set('Paulo', 'Admin');
admMap.set('Julia', 'Sem Acesso');
admMap.set('Rosana', 'Admin');
admMap.set('Luiza', 'Admin');
admMap.set('Fernanda', 'Admin');

console.log(getAdmins(admMap));

## Sobre a aplicação  

A aplicação consiste em um app desenvolvido com a biblioteca React para registro e visualização de entradas e saídas
de veículos de um estacionamento.

### Link para acesso:
### https://app-parking-react.herokuapp.com/


## API

### Registro de entrada de um novo veículo:

  curl -X POST -d '{"plate": "aaA-4444"}' -H 'Content-type: application/json'
  https://parking-lot-to-pfz.herokuapp.com/parking

### Registro de pagamento de um veículo:

  curl -X POST https://parking-lot-to-pfz.herokuapp.com/parking/aAa-4444/pay

### Registro de saída de um veículo:

  curl -X POST https://parking-lot-to-pfz.herokuapp.com/parking/AaA-4444/out

### Consultar histórico de um veículo:

  curl https://parking-lot-to-pfz.herokuapp.com/parking/AaA-4444


## Funcionalidades

### Registrar entrada

A aplicação contem uma página para registrar a entrada de veículo por placa.

### Registrar pagamento

Pode-se realizar o pagamento de tempo de uso do estacionamento. Necessário
primeiramente informar o número da placa do veículo.

### Registrar saída

O registro de saída só pode ser realizado caso o pagamento tenha sido efetuado.

### Exibição de histórico por placa

Há uma página para exibição de histórico por placa. Necessário
primeiramente informar o número da placa que deseja consultar.

### Exibição de detalhes de um registro

Há uma página com detalhes de um registro.



## Para executar o app

### yarn install ou npm install para instalar as dependencias

### yarn start ou npm start para subir a aplicação


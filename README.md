Desafio Backend Frameworks
Sobre o trabalho

Esse repositório foi desenvolvido como atividade prática da disciplina, com o objetivo de aplicar na prática conceitos de arquitetura em camadas e inicialização de projetos backend usando dois frameworks diferentes: Node.js com Express e Java com Spring Boot.

A proposta não é construir um sistema completo, mas sim organizar corretamente a estrutura dos projetos.

Estrutura do projeto

O repositório está dividido em duas pastas principais:

node-express

Projeto em Node.js com Express, contendo uma estrutura básica de camadas:

controllers
models
routes
java-springboot

Projeto em Java com Spring Boot, organizado em camadas:

controller
model
service
repository
Explicação da Arquitetura

As camadas foram criadas seguindo o princípio de separação de responsabilidades, onde cada parte do sistema tem uma função específica.

Node.js (Express)

No Express, a comunicação acontece de forma mais simples e direta:

As routes recebem as requisições HTTP
As routes encaminham para os controllers
Os controllers processam a requisição e utilizam os models
O model representa os dados e retorna a resposta

Fluxo:
Request → Routes → Controller → Model → Response

Java (Spring Boot)

No Spring Boot, a estrutura é mais organizada e dividida em mais camadas:

O Controller recebe as requisições HTTP
O Controller chama o Service, responsável pela lógica de negócio
O Service se comunica com o Repository
O Repository faz o acesso aos dados
O Model representa as entidades do sistema

Fluxo:
Request → Controller → Service → Repository → Response

Resumo da arquitetura

Essa divisão ajuda a manter o projeto organizado, facilita manutenção e permite que cada parte do sistema tenha uma responsabilidade bem definida.

Comparação entre frameworks
Node.js + Express

O Express é mais simples e rápido para começar. Ele não impõe uma estrutura fixa, então o desenvolvedor tem mais liberdade, mas também precisa organizar melhor o projeto.

Java + Spring Boot

O Spring Boot já vem com uma estrutura mais padronizada e é mais utilizado em sistemas grandes e corporativos. Porém, é mais verboso e exige mais configuração inicial.

Conclusão

O Express é mais leve e rápido para desenvolvimento, enquanto o Spring Boot é mais robusto e estruturado.

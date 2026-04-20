# ADR 0003 - Estrutura inicial do sistema

## Status

Aceito

## Contexto

A V1 sera implementada por um unico desenvolvedor, em prazo curto, com frontend e backend separados no mesmo repositorio. E necessario organizar a base para permitir implementacao rapida sem misturar responsabilidades e sem abrir espaco para crescimento descontrolado da API.

## Decisao

Adotar repositorio unico com:

- `frontend/` para a aplicacao `Next.js`
- `backend/` para a API `Spring Boot`
- `docs/` para contexto e ADRs

No backend, organizar os pacotes por fronteiras de responsabilidade:

- `api`
- `application`
- `domain`
- `infrastructure`
- `shared`

No frontend, separar:

- `app`
- `components`
- `sections`
- `features`
- `lib`
- `styles`

## Consequencias

- Facilita navegacao, manutencao e colaboracao assistida por IA.
- Mantem a API pequena e com fronteiras mais claras.
- Permite evolucao futura sem reestruturar o repositorio cedo.
- Exige disciplina para nao criar dependencias cruzadas improprias entre modulos.

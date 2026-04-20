# ADR 0001 - Escolha da arquitetura

## Status

Aceito

## Contexto

O projeto precisa entregar uma V1 institucional/comercial em 30 dias, com um unico desenvolvedor, deploy simples em VPS compartilhada e um fluxo dinamico principal: captura de leads com persistencia em banco. Depois da recomendacao inicial, foi validado que o frontend nao deve acessar o banco diretamente e que o acesso a dados deve ocorrer por API propria em backend.

## Decisao

Adotar arquitetura **hibrida enxuta**, com frontend em `Next.js` e backend separado em `Java + Spring Boot`, evitando acesso direto do frontend ao banco e mantendo separacao clara entre interface, regras de negocio e persistencia.

## Consequencias

- Aumenta um pouco setup, integracao e operacao em relacao a um monolito full-stack.
- Mantem separacao mais clara entre responsabilidades desde a V1.
- Simplifica futuras evolucoes de integracoes e regras de backend.
- Exige controle rigoroso para que a API nao cresca alem do necessario no inicio.

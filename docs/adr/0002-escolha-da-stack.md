# ADR 0002 - Escolha da stack

## Status

Aceito

## Contexto

O projeto precisa equilibrar impacto visual, produtividade, SEO, formulario simples com persistencia, deploy em Docker e baixo custo operacional.

## Decisao

Adotar a seguinte stack principal para a V1:

- Next.js com App Router e TypeScript para o frontend institucional
- Java + Spring Boot para a API minima de leads
- Tailwind CSS para a camada visual
- Spring Data JPA + Hibernate + PostgreSQL para persistencia
- Flyway com arquivos SQL versionados para migrations
- Docker para empacotamento e deploy inicial
- Biome para linting e formatting
- JUnit e Mockito para testes backend

## Consequencias

- O frontend e o backend ficam claramente separados desde a V1.
- O frontend passa a contar com tipagem estatica e melhor reaproveitamento de componentes.
- O deploy passa a envolver dois servicos de aplicacao, o que aumenta um pouco a operacao.
- O backend fica alinhado a preferencia validada do projeto por `Java + Spring Boot`.
- A persistencia e as regras de lead management ficam desacopladas do frontend.
- O schema do banco passa a evoluir com migrations explicitas, auditaveis e reproduziveis.

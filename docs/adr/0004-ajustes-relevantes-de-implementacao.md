# ADR 0004 - Ajustes relevantes de implementacao

## Status

Aceito

## Contexto

O planejamento tecnico da V1 foi concluido e a implementacao inicial foi aberta. Durante o scaffolding surgiram dois ajustes tecnicos relevantes que nao alteram a arquitetura, mas impactam execucao e seguranca:

- o backend precisou ser alinhado para `Java 17` por compatibilidade local e perfil LTS
- o frontend precisou atualizar `Next.js` para `16.2.4` por causa de vulnerabilidade conhecida nas versoes anteriores usadas no inicio do scaffold
- o frontend passou a adotar `TypeScript`, com priorizacao de componentizacao em `.tsx` para melhorar reaproveitamento e seguranca de tipos
- o frontend passou a adotar `Tailwind CSS v4` para alinhar a implementacao com a stack documentada
- os links publicos de contato passaram a ser configurados por variaveis `NEXT_PUBLIC_*`
- o backend precisou declarar `flyway-database-postgresql` para compatibilidade com `PostgreSQL 16`
- o backend passou a persistir metadados minimos de consentimento vinculados ao envio do formulario

## Decisao

Manter a arquitetura aprovada e registrar os seguintes ajustes de implementacao como padrao da base atual:

1. backend em `Java 17`
2. frontend em `Next.js 16.2.4`
3. frontend institucional em `TypeScript`, com componentes reutilizaveis em `.tsx`
4. frontend institucional em `Tailwind CSS v4`
5. CTAs publicos configurados por variaveis de ambiente
6. fluxo de lead com persistencia minima de consentimento
7. continuidade do ciclo focada em validacao integrada e estabilizacao do MVP implementado

## Consequencias

- O backend compila no ambiente atual com uma versao LTS amplamente suportada.
- O frontend deixa de carregar a vulnerabilidade conhecida identificada durante a instalacao.
- O frontend ganha base mais segura para evolucao e componentizacao reutilizavel.
- A camada visual volta a ficar alinhada ao stack aprovado na arquitetura.
- A configuracao de canais comerciais deixa de ficar hardcoded no codigo-fonte.
- O fluxo de lead passa a reter evidencia minima de versao de consentimento e politica associada a submissao.
- O proximo foco deixa de ser scaffolding e passa a ser validacao ponta a ponta com banco real.

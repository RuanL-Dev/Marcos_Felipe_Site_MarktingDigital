# ADR 0004 - Ajustes relevantes de implementacao

## Status

Aceito

## Contexto

O planejamento tecnico da V1 foi concluido e a implementacao inicial foi aberta. Durante o scaffolding surgiram dois ajustes tecnicos relevantes que nao alteram a arquitetura, mas impactam execucao e seguranca:

- o backend precisou ser alinhado para `Java 17` por compatibilidade local e perfil LTS
- o frontend precisou atualizar `Next.js` para `16.2.4` por causa de vulnerabilidade conhecida nas versoes anteriores usadas no inicio do scaffold
- o frontend passou a adotar `TypeScript`, com priorizacao de componentizacao em `.tsx` para melhorar reaproveitamento e seguranca de tipos

## Decisao

Manter a arquitetura aprovada e registrar os seguintes ajustes de implementacao como padrao da base atual:

1. backend em `Java 17`
2. frontend em `Next.js 16.2.4`
3. frontend institucional em `TypeScript`, com componentes reutilizaveis em `.tsx`
4. continuidade do ciclo focada em validacao integrada e estabilizacao do MVP implementado

## Consequencias

- O backend compila no ambiente atual com uma versao LTS amplamente suportada.
- O frontend deixa de carregar a vulnerabilidade conhecida identificada durante a instalacao.
- O frontend ganha base mais segura para evolucao e componentizacao reutilizavel.
- O proximo foco deixa de ser scaffolding e passa a ser validacao ponta a ponta com banco real.

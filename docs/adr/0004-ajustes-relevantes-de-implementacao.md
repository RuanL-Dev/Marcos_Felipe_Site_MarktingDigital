# ADR 0004 - Ajustes relevantes de implementacao

## Status

Aceito

## Contexto

O planejamento tecnico da V1 foi concluido e a implementacao inicial foi aberta. Durante o scaffolding surgiram dois ajustes tecnicos relevantes que nao alteram a arquitetura, mas impactam execucao e seguranca:

- o backend precisou ser alinhado para `Java 17` por compatibilidade local e perfil LTS
- o frontend precisou atualizar `Next.js` para `16.2.4` por causa de vulnerabilidade conhecida nas versoes anteriores usadas no inicio do scaffold

## Decisao

Manter a arquitetura aprovada e registrar os seguintes ajustes de implementacao como padrao da base atual:

1. backend em `Java 17`
2. frontend em `Next.js 16.2.4`
3. continuidade do ciclo focada em validacao integrada e estabilizacao do MVP implementado

## Consequencias

- O backend compila no ambiente atual com uma versao LTS amplamente suportada.
- O frontend deixa de carregar a vulnerabilidade conhecida identificada durante a instalacao.
- O proximo foco deixa de ser scaffolding e passa a ser validacao ponta a ponta com banco real.

# Marcos_Felipe_Site

## Estado atual da base

O projeto saiu da fase exclusivamente documental e agora possui uma base executavel inicial para a V1.

Estrutura implementada:

- `frontend/` em `Next.js`
- `backend/` em `Spring Boot`
- `docker-compose.yml` para execucao local integrada
- `docs/` com contexto e ADRs atualizados
- ativos copiados para `frontend/public/portfolio`

Validacoes executadas:

- `mvn test` no backend: sucesso
- `npm run build` no frontend: sucesso

## Aderencia ao plano tecnico

### Aderencias

- repositorio unico com `frontend/`, `backend/` e `docs/`
- frontend institucional com home, secoes comerciais, portfolio inicial e politica de privacidade
- formulario de leads no fim da pagina
- contrato inicial do frontend apontando para `POST /api/v1/leads`
- backend modularizado em `api`, `application`, `domain`, `infrastructure` e `shared`
- persistencia com `Spring Data JPA + Hibernate + PostgreSQL`
- migration inicial com `Flyway`
- anti-spam minimo com honeypot, rate limiting e validacao backend
- `Dockerfile` para frontend e backend
- `docker-compose.yml` para banco, frontend e backend

### Desvios relevantes

- ainda nao houve execucao integrada real via `docker-compose`
- ainda nao foi validada persistencia ponta a ponta com banco rodando
- `WhatsApp` e `Instagram` permanecem com links placeholder
- copy final e proposta de valor ainda podem ser refinadas
- ainda nao ha teste automatizado do contrato HTTP ponta a ponta

## Hipoteses ainda vigentes

- a API pode permanecer pequena e limitada a criacao de leads
- a V1 continua sem autenticacao de usuario final
- o banco no mesmo host continua adequado para a primeira entrega
- os ativos em `./ImagensRelevantes` ainda podem receber curadoria adicional

## Decisoes confirmadas na implementacao

- frontend em `Next.js` com `App Router`
- backend em `Spring Boot`
- persistencia com `Spring Data JPA + Hibernate + PostgreSQL`
- migration inicial via `Flyway`
- endpoint publico principal `POST /api/v1/leads`
- honeypot no formulario e validacao correspondente no backend
- rate limiting enxuto no backend
- politica de privacidade publicada como pagina propria
- configuracao por ambiente com `.env.example` na raiz e no frontend
- `Java 17` adotado no backend por compatibilidade local e perfil LTS
- `Next.js 16.2.4` adotado no frontend para evitar vulnerabilidade conhecida nas versoes anteriores utilizadas nesta implementacao

## Decisoes em aberto ou revistas

- substituir os links placeholder de `WhatsApp` e `Instagram` pelos destinos oficiais
- validar se o formulario deve armazenar metadados adicionais na proxima iteracao
- decidir se a API tera deduplicacao de leads no futuro
- validar estrategia final de reverse proxy e portas na VPS

## Restricoes operacionais observadas

- um unico desenvolvedor continua sendo responsavel por toda a execucao
- o backend deve continuar limitado a captura de leads na V1
- o deploy alvo continua sendo VPS Hostinger com Docker
- a base precisa evitar crescimento estrutural antes da validacao ponta a ponta

## Achados priorizados

### Critico

1. Ainda nao foi validado o fluxo completo `frontend -> backend -> PostgreSQL` em runtime integrado.
2. Os links de contato publico ainda estao com valores placeholder.

### Alto

1. Ainda nao ha execucao comprovada via `docker-compose`.
2. Ainda nao ha verificacao manual do consentimento e do comportamento do formulario contra uma API rodando.
3. Ainda nao existe teste de integracao do endpoint com banco real.

### Medio

1. O frontend ainda nao usa os textos finais de negocio.
2. Os assets visuais ainda podem ser ampliados e melhor curados.
3. Ainda nao ha logica de deduplicacao ou metadados complementares de lead.

### Baixo

1. O visual pode ser refinado nas proximas iteracoes.
2. O naming e a organizacao fina podem ser polidos apos a integracao real.

## Recomendacoes de correcao

1. Validar o fluxo integrado com `docker-compose`.
2. Substituir `WhatsApp` e `Instagram` por links reais antes de publicacao.
3. Testar criacao real de lead com banco em execucao.
4. Revisar mensagens de sucesso e erro do formulario em ambiente real.
5. Refinar copy e portfolio com materiais aprovados.

## Revisao de seguranca

Pontos ja implementados:

- frontend sem acesso direto ao banco
- validacao backend no request de lead
- honeypot
- rate limiting simples por origem
- CORS configuravel por ambiente
- segredos previstos por variaveis de ambiente
- politica de privacidade publicada

Pontos ainda pendentes de validacao real:

- comportamento do rate limiting em runtime integrado
- exposicao de portas na execucao real
- verificacao de que o banco nao ficara publico na configuracao final da VPS
- revisao do texto final de consentimento com os links oficiais do projeto

## Hardening minimo recomendado

- manter `.env` e credenciais fora do git
- validar o backend com banco real antes de qualquer deploy
- revisar CORS com o dominio definitivo do frontend
- manter Actuator limitado a `health`
- evitar logging de payload bruto com dados pessoais
- aplicar checklist manual de portas e acesso ao banco na VPS

## Observabilidade e auditoria

Ja implementado:

- logs de criacao de lead
- logs de validacao rejeitada
- logs de rate limiting
- endpoint de `health` no backend

Ainda recomendado:

- validar formato dos logs em execucao real
- verificar logs de subida do `Flyway`
- definir rotina minima de consulta a logs no deploy

## Estrategia de CI/CD

CI/CD completo continua fora do escopo atual.

Estado atual:

- backend validado com `mvn test`
- frontend validado com `npm run build`
- ainda falta validacao integrada local com todos os containers

## Estrategia de deploy

Mantem-se a estrategia enxuta aprovada:

- `frontend`, `backend` e `PostgreSQL` em containers separados
- banco no mesmo host com isolamento logico
- portas expostas apenas no necessario
- variaveis de ambiente fora do repositorio
- reverse proxy a definir na fase de publicacao

## Checklist de hardening minimo

- segredos fora do git
- validacao server-side
- honeypot implementado
- rate limiting implementado
- logs basicos implementados
- politica de privacidade publicada
- consentimento visivel no formulario
- migrations Flyway implementadas
- frontend sem acesso direto ao banco
- `health` endpoint disponivel

## Checklist de readiness para deploy

- frontend buildando sem erro
- backend compilando e testando sem erro
- migration inicial criada
- `docker-compose.yml` presente
- links oficiais de contato configurados
- fluxo real com banco validado
- variaveis de ambiente definidas
- portas e exposicao revisadas

## Plano de correcao priorizado

1. Executar validacao integrada local com banco real.
2. Configurar links oficiais de `WhatsApp` e `Instagram`.
3. Testar criacao real de leads em ambiente local.
4. Revisar comportamento de erro e sucesso do formulario.
5. Refinar conteudo comercial e portfolio.

## Matriz simples impacto x esforco

### Alto impacto / baixo esforco

- configurar links oficiais de contato
- validar `docker-compose`
- testar criacao real de lead

### Alto impacto / medio esforco

- rodar fluxo completo com banco real
- revisar deploy local e comportamento do backend em runtime

### Medio impacto / baixo esforco

- ajustar copy da home
- revisar mensagens do formulario
- curar portfolio inicial

### Medio impacto / medio esforco

- adicionar teste de integracao do endpoint com banco
- revisar logs em execucao real

## Riscos

- publicar sem validar fluxo real com banco
- esquecer links reais de conversao
- crescer backend antes de estabilizar a captura de leads
- perder tempo com refinamento visual antes de fechar a integracao

## Pendencias

- validar integracao real com PostgreSQL
- substituir links placeholder
- revisar copy final das secoes principais
- avaliar se entram mais assets no portfolio inicial

## Proximo ciclo recomendado de maturidade

O proximo ciclo recomendado e **estabilizacao do MVP implementado**, com foco em:

1. validacao ponta a ponta com banco real
2. ajuste de ambiente e deploy local
3. configuracao de links oficiais
4. refinamento comercial do conteudo

## Proximos passos

- rodar `docker-compose` e validar o fluxo real
- configurar contatos oficiais
- revisar comportamento do formulario em runtime
- preparar a base para publicacao inicial sem ampliar escopo

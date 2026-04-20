# Marcos_Felipe_Site

## Visao geral do plano tecnico

A V1 sera executada em repositorio unico, com dois blocos principais: `frontend` em `Next.js` e `backend` em `Java + Spring Boot`. O frontend sera responsavel pela experiencia institucional, SEO, renderizacao e envio do formulario. O backend sera responsavel exclusivamente pela captura de leads, validacao server-side, anti-spam minimo, persistencia e logs basicos.

O objetivo do plano tecnico e transformar a arquitetura validada em uma base executavel, pequena, modular e sustentavel para um unico desenvolvedor em 30 dias, sem crescer a API alem do necessario.

## Contexto consolidado atualizado

- arquitetura hibrida enxuta validada para a V1
- repositorio unico com separacao clara entre frontend e backend
- frontend em `Next.js`
- backend em `Spring Boot`
- persistencia em `Spring Data JPA + Hibernate + PostgreSQL`
- migrations com `Flyway` via arquivos SQL versionados
- formulario no fim da pagina com criacao de lead
- anti-spam minimo com validacao backend, rate limiting, honeypot e logs basicos
- banco no mesmo host da aplicacao, com isolamento logico e sem exposicao publica desnecessaria

## Hipoteses vigentes atualizadas

- a V1 tera apenas um endpoint publico principal para criacao de lead
- nao havera painel administrativo na V1
- nao havera autenticacao de usuario final na V1
- o frontend tera conteudo predominantemente estatico, com poucas interacoes client-side
- a primeira versao do backend continuara limitada a captura de leads, sem automacoes
- a politica de privacidade existira como pagina propria e sera vinculada no formulario

## Arquitetura e stack aprovadas

- frontend: `Next.js` + `React` + `Tailwind CSS`
- backend: `Spring Boot`
- persistencia: `Spring Data JPA` + `Hibernate` + `PostgreSQL`
- migrations: `Flyway`
- lint/formatacao frontend: `Biome`
- testes backend: `JUnit` + `Mockito`
- empacotamento e execucao inicial: `Docker`

Notas de referencia:

- A documentacao do `Spring Boot` confirma o uso pragmatico de configuracao por perfil e de `Flyway` em contexto de API pequena com banco.
- A documentacao do `Flyway` reforca o uso de migrations versionadas como mecanismo auditavel e reproduzivel, preferivel a alteracoes manuais de schema.

## Estrutura de modulos e fronteiras

### Frontend

Modulos principais:

- `app`: rotas, layout, paginas e metadados
- `components`: componentes visuais reutilizaveis
- `sections`: secoes da home e paginas comerciais
- `features/leads`: formulario, validacao client-side basica e integracao com API
- `lib`: utilitarios, config publica e cliente HTTP
- `styles`: tokens, temas e estilos globais

Responsabilidades:

- renderizar as paginas institucionais
- organizar o conteudo comercial
- enviar formulario para a API
- exibir estados de carregamento, sucesso e erro

Dependencias permitidas:

- `app` pode depender de `sections`, `components`, `features`, `lib`
- `sections` pode depender de `components` e `lib`
- `features` pode depender de `components` e `lib`
- `components` nao deve depender de `app`

### Backend

Modulos principais:

- `api`: controllers e contratos HTTP
- `application`: casos de uso e servicos
- `domain`: entidades, regras de dominio e contratos internos
- `infrastructure`: persistencia, configuracao, rate limiting e logging
- `shared`: utilitarios transversais, erros e responses

Responsabilidades:

- receber e validar requisicoes
- aplicar protecao anti-spam minima
- persistir leads
- registrar eventos basicos de operacao

Dependencias permitidas:

- `api` depende de `application` e `shared`
- `application` depende de `domain` e contratos
- `infrastructure` implementa contratos de `domain`/`application`
- `domain` nao depende de framework web nem de banco

## Mapa de dependencias e fronteiras

```text
[Next.js UI]
  -> chama -> [Spring Boot API]
  -> nao acessa -> [PostgreSQL]

[Spring Boot API]
  -> usa -> [Application Services]
  -> usa -> [Domain]
  -> usa -> [Infrastructure: JPA, Flyway, Rate Limit, Logs]
  -> persiste -> [PostgreSQL]

[PostgreSQL]
  -> acessivel apenas pelo backend
```

## Organizacao de pastas e convencoes

- repositorio unico com pastas `frontend/` e `backend/`
- documentacao em `docs/context` e `docs/adr`
- nomes de modulos e pastas em minusculo
- convencoes HTTP orientadas a recursos
- migrations SQL em `backend/src/main/resources/db/migration`
- variaveis por ambiente em arquivos `.env` no frontend e configuracao externa no backend
- nao expor segredos no repositorio

## Arvore inicial de diretorios

```text
.
├─ docs/
│  ├─ adr/
│  └─ context/
├─ frontend/
│  ├─ app/
│  │  ├─ layout.js
│  │  ├─ page.js
│  │  ├─ politica-de-privacidade/
│  │  └─ servicos/
│  ├─ components/
│  ├─ sections/
│  ├─ features/
│  │  └─ leads/
│  │     ├─ components/
│  │     ├─ services/
│  │     └─ schemas/
│  ├─ lib/
│  ├─ public/
│  ├─ styles/
│  ├─ biome.json
│  ├─ package.json
│  └─ Dockerfile
├─ backend/
│  ├─ src/
│  │  ├─ main/
│  │  │  ├─ java/.../
│  │  │  │  ├─ api/
│  │  │  │  ├─ application/
│  │  │  │  ├─ domain/
│  │  │  │  ├─ infrastructure/
│  │  │  │  └─ shared/
│  │  │  └─ resources/
│  │  │     ├─ db/migration/
│  │  │     ├─ application.yml
│  │  │     ├─ application-dev.yml
│  │  │     └─ application-prod.yml
│  │  └─ test/
│  ├─ pom.xml
│  └─ Dockerfile
└─ docker-compose.yml
```

## Contratos iniciais

| Interface | Contrato | Entrada | Saida | Observacoes |
| --- | --- | --- | --- | --- |
| Frontend -> Backend | `POST /api/v1/leads` | `nome`, `sobrenome`, `email`, `telefone`, `honeypot`, metadados minimos opcionais | `201 Created` com `id` e mensagem de sucesso | endpoint publico com validacao server-side |
| Backend -> Banco | repositorio `LeadRepository` | entidade `Lead` | entidade persistida | acesso apenas via camada de persistencia |
| Backend -> Integracoes externas | nenhuma na V1 | n/a | n/a | WhatsApp/Instagram ficam como links/CTAs no frontend |

### Contrato HTTP inicial

Request sugerido:

```json
{
  "firstName": "Marcos",
  "lastName": "Felipe",
  "email": "contato@exemplo.com",
  "phone": "11999999999",
  "company": null,
  "honeypot": ""
}
```

Response sugerida:

```json
{
  "id": "uuid-ou-id-tecnico",
  "message": "Lead cadastrado com sucesso."
}
```

Erros esperados:

- `400` para validacao
- `409` apenas se houver regra futura de duplicidade
- `429` para rate limiting
- `500` para erro inesperado

## Modelagem inicial

### Entidade principal

`Lead`

- `id`
- `firstName`
- `lastName`
- `email`
- `phone`
- `createdAt`

Campos opcionais futuros, nao obrigatorios na V1:

- `source`
- `campaign`
- `notes`
- `consentVersion`
- `ipHash`

Relacionamentos:

- nenhum relacionamento obrigatorio na V1

### Estrategia inicial de banco

- tabela unica `leads`
- indice em `created_at`
- possivel indice em `email` apenas se regra futura justificar busca/duplicidade
- schema evoluido somente por migrations Flyway

## Estrategia de autenticacao e autorizacao

- nao havera autenticacao de usuario final na V1
- endpoint de criacao de lead sera publico
- autorizacao nao se aplica ao fluxo publico inicial
- acesso operacional ao banco e aos servicos sera restrito por rede, ambiente e credenciais
- se actuator for habilitado no backend, nao deve ser exposto publicamente sem protecao

## Estrategia de configuracao e segredos

- frontend: `.env.local` para desenvolvimento e variaveis de ambiente no deploy
- backend: `application.yml` base + `application-dev.yml` + `application-prod.yml`
- segredos fora do git
- segredos minimos esperados:
  - `SPRING_DATASOURCE_URL`
  - `SPRING_DATASOURCE_USERNAME`
  - `SPRING_DATASOURCE_PASSWORD`
  - configuracoes de porta da API
  - URL publica da API para o frontend

Observacao:

O `Spring Boot` documenta configuracao por perfil e `Flyway` por localizacao/versionamento, o que combina com a necessidade de ambiente `dev` e `prod` simples nesta V1.

## Observabilidade minima

- logs estruturados ou pelo menos consistentes para requisicoes e falhas
- registro de tentativas invalidadas e eventos de rate limiting
- health check simples no backend
- logs basicos de inicializacao e aplicacao de migrations
- monitoramento avancado, traces e dashboards ficam fora da V1

## Plano por fases

### MVP

Objetivo:

- publicar base funcional do site com formulario integrado e persistencia de leads

Entregaveis:

- frontend institucional principal
- pagina de politica de privacidade
- backend com endpoint de criacao de lead
- migrations iniciais
- persistencia em PostgreSQL
- anti-spam minimo
- dockerizacao inicial

Riscos:

- atraso por materiais visuais e textos
- acoplamento excessivo entre formulario e API
- falhas de configuracao entre frontend, backend e banco

Criterios de pronto:

- visitante consegue navegar pelo site
- formulario envia com sucesso para API
- lead persiste no banco
- consentimento aparece corretamente
- erro e sucesso do formulario sao comunicados ao usuario

### Estabilizacao

Objetivo:

- reduzir fragilidade operacional e corrigir gargalos da primeira entrega

Entregaveis:

- refinamento de validacoes
- testes principais do backend
- ajustes de UX do formulario
- revisao de logs e mensagens de erro
- revisao de configuracao de ambiente

Riscos:

- bugs de integracao em ambiente real
- ruído de spam acima do esperado

Criterios de pronto:

- fluxos principais previsiveis
- validacoes consistentes
- configuracao reproduzivel em ambiente local e VPS

### Escala

Objetivo:

- preparar extensoes sem quebrar a base

Entregaveis:

- extensoes de campos do lead se justificadas
- preparacao para futuras integracoes
- evolucao do contrato da API de forma compativel

Riscos:

- expandir escopo cedo demais

Criterios de pronto:

- nova funcionalidade nao quebra a V1
- contratos seguem simples e versionados

### Hardening e governanca

Objetivo:

- elevar maturidade de seguranca e operacao quando a V1 estiver estavel

Entregaveis:

- revisao de headers e CORS
- revisao de exposicao de portas e segredos
- politica de backup/restauracao
- checklist de deploy e operacao

Riscos:

- tratar como urgente antes da hora e atrasar entrega da V1

Criterios de pronto:

- riscos principais controlados
- operacao documentada

## Backlog tecnico priorizado

1. Estruturar monorepo com `frontend/`, `backend/`, `docs/` e `docker-compose.yml`.
2. Inicializar frontend `Next.js` com base visual, rotas e secoes principais.
3. Inicializar backend `Spring Boot` com modulos base.
4. Configurar PostgreSQL e conexao por ambiente.
5. Criar migration `V1__create_leads_table.sql`.
6. Implementar entidade `Lead`, repositorio e caso de uso de criacao.
7. Implementar endpoint `POST /api/v1/leads`.
8. Implementar validacao backend e sanitizacao minima.
9. Implementar honeypot e rate limiting enxuto.
10. Integrar formulario do frontend com API.
11. Criar pagina de politica de privacidade e texto de consentimento.
12. Configurar logs basicos e health check.
13. Criar testes de backend para criacao de lead e validacoes.
14. Ajustar dockerizacao inicial.
15. Validar deploy local reproduzivel.

## Milestones

### Milestone 1 - Base estrutural

- repositorio organizado
- frontend e backend inicializados
- convencoes e docs alinhadas

### Milestone 2 - Fluxo de lead ponta a ponta

- tabela criada
- endpoint funcionando
- formulario integrado

### Milestone 3 - Estabilizacao da V1

- validacoes, consentimento, anti-spam e logs basicos
- testes principais e ajuste fino de UX

### Milestone 4 - Preparacao de entrega

- docker local validado
- checklist de ambiente e revisao tecnica

## Decisoes irreversiveis

- escolha de `Java + Spring Boot` como backend da V1
- adocao de `Flyway` como mecanismo oficial de evolucao de schema
- definicao do repositorio unico com separacao `frontend/` e `backend/`
- definicao de contratos publicos da API que precisarao ser preservados

## Decisoes adiaveis

- campos extras do lead
- politica de deduplicacao
- painel administrativo
- integracoes com n8n
- CAPTCHA
- monitoramento avancado
- estrategia de backup automatizado

## Mini ADRs consolidadas

- `0001-escolha-da-arquitetura.md`: arquitetura hibrida enxuta
- `0002-escolha-da-stack.md`: stack principal da V1
- `0003-estrutura-inicial-do-sistema.md`: repositorio unico, fronteiras modulares e contratos iniciais

## Riscos de execucao priorizados

1. O frontend evoluir mais rapido que a API e travar integracao.
2. O backend crescer alem da captura de leads ainda na V1.
3. Atraso por falta de conteudo visual e copy final.
4. Falhas de ambiente entre local e VPS.
5. Consentimento LGPD mal implementado no formulario.

## Itens que devem ser verificados durante implementacao e revisao tecnica

- o frontend nao acessa banco nem segredos
- o backend nao expoe endpoints alem do necessario
- a migration inicial e reproduzivel
- o contrato HTTP do formulario esta estavel
- o honeypot e o rate limiting nao quebram UX legitima
- o texto de consentimento esta visivel e coerente com a politica de privacidade
- logs nao vazam dados sensiveis
- banco nao fica exposto publicamente

## Pendencias

- confirmar futura necessidade ou nao de campos extras no lead
- validar proposta de valor final da home
- validar materiais reais da pasta `./ImagensRelevantes`

## Proximos passos

- usar este plano tecnico como entrada do Prompt 3
- transformar backlog e milestones em implementacao assistida
- manter a API pequena e o escopo visual/comercial como prioridade da V1

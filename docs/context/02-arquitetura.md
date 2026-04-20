# Marcos_Felipe_Site

## Resumo executivo da arquitetura

Para a V1, a arquitetura validada passa a ser uma **arquitetura hibrida enxuta**, com `Next.js` no frontend institucional e `Java + Spring Boot` como API propria para captura de leads, persistindo em `PostgreSQL`. Essa decisao substitui a recomendacao anterior de `Next.js` full-stack e passa a valer como direcao oficial do projeto.

A mudanca foi validada explicitamente pelo projeto para preservar separacao clara entre frontend, regras de negocio e persistencia. A adocao de backend separado aumenta um pouco a complexidade operacional, mas continua aceitavel no contexto atual porque o escopo do backend da V1 permanece pequeno e bem delimitado.

## Contexto consolidado atualizado

- Aplicacao web institucional/comercial com forte foco em conversao.
- Hero forte, servicos, portfolio, sobre, provas sociais e CTA recorrente.
- CTA principal: WhatsApp Business.
- CTA secundario: Instagram.
- Formulario simples ao final da pagina com `nome`, `sobrenome`, `email` e `telefone`.
- Dados do formulario devem ser persistidos em API propria com `Java + Spring Boot` e PostgreSQL.
- O PostgreSQL sera novo para este projeto.
- Cada lead devera armazenar identificador proprio e data de criacao com `LocalDateTime`.
- Hospedagem inicial em VPS Hostinger ja existente, com porta especifica e sem interferir em outros servicos.
- Prazo de 30 dias, orcamento limitado e apenas um desenvolvedor.

## Hipoteses vigentes atualizadas

- A V1 exigira separacao entre frontend e backend em servicos independentes.
- O volume inicial de leads e trafego sera baixo a moderado.
- O formulario tera fluxo simples de gravacao e retorno de sucesso/erro, sem automacao imediata.
- O site pode ser construindo com conteudo majoritariamente estatico e apenas o envio do formulario como fluxo dinamico.
- A evolucao futura para integracoes com n8n ou API separada deve ser preservada, mas nao precisa ser implementada agora.
- A V1 usara protecao anti-spam enxuta com validacao backend, rate limiting, honeypot e logs basicos.
- CAPTCHA so sera introduzido se o volume de abuso justificar.
- O consentimento e a finalidade de uso dos dados devem ser apresentados em conformidade pratica com a LGPD.

## Opcoes avaliadas

### Opcao A - Next.js full-stack + PostgreSQL

Arquitetura geral:

- um unico projeto web
- frontend institucional em Next.js App Router
- API minima via Route Handlers
- conexao direta com PostgreSQL em codigo server-side

Quando vale usar:

- V1 enxuta
- equipe pequena
- prazo curto
- necessidade de operacao simples

Quando nao vale usar:

- quando ha muitos fluxos de negocio complexos
- quando varias integracoes independentes surgem cedo
- quando backend passa a ter vida propria

Complexidade:

- baixa a media

Riscos principais:

- mistura excessiva de responsabilidades se o projeto nao for modularizado
- acesso a banco no mesmo projeto requer cuidado com segredos e validacao

Aderencia ao contexto:

- muito alta

Classificacao:

- aceitavel, mas nao escolhida

### Opcao B - Next.js frontend + Spring Boot API + PostgreSQL

Arquitetura geral:

- frontend separado em Next.js
- backend separado em Spring Boot
- PostgreSQL compartilhado pela API

Quando vale usar:

- quando o backend ja nasce com mais regras, integracoes e validacoes
- quando ha necessidade de fronteira clara entre camadas
- quando a equipe ja domina bem Java/Spring no dia a dia

Quando nao vale usar:

- quando a V1 tem apenas poucos endpoints e um formulario simples
- quando o prazo e a operacao sao muito restritos

Complexidade:

- media

Riscos principais:

- aumento de tempo de setup, integracao, deploy e manutencao
- mais componentes para operar na VPS

Aderencia ao contexto:

- media

Classificacao:

- recomendada

### Opcao C - Next.js frontend estatico + API minima separada em Spring Boot + PostgreSQL

Arquitetura geral:

- frontend quase todo estatico em Next.js
- backend pequeno em Spring Boot so para leads
- PostgreSQL no backend

Quando vale usar:

- quando se quer preservar frontend simples mas manter padrao Java desde cedo
- quando ha expectativa concreta de ampliar a API em curto prazo

Quando nao vale usar:

- quando simplicidade operacional e prioridade maxima
- quando o unico fluxo dinamico da V1 e apenas o formulario

Complexidade:

- media

Riscos principais:

- custo de manter duas aplicacoes para um caso ainda pequeno
- distribuicao de responsabilidade pode ser excessiva para um unico desenvolvedor

Aderencia ao contexto:

- media para baixa

Classificacao:

- aceitavel, mas inferior a Opcao B

### Opcao D - Microsservicos ou arquitetura distribuida

Arquitetura geral:

- frontend e varios servicos separados
- possivel fila, gateway, observabilidade dedicada e integracoes independentes

Quando vale usar:

- apenas com alto volume, varios times, dominos independentes ou necessidade operacional avancada

Quando nao vale usar:

- agora

Complexidade:

- alta

Riscos principais:

- overengineering imediato
- mais custo, mais operacao, mais superficie de falha

Aderencia ao contexto:

- muito baixa

Classificacao:

- nao recomendada

## Tabela comparativa resumida

| Opcao | Arquitetura | Operacao | Seguranca/observabilidade | Custo/escalabilidade | Manutencao | Aderencia |
| --- | --- | --- | --- | --- | --- | --- |
| A | monolito full-stack em Next.js | mais simples | suficiente para V1, com validacao, rate limit e segredos por ambiente | menor custo, escala suficiente para inicio | melhor para um dev | alta |
| B | frontend Next.js + API Spring Boot | mais pesada | boa separacao e maturidade backend | custo maior, escala boa | boa, mas com mais friccao | media |
| C | frontend estatico + API Spring Boot minima | intermediaria | boa para API, mas com separacao prematura | custo medio | manutencao razoavel | media-baixa |
| D | arquitetura distribuida | alta complexidade | alta capacidade, mas exagerada | custo alto | pior para o contexto | muito baixa |

## Recomendacao principal

### Arquitetura recomendada

- arquitetura hibrida enxuta com frontend `Next.js` e backend `Spring Boot`

### Stack recomendada

- frontend: Next.js com App Router e React
- estilo: Tailwind CSS
- backend: Java + Spring Boot
- persistencia: Spring Data JPA + Hibernate + PostgreSQL
- migrations: Flyway com arquivos SQL versionados no repositorio
- infraestrutura inicial: Docker + VPS Hostinger
- lint e formatacao do frontend: Biome
- testes backend: JUnit e Mockito

Justificativa tecnica e de negocio:

- preserva separacao clara entre interface, regras de negocio e persistencia
- respeita a preferencia tecnica validada pelo projeto por API propria em `Java + Spring Boot`
- mantem boa experiencia visual, SEO e produtividade no frontend com `Next.js`
- permite tratar leads em backend dedicado sem expor acesso a banco no frontend
- continua compativel com deploy simples em VPS e com evolucao futura para integracoes

A documentacao atual do `Spring Boot` confirma seu encaixe como aplicacao web separada e production-ready, com configuracao pratica e boa aderencia para APIs pequenas com persistencia em banco. O `Next.js` segue adequado para o frontend institucional pela capacidade de SSR/SSG e organizacao moderna da camada web. Fontes consultadas via Context7: `Next.js` e `Spring Boot`.

## Diagrama textual da arquitetura recomendada

```text
[Visitante]
    |
    v
[Next.js App Router]
    |-- paginas institucionais, seo, portfolio, servicos, sobre, depoimentos
    |-- componentes UI e formularios
    |
    v
[Spring Boot API /leads]
    |-- validacao server-side
    |-- honeypot, rate limiting e logs basicos
    |-- regras de negocio de captura
    |
    v
[PostgreSQL]
    |-- tabela de leads
    |-- id, nome, sobrenome, email, telefone, data de criacao

[Variaveis de ambiente]
    |-- string de conexao
    |-- segredos e configuracoes por ambiente

[Docker]
    |-- container do frontend Next.js
    |-- container da API Spring Boot
    |-- banco no mesmo host, com isolamento logico e sem exposicao publica desnecessaria
```

## Monolito modular vs hibrida vs microsservicos

- Monolito modular continua sendo uma alternativa viavel quando se quer concentrar tudo em uma unica base e o backend e muito pequeno.
- Arquitetura hibrida faz sentido neste projeto porque foi validada a necessidade de separar frontend do acesso a dados e das regras de negocio, mesmo mantendo escopo pequeno.
- Microsservicos so fariam sentido no futuro com crescimento real de dominios independentes, alto volume, multiplas integracoes assicronas, equipes distintas ou exigencias operacionais muito maiores.

## Riscos tecnicos, operacionais e de seguranca com mitigacao

1. Coleta de dados pessoais sem fluxo minimo de consentimento.
Mitigacao: definir texto claro de finalidade, coleta minima, politica de privacidade alinhada a LGPD e validacao server-side.

2. Spam ou abuso no formulario.
Mitigacao: validacao server-side, rate limiting, honeypot, logs basicos e CAPTCHA apenas se o abuso justificar.

3. Aumento de complexidade operacional por haver frontend e backend separados.
Mitigacao: manter API minima, contrato enxuto, padronizacao de ambiente, Docker e fronteiras claras.

4. Dependencia de VPS compartilhada.
Mitigacao: isolamento por porta, variaveis por ambiente, containerizacao e configuracao conservadora.

5. Falta de materiais visuais consistentes.
Mitigacao: curadoria antecipada da pasta `./ImagensRelevantes` e fallback visual planejado.

6. Backend separado crescer acima da necessidade real da V1.
Mitigacao: limitar escopo da API a captura de leads e registrar criterios objetivos para expansao.

## Decisoes confirmadas

- A V1 tera frontend institucional e backend minimo para leads.
- O formulario ficara ao fim da pagina.
- O CTA principal sera WhatsApp Business.
- Instagram sera canal complementar.
- A persistencia de leads sera em PostgreSQL novo para este projeto.
- O PostgreSQL sera novo para este projeto.
- Cada lead tera id proprio e data de criacao.
- A protecao anti-spam minima da V1 sera composta por validacao backend, rate limiting, honeypot e logs basicos.
- CAPTCHA nao entra na V1 por padrao; so entra se houver abuso real.
- O tratamento de dados e o consentimento devem seguir politica de privacidade aderente a LGPD.
- O frontend nao acessara o banco diretamente.
- O acesso a dados devera ocorrer por API propria no backend.
- A API propria da V1 sera implementada com Java + Spring Boot.
- O banco pode ficar no mesmo host da aplicacao por simplicidade e custo, com isolamento logico e sem exposicao publica desnecessaria.
- O texto de consentimento ficara abaixo dos campos do formulario, com finalidade clara e link para a politica de privacidade.
- O envio do formulario deve deixar explicita a concordancia com essa politica.
- A arquitetura alvo da V1 deve equilibrar simplicidade operacional com separacao clara de responsabilidades.
- A stack de persistencia da V1 no backend sera Spring Data JPA + Hibernate + PostgreSQL.
- A estrategia de migrations da V1 sera Flyway com arquivos SQL versionados no repositorio.
- Toda mudanca de schema deve passar por migration explicita, auditavel e reproduzivel.
- Microsservicos estao descartados para esta fase.

## Decisoes em aberto

- quais campos auxiliares adicionais poderao ser incluidos futuramente no lead sem quebrar a V1

## Itens essenciais agora vs depois vs prematuros

### Essencial agora

- fechar a arquitetura da V1
- definir stack principal da implementacao
- estabelecer fronteiras modulares do projeto
- definir requisitos minimos de seguranca do formulario
- registrar persistencia e migrations como padrao de execucao

### Pode esperar

- separacao de backend em servico independente
- integracao com n8n
- observabilidade mais sofisticada
- automacoes de campanha

### Prematuro

- microsservicos
- event-driven complexo
- Prometheus e Grafana
- CI/CD completo
- hardening operacional avancado antes da primeira entrega

## Sinais de que esta arquitetura deixaria de ser adequada

- crescimento rapido de integracoes externas e workflows assincronos
- necessidade de painel administrativo mais complexo
- aumento relevante de trafego ou de processamento no backend
- regras de negocio do lead management ficando independentes do site
- necessidade de equipes separadas trabalhando em frontend e backend

## Proximos passos

- confirmar as decisoes em aberto que afetam o planejamento tecnico
- levar esta recomendacao e os ADRs para o Prompt 2
- detalhar estrutura de projeto, modulos, persistencia e execucao apenas na etapa de planejamento tecnico

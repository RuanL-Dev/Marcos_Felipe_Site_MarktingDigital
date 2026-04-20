# Marcos_Felipe_Site

## Resumo executivo

O projeto consiste na criacao de uma aplicacao web institucional e comercial para fortalecer a presenca digital de Marcos Felipe, apresentar seus servicos com qualidade visual profissional e converter visitantes em contatos comerciais. A primeira versao deve priorizar impacto visual, clareza de proposta de valor, navegacao simples, portfolio enxuto com alta qualidade percebida e CTAs recorrentes para WhatsApp Business e Instagram.

O escopo inicial nao inclui automacoes com IA, integracao completa com n8n, CI/CD completo, observabilidade avancada nem infraestrutura dedicada. O trabalho deve seguir abordagem incremental, auditavel e sem overengineering, respeitando prazo de 30 dias, orcamento limitado e a realidade de execucao por um unico desenvolvedor com apoio de IA.

## Contexto do problema

Marcos Felipe ainda nao possui uma presenca digital suficientemente forte e estruturada para apresentar seus servicos de forma profissional, transmitir confianca rapida e converter visitantes em novos contatos. A divulgacao atual depende de canais menos estruturados, o que reduz alcance, percepcao de valor e potencial de captacao.

## Objetivo do projeto

- aumentar a divulgacao dos servicos
- reforcar credibilidade e percepcao profissional da marca
- apresentar poucos trabalhos fortes com boa curadoria
- direcionar visitantes para CTAs claros
- ampliar a geracao de contatos qualificados

## Escopo inicial

### Incluido

- site institucional responsivo
- hero com impacto visual e proposta de valor clara
- secao de servicos com tres frentes principais
- portfolio com poucos cases fortes
- secao sobre com historia e autoridade
- depoimentos ou provas sociais
- navegacao clara entre secoes
- CTA recorrente para WhatsApp Business e Instagram
- identidade visual consistente

### Confirmado para a primeira versao

- formulario simples de captura de leads ao fim da pagina
- campos de nome, sobrenome, email e telefone
- persistencia desses dados em API com banco PostgreSQL

### Desejavel, mas nao confirmado para a primeira versao

- preparacao para integracao futura com n8n

### Fora do escopo inicial

- automacao com IA via WhatsApp
- integracao completa com n8n
- observabilidade avancada
- CI/CD completo
- arquitetura distribuida
- infraestrutura dedicada separada da VPS atual

## Decisoes confirmadas

- O projeto esta em fase de descoberta e enquadramento estrategico.
- O foco inicial e negocio, produto e restricoes, nao arquitetura detalhada.
- A conducao deve ser incremental, auditavel e pragmatica.
- Seguranca deve ser considerada desde o inicio.
- AIOX e a base estrutural de organizacao do projeto.
- Context7 e a fonte prioritaria para documentacao tecnica quando necessario.
- O site de referencia `https://andreaguimaraes.com.br/` sera usado como inspiracao de linguagem e impacto visual, nao como modelo rigido.
- O prazo inicial e de 30 dias.
- O orcamento e limitado.
- A hospedagem inicial sera em VPS Hostinger ja existente, usando porta especifica sem impactar servicos atuais.
- O sistema tem criticidade media e deve tratar dados de contato com responsabilidade e aderencia pratica a LGPD, se houver coleta.
- A V1 tera formulario proprio de captura de leads com armazenamento em API e PostgreSQL.
- O CTA principal sera WhatsApp Business, seguido por Instagram.
- A pagina deve apresentar os tres servicos nesta ordem de destaque: decoracao de eventos, material grafico e design grafico.
- O formulario de captacao deve aparecer ao fim da pagina.
- Os materiais disponiveis ficam na pasta `./ImagensRelevantes` e devem ser avaliados para uso no site conforme disponibilidade.

## Hipoteses vigentes

- A primeira versao pode ser entregue com foco predominantemente institucional e comercial, sem necessidade de alta complexidade operacional.
- O principal indicador de sucesso inicial sera conversao em contato, nao volume de funcionalidades.
- O portfolio inicial devera trabalhar com curadoria de aproximadamente 5 a 10 casos fortes.
- WhatsApp Business sera o CTA principal e Instagram sera canal complementar.
- O backend pode ser minimo ou ate desnecessario na V1, dependendo da necessidade real de formulario e persistencia.
- A qualidade dos ativos visuais e do texto comercial influenciara mais o resultado do que sofisticacao tecnica nesta etapa.
- A escala inicial sera baixa a moderada, sem justificativa atual para arquitetura complexa.
- As tres frentes de servico terao presenca clara, mas a hierarquia de exibicao seguira a ordem definida pelo cliente.

## Restricoes

- prazo curto
- orcamento enxuto
- um unico desenvolvedor
- dependencia de IA como apoio de produtividade
- deploy em VPS compartilhada com outros servicos
- necessidade de porta especifica sem interferencia operacional
- dependencia de portfolio, imagens, depoimentos, textos e identidade visual reais
- necessidade de armazenar dados pessoais de contato com cuidado pratico de LGPD

## Riscos priorizados

1. Escopo acima do necessario para prazo e orcamento.
2. Definir stack ou arquitetura maior que a necessidade real da V1.
3. Falta ou atraso de materiais reais de portfolio, depoimentos e identidade visual.
4. Qualidade insuficiente ou baixa organizacao dos materiais em `./ImagensRelevantes` prejudicar a consistencia visual da V1.
5. Baixa clareza sobre proposta de valor principal enfraquecer hero, copy e conversao.
6. Restricoes da VPS compartilhada influenciarem deploy futuro e desenho operacional.
7. Coleta de dados pessoais sem fluxo enxuto e transparente gerar risco de conformidade e manutencao.

## Pendencias que realmente impactam a proxima etapa

- validar a proposta de valor principal que deve aparecer imediatamente na home
- confirmar disponibilidade, organizacao e qualidade dos materiais de portfolio, depoimentos e identidade visual
- definir requisitos minimos do formulario e da API sob perspectiva de LGPD, consentimento e uso futuro em campanhas
- confirmar destinos exatos dos CTAs oficiais de WhatsApp Business e Instagram

## Criterios para a futura decisao arquitetural

- prazo de entrega em 30 dias
- custo total de implementacao e manutencao
- simplicidade operacional para um unico desenvolvedor
- produtividade da equipe real disponivel
- seguranca pratica e minimizacao de superficie de ataque
- facilidade de manutencao e evolucao futura
- reversibilidade de decisoes caso a V1 precise mudar rapido
- aderencia ao escopo real, evitando backend e infraestrutura acima do necessario
- compatibilidade com deploy simples em VPS com Docker
- tratamento minimo adequado de dados pessoais coletados no formulario

## Proximos passos

- validar pendencias criticas de negocio e escopo
- levar este contexto consolidado para o Prompt 1
- somente depois disso avaliar arquitetura, stack final e fronteiras de implementacao

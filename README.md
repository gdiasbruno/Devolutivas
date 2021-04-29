# "Devolutivas" - Sistema de Devolutiva do Relatório de Monitoramento dos Serviços da Rede de Assistência Social

O sistema de devolutiva retorna os dados de monitoramento dos serviços da Rede de Assistência Social não inclusos nos demais sistemas da SMADS. O objetivo é agilizar a gestão e tomada de decisão dos gestores de parceria presentes nos CRAS e CREAS.

## Sobre o "Devolutivas"

O sistema usa uma arquitetura de micro serviços. O front-end da aplicação usa React.js em TypeScript e o back-end Java SpringBoot. A aplicação consome dados da API do Lime Survey.

## Instalação


### Front-end

 1. `cd frontend`, acessa a pasta
 2. `yarn install` instala as dependências
 3. `yarn build`, para gerar uma versão robusta da aplicação
 3. `serve -s build`, para subir a aplicação na porta 5000 por padrão

### Back-end

 1. `cd backend/target`, acessa a pasta
 3. `java -jar devolutivas_relatorio-0.0.1-SNAPSHOT.jar`, para subir a aplicação na porta 9090 por padrão


---


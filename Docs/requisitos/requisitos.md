# Requisitos
### Funcionais
1. O sistema deverá permitir que o usuário
   pesquise pontos de coleta em Fotaleza
   informando nome ou bairro de localização;
2. O sistema deverá permitir que o usuário
   cadastre novos ecopontos informando
   nome, endereço, bairro e CEP;
3. O sistema deverá integrar-se com a API
   criada para buscar (GET), cadastrar
   (POST) e excluir (DELETE) pontos de coleta
   de lixo;
4. O sistema deverá notificar ao usuário
   sucesso ou erro no cadastro de pontos de
   coleta;
5. O sistema deverá mostrar os pontos de
   localização de cada endereço no mapa
   interativo Leaflet.js através da API pública
   Nominatim.

### Não Funcionais
1. O sistema deverá utilizar o método GET da
   API para buscar informações de pontos de
   coleta no arquivo de formato Json
   (posteriormente, iremos integrá-lo ao
   banco de dados MongoBD) e mostrar para
   o usuário no front-end;
2. O sistema deverá utilizar o método POST
   da API para cadastrar informações dos
   pontos de coleta no arquivo de formato
   Json;
3. O sistema deverá permitir que o
   desenvolvedor utilize o método DELETE da
   API para excluir informações do arquivo
   Json sempre que necessário;
4. O sistema deverá ser desenvolvido de
   forma simples e intuitiva para que o um
   usuário novo possa utiliza-lo sem
   necessidade de ajuda;
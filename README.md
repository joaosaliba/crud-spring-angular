## Intruções de uso
   - Na raiz do projeto iniciando um docker com postgres
   ```
   dokcer-compose up -d 
   ```
   - Acesse pasta back e rode
    ```
    mvn clean package 
    ```

    - em seguida 
    ```
    mvn spring-boot:run
    ```
    - volte uma pasta e acesse o front
      ```npm install```
      - depois 
      ``` ng server```
## Ferramentas e Tecnologias
  - Backend: Java 11+ com Spring Boot 2+
  - Frontend: Angular 16+
  - Banco de Dados: PostgreSQL.
  - Docker para configuração do ambiente de projeto.
  - Ferramentas de interação com mapas:  TOM TOM SDK
  - Documentar a API : Swagger.
      - <http://localhost:8080/swagger-ui.html#>

## Requisitos Funcionais:

1. **Cadastro de Clientes:**
   - O sistema deve permitir o cadastro de clientes com as informações obrigatórias: Nome, CNPJ e Endereço..
     - Campos obrigatórios para cadastro: Nome, CNPJ e Endereço.
   - O endereço do cliente deve incluir coordenadas geográficas (latitude e longitude).
   - Um cliente só pode ser cadastrado se todas as informações obrigatórias estiverem preenchidas.

2. **Consulta de Clientes:**
   - Possibilidade de buscar e exibir a lista de todos os clientes cadastrados.
   - A consulta pode incluir filtros, como nome do cliente, CNPJ e localização.

3. **Edição de Clientes:**
   - O sistema deve permitir a edição dos dados de clientes existentes.
   - Dados editáveis: Nome, CNPJ e Endereço.

4. **Exclusão de Clientes:**
   - Opção de exclusão de um cliente da base de dados.

5. **Exibição de Clientes em Mapa:**
    - O sistema deve exibir os clientes em um mapa, utilizando suas coordenadas geográficas para plotar a localização no mapa.

## Requisitos Não Funcionais:

1. **Usabilidade:**
   - Interface intuitiva e de fácil utilização.

2. **Segurança:**
   - Controle de acesso por autenticação.
  
3. **Confiabilidade:**

   - O sistema deve ser confiável e minimizar o risco de perda de dados.



## Regras de Negócio:

1. Um cliente só pode ser cadastrado se possuir Nome, CNPJ e endereço com coordenadas.

   

## Plano de Testes:

1. **Cadastro de Clientes:**
   - Testar cadastro com informações corretas.
   - Testar cadastro sem informações obrigatórias.
   - Testar cadastro com informações inválidas.

2. **Consulta de Clientes:**
   - Testar busca por clientes cadastrados.
   - Verificar se informações exibidas na consulta estão corretas.

3. **Edição de Clientes:**
   - Testar edição das informações de um cliente.
   - Verificar atualização correta na base de dados.

4. **Exclusão de Clientes:**
   - Testar exclusão de um cliente.
   - Verificar remoção da base de dados.

6. **Validações:**
   - Testar autenticação para acesso seguro.

7. **Segurança:**
   - Testar autenticação para acesso autorizado.

## Modelagem de Dados:
**Cliente**:
  - ID
  - Nome
  - CNPJ
  - Endereço (ID ,Latitude, Longitude)



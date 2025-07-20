# TODO - Implementação do Sistema de Funcionários

## Análise do Sistema Atual
- ✅ Sistema React com Firebase (coleções: players, historias)
- ✅ Categorias de atletas: Sub20, Sub17, Sub16, Sub15, Sub14
- ✅ Painel administrativo para gerenciar jogadores e histórias
- ✅ Tela de boas-vindas com botões "Ver Atletas" e "Painel Admin"

## Mudanças Necessárias

### 1. Estrutura de Dados Firebase
- ✅ Criar nova coleção "funcionarios" no Firebase
- ✅ Definir schema para funcionários com campos específicos
- ✅ Manter compatibilidade com sistema existente

### 2. Modificações na Tela de Boas-Vindas (LoggedInWelcome.jsx)
- ✅ Alterar texto: "Você agora tem acesso ao sistema de gestão do alojamento. Aqui você pode visualizar informações detalhadas dos atletas alojados e do Magic Team do alojamento."
- ✅ Adicionar botão "Ver MagicTeam" que leva ao painel dos funcionários
- ✅ Manter layout e estilo visual existente

### 3. Novo Sistema de Funcionários
- ✅ Criar componente EmployeeGrid (similar ao PlayerGrid)
- ✅ Criar componente EmployeeCard (similar ao PlayerCard)
- ✅ Criar componente EmployeeModal (similar ao PlayerModal)
- ✅ Criar componente EmployeeForm (baseado no PlayerForm)

### 4. Painel Administrativo - Funcionários
- ✅ Adicionar botão "Cadastrar Funcionários" no painel admin
- ✅ Criar aba/seção para gerenciar funcionários
- ✅ Implementar CRUD completo para funcionários

### 5. Formulário de Cadastro de Funcionários
Baseado no PlayerForm, com as seguintes modificações:

#### Cabeçalho
- ✅ Trocar "Adicionar Jogador" por "Adicionar Funcionário"

#### Seção Foto
- ✅ "Foto do Jogador" → "Foto do Funcionário"
- ✅ Manter campo "Nome da Foto" igual

#### Seção Dados Pessoais
- ✅ Manter "Nome Completo" igual
- ✅ Manter outros campos iguais

#### Seção Dados Esportivos → Dados Profissionais
- ✅ "Posição" → "Função" (menu suspenso: Monitor, Assistente Social, Pedagoga)
- ✅ "Categoria" → "Matrícula" (campo obrigatório de texto)

#### Seção Dados Acadêmicos
- ✅ "Escola" → "Escolaridade" (menu suspenso: Ensino Fundamental, Ensino Médio, Curso Técnico, Superior Incompleto, Superior Completo, MBA, Mestrado, Doutorado)
- ✅ "Ano que estuda" → Campo a definir (aguardando decisão)

#### Seção Dados do Alojamento → Dados Hospitalares
- ✅ "Admissão no Alojamento" → "Possui Plano Hospitalar" (menu: Unimed, Outros + campo texto)
- ✅ "Quarto" → "Fator RH e Tipo Sanguíneo" (menu suspenso com todas opções)

#### Seção Observações Médicas
- ✅ Manter igual

#### Seção Contato dos Responsáveis → Contato de Emergência
- ✅ "Nome do Responsável" → "Nome"
- ✅ Manter "Telefone" igual

### 6. Visualização de Funcionários
- ✅ Criar página similar aos atletas com categorias: Monitores, Assistentes Sociais, Pedagogia
- ✅ Manter mesmo layout visual dos detalhes dos atletas
- ✅ Implementar abas "Detalhes" e "Minha História" para funcionários

### 7. Navegação e Roteamento
- ⚠️ Adicionar rota para visualização de funcionários (pendente - requer implementação de navegação completa)
- ⚠️ Implementar navegação entre atletas e funcionários (pendente)
- ✅ Manter estado de autenticação

### 8. Serviços Firebase
- ✅ Criar employeesService similar ao playersService
- ✅ Implementar CRUD para funcionários
- ✅ Manter compatibilidade com sistema existente

### 9. Hooks e Utilitários
- ✅ Criar useEmployees hook similar ao usePlayers
- ✅ Adaptar utilitários existentes para funcionários

### 10. Testes e Validação
- ⚠️ Testar cadastro de funcionários (requer configuração Firebase)
- ⚠️ Testar visualização e edição (requer configuração Firebase)
- ✅ Validar responsividade
- ⚠️ Testar integração com Firebase (requer credenciais)

## Considerações Técnicas
- Manter mesma estrutura visual e UX dos atletas
- Reutilizar componentes UI existentes (shadcn/ui)
- Preservar sistema de autenticação atual
- Manter compatibilidade com dados existentes
- Seguir padrões de código do projeto

## Arquivos a Modificar/Criar
- `src/components/LoggedInWelcome.jsx` (modificar)
- `src/components/AdminPanelWithStories.jsx` (modificar)
- `src/components/EmployeeGrid.jsx` (criar)
- `src/components/EmployeeCard.jsx` (criar)
- `src/components/EmployeeModal.jsx` (criar)
- `src/components/EmployeeForm.jsx` (criar)
- `src/services/firebaseService.js` (modificar)
- `src/hooks/useEmployees.js` (criar)
- `src/App.jsx` (modificar para incluir rotas)


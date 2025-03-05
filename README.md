Olá, tudo bem? Vamos entender o que esse projeto faz.

Implementei um filtro de pesquisa em tempo real, ou seja, esse recurso atualiza os itens exibidos conforme o usuário digita e mostra todos os itens novamente se o filtro de pesquisa estiver vazio.
Reformulei o código para tornar os componentes reutilizáveis. Até a chamada de API foi refatorada em um hook personalizado.

Todos os dados são mostrados em uma tabela responsiva!

Pode testar em diferentes dispositivos!

Dificuldades:
Eu tive dificuldades na hora de aplicar responsividade na tabela. Depois de um tempo errando, resolvi criar uma versão desktop e uma mobile, pois acredito ser a maneira mais correta.

Deploy na vercel: https://filtro-de-pesquisa.vercel.app/

# Corebiz Store

**link de acesso** - https://61468ec00f691d1bfc38a557--cranky-snyder-b22124.netlify.app/

## Sobre o projeto 📖
Aplicação feita com as seguintes tecnologias:
- React
- Styles-components

## Configurações 🛠
**Como rodar o projeto?**

Para iniciar o app rode:
```
yarn start
```
Para buildar ele rode:
```
yarn build
```

Bug Fix
[x] - Bug ao remover o item no minicart, ele não esta surtindo efeito na atualização e acaba que nao seta o novo valor no localSotrage, ver em `/src/contexts/Minicart.js linha 23 no useEffect`;
    Solução: foi criado outro `useEffect` aparte para monitorar a atualização do state e setar o novo valor no localStorage

[x] - Ao adicionar 2 produtos iguais no minicart, quando é removido um ele remove todos do mesmo tipo. 
    Solução: na chamada da função de remover, passei a posição do meu array
    
[x] - Adicionar valor total no minicart.
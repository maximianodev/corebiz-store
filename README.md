# Corebiz Store

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
[] - Bug ao remover o item no minicart, ele não esta surtindo efeito na atualização e acaba que nao seta o novo valor no localSotrage, ver em `/src/contexts/Minicart.js linha 23 no useEffect`;
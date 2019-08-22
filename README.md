This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Curso do PluralSight
O React tem 3 conceitos essênciais para serem compreendidos. 
Components. O react descreve interfaces usando components. Podemos pensar em components como functions. E geralmente
com function temos entradas e produz a saída. Podemos reusar functions por exemplo. React Components são a mesma coisa.
Eles recebem certos objetos de entrada, e elas produzem como saída uma descrição de uma interface de usuário. Podemos 
usar uma único componente em múltiplas interfaces, e componentes podem conter outros componentes. Não vamos invocar um 
componente React como invocamos Functions. Vamos apenas usar o componente como se fosse um elemento html fazendo algo 
assim: `<Component />`. Um Component React pode manter estados privados, para manter dados que podem mudar durante o ciclo
de vida de componentes. E o Component React são reativos. Quando o estado de um componente React, a entrada, muda, a interface
que ele representa, a saída, muda também. Essa mudança na descrição da interface tem que ser refletida no dispositivos em 
que estamos trabalhando. No navegador, nós necessitamos, renderizar novamente o HTML na árvore DOM. Com react nós não temos que 
nos preocupar com essas coisas. o REACT irá simplesmente REAGIR às mudanças no estado do componente e automaticamente 
atualizar parte do DOM que necessita ser atualizada. 
Com React temos a representação virtual em memória. Para construir nossa interface usando React, não escrevemos HTML puro.
Nós usamos JavaScript para gerar HTML. O react mantém e usar uma representação virtual do html em memória, o que é conhecido 
como VIRTUAL DOM ou tree reconciliation. O React usar o VD para comparar versões do UI em memória, antes de agir sobre ele.

Um componente React pode ser de dois tipos. Function Component e Class Component. O instrutor disse que era preferível usar 
function component do que class component porque as function são mais simples de se usar. Class component são mais 
poderosos. FC e CC usam props e state como suas entradas, e elas produzem o que parece um html , mas na realidade é um 
JavaScript especial que possue a sintaxe JSX. Props é similar a uma lista de atributos que um elemento HTML pode ter.
O interessante no state é como o react usa ele para refletir mudanças automáticas no navegador. 
Esses dois tipos de entrada tem uma diferença importante. Dentro de um componente o objeto state pode ser alterado, enquanto 
o objeto props representa valores fixos. Props são imutáveis, componentes podem apenas mudar seu estado interno, não suas 
propriedades. Essa é a ideia central para endenter React. Veja essa [imagem](https://drive.google.com/open?id=1fmdG2xYjCLQXbisj8AlVUXHTYuWK_-n2)

O JSX tem uma sintaxe parecida com HTML mas não é html. Temos nessa [imagem](https://drive.google.com/open?id=1hRhSnAotbCsov7RRViSoXR96tbQbdWkX)
uma class component, sem entrada, assim nenhuma props ou states, e com um simples elemento h1 e uma div. E na imagem a direita
temos a sintaxe usanda com JSX.  

## Exemplo básico
O trecho do código abaixo foi inserido em um ambiente onde o React está configurado. 
```
function Hello(){
    return <div>Hello React!</div>
}
ReactDOM.render(
    <Hello />,
    document.getElementById('mountNode')
);
```
Quando esse código é executado recebemos de volta um Hello React!. Temos aqui uma Function Component, que retorna uma div
e não tem nenhuma entrada. É um componente puro, com nenhum estado. Para mostrar esse componente no navegador, necessitamos 
instruir a biblioteca ReactDOM em como fazer isso. E a function feita para fazer isso chama ReactDOM.render(). Que recebe 
dois argumentos. O primeiro é o componente em si, e o segundo é onde o React irá inserir esse componente. E o entry point 
lá no HTML que já foi renderizado no navegador. 
Mas repare na function Hello(). Como pode ela não retornar nenhum erro visto que está retornando algo que podemos 
pensar ser impossível usando JS ? Olhado rigorozamente, isso não é um JavaScript. Isso não vai gerar error por causa 
do JSX uma extensão JavaScript. A linha onde começa a div NÃO É HTML. É JSX. Não será executado pelo navegador. Ele será
executado pela extensão JSX e compilado para algo, algo que o navegador compreende. Tem um compilador que chama Babel
onde podemos ver como funciona essa coisa que parece HTML mas não é. Veja essa 
[imagem](https://drive.google.com/open?id=1h7Sh83xqsIiRqeO4J-oFNW8EV8dDlfWe). 
Portanto o que está acontecendo aqui é isso:
```
function Hello(){
    //return <div>Hello React!</div>//Aqui estamos suando JSX
    return React.createElement('div', null, 'Hello React!!!');
}
ReactDOM.render(
    //<Hello />;// aqui estamos usando JSX
    React.createElement(Hello, null); //equivalente a linha de cima 
    document.getElementById('mountNode')
);
```
Lembrar que componente React sempre começam com a primeiro letra maiuscula. 

## React Hook
O seguinte código renderiza um botão sem estado
```
function Button() {
    return <button> Test </button>
}
ReactDOM.render(
    <Button />
    document.getElementById('mountNode')
);
```
Vamos fazer esse botão incrementar um contator a cada vez que ele for clicado. Nós necessitamos de um **State Object**.
Para usar, o React tem uma function especial chamada useState(). Essa function vai retornar dois itens:
1. state object (getter)
2. updater function (setter)

O state object pode ser de qualquer tipo que eu desejar. String, number, array etc. Nesse exemplo, ele vai ser um number.
No nosso caso vamos nomear esse objeto de counter. E a update function vai ser setCounter. A functio useState vai retornar 
uma array com exatamente os dois elementos que quermos. Vaos usar destructuring aqui. Inicialmente vai ficar assim:
```
function Button() {
    const [counter, setCounter] = useState();
    return <button> Test </button>
}
ReactDOM.render(
    <Button />
    document.getElementById('mountNode')
);
```
O argumento do useState é o valor inicial para o state element counter em nosso caso. Uma vez que counter vai ser um número,
ele pode ser qualquer cosia, vamos setar para 0. E observe que vamos usar a notação {} para inserir expressões JS dentro. 
Isso é coisa do JSX. Assim vamos colocar counter dentro do button assim:
```
function Button() {
    const [counter, setCounter] = useState(0);
    return <button> {counter} </button>
}
ReactDOM.render(
    <Button />
    document.getElementById('mountNode')
);
```
Para usar a function setCounter vamos manusear uma event handler, nesse caso onClick. E esse onClick é difrente daquele
que usamos na API do DOM, ele vai receber uma referência à uma function. E sempre vamos fazer essa referência dentro 
de {}. E não vamos invocar essa function com (), porque se não, não vai funcionar. Não fazemos assim: `onClick={functionRef()}`.
Mas podemos colocar a function dentro do {} inline também. Por exemplo, fazemos assim:
```
function Button() {
    const [counter, setCounter] = useState(0);
    return <button onClick={() => console.log(Math.random())}> {counter} </button>
}
ReactDOM.render(
    <Button />
    document.getElementById('mountNode')
);
```
Observe que usamos uma arrow function inline e não invocamos ela, passamos ela inline. Agora temos que usar a function
setCounter. Assim ao invez que far um console.log() alí dentro, vou usar setCounter(), fazendo assim:
```
function Button() {
    const [counter, setCounter] = useState(0);
    return <button onClick={() => setCounter(counter++)}> {counter} </button>
}
ReactDOM.render(
    <Button />
    document.getElementById('mountNode')
);
```
 Esta useState function é chamada de Hook no mundo react. É similar ao mixin ou module, mas ela é stateful que hooks 
 este componente simples em um state. **O que devemos notar disso é que o reflexo do novo valor de counter no navegador 
 foi feito sem fazer quase nada, nós apenas gerenciamos o state do counter value. React está automaticamente atualizando
 o navegador para nós graças à sua natureza reativa**. 
 
 Com esse exemplo nós introduzimos o useState React Hook para gerenciar o counter. Observe como nos retorna. Usamo 
 a declaração assim `return ()` e NÃO USAMOS assim `return {}`, visto que não estamos retornando um objeto aqui, nós estamos
 retornando uma function call. Relembre que e uma chamada para React.createElement. Vamos também criar uma oficial click
 handler function. Essa nova function tem que ser definida dentro do componente button porque ela necessita a variável 
 counter e a setCounter. Podemos usar qualquer nome, mas a comunidade usa handleClick. E depois lá onClick nós passamos 
 apenas uma referência para handleClick:
 ```
 function Button() {
     const [counter, setCounter] = useState(0);
     const handleClick = () => setCounter(counter+1)
     return <button onClick={handleClick}> {counter} </button>
 }
 ReactDOM.render(
     <Button />
     document.getElementById('mountNode')
 );
 ```
Até agora temos apenas um componente. Vamos adicionar mais. Vamos adicionar um componente Display, que vai apenas mostrar 
o valor do counter. Esse novo Display component vai ser uma apresetasão. Ele não vai ter um estado. Nem todo componente 
React tem um estado ou estateful hook. E observe que não podemos renderizar o outro componente fazendo apenas assim:
```
<Buttom \> <Display \>,
document.getElementById('mountNode')
```
Essa abordagem não funciona porque cada um dos elementos ficam translated in a function call. Mas podemos arrumar isso. 
Primeiro podemos render uma array de elements e insert nessa array quantos elementos a gente quiser. Essa é uma solução 
válida para quando todos os elementos que serão renderizados estão vindo do mesmo componente em um maneira dinâmica.
```
[<Buttom \>,<Display \>],
document.getElementById('mountNode')
```
Mas no nosso caso, isso não é o ideal. A outra opção é fazer esses dois elementos React filho de outros React Element. 
Vamos colocar uma div alí, observe:
```
<div>
    <Button />
    <Display />
</div>,
document.getElementById('mountNode')
```
O React API suporta isso. De fato React tem um objeto espcial, se necessitarmos enclose múltiplos elementos como este, sem 
introduzir um novo div parent, podemos usar <React.Fragment>:
```
<React.Fragment>
    <Button />
    <Display />
</React.Fragment>,
document.getElementById('mountNode')
```
Essa abordagem é a mesma que usando <div>. Mas nenhum novo DOM parent será introduzido. Mas esse caso é tão comum 
que o JSX adicionou um atalho para ele, podemos deixar apenas assim <>:
```
<>
    <Button />
    <Display />
<>,
document.getElementById('mountNode')
```
Mas o instrutor manter a tag <div>, veja como ficou:
 ```
 function Button() {
     const [counter, setCounter] = useState(0);
     const handleClick = () => setCounter(counter+1)
     return (
    <button onClick={handleClick}> 
        {counter} 
    </button>
    );

    function Display(){
    return(
    <div>..</div>
     );
    };
 }
 ReactDOM.render(
    <div>
    <Button />
    <Display />
    </div>,
     document.getElementById('mountNode')
 );
 ```
Mas para deixar essa parte melhor ainda, devemos criar um outro componente, e a comunidade geralmente cria App.js.
 No meu projeto tá assim. Mas fica algo assim:
  ```
  function Button() {
      const [counter, setCounter] = useState(0);
      const handleClick = () => setCounter(counter+1)
      return (
     <button onClick={handleClick}> 
         {counter} 
     </button>
     );
     function Display(){
     return(
     <div>..</div>
      );
     };
  function App(){
   return (
        <div>
        <Button />
        <Display />
        </div>
    );

    }
  }
  ReactDOM.render(
       <App />,
      document.getElementById('mountNode')
  );
  ```
E observe que como agora temos um novo Component para mostrar o valor do counter na página, já não precisamos mais usar
counter como um label para o button. Vou apenas colocar alí + 1:
  ```
  function Button() {
      const [counter, setCounter] = useState(0);
      const handleClick = () => setCounter(counter+1)
      return (
     <button onClick={handleClick}> 
         + 1
     </button>
     );
};
function Display(){
     return(
     <div>..</div>
      );
     };
function App(){
   return (
        <div>
        <Button />
        <Display />
        </div>
    );
    };
  ReactDOM.render(
       <App />,
      document.getElementById('mountNode')
  );
  ```
Mas temos ainda algums problemas a resolver. O primeiro problema é que o counter é um elemento de estado no componente Button
e precisamos acessar ele no component Display, que é irmao do componente Button na atual arvore. Assim desse jeito isso 
não vai funcionar. O state em um component React pode ser acessado apenas por esse componente, bottom, e nenhum outro.
Para fazer esse Counter State acessível para os componentes irmãos também, devemos colocar ele no componente App, que no 
nosso caso será o componente App.js. E depois que fazermos isso, a lógica do handleClick irá alterar, mas agora vamos 
comentar ele:
  ```
  function Button() {
      const handleClick = () => setCounter(counter+1)
      return (
     <button onClick={handleClick}> 
         + 1
     </button>
     );
};
function Display(){
     return(
     <div>..</div>
      );
     };
function App(){
const [counter, setCounter] = useState(0);
   return (
        <div>
        <Button />
        <Display />
        </div>
    );
    };
  ReactDOM.render(
       <App />,
      document.getElementById('mountNode')
  );
  ```
Agora que temos o counter state element dentro do component App que é o pai do Display Component, nós podemos deixar fluir
alguns dados desse elemento pai para os elementos filhos. E nesse caso nós devemos deixar fluir o valor do counter state 
no component display, o que nos leva aos props object. Para passar um Prop à um component, vc especifica um atributo , 
como em um html. Podemos colocar qualquer nome que quisermos, por exemplo nesse exemplo, vou usar uma Prop e nomear ela 
mesage, e seu valor dessa mesage é a variável counter que vai vir do useState Hook. Vai ficar assim `<Display message={counter}\>`.
Dessa forma, o component Display pode agora usar seu prop object, que é o argumento para a function aqui, e usualmente é nomeado 
de props. Não precisamos usar esse nome, mas essa é a convenção. Toda function component, recebe esse objeto, mesmo quando eles 
não tem atributos. Assum o component Buttom recebe o objeto props, e esse objeto até agora está vazio. 
Por cause que um component pode receber muitos atributos, esse objet props terá um key-value par para cada atributo. Isso significa 
acessar o message prop e colocar seu valor dentro do display div em que nós fazemos assim: `<div>{props.message}</div>`. 
No component App uma vez que o counter state está aqui agora, nós necessitamos uma function neste level, para manusear a 
atualização desse state. Vamos nomear essa function de incrementCounter. A lógica é a mesma da function handleClick, fazemos 
assim: `const incrementCounter = () => setCounter(counter +1);`
Essa nova function vai atualizar o App component counter state para incrementar o valor do counter. O onclick handler no 
Button component agora mudou, porque nós queremos executar o incrementCounter function que está no App component, mas um 
component pode apenas acessar seus próprios functions. Assim para fazer o Button ser capaz de invocar incrementCounter function
que está no App component, podemos passar uma referença para incrementCounter para o Buttom compomente como uma prop. 
O objeto prop pode manter function também. Não apenas dados. Podemos fazer assim, atribuir essa function ao onClickFunction
`<Button onClickFunction={incrementCounter}/>`. E lá em cima no button podemos acessar assim: `<Button onClick={props.onclickFunction}>`
Observe como fica o código aqui:
  ```
  function Button(props) {
      //const handleClick = () => setCounter(counter+1)
      return (
     <button onClick={props.onClickFunction}> 
         + 1
     </button>
     );
};
function Display(props){
     return(
     <div>{props.message}</div>
      );
     };
function App(){
const [counter, setCounter] = useState(42);
const incrementCounter = () => setCounter(counter+1);
   return (
        <div>
        <Button onClickFunction={incrementCounter} />
        <Display message={counter} />
        </div>
    );
    };
  ReactDOM.render(
       <App />,
      document.getElementById('mountNode')
  );
  ```
### Component Reusability
Nesse exemplo vamos fazer o component mais genérico possível. Vamos assumir que podemos passar um increment value, e o 
componente Button irá usar esse valor. Assim vamos criar um +1 button, +5 button, +10 button e +100 button. 
Vamos renomear o atributo e colcoar ele como increment, e o valor que necessitamos passar é um número. Vamos passa uma 
property para o component, a quantidade de incremento. Assim nos iremos passar ele de pai para filho, vamos nomear esse 
nosso atributo de increment. Uma vez que esse valor não é uma String, vamos usar o {} para passar ele:
```
<Button onClickFunction={incrementCounter} increment={1} />
<Button onClickFunction={incrementCounter} increment={5} />
<Button onClickFunction={incrementCounter} increment={10} />
<Button onClickFunction={incrementCounter} increment={100} />
```
Nesse caso o component Button irá ver e trabalhar com esse valor como uma String, assim não devemos fazer algo assim. Mas
foi mantido assim porque estamos aprendendo. E para usar essse novo prop, increment, podemos apenas acessar ele como uma props
fazendo assim:
```
 <button onClick={handleClick}>
 +{props.increment}
 </button>
```
Agora devemos fazer com que ao clicar no botão seja incrementado o valor. A function incrementCounter, agora necessita 
receber um incrementValue, e nós podemos usar argument pra fazer isso. 
```
  const incrementCounter = (incrementValue) => setCounter(counter +incrementValue);
```
Assim o incrementCounter está fazendo alias com onClickFunction, assim o componente Button necessita invocar o onClickFunction
com um argumento, que é o proprio incrementValue, e isso pode se acessando usando `props.increment`, mas lembramos que agora 
temos que fazer uma invocação e não apenas uma referência, e novamente vamos criar uma handleClick function. 
```
const handleClick = () => props.onClickFunction(props.increment);
    return (
        <button onClick={handleClick}>
            +{props.increment}
        </button>
```

### Tree Reconciliation in Action (Virtual DOM)
Porque usar JS para gerar HTML. Qual o valor que tenho nisso? O instrutor mostrou um exemplo onde temos dois DOM nodes. 
Um sendo controlado com o DOM nativo usando innerHTML e o outro sendo controlado com o React API. A única diferença entre
os duas maneiras e como vai ser construído estes dois Nodes no navegador. Na versão do HTML usamos uma String para 
representar o conteúdo, enquanto que na versão do React usamos JavaScript onde ele vai a representação dentro de um objeto 
ao invéz de String. O instrutor usou uma function do JS, setInterval() para criar algo UI State de modo que podemos fazer 
stateful change para ambas as versões. Veja a [imagem](https://drive.google.com/open?id=1XwOnRTS4PM9-nNQzNetOKnY0nmwesSUj) inicial.
E para complementar, o instrutor vai adicionar um elemento input. Em HTML puro nós vamos fazer tipo um aninhamento. No React 
usando o React.createElement() nós apenas vamos adicionar um outro argumento na function. E podemos passar uma outra chamada
ao React.createElement(). Veja como ficou [aqui](https://drive.google.com/open?id=10xYX8ZCJkgdc8KUHgJNOttQrRjmJHcMS).
Agora vamos adicionar um outro Node Tree, mas desta vez vai ser o current time. Observe como o instrutor colocou o timer
dentro do html puro. Ele vez assim: `<pre> ${(new Date).toLocaleTimeString()}</pre>`. E no React ele colocou um quinto 
argumento, e de novo vai chamar o React.createElement(). Veja [aqui](https://drive.google.com/open?id=1RJHpbgRxWezgHYQz2H661BLRzeqDIFVs).
A pergunta é: **porque vamos usar uma coisa como react, javascript e tudo, se podemos simplesmente escrever em HTML ?**. A 
resposta não sobre a renderização em si, mas si como vamos fazer a atualização das views no DOM. Vamos fazer uma operação de 
update no DOM, aqui vamos simplesmente fazer o time atualizar a cada segundo. Vamos usar o setInterval um web timer API.
Vamos colocar nossos exemplo dentro de uma function, vamos nomear ela de render(), e vamos usar o setInterval() para invocar 
essa function, a cada segundo. Observe que o timo vai ficar mudando. Observe essa [imagem](https://drive.google.com/open?id=1ZnmOux3pcix1PZjhtfLEppTdByPEmydP).
Com isso estamos **estamos atualizando nosssa web interface no DOM**. Agora é que o React entra. Se tentarmos digitar alguma coisa 
na input que colocamos, primeiro vamos tentar na versão do HTML, **não seremos capaz de fazer**. E isso é esperado 
porque estamos basicamente jogando fora o node DOM inteiro a cada segundo que o timer atualiza e depois e regenerado. Enquanto 
que no REACT podemos fazer normalmente. Veja essa [imagem](https://drive.google.com/open?id=1Rx3cj-rdoPOM2j1hzSBF13kSvoxTQjjk). 
O React está atualizando apenas o timestamp text e não o DOM Node inteiro. Isso é porque o HTML inteiro não é regenerado a cada vez
e podemos digitar um texto alí normalmente. É só abrir o DevTools do chrome e notar que ele sinaliza os elementos que estão sendo 
atualizados.  Isso é por causa do Smart Diffing algorithmo do React em ação. Ele apenas regenere no DOM Tree só o que 
precisa ser regenerado, enquanto mantém o resto. Isso é possível porcausa do Virtual DOM do react e o fato nós temos uma 
representação da interface em memória por causa do JS. Ou seja, o React vai comparar a nova interface com a que existe na 
memória, a atualizar apenas o que foi alterado, no caso somente o timer. 
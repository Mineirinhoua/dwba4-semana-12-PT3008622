class Ads extends React.Component {
  render(){
    return (
      <div class="tads">
      <h2>Tecnologia em Análise e Desenvolvimento de Sistemas</h2><p><i>Objetivo geral:</i></p><p>O curso de Análise e Desenvolvimento de Sistemas do Câmpus São Paulo Pirituba tem como objetivo capacitar o egresso a atuar na área de Tecnologia de Informação (TI) em atividades como análise, projeto, desenvolvimento, gerenciamento e implantação de sistemas de informação computacionais. Essa capacitação é pautada pela valorização da prática e competências técnicas, tanto em análise quanto em desenvolvimento e pela atualização diante da realidade tecnológica, de modo que o profissional seja um mediador competente entre o desenvolvimento tecnológico e a sociedade em que se insere.</p>
      </div>
    );
  }
}

class Tit extends React.Component {
  render(){
    return(
      <div class="titulo">
        <h2>Componentes curriculares</h2>
      </div>
    )
  }
}

class Tabcomp extends React.Component {
  render(){
    return (
    <div class="cc">
    <table>
      <tr>
        <th>DISCIPLINA </th>
        <th>CARGA</th>
        <th>PERÍODO</th>
      </tr>
      <tr>
        <td>Sistemas Operacionais</td>
        <td>66.7</td>
        <td>Noturno</td>
      </tr>
      <tr>
        <td>Inglês</td>
        <td>33.3</td>
        <td>Noturno</td>
       </tr>
       <tr>
          <td>Laboratório de Estruturas de Dados e Programação</td>
          <td>33.3</td>
          <td>Noturno</td>
        </tr>
        <tr>
          <td>Introdução a Banco de Dados</td>
          <td>66.7</td>
          <td>Noturno</td>
        </tr>
     </table>
     </div>
     );
  }
}

ReactDOM.render(<Ads />, document.getElementById('divads'));

ReactDOM.render(<Tit />, document.getElementById('divtitulo'));

ReactDOM.render(<Tabcomp />, document.getElementById('tabelacomp'));




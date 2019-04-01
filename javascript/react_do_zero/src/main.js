let Mybtn = (props) => {
  return (
    <button onClick={props.onClick} >{props.name}</button>
  )
}
let template = <h2>
    TESTE REACT DO ZERO
    <Mybtn name="TESTE  " onClick={() => { alert('ola REACT') }} ></Mybtn>
  </h2>
ReactDOM.render(template, document.querySelector('#app'))
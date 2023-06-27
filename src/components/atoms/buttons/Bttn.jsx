import "./Bttn.css"

function clickMe() {
  alert('Oh! you clicked me!')
}

function Bttn(button) {
  return (
    <div>
      <button onClick={clickMe} className={button.className}>{ button.content }</button>
    </div>
  )
}

export default Bttn
/* eslint-disable react/prop-types */
import './componentsfooter.css'

function Componentsfooter(props) {
  return (
    <div className='columncontainer'>
        <ul className='footerbox'>
        <h2 className= {props.title}>{props.text}</h2> 
            <li className={props.list1}>{props.textList1}</li>
            <li className={props.list2}>{props.textList2}</li>
            <li className={props.list3}>{props.textList3}</li>
            <li className={props.list4}>{props.textList4}</li>
        </ul>
    </div>
  )
}

export default Componentsfooter

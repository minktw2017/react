import '../App.css'


export default function Box(props) {

  const styles = {
    "backgroundColor": props.on ? "#222222" : "transparent"
  }

  return (
    <div className='box flex w-1/3 h-1/3' style={styles} onClick={props.toggle}></div>
  )
}
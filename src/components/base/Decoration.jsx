/* eslint-disable react/no-unknown-property */

const symbols = color => (
  <svg xmlns="http://www.w3.org/2000/svg" width="74" height="19" viewBox="0 0 74 19" fill="none">
    <rect x="35" y="17.4491" width="9.69231" height="9.88483" transform="rotate(-135 35 17.4491)" stroke={color} strokeWidth="2"/>
    <rect x="14.6152" y="19" width="14.6154" height="14.6154" rx="7.30769" transform="rotate(-180 14.6152 19)" fill={color}/>
    <path d="M64.5 19L56.2728 4.75L72.7272 4.75L64.5 19Z" fill={color}/>
  </svg>
) 

const style = {
  symbol_blue: symbols("#2FB0B6"),
  symbol_yellow: symbols("#E4BD00")
} 

function Decoration({type, className}) {
  return (
    <div className={className}>
      {style[type]}
    </div>
  )
}

export default Decoration
import Para from './Components/para';

export default function List({item,color1}){
  return(
    <Para 
          key={item}
          Listitem={item}
          Change={color1}
        />
  )
}
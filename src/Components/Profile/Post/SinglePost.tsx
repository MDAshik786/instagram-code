import ImageField from "../../../CommonField/ImageField"
import Row from "../../../CommonField/RowField"
import img from '../../../Asserts/profile.jpg'

const SinglePost = () => {
  return (
   <Row>
    <ImageField src={img} alt="name"/>
    
   </Row>
  )
}

export default SinglePost
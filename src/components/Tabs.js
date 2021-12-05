
import {User, Plus, Eye} from 'react-feather'
import UserTab from './Tabs/User/User'
import PlusTab from './Tabs/Plus/Plus'
import EyeTab from './Tabs/Eye/Eye'


export default function Tabs(props){
return(
    <div style={tabBar}>

<div style={tabStyle} onClick={()=>props.setTab(UserTab)}>

       <User style={{width:'8vw', height:'auto'}}/>
    </div>
    <div  style={tabStyle} onClick={()=>props.setTab(PlusTab)}>

<Plus style={{width:'8vw', height:'auto'}} />
</div>
<div style={tabStyle}  onClick={()=>props.setTab(EyeTab)}>

<Eye style={{width:'8vw', height:'auto'}}   />
</div>
    
    </div>
)
}


const tabBar = {
    
    width: '100%',
    minHeight: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    // overflow: "visible",
   
    color:'white'
  }

  const tabStyle = {
    boxSizing: "border-box",
  flex: 1,
  width: '100%',
  height: "100%",
  flexShrink: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  overflow: "visible",
 
  }

  
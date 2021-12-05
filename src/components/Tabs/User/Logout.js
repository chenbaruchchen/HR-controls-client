
import useToken from "../../useToken";
export default function Logout(){
return(
    <a onClick={()=>{
        localStorage.clear();
        window.location.reload();

        console.log(1)
    }}>התנתק</a>
)
}
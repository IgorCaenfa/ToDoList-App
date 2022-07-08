import React from "react";


const Header = () => {
    var months = ["January" , "February","March" , "April", "May","June"]
    var days = ["Sunday","monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var d = new Date();

return (
 <div className="Header">
<h1>To Do App</h1>
<h2>{days[d.getDay()]}, {months[d.getMonth()]} {d.getUTCDate() + ', ' + d.getFullYear()}</h2>
 </div>
)
}

export default Header
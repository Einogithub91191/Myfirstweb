let useremail;
document.getElementById("submit").onclick = function()
{
    useremail = document.getElementById("email").value;
    console.log(useremail);
    document.getElementById("hello").innerHTML = "hi "+useremail;
    document.getElementById("hellotesti").innerHTML = "hi "+useremail;

}
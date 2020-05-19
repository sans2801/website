function navbar_responsive()
{	


	x=document.getElementById("navy");

	if(x.className=="normal")

	{	
		x.className="res";

		document.getElementById("logo").className="logores";
		document.getElementById("SignUp").className="SignUpres";
		document.getElementById("Login").className="Loginres";
	}

	else{

		x.className="normal";
		document.getElementById("logo").className="logo";
		document.getElementById("SignUp").className="SignUp";
		document.getElementById("Login").className="Login";
	}

}
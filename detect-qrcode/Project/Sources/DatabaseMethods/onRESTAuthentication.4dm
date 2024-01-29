#DECLARE($user : Text; $password : Text; $isHash : Boolean; $address : Text) : Boolean

Case of 
	: ($address="127.0.0.1")\
		 || (Match regex:C1019("192\\.168\\.\\d+\\.\\d+"; $address))
		
		If ($user="guest")
			return True:C214
		End if 
		
End case 

return False:C215
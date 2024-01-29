Class extends DataStoreImplementation

exposed Function send($value : Text; $origin : Text; $target : Text) : Object
	
	return {success: True:C214; message: "ありがとう"; origin: $origin; target: $target}
	
exposed Function logout() : Boolean
	
	If (Application type:C494=4D Server:K5:6)
		var $activity : Object
		$activity:=Get process activity:C1495(Sessions only:K5:36)
		var $sessions : Collection
		$sessions:=$activity.sessions.query("type == :1 and ID == :2"; "rest"; Session:C1714.id)
		var $session : Object
		$session:=$sessions.length#0 ? $sessions[0] : Null:C1517
		If ($session#Null:C1517)
			DROP REMOTE USER:C1633($session.ID)
			return True:C214
		Else 
			return False:C215
		End if 
	Else 
		return False:C215
	End if 
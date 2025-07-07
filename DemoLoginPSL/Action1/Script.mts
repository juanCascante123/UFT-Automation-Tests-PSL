Browser("Browser_2").Page("Page_3").Image("Cancel-icon").Click
Browser("Browser").Page("Page").WebEdit("txtCedula").Set DataTable.Value("pCedula", dtGlobalSheet)
Browser("Browser_2").Page("Page_3").WebEdit("txtContrasena").SetSecure "1234567"
Browser("Browser_2").Page("Page_3").WebButton("Ingresar").Click
Browser("Browser_2").Page("Page_2").WebEdit("OTP").Set "123456"
Browser("Browser_2").Page("Page_2").WebButton("Verificar").Click @@ script infofile_;_ZIP::ssf24.xml_;_
 @@ script infofile_;_ZIP::ssf25.xml_;_
 @@ hightlight id_;_198484_;_script infofile_;_ZIP::ssf18.xml_;_

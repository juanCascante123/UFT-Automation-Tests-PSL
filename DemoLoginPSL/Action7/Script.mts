Browser("Browser").Page("Page").Image("Cancel-icon").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Page("Page").Link("¿Olvidaste tu contraseña?").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("Page_2").WebButton("Close").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Browser").Page("Page_2").WebEdit("Cedula").Set "504000300" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Browser").Page("Page_2").WebButton("Verificar").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Browser").Page("Page_2").WebEdit("OTP").Set "123456" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page_2").WebButton("Verificar_2").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page_2").WebElement("Recuperación de Contraseña").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Page_2").WebElement("¡Tu contraseña temporal").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Browser").Page("Page_2").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Browser").Page("Page_2").Link("Inicio").Click @@ script infofile_;_ZIP::ssf12.xml_;_

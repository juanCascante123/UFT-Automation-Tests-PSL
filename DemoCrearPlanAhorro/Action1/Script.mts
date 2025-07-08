RunAction "Login [DemoLoginPSL]", oneIteration @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio").Link("Planes de Ahorro").Click @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio").Link("Nuevo_2").Click @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_3").Link("Nuevo").Click @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_3").WebEdit("txtMonto").Set "5000" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_3").WebButton("Verificar").Click
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_3").WebButton("Procesar").Click @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_3").WebButton("Finalizar").Click @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_4").WebElement("Planes de Ahorro").Click @@ script infofile_;_ZIP::ssf21.xml_;_

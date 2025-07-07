RunAction "Login [DemoLoginPSL]", oneIteration
Browser("Plataforma de Servicio").Page("Plataforma de Servicio").WebButton("Configuración").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebCheckBox("TEF_E").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebCheckBox("TEF_APP").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebElement("Transferencias entre fondos").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebEdit("TEF_MM").Set "20000" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebElement("Transferencias entre fondos").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebEdit("TEF_MAX_DBT").Set "5000000" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebElement("Transferencias entre fondos").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebEdit("TEF_MAX_CRD").Set "4000000" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebElement("Transferencias entre fondos").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebEdit("TEF_CAN_DBT").Set "30" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebElement("Transferencias entre fondos").Click @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebEdit("TEF_CAN_CRD").Set "40" @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebList("TEF_LIM").Select "Mensual" @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebEdit("Correo_alternativo").Set "jpruebas@hotmail.com" @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebEdit("Telefono_alternativo").Set "70126035" @@ script infofile_;_ZIP::ssf18.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebCheckBox("acepto").Set "ON" @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebEdit("OTP").Set "123456" @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebButton("Validar").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebElement("msjError").Click @@ script infofile_;_ZIP::ssf25.xml_;_
Browser("Plataforma de Servicio").Page("Plataforma de Servicio_2").WebButton("Volver al Menú").Click @@ script infofile_;_ZIP::ssf26.xml_;_


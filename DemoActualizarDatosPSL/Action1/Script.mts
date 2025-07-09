Browser("Browser").Page("Plataforma de Servicio").WebButton("Actualizar Datos").Click @@ script infofile_;_ZIP::ssf39.xml_;_
Browser("Browser").Page("Plataforma de Servicio_2").WebElement("Email").Click
Browser("Browser").Page("Plataforma de Servicio_2").WebEdit("Email").Set DataTable.Value("pEmail", dtLocalSheet)
Browser("Browser").Page("Plataforma de Servicio_2").WebElement("Validación de OTP").Click
Browser("Browser").Page("Plataforma de Servicio_2").WebEdit("OTP").Set "123456" @@ script infofile_;_ZIP::ssf41.xml_;_
Browser("Browser").Page("Plataforma de Servicio_2").WebButton("Verificar").Click @@ script infofile_;_ZIP::ssf42.xml_;_
Browser("Browser").Page("Plataforma de Servicio_2").WebButton("Aceptar").Click @@ script infofile_;_ZIP::ssf43.xml_;_
If Browser("Browser").Page("Plataforma de Servicio_2").WebElement("Datos actualizados correctamen").Exist(5) Then
    Reporter.ReportEvent micPass, "Validación de mensaje", "Mensaje de confirmación encontrado."
Else
    Reporter.ReportEvent micFail, "Validación de mensaje", "No  encontró el mensaje de confirmación."
End If
 @@ script infofile_;_ZIP::ssf44.xml_;_

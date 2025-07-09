Browser("Advantage Shopping_2").Page("Advantage Shopping").Link("SpeakersCategory").Click @@ hightlight id_;_917700_;_script infofile_;_ZIP::ssf30.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebElement("Bose Soundlink Bluetooth").Click @@ script infofile_;_ZIP::ssf38.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebEdit("quantity").Set "2" @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").Link("ShoppingCart").Click @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebElement("REMOVE").Click @@ script infofile_;_ZIP::ssf23.xml_;_
mensajeEsperado = "Your shopping cart is empty"
mensajeActual = Browser("Advantage Shopping_2").Page("Advantage Shopping").WebElement("Your shopping cart is").GetROProperty("innertext")
If mensajeActual = mensajeEsperado Then
    Reporter.ReportEvent micPass, "Validación de carrito vacío", "El mensaje fue correcto: " & mensajeActual
Else
    Reporter.ReportEvent micFail, "Validación de carrito vacío", "Se esperaba '" & mensajeEsperado & "' pero se obtuvo '" & mensajeActual & "'"
End If @@ script infofile_;_ZIP::ssf24.xml_;_
 @@ script infofile_;_ZIP::ssf11.xml_;_
 @@ script infofile_;_ZIP::ssf12.xml_;_

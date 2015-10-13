<?php
$valor_estado=$_POST['valor_estado'];
switch ($valor_estado) {
	case 1:
		exec('sudo python /var/www/control/py/avanza.py');
		print("a");
		break;
	case 2:
		exec('sudo python /var/www/control/py/izquierda.py');
		print("b");
		break;
	case 3:
		exec('sudo python /var/www/control/py/derecha.py');
		print("c");
		break;
	case 4:
		exec('sudo python /var/www/control/py/retrocede.py');
		print("d");
		break;
	case 5:
		exec('sudo python /var/www/control/py/para.py');
		print("e");
		break;
	default:
		exec('sudo python /var/www/control/py/para.py');
		print("f");21
		break;
}
?>

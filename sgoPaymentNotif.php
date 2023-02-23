<?php
//payment notif gilangsgo

// Your Credentials provided by Espay Team
$espaypassword = 'P%32D3|)BE';
$espaysignaturekey =  '6nh1d762yd2gv9pq';

// Get the data from Espay request

$signatureFromEspay = (!empty($_REQUEST['signature']) ? $_REQUEST['signature'] : '');
$rq_datetime = (!empty($_REQUEST['rq_datetime']) ? $_REQUEST['rq_datetime'] : '');
$order_id = (!empty($_REQUEST['order_id']) ? $_REQUEST['order_id'] : '');
$passwordServer = (!empty($_REQUEST['password']) ? $_REQUEST['password'] : '');

//bypass check order id
$invoiceId = TRUE;

// Construct the signature
// Format: ##KEY##rq_datetime##order_id##mode##
$key = '##' . $espaysignaturekey . '##' . $rq_datetime . '##' . $order_id . '##' . 'PAYMENTREPORT' . '##';

// Next, the string will have to be converted to UPPERCASE before hashing is done.
$uppercase = strtoupper($key);
$generatedSignature = hash('sha256', $uppercase);

// validate the password
if ($espaypassword == $passwordServer) {

	// Validate Signature
    if ($generatedSignature == $signatureFromEspay) {

        // Validate the given order id from espay inquiry request
		// from your db or persistent
        // #Code here ..

        if (!$invoiceId) {
            echo '1;Order Id Does Not Exist;;;;;'; // if order id not exist show plain reponse
        } else {
            // if order id truly exist get order detail from database
			// and give the response, format: error_code;error_message;order_id;amount;ccy;description;trx_date
			
            // show response
            // see TSD for more detail
            echo '0;Success;2020100121183111' . $order_id . ';' . date('Y/m/d H:i:s') . '';
        }
    } else {
        echo '1;Invalid Signature Key;;;;;';
    }
} else {
    // if password not true
    echo '1;Merchant Failed to Identified;;;;;';
}
?>
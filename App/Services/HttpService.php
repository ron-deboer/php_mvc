<?php

namespace App\Services;

class HttpService extends \Core\Service {
    
    public static function httpGet($url) {
        $curl = curl_init($url); 
        curl_setopt($curl, CURLOPT_VERBOSE, 1);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);  
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');                  
        $resp = curl_exec($curl); 
        curl_close($curl);     
        return $resp;
    }
    
    public static function httpPost($url, $data) {
        $fields = json_encode($data);        
        $curl = curl_init($url); 
        curl_setopt($curl, CURLOPT_VERBOSE, 1);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); 
        curl_setopt($curl, CURLOPT_POST, 1);     
        curl_setopt($curl, CURLOPT_POSTFIELDS, $fields);  
        curl_setopt(
            $curl, 
            CURLOPT_HTTPHEADER, 
            array(
                "Content-Type: application/json", 
                "Content-length: " . strlen($fields),
            )
        );                        
        $resp = curl_exec($curl); 
        curl_close($curl);     
        return $resp;
    }

    public static function httpPut($url, $data) {
        $fields = json_encode($data);        
        $curl = curl_init($url); 
        curl_setopt($curl, CURLOPT_VERBOSE, 1);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); 
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'PUT');    
        curl_setopt($curl, CURLOPT_POSTFIELDS, $fields);  
        curl_setopt(
            $curl, 
            CURLOPT_HTTPHEADER, 
            array(
                "Content-Type: application/json", 
                "Content-length: " . strlen($fields),
            )
        );                        
        $resp = curl_exec($curl); 
        curl_close($curl);     
        return $resp;
    }    

    public static function httpDelete($url) {
        $curl = curl_init($url); 
        curl_setopt($curl, CURLOPT_VERBOSE, 1);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);  
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'DELETE');      
        $resp = curl_exec($curl); 
        curl_close($curl);     
        return $resp;
    } 

}
<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use Ramsey\Uuid\Uuid;
use Firebase\JWT\JWT;
use Tuupola\Base62;

$app->group('/auth', function () use ($app) {

    $app->post('/login', function ($request, $response, $args) {

        $params = array_change_key_case($request->getParams(), CASE_UPPER);

        if(empty($params["USERNAME"])) throw new Exception("ERROR - Parameter non found (1)");
        if(empty($params["PASSWORD"])) throw new Exception("ERROR - Parameter non found (2)");

        $aACCOUNTs = $this->get('app_configs')["accounts"];

        $aACCOUNT = null;
        foreach($aACCOUNTs as $row_key => $row_data){
            if($row_data["username"] == $params["USERNAME"] && $row_data["password"] == $params["PASSWORD"]){
                $aACCOUNT = $row_data;
            }
        }

        //Account status check
        if(!empty($aACCOUNT)){
            if(!empty($aACCOUNT["active"])){
                if($aACCOUNT["active"] != 'Y'){
                    unset($aACCOUNT);
                }
            }
        }

        //Account expire date check
        if(!empty($aACCOUNT)){
            if(!empty($aACCOUNT["expireDate"])){
                if($aACCOUNT["expireDate"] < date("Y-m-d")){
                    unset($aACCOUNT);
                }
            }
        }

        if(empty($aACCOUNT)){

            $data = [];
            $data["status"] = "Authentication error";
            return $response->withStatus(401)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));

        }else{

            //Setting session dueration
            if(!empty($aACCOUNT["customSessionDuration"])){
                $duration = $aACCOUNT["customSessionDuration"];
            }else if(!empty(getenv("SESSION_DURATION"))){
                $duration = getenv("SESSION_DURATION");
            }else{
                $duration = "2 hours";
            }

            $now = new DateTime();
            $future = new DateTime("now +$duration");
            $server = $request->getServerParams();
            $jti = (new Base62)->encode(random_bytes(16));

            $payload = [
                "iat" => $now->getTimeStamp(),
                "exp" => $future->getTimeStamp(),
                "jti" => $jti,
                "username" => $params["USERNAME"],
                "name" => $aACCOUNT["name"]
            ];

            $secret = getenv("JWT_SECRET");
            $token = JWT::encode($payload, $secret, "HS256");


            $aACCOUNT_basic_data = [];
            $aACCOUNT_basic_data["username"] = $aACCOUNT["username"];
            $aACCOUNT_basic_data["name"] = $aACCOUNT["name"];
            $aACCOUNT_basic_data["mail"] = $aACCOUNT["mail"];
            $aACCOUNT_basic_data["expireDate"] = $aACCOUNT["expireDate"];

            $data["token"] = $token;
            $data["expires"] = $future->getTimeStamp();
            $data["accountData"] = json_encode($aACCOUNT_basic_data);

            return $response->withStatus(201)
                ->withHeader("Content-Type", "application/json")
                ->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
        }
    });

    $app->get('/session/check', function ($request, $response, $args) {

        $response->getBody()->write("CONN OK");
        return $response;

    });

});

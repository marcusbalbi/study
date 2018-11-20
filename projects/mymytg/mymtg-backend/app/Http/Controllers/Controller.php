<?php

namespace Balbi\MyMtg\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

use Balbi\MyMtg\Common\Http\Support\BaseJsonResponseMessage;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function message($content,$httpStatusCode = 200)
    {

        $responseMessage =  $content instanceof BaseJsonResponseMessage ?:
                                     new BaseJsonResponseMessage($content);
         
        return response()->json($responseMessage,$httpStatusCode);
    }
}

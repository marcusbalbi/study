<?php

namespace Balbi\MyMtg\Common\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

use Symfony\Component\HttpKernel\Exception\HttpException as SymfonyHttpException;

class Request extends FormRequest
{


    protected function failedValidation(Validator $validator)
    {  //$statusCode, $message = null, \Exception $previous = null, array $headers = array(), $code = 0
        $failed = $validator->errors()->toArray();
        // dd($failed->toArray());
        throw new SymfonyHttpException(400, 'Failed on Validation',null,$failed);
    }

    protected function failedAuthorization()
    {
        throw new SymfonyHttpException(401, 'Faild on Authorization');
    }

    public function authorize()
    {
       return true;
    }

    public function rules()
    {
      
    }
}

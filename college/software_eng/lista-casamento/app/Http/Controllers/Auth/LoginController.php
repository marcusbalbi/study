<?php

namespace ListaCasamento\Http\Controllers\Auth;

use ListaCasamento\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest')->except('logout');
    }

    public function login (Request $request)
    {
        return view('login');
    }

    public function logon (Request $request)
    {   
        // $password = Hash::make($request->get('senha'));
        $password = $request->get('senha');
        // dd($password);
        if (Auth::attempt(['email' => $request->get('email'), 'password' => $password])) {
            // Authentication passed...
            return redirect('/casais');
        } else {
           return redirect()->back();
        }
    }

    public function sair (Request $request)
    {
        Auth::logout();
        return redirect('login');
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\InfoModel;
use DB;

class InfoController extends Controller
{
    public function getInfo(){
        $result=InfoModel::all();
        return $result;
    }

    public function updateInfo(Request $request){

        $id=$request->id;
        $email=$request->email;
        $mobile=$request->mobile;
        $address_short=$request->addressShort;
        $fbPage=$request->fbPage;
        $address_long=$request->addressLong;
        $office_time=$request->officeTime;

        $result = DB::table('info')
                      ->where('info_id', $id)
                      ->update(
                      [

                      'email' => $email,
                      'mobile' => $mobile,
                      'address_short' => $address_short,
                      'fb_page' => $fbPage,
                      'address_long' => $address_long,
                      'opening_time' => $office_time,

                      ]

                      );

                      return $result;
    }
}
